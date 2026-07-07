const products = [
  {
    //   id: 1,
    //   name: "Pharma Dry syrup Bottles",
    //   rating: 4.8,
    //   reviews: 49,
    //   description: "Durable and hygienic bottles specially designed for safe storage of dry syrups. Ensures moisture protection, tamper-resistance, and accurate pouring to maintain medicine stability and shelf life.",
    //       images : [
    //   { src: "/product1.png", alt: "Syrup bottle and box mockup" },
    //   { src: "/product3.png", alt: "Brown glass bottle" },
    //   { src: "/product6.png", alt: "White medicine bottle" },
    //   { src: "/product4.png", alt: "Label close-up" },
    //   { src: "/product5.png", alt: "Packaging box" },
    // ],
    //   specs: [
    //     { label: "Color", value: "White" },
    //     { label: "Usage", value: "Laboratory" },
    //     { label: "Size", value: "Standard" },
    //     { label: "Product Type", value: "Adaptors Bottles" },
    //     { label: "Material", value: "PTFE" },
    //     { label: "Application", value: "Industrial" },
    //     { label: "Supply Ability", value: "1000 Per Day" },
    //     { label: "Delivery Time", value: "4-5 Days" },
    //   ],
    //   sizes: [
    //     "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
    //     "50 ml", "60 ml", "70 ml", "80 ml",
    //     "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
    //     "55 ml", "65 ml", "75 ml", "85 ml",
    //   ],
    //  },
    //    {
    //   id: 2,
    //   name: "Measuring Spoons",
    //   rating: 4.8,
    //   reviews: 49,
    //   description: "Precision-engineered spoons designed for consistent dosing of powders and liquids. Lightweight, reusable, and available in multiple sizes to suit varied medical applications.",
    //       images : [
    //   { src: "/spoon.png", alt: "Syrup bottle and box mockup" },
    //   { src: "/spoon2.png", alt: "Brown glass bottle" },
    //   { src: "/spoon3.png", alt: "White medicine bottle" },
    //   { src: "/spoon4.png", alt: "Label close-up" },
    //   { src: "/spoon5.png", alt: "Packaging box" },
    // ],
    //   specs: [
    //     { label: "Color", value: "White" },
    //     { label: "Usage", value: "Laboratory" },
    //     { label: "Size", value: "Standard" },
    //     { label: "Product Type", value: "Adaptors Bottles" },
    //     { label: "Material", value: "PTFE" },
    //     { label: "Application", value: "Industrial" },
    //     { label: "Supply Ability", value: "1000 Per Day" },
    //     { label: "Delivery Time", value: "4-5 Days" },
    //   ],
    //   sizes: [
    //     "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
    //     "50 ml", "60 ml", "70 ml", "80 ml",
    //     "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
    //     "55 ml", "65 ml", "75 ml", "85 ml",
    //   ],

    id: 1,
    name: "Pharma Dry syrup Bottles",
    rating: 4.8,
    reviews: 49,
    description: "Durable and hygienic bottles specially designed for safe storage of dry syrups. Ensures moisture protection, tamper-resistance, and accurate pouring to maintain medicine stability and shelf life.",

    // Default images
    images: [
      { src: "/medicine_img/i1.jpg", alt: "Syrup bottle and box mockup" },
      { src: "/medicine_img/i2.jpg", alt: "Brown glass bottle" },
      { src: "/medicine_img/i3.jpg", alt: "White medicine bottle" },
      { src: "/medicine_img/i4.jpg", alt: "Label close-up" },
      { src: "/medicine_img/i5.jpg", alt: "Packaging box" },
    ],

    // Size-specific images in increasing order
    sizeImages: {
      "5 ml": [
        { src: "/medicine_img/i1.jpg", alt: "5ml Syrup bottle" },
        { src: "/medicine_img/i2.jpg", alt: "5ml Brown glass bottle" },
        { src: "/medicine_img/i3.jpg", alt: "5ml White medicine bottle" },
      ],
      "8 ml": [
        { src: "/medicine_img/i4.jpg", alt: "8ml Label close-up" },
        { src: "/medicine_img/i5.jpg", alt: "8ml Packaging box" },
        { src: "/medicine_img/i6.jpg", alt: "8ml Medicine bottle" },
      ],
      "10 ml": [
        { src: "/medicine_img/i7.jpg", alt: "10ml Syrup bottle" },
        { src: "/medicine_img/i8.jpg", alt: "10ml Brown glass bottle" },
        { src: "/medicine_img/i9.jpg", alt: "10ml White medicine bottle" },
      ],
      "15 ml": [
        { src: "/medicine_img/i10.jpg", alt: "15ml Label close-up" },
        { src: "/medicine_img/i11.jpg", alt: "15ml Packaging box" },
        { src: "/medicine_img/i12.jpg", alt: "15ml Medicine bottle" },
      ],
      "20 ml": [
        { src: "/medicine_img/i13.jpg", alt: "20ml Syrup bottle" },
        { src: "/medicine_img/i14.jpg", alt: "20ml Brown glass bottle" },
        { src: "/medicine_img/i15.jpg", alt: "20ml White medicine bottle" },
      ],
      "25 ml": [
        { src: "/medicine_img/i16.jpg", alt: "25ml Label close-up" },
        { src: "/medicine_img/i1.jpg", alt: "25ml Packaging box" },
        { src: "/medicine_img/i2.jpg", alt: "25ml Medicine bottle" },
      ],
      "30 ml": [
        { src: "/medicine_img/i3.jpg", alt: "30ml Syrup bottle" },
        { src: "/medicine_img/i4.jpg", alt: "30ml Brown glass bottle" },
        { src: "/medicine_img/i5.jpg", alt: "30ml White medicine bottle" },
      ],
      "35 ml": [
        { src: "/medicine_img/i6.jpg", alt: "35ml Label close-up" },
        { src: "/medicine_img/i7.jpg", alt: "35ml Packaging box" },
        { src: "/medicine_img/i8.jpg", alt: "35ml Medicine bottle" },
      ],
      "40 ml": [
        { src: "/medicine_img/i9.jpg", alt: "40ml Syrup bottle" },
        { src: "/medicine_img/i10.jpg", alt: "40ml Brown glass bottle" },
        { src: "/medicine_img/i11.jpg", alt: "40ml White medicine bottle" },
      ],
      "45 ml": [
        { src: "/medicine_img/i12.jpg", alt: "45ml Label close-up" },
        { src: "/medicine_img/i13.jpg", alt: "45ml Packaging box" },
        { src: "/medicine_img/i14.jpg", alt: "45ml Medicine bottle" },
      ],
      "50 ml": [
        { src: "/medicine_img/i15.jpg", alt: "50ml Syrup bottle" },
        { src: "/medicine_img/i16.jpg", alt: "50ml Brown glass bottle" },
        { src: "/medicine_img/i1.jpg", alt: "50ml White medicine bottle" },
      ],
      "55 ml": [
        { src: "/medicine_img/i2.jpg", alt: "55ml Label close-up" },
        { src: "/medicine_img/i3.jpg", alt: "55ml Packaging box" },
        { src: "/medicine_img/i4.jpg", alt: "55ml Medicine bottle" },
      ],
      "60 ml": [
        { src: "/medicine_img/i5.jpg", alt: "60ml Syrup bottle" },
        { src: "/medicine_img/i6.jpg", alt: "60ml Brown glass bottle" },
        { src: "/medicine_img/i7.jpg", alt: "60ml White medicine bottle" },
      ],
      "65 ml": [
        { src: "/medicine_img/i8.jpg", alt: "65ml Label close-up" },
        { src: "/medicine_img/i9.jpg", alt: "65ml Packaging box" },
        { src: "/medicine_img/i10.jpg", alt: "65ml Medicine bottle" },
      ],
      "70 ml": [
        { src: "/medicine_img/i11.jpg", alt: "70ml Syrup bottle" },
        { src: "/medicine_img/i12.jpg", alt: "70ml Brown glass bottle" },
        { src: "/medicine_img/i13.jpg", alt: "70ml White medicine bottle" },
      ],
      "75 ml": [
        { src: "/medicine_img/i14.jpg", alt: "75ml Label close-up" },
        { src: "/medicine_img/i15.jpg", alt: "75ml Packaging box" },
        { src: "/medicine_img/i16.jpg", alt: "75ml Medicine bottle" },
      ],
      "80 ml": [
        { src: "/medicine_img/i1.jpg", alt: "80ml Syrup bottle" },
        { src: "/medicine_img/i2.jpg", alt: "80ml Brown glass bottle" },
        { src: "/medicine_img/i3.jpg", alt: "80ml White medicine bottle" },
      ],
      "85 ml": [
        { src: "/medicine_img/i4.jpg", alt: "85ml Label close-up" },
        { src: "/medicine_img/i5.jpg", alt: "85ml Packaging box" },
        { src: "/medicine_img/i6.jpg", alt: "85ml Medicine bottle" },
      ],
    },

    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "8 ml", "10 ml", "15 ml", "20 ml",
      "25 ml", "30 ml", "35 ml", "40 ml", "45 ml",
      "50 ml", "55 ml", "60 ml", "65 ml", "70 ml",
      "75 ml", "80 ml", "85 ml"
    ],

  },
  {
    id: 3,
    name: "Lotion Bottles",
    rating: 4.8,
    reviews: 49,
    description: "Easy-to-use bottles with pumps or flip tops for smooth application of lotions and moisturizers. Durable material ensures long-lasting freshness and brand appeal.",
    images: [
      { src: "/lotionbottle.png", alt: "Syrup bottle and box mockup" },
      { src: "/lotionbottle2.png", alt: "Brown glass bottle" },
      { src: "/lotionbottle3.png", alt: "White medicine bottle" },
      { src: "/lotionbottle4.png", alt: "Label close-up" },
      { src: "/lotionbottle5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },
  {
    id: 4,
    name: "Hand wash Bottles",
    rating: 4.8,
    reviews: 49,
    description: "Practical, stylish bottles with pump dispensers for liquid hand wash. Designed for convenience, hygiene, and smooth flow with every press.",
    images: [
      { src: "/handwash.png", alt: "Syrup bottle and box mockup" },
      { src: "/handwash2.png", alt: "Brown glass bottle" },
      { src: "/handwash3.png", alt: "White medicine bottle" },
      { src: "/handwash4.png", alt: "Label close-up" },
      { src: "/handwash5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },

  {
    id: 5,
    name: "Eye-Ear Dropper Bottle",
    rating: 4.8,
    reviews: 49,
    description: "Precision plastic dropper bottles for eye and ear care, ensuring accurate dosing and lasting freshness with hygienic, leak-proof design.",
    images: [
      { src: "/dropper.png", alt: "Syrup bottle and box mockup" },
      { src: "/dropper2.png", alt: "Brown glass bottle" },
      { src: "/dropper3.png", alt: "White medicine bottle" },
      { src: "/dropper4.png", alt: "Label close-up" },
      { src: "/dropper5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },
  {
    id: 6,
    name: "Flip-off Seals",
    rating: 4.8,
    reviews: 49,
    description: "Heavy-duty lock fittings ensuring airtight and insulated sealing of cold room panels. Provides maximum energy efficiency, durability, and long-term reliability in cold storage.",
    images: [
      { src: "/flipoff.png", alt: "Syrup bottle and box mockup" },
      { src: "/flipoff2.png", alt: "Brown glass bottle" },
      { src: "/flipoff3.png", alt: "White medicine bottle" },
      { src: "/flipoff4.png", alt: "Label close-up" },
      { src: "/flipoff5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },
  {
    id: 7,
    name: "RoPP Caps for Pharma PET Bottles",
    rating: 4.8,
    reviews: 49,
    description: "Tamper-proof, reliable RoPP (Roll-on Pilfer Proof) caps that guarantee product safety and consumer confidence. Provides leak-free closure with strong grip and hygienic sealing.",
    images: [
      { src: "/caps.png", alt: "Syrup bottle and box mockup" },
      { src: "/caps1.png", alt: "Brown glass bottle" },
      { src: "/caps2.png", alt: "White medicine bottle" },
      { src: "/cap3.png", alt: "Label close-up" },
      { src: "/caps4.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },
  {
  id: 8,
  name: "Toilet Cleaner Bottles",
  rating: 4.8,
  reviews: 49,

  description:
    "Designed for efficiency, durability, and user convenience, our Ergonomic Angled Neck Toilet Cleaner Bottle is an ideal packaging solution for modern cleaning formulations. Engineered with a precision slant-neck design, the bottle allows effortless reach into difficult areas such as under toilet rims and tight corners, ensuring accurate and controlled dispensing of liquid or gel cleaners. Manufactured using high-quality, chemical-resistant plastic, this bottle offers excellent durability and compatibility with strong cleaning formulations, including acidic toilet cleaners and disinfectant liquids. The sturdy body structure, combined with a stable base and comfortable grip, ensures reliable handling during everyday use while maintaining a professional retail appearance. The smooth surface area supports premium labeling and branding, making it a perfect choice for companies looking to enhance shelf appeal and brand visibility. Suitable for both manual and automated filling lines, the bottle also offers customization options in color and capacity to meet diverse packaging requirements. With its combination of functional design, manufacturing quality, and aesthetic appeal, this bottle stands as a reliable and premium packaging solution for home care and sanitation products.",

  images: [
    { src: "/toiletCleaner.png", alt: "Toilet cleaner bottle front view" },
    { src: "/toiletCleaner2.png", alt: "Toilet cleaner bottle side view" },
    { src: "/toiletCleaner3.png", alt: "Toilet cleaner bottle angle view" },
    { src: "/toiletCleaner4.png", alt: "Toilet cleaner bottle close-up" },
    { src: "/toiletCleaner5.png", alt: "Toilet cleaner bottle packaging" },
  ],

  specs: [
    {
      label: "Other Names",
      value: "Angled Spout Cleaning Bottle, Toilet Cleaner Neck Bottle, Tilt-Neck Liquid Cleaner Bottle, Ergonomic Slant-Neck Bottle, Precision Pour Toilet Cleaner Bottle, ErgoTilt Toilet Cleaner Bottle",
    },
    {
      label: "Capacity",
      value: "500 ml",
    },
    {
      label: "Shape",
      value: "Slant Neck / Bent Neck Bottle with Integrated Spout",
    },
    {
      label: "Shape Description",
      value:
        "Tall rectangular bottle with an ergonomically angled neck and narrow dispensing spout designed for under-rim and hard-to-reach cleaning.",
    },
    {
      label: "Bottle Colour",
      value: "Blue and Red (Other colors available on request)",
    },
    {
      label: "Bottle Material",
      value: "High Density Polyethylene (HDPE)",
    },
    {
      label: "Cap Colour",
      value: "Red, Blue and other colors on request",
    },
    {
      label: "Cap Material",
      value: "Polypropylene (PP)",
    },
    {
      label: "Inner Plug Colour",
      value: "Natural",
    },
    {
      label: "Inner Plug Material",
      value: "Low Density Polyethylene (LDPE)",
    },
  ],

  applications: [
    "Packaging of toilet cleaner liquids",
    "Dispensing bathroom cleaning solutions",
    "Storage and application of descaling liquids",
    "Packaging of disinfectant and sanitizer liquids",
    "Packaging of tile and floor cleaning chemicals",
    "Controlled pouring of thick cleaning gels",
  ],

  industryApplications: [
    "FMCG Cleaning Products Industry",
    "Home Care & Household Cleaning Industry",
    "Chemical & Detergent Manufacturing Industry",
  ],

  features: [
    {
      label: "Ergonomic Angled Neck Design",
      value: "Allows easy access to hard-to-reach areas such as under toilet rims.",
    },
    {
      label: "Precision Dispensing Spout",
      value: "Ensures controlled and targeted application of cleaning liquids.",
    },
    {
      label: "User-Friendly Grip",
      value: "Contoured body provides comfortable and secure handling.",
    },
    {
      label: "Durable Plastic Construction",
      value: "Manufactured from high-quality HDPE/PP material for long-lasting performance.",
    },
    {
      label: "Chemical Resistant Material",
      value: "Suitable for acidic and strong toilet cleaning formulations.",
    },
    {
      label: "Leak-Resistant Closure",
      value: "Secure cap design prevents leakage during storage and transport.",
    },
    {
      label: "Stable Base Design",
      value: "Flat bottom ensures upright stability on shelves and storage surfaces.",
    },
    {
      label: "Lightweight Yet Strong",
      value: "Easy to handle while maintaining structural durability.",
    },
    {
      label: "Optimal Surface for Labeling",
      value: "Smooth body area allows easy application of product labels and branding.",
    },
    {
      label: "Easy Filling Compatibility",
      value: "Designed for efficient filling on automated or manual production lines.",
    },
    {
      label: "Reusable and Recyclable",
      value: "Environmentally friendly plastic material supports recycling.",
    },
    {
      label: "Efficient Liquid Flow",
      value: "Internal design supports smooth dispensing of liquid or gel cleaners.",
    },
    {
      label: "Compact Storage Design",
      value: "Space-efficient shape suitable for packaging, shipping, and retail display.",
    },
    {
      label: "Tamper-Evident Closure",
      value: "Compatible with tamper-proof caps for enhanced product safety.",
    },
    {
      label: "Customizable Colors & Sizes",
      value: "Available in multiple colors and capacities to suit brand requirements.",
    },
  ],

  sizes: [
    "500 ml",
  ],
},
  {
    id: 9,
    name: "Cream Jars",
    rating: 4.8,
    reviews: 49,
    description: "Compact, stylish jars suitable for creams, ointments, balms, and gels. Ensures airtight protection, extended shelf life, and premium appeal for skincare and pharma products.",
    images: [
      { src: "/jars1.png", alt: "Syrup bottle and box mockup" },
      { src: "/jars2.png", alt: "Brown glass bottle" },
      { src: "/jars3.png", alt: "White medicine bottle" },
      { src: "/jars4.png", alt: "Label close-up" },
      { src: "/jars5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },

  {
    id: 10,
    name: "Shampoo Bottles",
    rating: 4.8,
    reviews: 49,
    description: "Attractive and functional shampoo bottles designed with durability and consumer convenience in mind. Provides smooth dispensing and leak-proof design for personal care brands.",
    images: [
      { src: "/shampoobottle.png", alt: "Syrup bottle and box mockup" },
      { src: "/shampoobottle2.png", alt: "Brown glass bottle" },
      { src: "/shampoobottle3.png", alt: "White medicine bottle" },
      { src: "/shampoobottle4.png", alt: "Label close-up" },
      { src: "/shampoobottle5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },

  {
    id: 11,
    name: "Oil Bottles",
    rating: 4.8,
    reviews: 49,
    description: "Versatile bottles ideal for edible, cosmetic, and therapeutic oils. Engineered for strength, leak resistance, and hygienic preservation of product quality.",
    images: [
      { src: "/oilbottle.png", alt: "Syrup bottle and box mockup" },
      { src: "/oilbottle2.png", alt: "Brown glass bottle" },
      { src: "/oilbottle3.png", alt: "White medicine bottle" },
      { src: "/oilbottle4.png", alt: "Label close-up" },
      { src: "/oilbottle5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },
 {
  id: 12,
  name: "Floor Cleaner Bottles",
  rating: 4.8,
  reviews: 49,

  description:
    "Designed for performance, convenience, and brand appeal, our Angled Neck Floor Cleaner Bottle is a smart packaging solution for modern home care and sanitation products. Manufactured from high-quality HDPE, this bottle offers excellent durability, chemical resistance, and lightweight handling, making it ideal for everyday use and large-scale distribution. The ergonomically designed slanted neck ensures controlled pouring and easy application, especially in hard-to-reach areas such as corners and toilet rims. Its spacious front panel allows clear and attractive labeling, helping brands create strong shelf presence in retail environments. The sturdy base and compact rectangular shape provide stability and efficient storage during transport and display. Perfect for packaging floor cleaners, disinfectants, and multipurpose cleaning liquids, this bottle combines functional design, reliability, and professional aesthetics, making it an excellent choice for household, institutional, and industrial cleaning product manufacturers.",

  images: [
    { src: "/floorCleaner.png", alt: "Floor cleaner bottle front view" },
    { src: "/floorCleaner2.png", alt: "Floor cleaner bottle side view" },
    { src: "/floorCleaner3.png", alt: "Floor cleaner bottle angle view" },
    { src: "/floorCleaner4.png", alt: "Floor cleaner bottle close-up" },
    { src: "/floorCleaner5.png", alt: "Floor cleaner bottle packaging" },
  ],

  specs: [
    {
      label: "Capacity",
      value: "500ml",
    },
    {
      label: "Shape",
      value: "Slanted Shoulder Rectangular Bottle",
    },
    {
      label: "Shape Description",
      value:
        "Rectangular body with ergonomic slanted shoulder and angled neck for easy pouring without spilling.",
    },
    {
      label: "Bottle Colour",
      value: "Natural and White",
    },
    {
      label: "Bottle Material",
      value: "High Density Polyethylene (HDPE)",
    },
    {
      label: "Cap Colour",
      value: "Pink, Blue and any color as per requirement",
    },
    {
      label: "Cap Material",
      value: "Polypropylene (PP)",
    },
    {
      label: "Inner Plug Colour",
      value: "Natural",
    },
    {
      label: "Inner Plug Material",
      value: "Low Density Polyethylene (LDPE)",
    },
  ],

  applications: [
    "Floor Cleaning Liquids – Ideal for packaging phenyl and floor disinfectants.",
    "Toilet & Bathroom Cleaners – Angled neck helps direct liquid under toilet rims and corners.",
    "Surface Disinfectants – Suitable for liquid disinfectant solutions used on tiles and floors.",
    "Multipurpose Household Cleaners – Used for packaging all-purpose liquid cleaning products.",
    "Industrial Cleaning Liquids – Can hold chemical cleaning agents for factories and workshops.",
    "Kitchen Cleaning Solutions – Packaging for liquid degreasers and kitchen surface cleaners.",
    "Sanitizing Liquids – Used for hygiene and sanitation liquids in homes and institutions.",
  ],

  industryApplications: [
    "FMCG Cleaning Products Industry",
    "Home Care & Household Cleaning Industry",
    "Sanitation & Hygiene Products Industry",
    "Hospital & Healthcare Industry",
    "Hospitality Industry",
  ],

 features: [
  {
    label: "Ergonomic Angled Neck",
    value: "Provides controlled and precise pouring.",
  },
  {
    label: "HDPE Construction",
    value: "Ensures durability and excellent chemical resistance.",
  },
  {
    label: "Leak-Resistant Neck",
    value: "Compatible with standard screw caps.",
  },
  {
    label: "Stable Flat Base",
    value: "Provides secure placement on shelves and storage areas.",
  },
  {
    label: "Large Front Label Panel",
    value: "Ideal for branding and product information.",
  },
  {
    label: "Lightweight Structure",
    value: "Easy to handle and transport.",
  },
  {
    label: "Chemical Compatibility",
    value: "Suitable for a wide range of cleaning formulations.",
  },
  {
    label: "Surface Finish",
    value: "Smooth finish for premium appearance.",
  },
  {
    label: "Bottle Geometry",
    value: "Designed for spill-free pouring.",
  },
  {
    label: "Rectangular Body",
    value: "Space-efficient for storage and shelf display.",
  },
  {
    label: "Grip Design",
    value: "Comfortable and consumer-friendly.",
  },
  {
    label: "Color Options",
    value: "Available in multiple colors as per requirement.",
  },
  {
    label: "Closure Compatibility",
    value: "Supports screw caps and flip-top caps.",
  },
  {
    label: "Impact Resistance",
    value: "Strong plastic construction for long service life.",
  },
  {
    label: "Filling Line Compatible",
    value: "Suitable for automated filling machines.",
  },
],

  sizes: [
    "500 ml",
  ],
},
  {
    id: 13,
    name: "Pharmaceutical rubber Dropper assembly",
    rating: 4.8,
    reviews: 49,
    description: "Precision plastic dropper bottles for eye and ear care, ensuring accurate dosing and lasting freshness with a hygienic, leak-proof design. Perfect for sensitive medical use.",
    images: [
      { src: "/PharmaceuticalRubber.png", alt: "Syrup bottle and box mockup" },
      { src: "/PharmaceuticalRubber2.png", alt: "Brown glass bottle" },
      { src: "/PharmaceuticalRubber3.png", alt: "White medicine bottle" },
      { src: "/PharmaceuticalRubber4.png", alt: "Label close-up" },
      { src: "/PharmaceuticalRubber5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },
  {
    id: 14,
    name: "Stopper CAM Lock fittings for Cold rooms PUF Panels",
    rating: 4.8,
    reviews: 49,
    description: "Heavy-duty lock fittings ensuring airtight and insulated sealing of cold room panels. Provides maximum energy efficiency, durability, and long-term reliability in cold storage.",
    images: [
      { src: "/stopperCAM.png", alt: "Syrup bottle and box mockup" },
      { src: "/stopperCAM2.png", alt: "Brown glass bottle" },
      { src: "/stopperCAM3.png", alt: "White medicine bottle" },
      { src: "/stopperCAM4.png", alt: "Label close-up" },
      { src: "/stopperCAM5.png", alt: "Packaging box" },
    ],
    specs: [
      { label: "Color", value: "White" },
      { label: "Usage", value: "Laboratory" },
      { label: "Size", value: "Standard" },
      { label: "Product Type", value: "Adaptors Bottles" },
      { label: "Material", value: "PTFE" },
      { label: "Application", value: "Industrial" },
      { label: "Supply Ability", value: "1000 Per Day" },
      { label: "Delivery Time", value: "4-5 Days" },
    ],
    sizes: [
      "5 ml", "10 ml", "20 ml", "30 ml", "40 ml",
      "50 ml", "60 ml", "70 ml", "80 ml",
      "8 ml", "15 ml", "25 ml", "35 ml", "45 ml",
      "55 ml", "65 ml", "75 ml", "85 ml",
    ],
  },
  {
    id: 15,
    name: "Churan Bottle Set",
    rating: 4.8,
    reviews: 49,

    description:
      "Our Safa-Type HDPE Bottle is a versatile and durable packaging solution designed to meet the diverse requirements of modern industries. Crafted from high-quality HDPE material, this bottle combines strength, lightweight handling, and excellent product protection, making it ideal for packaging powders, liquids, and concentrated formulations. Featuring a sleek cylindrical body with a short shoulder and narrow neck, the bottle ensures easy dispensing and efficient storage while maintaining a clean and professional appearance on retail shelves. Its smooth surface allows seamless labeling and branding, enhancing product visibility and brand identity. The secure screw-cap closure provides reliable leak resistance, preserving the integrity and freshness of the contents during storage and transportation. Engineered for reliability and performance, this bottle is widely used across pharmaceutical, herbal, agrochemical, food, veterinary, and household chemical industries.",

    images: [
      { src: "/churanbottle.png", alt: "HDPE Churan bottle and packaging" },
      { src: "/churanbottle2.png", alt: "HDPE Churan bottle front view" },
      { src: "/churanbottle3.png", alt: "HDPE Churan bottle side view" },
      { src: "/churanbottl4.png", alt: "HDPE Churan bottle label close-up" },
      { src: "/churanbottl5.png", alt: "HDPE Churan bottle packaging" },
    ],

    specs: [
      {
        label: "Capacity",
        value: "100gm",
      },
      {
        label: "Shape",
        value:
          "Cylindrical Straight Round Bottle with Short Shoulder and Narrow Neck",
      },
      {
        label: "Bottle Colour",
        value: "Colors available as per request",
      },
      {
        label: "Bottle Material",
        value: "High Density Polyethylene (HDPE)",
      },
      {
        label: "Cap Colour",
        value: "Colors available as per request",
      },
      {
        label: "Cap Material",
        value: "Polypropylene (PP)",
      },
    ],

    applications: [
      "Packaging of herbal powders (Churan, Ayurvedic formulations)",
      "Liquid concentrates such as flavoring agents and syrups",
      "Pesticides and agricultural nutrients",
      "Veterinary liquid medicines",
      "Liquid fertilizers and plant growth solutions",
      "Pharmaceutical syrups and solutions",
      "Personal care liquids such as hair oils or lotions",
    ],

    industryApplications: [
      "Pharmaceutical Industry – syrups, medicinal liquids, herbal formulations",
      "Ayurvedic & Herbal Industry – churan, herbal powders, tonics",
      "Food & Beverage Industry – flavoring liquids, condiments, syrups",
      "Agrochemical Industry – pesticides, fertilizers, plant nutrients",
      "Veterinary Industry – livestock medicines and supplements",
    ],

    features: [
  {
    label: "Durable HDPE Construction",
    value: "Manufactured from high-quality HDPE material for strength and long-lasting performance.",
  },
  {
    label: "Lightweight Design",
    value: "Easy to handle, transport, and store while maintaining structural integrity.",
  },
  {
    label: "Compact Cylindrical Body",
    value: "Space-efficient shape suitable for shelf display and bulk packaging.",
  },
  {
    label: "Short Shoulder Profile",
    value: "Provides a smooth flow of liquids and powders during dispensing.",
  },
  {
    label: "Narrow Neck Finish",
    value: "Ensures controlled pouring and minimizes product spillage.",
  },
  {
    label: "Secure Screw Cap Compatibility",
    value: "Designed to fit tightly with ribbed caps for leak-resistant closure.",
  },
  {
    label: "Excellent Chemical Resistance",
    value: "Suitable for a wide range of chemical and agrochemical formulations.",
  },
  {
    label: "Smooth Surface Finish",
    value: "Ideal for labeling, screen printing, and branding applications.",
  },
  {
    label: "Food-Grade Material Option",
    value: "Can be produced using food-grade PET for edible products.",
  },
  {
    label: "High Clarity or Custom Colors",
    value: "Available in transparent or colored variants as per branding requirements.",
  },
  {
    label: "Strong Base Support",
    value: "Stable bottom design ensures secure standing on shelves and during transport.",
  },
],

    sizes: [
      "5 gm",
      "8 gm",
      "10 gm",
      "15 gm",
      "20 gm",
      "25 gm",
      "30 gm",
      "35 gm",
      "40 gm",
      "45 gm",
      "50 gm",
      "55 gm",
      "60 gm",
      "65 gm",
      "70 gm",
      "75 gm",
      "80 gm",
      "85 gm",
      "100 gm",
    ],
  },
]

export default products