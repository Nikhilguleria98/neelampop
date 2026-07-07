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
  name: "Pharma Dry Syrup Bottles",
  rating: 4.8,
  reviews: 49,

  description:
    "Dry Syrup Bottles are specially designed pharmaceutical packaging solutions used for storing medicines that require reconstitution before administration. Manufactured from high-quality food-grade HDPE, these bottles provide moisture protection, leak-proof sealing, long shelf life, and accurate dosing for healthcare applications.",

  images: [
    { src: "/medicine_img/i1.jpg", alt: "Syrup bottle and box mockup" },
    { src: "/medicine_img/i2.jpg", alt: "Brown glass bottle" },
    { src: "/medicine_img/i3.jpg", alt: "White medicine bottle" },
    { src: "/medicine_img/i4.jpg", alt: "Label close-up" },
    { src: "/medicine_img/i5.jpg", alt: "Packaging box" },
  ],

  sizeImages: {
    "10 ml": [
      { src: "/medicine_img/i1.jpg", alt: "10ml Dry Syrup Bottle" },
      { src: "/medicine_img/i2.jpg", alt: "10ml Bottle" },
      { src: "/medicine_img/i3.jpg", alt: "10ml Packaging" },
    ],

    "15 ml": [
      { src: "/medicine_img/i4.jpg", alt: "15ml Dry Syrup Bottle" },
      { src: "/medicine_img/i5.jpg", alt: "15ml Bottle" },
      { src: "/medicine_img/i6.jpg", alt: "15ml Packaging" },
    ],

    "30 ml": [
      { src: "/medicine_img/i7.jpg", alt: "30ml Dry Syrup Bottle" },
      { src: "/medicine_img/i8.jpg", alt: "30ml Bottle" },
      { src: "/medicine_img/i9.jpg", alt: "30ml Packaging" },
    ],

    "50 ml": [
      { src: "/medicine_img/i10.jpg", alt: "50ml Dry Syrup Bottle" },
      { src: "/medicine_img/i11.jpg", alt: "50ml Bottle" },
      { src: "/medicine_img/i12.jpg", alt: "50ml Packaging" },
    ],

    "60 ml": [
      { src: "/medicine_img/i13.jpg", alt: "60ml Dry Syrup Bottle" },
      { src: "/medicine_img/i14.jpg", alt: "60ml Bottle" },
      { src: "/medicine_img/i15.jpg", alt: "60ml Packaging" },
    ],

    "100 ml": [
      { src: "/medicine_img/i16.jpg", alt: "100ml Dry Syrup Bottle" },
      { src: "/medicine_img/i1.jpg", alt: "100ml Bottle" },
      { src: "/medicine_img/i2.jpg", alt: "100ml Packaging" },
    ],
  },

  specs: [
    {
      label: "Bottle Material",
      value: "High Density Polyethylene (HDPE)",
    },
    {
      label: "Dosage Cup Material",
      value: "Polypropylene (PP)",
    },
    {
      label: "Bottle Color",
      value: "Natural",
    },
    {
      label: "Cap Colors",
      value: "White, Blue, Red",
    },
    {
      label: "Neck Sizes",
      value: "25mm, 28mm",
    },
    {
      label: "Dosage Cup",
      value: "10ml Transparent",
    },
    {
      label: "Cap Type",
      value: "Screw Cap with Induction Seal Wad",
    },
    {
      label: "Application Area",
      value: "Pharmaceutical Industry",
    },
    {
      label: "Supply Ability",
      value: "1000 Per Day",
    },
    {
      label: "Delivery Time",
      value: "4-5 Days",
    },
  ],

  applications: [
    "Storage of dry syrups and powders",
    "Storage of liquid medicines",
    "Storage of tablets and capsules",
    "Food industry powder packaging",
    "Cosmetic powder packaging",
    "Products requiring reconstitution before use",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Nutraceutical & Supplement Industry",
    "Healthcare (Hospitals)",
    "Veterinary Industry",
  ],

  features: [
    "Dimensionally Accurate",
    "Crack Resistant",
    "High Quality Food Grade Raw Material",
    "Airtight & Leak Proof",
    "Fine Finish",
    "Space For Shaking",
    "Moisture Resistant Material",
  ],

  sizes: [
    "10 ml",
    "15 ml",
    "30 ml",
    "50 ml",
    "60 ml",
    "100 ml",
  ],
},
{
  id: 2,
  name: "Measuring Hollow Spoon",
  rating: 4.9,
  reviews: 38,

  description:
    "At Neelam Print O Pack, we offer a premium-quality Measuring Hollow Spoon designed for precision, durability, and convenience. Manufactured using high-grade non-toxic Polypropylene (PP), this scoop ensures accurate measurement of both dry and liquid materials. Its rectangular bowl design, ergonomic handle, and clear measurement markings make it ideal for pharmaceutical, nutraceutical, food, cosmetic, and industrial applications.",

  images: [
    { src: "/medicine_img/spoon1.jpeg", alt: "Measuring Spoon Front View" },
    { src: "/medicine_img/spoon2.jpg", alt: "Measuring Spoon Side View" },
    { src: "/medicine_img/spoon3.jpg", alt: "Measuring Spoon Packaging" },
    { src: "/medicine_img/spoon4.jpg", alt: "Transparent Measuring Spoon" },
    { src: "/medicine_img/spoon5.jpg", alt: "PP Measuring Spoon" }
  ],

  sizeImages: {
    "10 ml": [
      { src: "/medicine_img/spoon1.jpeg", alt: "10ml Measuring Spoon" },
    
    ]
  },

  specs: [
    { label: "Capacity", value: "10ml" },
    { label: "Material", value: "Polypropylene (PP)" },
    { label: "Color", value: "Transparent" },
    { label: "Custom Colors", value: "Available on Request" },
    {
      label: "Shape",
      value:
        "Rectangular Scoop with Flat Bottom and Measurement Markings"
    },
    { label: "Reusable", value: "Yes" },
    { label: "Food Grade", value: "Yes" },
    { label: "Chemical Resistant", value: "Yes" }
  ],

  applications: [
    "Measuring powders, granules and liquids",
    "Dosing pharmaceutical syrups and suspensions",
    "Filling and transferring materials without spillage",
    "Portion control for food, supplements and chemicals",
    "Measuring protein powders and baby formula",
    "Dispensing Ayurvedic and herbal powders",
    "Sampling in quality control laboratories",
    "Cosmetic product handling",
    "Filling sachets, containers and bottles",
    "Measuring detergents and cleaning agents",
    "Hospital dosage preparation",
    "Home baking and spice measurement",
    "Industrial pigment and additive handling",
    "Educational and research applications"
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Nutraceutical & Supplement Industry",
    "Food & Beverage Industry",
    "Cosmetic Industry",
    "Veterinary Industry",
    "Ayurvedic & Herbal Applications"
  ],

  features: [
    "Accurate measurement markings",
    "Rectangular scoop for easy filling",
    "Lightweight and durable construction",
    "Ergonomic handle design",
    "Smooth finish for easy cleaning",
    "Chemical resistant",
    "Moisture resistant",
    "Compact and easy to store",
    "Reusable and cost-effective",
    "Suitable for dry and liquid materials",
    "Non-toxic food grade material"
  ],

  sizes: ["10 ml"],

  tagline: "Measure Right, Every Time"
},
 {
  id: 3,
  name: "60ml HDPE Ujjala Type Oil / Lotion / Shampoo Bottle",
  rating: 4.8,
  reviews: 49,

  description:
    "Crafted from high-quality HDPE material, the 60ml Ujjala-type bottle is designed for safe, convenient, and efficient packaging of liquid formulations. Its ergonomic shape ensures a comfortable grip, while the narrow 19mm neck enables controlled dispensing with minimal spillage. The bottle offers excellent resistance to chemicals, moisture, and impact, making it a reliable choice for cosmetic, pharmaceutical, ayurvedic, and FMCG applications.",

  images: [
    { src: "/lotionbottle.png", alt: "60ml HDPE Lotion Bottle" },
    { src: "/lotionbottle2.png", alt: "HDPE Shampoo Bottle" },
    { src: "/lotionbottle3.png", alt: "HDPE Oil Bottle" },
    { src: "/lotionbottle4.png", alt: "Flip Top Bottle" },
    { src: "/lotionbottle5.png", alt: "Packaging Bottle" }
  ],

  sizeImages: {
    "60 ml": [
      { src: "/lotionbottle.png", alt: "60ml HDPE Bottle" },
      { src: "/lotionbottle2.png", alt: "60ml Shampoo Bottle" },
      { src: "/lotionbottle3.png", alt: "60ml Lotion Bottle" }
    ]
  },

  specs: [
    { label: "Capacity", value: "60ml" },
    { label: "Shape", value: "Ujjala Type" },
    { label: "Bottle Material", value: "High Density Polyethylene (HDPE)" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Cap Material", value: "Polypropylene (PP)" },
    { label: "Cap Colour", value: "White" },
    { label: "Cap Type", value: "Flip Top" },
    { label: "Neck Size", value: "19mm" },
    { label: "Supply Ability", value: "1000 Per Day" },
    { label: "Delivery Time", value: "4-5 Days" }
  ],

  applications: [
    "Hair oils",
    "Hair serums",
    "Shampoos",
    "Conditioners",
    "Body lotions",
    "Cosmetic creams",
    "Body oils",
    "Face serums",
    "Medicated shampoos",
    "Medicated lotions",
    "Medicated oils",
    "Antiseptic solutions",
    "Herbal oils",
    "Ayurvedic formulations"
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Personal Care & Cosmetics Industry",
    "Veterinary Industry",
    "FMCG Industry",
    "Herbal & Ayurvedic Industry"
  ],

  features: [
    "Made from high-quality HDPE material",
    "Excellent chemical resistance",
    "Dimensionally accurate",
    "Crack resistant",
    "Food grade raw material",
    "Leak-proof design",
    "Fine finish",
    "Controlled dispensing through flip-top cap",
    "Safe storage and transportation",
    "Easy dispensing",
    "Lightweight and cost-effective",
    "Impact resistant",
    "Smooth surface for labeling",
    "Suitable for branding and printing",
    "Non-toxic and hygienic",
    "Travel-friendly packaging",
    "Compatible with screw, flip-top and plug closures"
  ],

  sizes: ["60 ml"],

  customization:
    "Customized colours available on request with minimum order quantity. Shrink sleeving and inner plug options can also be provided as per customer requirements."
},{
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
  name: "30ml Round Ear-Eye Drop / Lotion Bottle",
  rating: 4.8,
  reviews: 49,

  description:
    "Crafted to meet the highest standards of quality and functionality, our 30ml HDPE Ear/Eye Drop & Lotion Bottle is the perfect packaging solution for pharmaceutical and personal care formulations. Engineered with a precision nozzle dropper system, it ensures accurate dosage, leak-proof performance, and excellent product protection. The durable HDPE construction offers superior resistance to chemicals, moisture, and impact while maintaining portability and ease of use.",

  images: [
    { src: "/dropper.png", alt: "30ml Ear Eye Drop Bottle" },
    { src: "/dropper2.png", alt: "HDPE Dropper Bottle" },
    { src: "/dropper3.png", alt: "Dropper Cap Bottle" },
    { src: "/dropper4.png", alt: "Lotion Bottle" },
    { src: "/dropper5.png", alt: "Pharmaceutical Dropper Bottle" },
  ],

  sizeImages: {
    "30 ml": [
      { src: "/dropper.png", alt: "30ml Ear Eye Drop Bottle" },
      { src: "/dropper2.png", alt: "30ml HDPE Bottle" },
      { src: "/dropper3.png", alt: "30ml Dropper Bottle" },
    ],
  },

  specs: [
    { label: "Capacity", value: "30ml" },
    { label: "Shape", value: "Round" },
    { label: "Bottle Material", value: "High Density Polyethylene (HDPE)" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Cap Material", value: "Polypropylene (PP)" },
    { label: "Cap Colour", value: "White" },
    { label: "Cap Type", value: "Ribbed Nozzle Dropper Cap" },
    { label: "Inner Material", value: "Polypropylene (PP)" },
    { label: "Inner Type", value: "Nozzle / Dropper Tip" },
    { label: "Application Area", value: "Pharmaceutical Industry" },
    { label: "Supply Ability", value: "1000 Per Day" },
    { label: "Delivery Time", value: "4-5 Days" },
  ],

  applications: [
    "Eye drops (lubricants, antibiotics, anti-allergy solutions)",
    "Ear drops (wax softeners and anti-infective solutions)",
    "Nasal drops (decongestants and saline solutions)",
    "Topical liquid medicines",
    "Medicated lotions for skin conditions",
    "Baby care liquids and medicated drops",
    "Beauty serums and cosmetic treatments",
    "Under-eye solutions",
    "Scalp treatment lotions",
    "Essential oils for external use",
    "Ayurvedic treatment solutions",
    "Herbal extracts and wellness formulations",
    "Veterinary eye and ear drops",
    "Liquid medications for animals"
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Ayurvedic & Herbal Industry",
    "Cosmetics Industry",
    "Veterinary Applications"
  ],

  features: [
    "Dimensionally accurate",
    "Crack resistant",
    "Food-grade raw material",
    "Leak-proof and durable design",
    "Fine finish",
    "Dropper tip for accurate dosage",
    "Safe storage",
    "Easy dispensing",
    "Controlled usage of liquid products",
    "Lightweight and cost-effective",
    "User-friendly dispensing",
    "High chemical resistance",
    "Suitable for labeling",
    "Hygienic and safe",
    "Excellent squeezability",
    "Space efficient",
    "Ergonomic design",
    "Impact resistant",
    "Smooth surface for printing and branding",
    "Non-toxic and safe for pharmaceutical use"
  ],

  sizes: ["30 ml"],

  customization:
    "Available with customized colours, tamper-evident caps, branding, labeling, and packaging options as per customer requirements."
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