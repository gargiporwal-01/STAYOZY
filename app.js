const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/stayozy";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.get("/testListening", async (req, res) => {
    let sampleListing = new Listing ({
        title : "Entire guest suite in Dehradun",
        description : "Dehradun private cottage with kitchen in a village",
        price : 4109,
        location :"Dehradun",
        country : "India"
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("Succesful testing");
});

app.listen(8080, () => {
    console.log("server is listening to port 8080");
});