const sampleListings = [
    {
      title: "Oceanview Cottage Escape",
      description:
        "Wake up to the sound of waves and enjoy uninterrupted ocean views from this serene coastal cottage.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1621090162511-006cd5d9d6b5?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1800,
      location: "Santa Barbara",
      country: "United States",
    },
    {
      title: "Stylish Downtown Loft",
      description:
        "This modern downtown loft offers a sleek interior and easy access to the city's vibrant nightlife.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1400,
      location: "Chicago",
      country: "United States",
    },
    {
      title: "Serene Forest Cabin",
      description:
        "Nestled in pine-covered hills, this quiet cabin is perfect for nature lovers looking to unwind.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Lake Placid",
      country: "United States",
    },
    {
      title: "Tuscany Hillside Manor",
      description:
        "Overlook vineyards and ancient olive groves from this restored hillside estate in rural Tuscany.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2600,
      location: "Chianti",
      country: "Italy",
    },
    {
      title: "Elevated Forest Treehouse",
      description:
        "This rustic treehouse offers peaceful treetop views and cozy interiors, ideal for a romantic escape.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 950,
      location: "Vermont",
      country: "United States",
    },
    {
        title: "Tropical Oceanfront Condo",
        description:
          "This stylish condo opens directly onto a white-sand beach, offering turquoise water views and fresh sea breezes.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Tulum",
        country: "Mexico",
      },
      {
        title: "Tranquil Lakeside Cabin",
        description:
          "Unwind in this peaceful cabin nestled beside a calm lake. Ideal for canoeing, fishing, and reconnecting with nature.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Lake Superior",
        country: "United States",
      },
      {
        title: "Skyline Penthouse Retreat",
        description:
          "Soak in breathtaking views from this high-rise penthouse featuring designer furnishings and floor-to-ceiling windows.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3700,
        location: "San Francisco",
        country: "United States",
      },
      {
        title: "Alpine Chalet by the Slopes",
        description:
          "A cozy wooden chalet nestled in the snowy Alps, with ski-in/ski-out access and majestic mountain views.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3200,
        location: "Zermatt",
        country: "Switzerland",
      },
      {
        title: "Wildlife Safari Lodge",
        description:
          "Immerse yourself in the heart of Africa with this safari lodge featuring open-air views of the Serengeti plains.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 4200,
        location: "Arusha",
        country: "Tanzania",
      },
      {
        title: "Tropical Oceanfront Condo",
        description:
          "This stylish condo opens directly onto a white-sand beach, offering turquoise water views and fresh sea breezes.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Tulum",
        country: "Mexico",
      },
      {
        title: "Tranquil Lakeside Cabin",
        description:
          "Unwind in this peaceful cabin nestled beside a calm lake. Ideal for canoeing, fishing, and reconnecting with nature.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Lake Superior",
        country: "United States",
      },
      {
        title: "Skyline Penthouse Retreat",
        description:
          "Soak in breathtaking views from this high-rise penthouse featuring designer furnishings and floor-to-ceiling windows.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3700,
        location: "San Francisco",
        country: "United States",
      },
      {
        title: "Alpine Chalet by the Slopes",
        description:
          "A cozy wooden chalet nestled in the snowy Alps, with ski-in/ski-out access and majestic mountain views.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3200,
        location: "Zermatt",
        country: "Switzerland",
      },
      {
        title: "Wildlife Safari Lodge",
        description:
          "Immerse yourself in the heart of Africa with this safari lodge featuring open-air views of the Serengeti plains.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 4200,
        location: "Arusha",
        country: "Tanzania",
      },
      {
        title: "Banff Mountainview Retreat",
        description:
          "A cozy timber cabin with stunning views of the Canadian Rockies. Perfect for hiking and stargazing.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Banff",
        country: "Canada",
      },
      {
        title: "Art Deco Suite in South Beach",
        description:
          "Step into 1920s glam with this bright Art Deco apartment just steps from Miami’s best beaches.",
        image: {
          filename: "listingimage",
          url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 1750,
        location: "Miami Beach",
        country: "United States",
      },
      {
        title: "Seaside Infinity Villa",
        description:
          "This luxurious villa in Phuket features a private infinity pool and lush tropical surroundings with sea views.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3200,
        location: "Phuket",
        country: "Thailand",
      },
      {
        title: "Scottish Highlands Castle Stay",
        description:
          "Stay in a storybook castle surrounded by Scotland's misty hills, ancient forests, and rugged coastlines.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 4500,
        location: "Inverness",
        country: "United Kingdom",
      },
      {
        title: "Luxury Desert Villa with Pool",
        description:
          "An opulent desert retreat in Dubai featuring a modern design, private pool, and breathtaking sandscape views.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 5500,
        location: "Dubai",
        country: "United Arab Emirates",
      },
        {
    title: "Log Cabin in the Montana Wilds",
    description:
      "Rustic charm meets remote wilderness in this log cabin perfect for a peaceful nature retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1150,
    location: "Bozeman",
    country: "United States",
  },
  {
    title: "Aegean Sea Beachfront Villa",
    description:
      "This stylish Greek villa overlooks crystal-clear waters and offers direct beach access on Mykonos island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco Jungle Treehouse",
    description:
      "Sustainably built and surrounded by rainforest, this treehouse offers a true Costa Rican eco-retreat.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Monteverde",
    country: "Costa Rica",
  },
  {
    title: "Charleston Garden Cottage",
    description:
      "Tucked away in a quiet corner of Charleston, this restored cottage boasts a private courtyard and classic Southern charm.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Central Tokyo Modern Flat",
    description:
      "A chic and compact apartment in the heart of Tokyo—ideal for exploring the city's endless energy and culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "White Mountains Lakeside Cabin",
    description:
      "Perfect for fall foliage or summer paddling, this lakeside New Hampshire cabin is cozy and scenic year-round.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "White Mountains",
    country: "United States",
  },
  {
    title: "Overwater Villa in Maldives",
    description:
      "A dream escape—this overwater villa in the Maldives offers panoramic ocean views and direct lagoon access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6500,
    location: "Baa Atoll",
    country: "Maldives",
  },
  {
    title: "Luxury Ski Chalet in Aspen",
    description:
      "Ski straight to your doorstep at this premium Aspen chalet featuring a fireplace, hot tub, and alpine views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4200,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Hidden Beach House in Costa Rica",
    description:
      "A secluded beachfront gem surrounded by lush jungle—ideal for surfing, sunbathing, and sipping coconut water.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Santa Teresa",
    country: "Costa Rica",
  },
];
  
  module.exports = { data: sampleListings };