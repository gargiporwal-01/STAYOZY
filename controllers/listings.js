const { Query } = require("mongoose");
const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

module.exports.index = async (req, res) => {
    const { search, results } = req.query;
    let allListings;
    let searchMessage = '';
    
    if (search) {
        // If search parameter exists, perform the search
        const searchTerm = search.trim();
        const searchRegex = new RegExp(searchTerm, 'i');
        
        allListings = await Listing.find({
            $or: [
                { title: searchRegex },
                { description: searchRegex },
                { location: searchRegex },
                { country: searchRegex }
            ]
        }).populate('owner').sort({ price: 1 });
        
        // If no results, try flexible search
        if (allListings.length === 0) {
            const words = searchTerm.split(' ').filter(word => word.length > 2);
            if (words.length > 0) {
                const flexibleRegex = new RegExp(words.join('|'), 'i');
                allListings = await Listing.find({
                    $or: [
                        { title: flexibleRegex },
                        { description: flexibleRegex },
                        { location: flexibleRegex },
                        { country: flexibleRegex }
                    ]
                }).populate('owner').sort({ price: 1 });
            }
        }
        
        searchMessage = allListings.length > 0 
            ? `Found ${allListings.length} listings for "${searchTerm}"`
            : `No listings found for "${searchTerm}". Try different keywords.`;
    } else {
        // Default: show all listings
        allListings = await Listing.find({}).sort({ price: 1 });
    }
    
    res.render("listings/index.ejs", { 
        allListings, 
        searchQuery: search,
        searchMessage: searchMessage
    });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
     .populate({
       path : "reviews",
       populate : {
         path : "author",
       },
     })
     .populate("owner");
    if(!listing) {
       req.flash("error", "The requested listing could not be found");
       res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {listing});
};

module.exports.createListing = async (req, res, next) => {
    if (!process.env.MAP_TOKEN) {
        req.flash("error", "Map service is not configured. Please try again later.");
        return res.redirect("/listings/new");
    }

    const geocodingClient = mbxGeocoding({ accessToken: process.env.MAP_TOKEN });

    let response = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    newListing.geometry = response.body.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "The requested listing could not be found");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl});
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});

    if(typeof req.file !== "undefined") {
      let url = req.file.path;
      let filename = req.file.filename;
      listing.image  = { url, filename };
      await listing.save();
    }

    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing =  await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
};

module.exports.searchListings = async (req, res) => {
    try {
        const { query } = req.query;
        
        if (!query || query.trim() === '') {
            return res.json({ 
                success: false, 
                message: 'Search query is required',
                listings: []
            });
        }

        const searchTerm = query.trim();
        
        // Create a regex pattern for case-insensitive search
        const searchRegex = new RegExp(searchTerm, 'i');
        
        // Search across title, description, location, and country fields
        // Also search for partial matches in words
        const searchResults = await Listing.find({
            $or: [
                { title: searchRegex },
                { description: searchRegex },
                { location: searchRegex },
                { country: searchRegex }
            ]
        }).populate('owner').sort({ price: 1 }); // Sort by price ascending

        // If no results found, try a more flexible search with word boundaries
        let flexibleResults = [];
        if (searchResults.length === 0) {
            const words = searchTerm.split(' ').filter(word => word.length > 2);
            if (words.length > 0) {
                const flexibleRegex = new RegExp(words.join('|'), 'i');
                flexibleResults = await Listing.find({
                    $or: [
                        { title: flexibleRegex },
                        { description: flexibleRegex },
                        { location: flexibleRegex },
                        { country: flexibleRegex }
                    ]
                }).populate('owner').sort({ price: 1 });
            }
        }

        const finalResults = searchResults.length > 0 ? searchResults : flexibleResults;
        const resultMessage = finalResults.length > 0 
            ? `Found ${finalResults.length} listings for "${searchTerm}"`
            : `No listings found for "${searchTerm}". Try different keywords.`;

        res.json({
            success: true,
            message: resultMessage,
            listings: finalResults,
            query: searchTerm,
            totalResults: finalResults.length
        });

    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while searching',
            listings: []
        });
    }
};

