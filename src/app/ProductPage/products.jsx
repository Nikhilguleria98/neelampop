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
  name: "Measuring Spoons",
  rating: 4.9,
  reviews: 38,

  variants: [
    {
      slug: "measuring-hollow-spoon",
      name: "Measuring Hollow Spoon",
      description: "At Neelam Print O Pack, we offer a premium-quality Measuring Hollow Spoon...",
      images: [
        { src: "/medicine_img/spoon1.jpeg", alt: "Measuring Hollow Spoon" }
      ],
      specs: [
        { label: "Capacity", value: "10ml" },
        { label: "Material", value: "Polypropylene (PP)" },
        { label: "Color", value: "Transparent" }
      ],
      applications: [
        "Measuring powders, granules and liquids",
        "Dosing pharmaceutical syrups",
        "Protein powders and baby formula"
      ],
      features: [
        "Accurate measurement markings",
        "Rectangular scoop",
        "Lightweight and durable"
      ],
      sizes: ["10 ml"]
    },

    {
      slug: "measuring-double-head-spoon",
      name: "Measuring Double Head Spoon",
      description: "Our premium range of oval measuring spoons is thoughtfully designed...",
      images: [
        { src: "/medicine_img/spoon2.jpg", alt: "Double Head Spoon" }
      ],
      specs: [
        { label: "Capacity", value: "5ml and 2.5ml" },
        { label: "Material", value: "Polypropylene (PP)" },
        { label: "Color", value: "Transparent" }
      ],
      applications: [
        "Measuring liquid medicines",
        "Protein powders and supplements",
        "Cosmetic products"
      ],
      features: [
        "Ergonomic Oval Design",
        "Precise Measurement",
        "Food Grade Material"
      ],
      sizes: ["5 ml", "2.5 ml"]
    }
  ]
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
  name: "Ear-Eye Dropper & Lotion Bottles",
  rating: 4.8,
  reviews: 49,

  variants: [
    {
      slug:  "30ml-round",
      name: "30ml Round Ear-Eye Drop / Lotion Bottle",

      description:
        "Crafted to meet the highest standards of quality and functionality, our 30ml HDPE Ear/Eye Drop & Lotion Bottle is the perfect packaging solution for pharmaceutical and personal care formulations. Designed with a precision nozzle dropper system for accurate dosage, leak-proof performance, and superior product protection.",

      images: [
        { src: "/medicine_img/dropper30-round.jpg", alt: "30ml Round Dropper Bottle" }
      ],

      specs: [
        { label: "Capacity", value: "30ml" },
        { label: "Shape", value: "Round" },
        { label: "Bottle Material", value: "HDPE" },
        { label: "Bottle Colour", value: "Milky White" },
        { label: "Cap Material", value: "PP" },
        { label: "Cap Type", value: "Ribbed Nozzle Dropper Cap" }
      ],

      applications: [
        "Eye Drops",
        "Ear Drops",
        "Nasal Drops",
        "Topical Liquid Medicines",
        "Medicated Lotions",
        "Ayurvedic Solutions",
        "Cosmetic Serums",
        "Veterinary Applications"
      ],

      features: [
        "Dimensionally Accurate",
        "Leak-Proof Design",
        "Food Grade Material",
        "Dropper Tip for Accurate Dosage",
        "Excellent Squeezability",
        "Chemical Resistant",
        "Safe Storage",
        "Easy Dispensing"
      ],

      sizes: ["30 ml"]
    },

    {
     slug: "15ml-oval",
      name: "15ml Oval Ear-Eye Drop / Lotion Bottle",

      description:
        "Compact oval-shaped HDPE bottle designed for controlled dispensing of pharmaceutical, cosmetic, and personal care liquids. Features a precision nozzle and ergonomic grip.",

      images: [
        { src: "/medicine_img/dropper15-oval.jpg", alt: "15ml Oval Dropper Bottle" }
      ],

      specs: [
        { label: "Capacity", value: "15ml" },
        { label: "Shape", value: "Oval" },
        { label: "Bottle Material", value: "HDPE" },
        { label: "Bottle Colour", value: "Milky White" },
        { label: "Cap Material", value: "PP" },
        { label: "Cap Type", value: "Ribbed Nozzle Dropper Cap" }
      ],

      applications: [
        "Eye Drops",
        "Ear Drops",
        "Nasal Drops",
        "Beauty Serums",
        "Essential Oils",
        "Ayurvedic Formulations",
        "Veterinary Medicines"
      ],

      features: [
        "Ergonomic Oval Shape",
        "Precision Nozzle Tip",
        "Leak-Proof Screw Cap",
        "Travel Friendly",
        "Easy Squeeze Functionality",
        "Hygienic Design",
        "Customizable Surface"
      ],

      sizes: ["15 ml"]
    },

    {
     slug: "20ml-oval",
      name: "20ml Oval Ear-Eye Drop / Lotion Bottle",

      description:
        "Premium oval HDPE dropper bottle offering excellent handling, controlled dispensing, and leak-proof protection for sensitive formulations.",

      images: [
        { src: "/medicine_img/dropper20-oval.jpg", alt: "20ml Oval Dropper Bottle" }
      ],

      specs: [
        { label: "Capacity", value: "20ml" },
        { label: "Shape", value: "Oval" },
        { label: "Bottle Material", value: "HDPE" },
        { label: "Bottle Colour", value: "Milky White" },
        { label: "Cap Type", value: "Ribbed Nozzle Dropper Cap" }
      ],

      applications: [
        "Eye Drops",
        "Ear Drops",
        "Lotions",
        "Serums",
        "Herbal Extracts",
        "Cosmetic Treatments"
      ],

      features: [
        "Precision Nozzle",
        "Leak Resistant",
        "Chemical Resistant",
        "Lightweight",
        "Excellent Squeezability",
        "Ergonomic Design"
      ],

      sizes: ["20 ml"]
    },

    {
    slug: "20ml-flip-top",
      name: "20ml Oval Flip-Top Dropper Bottle",

      description:
        "Ergonomic oval bottle with convenient flip-top cap for one-hand dispensing. Ideal for pharmaceutical liquids, sanitizers, lotions, and cosmetic formulations.",

      images: [
        { src: "/medicine_img/dropper20-fliptop.jpg", alt: "20ml Flip Top Bottle" }
      ],

      specs: [
        { label: "Capacity", value: "20ml" },
        { label: "Shape", value: "Oval" },
        { label: "Bottle Material", value: "HDPE" },
        { label: "Cap Material", value: "PP" },
        { label: "Cap Type", value: "Flip Top" }
      ],

      applications: [
        "Hand Sanitizers",
        "Eye Drops",
        "Ear Drops",
        "Lotions",
        "Essential Oils",
        "Cosmetic Liquids"
      ],

      features: [
        "Flip-Top Cap",
        "One-Hand Operation",
        "Leak Resistant",
        "Travel Friendly",
        "Easy Dispensing",
        "Premium Appearance"
      ],

      sizes: ["20 ml"]
    },

    {
      slug: "50ml-oval",
      name: "50ml Oval Ear-Eye Drop / Lotion Bottle",

      description:
        "Large-capacity oval HDPE bottle designed for pharmaceutical, cosmetic, herbal, and veterinary liquid formulations requiring controlled dispensing.",

      images: [
        { src: "/medicine_img/dropper50-oval.jpg", alt: "50ml Oval Dropper Bottle" }
      ],

      specs: [
        { label: "Capacity", value: "50ml" },
        { label: "Shape", value: "Oval" },
        { label: "Bottle Material", value: "HDPE" },
        { label: "Bottle Colour", value: "Milky White" },
        { label: "Cap Type", value: "Ribbed Nozzle Dropper Cap" }
      ],

      applications: [
        "Pharmaceutical Liquids",
        "Herbal Oils",
        "Cosmetic Treatments",
        "Veterinary Medicines",
        "Personal Care Products"
      ],

      features: [
        "Large Capacity",
        "Leak-Proof Design",
        "Excellent Squeezability",
        "Durable Construction",
        "Chemical Resistant",
        "Easy Labeling Surface"
      ],

      sizes: ["50 ml"]
    }
  ]
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
  rating: 4.9,
  reviews: 49,

  variants: [
    {
      slug: "floor-cleaner",

      name: "Floor Cleaner / Angled Neck Floor Cleaner Bottle",

      description:
        "Designed for performance, convenience, and brand appeal, our Angled Neck Floor Cleaner Bottle is a smart packaging solution for modern home care and sanitation products. Manufactured from high-quality HDPE, this bottle offers excellent durability, chemical resistance, and lightweight handling, making it ideal for everyday use and large-scale distribution. The ergonomically designed slanted neck ensures controlled pouring and easy application, especially in hard-to-reach areas.",

      images: [
        {
          src: "/medicine_img/floor-cleaner-bottle.jpg",
          alt: "Floor Cleaner Bottle",
        },
      ],

      specs: [
        { label: "Capacity", value: "500ml" },
        { label: "Shape", value: "Slanted Shoulder Rectangular Bottle" },
        { label: "Bottle Material", value: "HDPE" },
        { label: "Bottle Colour", value: "Natural and White" },
        { label: "Cap Material", value: "PP" },
        { label: "Cap Colour", value: "Pink, Blue or Custom" },
        { label: "Inner Plug Material", value: "LDPE" },
      ],

      applications: [
        "Floor Cleaning Liquids",
        "Toilet & Bathroom Cleaners",
        "Surface Disinfectants",
        "Multipurpose Household Cleaners",
        "Industrial Cleaning Liquids",
        "Kitchen Cleaning Solutions",
        "Sanitizing Liquids",
      ],

      industryApplications: [
        "Home Care & Household Cleaning Industry",
        "Sanitation & Hygiene Products Industry",
        "Hospital & Healthcare Industry",
        "Hospitality Industry",
      ],

      features: [
        "Ergonomic Angled Neck Design",
        "High Quality HDPE Construction",
        "Leak Resistant Threaded Neck",
        "Stable Flat Base",
        "Large Front Label Panel",
        "Lightweight Yet Strong Structure",
        "Excellent Chemical Compatibility",
        "Smooth Surface Finish",
        "Spill Control Geometry",
        "Space Efficient Rectangular Body",
        "Consumer Friendly Grip Design",
        "Available in Multiple Colors",
        "Compatible with Various Closures",
        "Impact Resistant Material",
        "Suitable for Automated Filling Lines",
      ],

      sizes: ["500 ml"],
    },

    {
      slug: "angled-neck",

      name: "Angled Neck Toilet Cleaner Bottle",

      description:
        "Designed for efficiency, durability, and user convenience, our Ergonomic Angled Neck Toilet Cleaner Bottle is an ideal packaging solution for modern cleaning formulations. Engineered with a precision slant-neck design, the bottle allows effortless reach into difficult areas such as under toilet rims and tight corners, ensuring accurate and controlled dispensing of liquid or gel cleaners.",

      images: [
        {
          src: "/medicine_img/toilet-cleaner-bottle.jpg",
          alt: "Angled Neck Toilet Cleaner Bottle",
        },
      ],

      specs: [
        { label: "Capacity", value: "500ml" },
        {
          label: "Shape",
          value: "Slant Neck / Bent Neck Bottle with Integrated Spout",
        },
        { label: "Bottle Material", value: "HDPE" },
        { label: "Bottle Colour", value: "Blue, Red or Custom" },
        { label: "Cap Material", value: "PP" },
        { label: "Cap Colour", value: "Red, Blue or Custom" },
        { label: "Inner Plug Material", value: "LDPE" },
      ],

      applications: [
        "Packaging of Toilet Cleaner Liquids",
        "Bathroom Cleaning Solutions",
        "Descaling Liquids",
        "Disinfectant Liquids",
        "Sanitizer Liquids",
        "Tile & Floor Cleaning Chemicals",
        "Controlled Pouring of Thick Cleaning Gels",
      ],

      industryApplications: [
        "FMCG Cleaning Products Industry",
        "Home Care & Household Cleaning Industry",
        "Chemical & Detergent Manufacturing Industry",
      ],

      features: [
        "Ergonomic Angled Neck Design",
        "Precision Dispensing Spout",
        "User Friendly Grip",
        "Durable Plastic Construction",
        "Chemical Resistant Material",
        "Leak Resistant Closure",
        "Stable Base Design",
        "Lightweight Yet Strong",
        "Optimal Surface for Labeling",
        "Easy Filling Compatibility",
        "Reusable and Recyclable",
        "Efficient Liquid Flow",
        "Compact Storage Design",
        "Tamper Evident Closure Compatibility",
        "Customizable Colors and Sizes",
      ],

      sizes: ["500 ml"],
    },
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
  name: "Oil / Lotion / Shampoo Bottles",
  rating: 4.8,
  reviews: 49,

  variants: [
    {
      slug: "oil-1",

      name: "60ml HDPE Flat Oil / Lotion / Shampoo Bottle",

      description:
        "Compact and durable 60ml HDPE Flat Bottle designed for packaging oils, lotions, shampoos, and liquid formulations. Manufactured using high-quality HDPE material, it offers excellent durability, chemical resistance, and leak-proof performance. The flat ergonomic design provides better grip, easy handling, and increased labeling space while maintaining an attractive shelf appearance.",

      images: [
        {
          src: "/medicine_img/oil-flat-1.jpg",
          alt: "60ml HDPE Flat Oil Bottle",
        },
      ],

      specs: [
        { label: "Capacity", value: "60ml" },
        { label: "Shape", value: "Flat" },
        { label: "Bottle Colour", value: "Milky White" },
        {
          label: "Bottle Material",
          value: "High Density Polyethylene (HDPE)",
        },
        { label: "Cap Colour", value: "White" },
        {
          label: "Cap Material",
          value: "Polypropylene (PP)",
        },
        { label: "Cap Type", value: "Flip Top" },
        { label: "Neck Size", value: "19mm" },
      ],

      applications: [
        "Hair Oils",
        "Hair Serums",
        "Shampoos",
        "Conditioners",
        "Lotions",
        "Creams",
        "Body Oils",
        "Face Serums",
        "Liquid Medicines",
        "Liniments",
        "Topical Solutions",
        "Herbal Oils",
        "Ayurvedic Formulations",
      ],

      industryApplications: [
        "Pharmaceutical Industry",
        "Personal Care & Cosmetics Industry",
        "Veterinary Industry",
        "FMCG Industry",
        "Herbal & Ayurvedic Industry",
      ],

      features: [
        "Dimensionally Accurate",
        "Crack Resistant",
        "Food Grade Material",
        "Leak Proof Design",
        "Fine Finish",
        "Controlled Dispensing",
        "Safe Storage",
        "Easy Dispensing",
        "Lightweight and Cost Effective",
        "High Chemical Resistance",
        "Suitable For Labeling",
        "Moisture Protection",
        "Excellent Shelf Display",
        "Flat Ergonomic Design",
        "Compatible With Flip Top, Screw & Plug Closures",
      ],

      sizes: ["60 ml"],
    },

    {
      slug: "oil-2",

      name: "60ml HDPE Oval Oil / Lotion / Shampoo Bottle",

      description:
        "Our 60ml HDPE Oval Bottle with 19mm neck is a compact and versatile packaging solution designed for personal care, cosmetic, pharmaceutical, and herbal products. Manufactured from premium HDPE material, the bottle offers excellent durability, chemical resistance, and product protection. The ergonomic oval shape improves grip while enhancing shelf appeal.",

      images: [
        {
          src: "/medicine_img/oil-oval-1.jpg",
          alt: "60ml HDPE Oval Bottle",
        },
      ],

      specs: [
        { label: "Capacity", value: "60ml" },
        { label: "Shape", value: "Oval" },
        { label: "Bottle Colour", value: "Milky White" },
        {
          label: "Bottle Material",
          value: "High Density Polyethylene (HDPE)",
        },
        { label: "Cap Colour", value: "White" },
        {
          label: "Cap Material",
          value: "Polypropylene (PP)",
        },
        { label: "Cap Type", value: "Flip Top" },
        { label: "Neck Size", value: "19mm" },
      ],

      applications: [
        "Hair Oils",
        "Hair Serums",
        "Shampoos",
        "Conditioners",
        "Lotions",
        "Creams",
        "Body Oils",
        "Face Serums",
        "Liquid Medicines",
        "Liniments",
        "Topical Solutions",
        "Herbal Oils",
        "Ayurvedic Formulations",
      ],

      industryApplications: [
        "Pharmaceutical Industry",
        "Personal Care & Cosmetics Industry",
        "Veterinary Industry",
        "FMCG Industry",
        "Herbal & Ayurvedic Industry",
      ],

      features: [
        "Dimensionally Accurate",
        "Crack Resistant",
        "Food Grade Material",
        "Leak Proof Design",
        "Fine Finish",
        "Controlled Dispensing",
        "Safe Storage",
        "Easy Dispensing",
        "Lightweight and Cost Effective",
        "High Chemical Resistance",
        "Suitable For Labeling",
        "Smooth Surface For Branding",
        "Excellent Shelf Appeal",
        "Comfortable Grip Design",
        "Compatible With Flip Top, Disc Top & Screw Caps",
      ],

      sizes: ["60 ml"],
    },

    {
      slug: "oil-3",

      name: "60ml HDPE Round Oil / Lotion / Shampoo Bottle",

      description:
        "Premium quality HDPE 60ml Round Bottle with 19mm neck size specially designed for oils, lotions, shampoos, cosmetic liquids, pharmaceutical products, and herbal formulations. Manufactured using high-grade HDPE material for superior durability, leak resistance, and product safety while maintaining a professional appearance.",

      images: [
        {
          src: "/medicine_img/oil-round-1.jpg",
          alt: "60ml HDPE Round Bottle",
        },
      ],

      specs: [
        { label: "Capacity", value: "60ml" },
        { label: "Shape", value: "Round" },
        { label: "Bottle Colour", value: "Milky White" },
        {
          label: "Bottle Material",
          value: "High Density Polyethylene (HDPE)",
        },
        { label: "Cap Colour", value: "White" },
        {
          label: "Cap Material",
          value: "Polypropylene (PP)",
        },
        { label: "Cap Type", value: "Flip Top" },
        { label: "Neck Size", value: "19mm" },
      ],

      applications: [
        "Hair Oils",
        "Hair Serums",
        "Shampoos",
        "Conditioners",
        "Lotions",
        "Creams",
        "Body Oils",
        "Face Serums",
        "Liquid Medicines",
        "Liniments",
        "Topical Solutions",
        "Herbal Oils",
        "Ayurvedic Formulations",
      ],

      industryApplications: [
        "Pharmaceutical Industry",
        "Personal Care & Cosmetics Industry",
        "Veterinary Industry",
        "FMCG Industry",
        "Herbal & Ayurvedic Industry",
      ],

      features: [
        "Dimensionally Accurate",
        "Crack Resistant",
        "Food Grade Material",
        "Leak Proof Design",
        "Fine Finish",
        "Controlled Dispensing",
        "Safe Storage",
        "Easy Dispensing",
        "Lightweight and Cost Effective",
        "Perfect Dispensing Control",
        "High Chemical Resistance",
        "Smooth Surface For Labeling",
        "Hygienic and Safe",
        "Impact Resistant",
        "Compatible With Multiple Closures",
      ],

      sizes: ["60 ml"],
    },
    {
  slug: "oil-4",

  name: "60ml HDPE Ujjala Type Oil/Lotion/Shampoo Bottles",

  description:
    "Crafted from high-quality HDPE material, the 60ml Ujjala-type bottle is designed for safe, convenient, and efficient packaging of liquid formulations. Its ergonomic shape ensures a comfortable grip, while the narrow 19mm neck enables controlled dispensing with minimal spillage. The bottle offers excellent resistance to chemicals, moisture, and impact, making it a reliable choice across industries.",

  images: [
    {
      src: "/medicine_img/oil-4.jpg",
      alt: "60ml HDPE Ujjala Type Bottle",
    },
  ],

  specs: [
    { label: "Capacity", value: "60ml" },
    { label: "Shape", value: "Ujjala Type" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Bottle Material", value: "HDPE" },
    { label: "Cap Colour", value: "White" },
    { label: "Cap Material", value: "PP" },
    { label: "Cap Type", value: "Flip Top" },
    { label: "Neck Size", value: "19mm" },
  ],

  applications: [
    "Hair Oils",
    "Hair Serums",
    "Shampoos",
    "Conditioners",
    "Body Lotions",
    "Face Serums",
    "Medicated Oils",
    "Antiseptic Solutions",
    "Herbal & Ayurvedic Formulations",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Personal Care & Cosmetics Industry",
    "Veterinary Industry",
    "FMCG Industry",
    "Herbal & Ayurvedic Industry",
  ],

  features: [
    "High Quality HDPE Material",
    "Excellent Chemical Resistance",
    "Leak Proof Design",
    "Controlled Dispensing",
    "Impact Resistant",
    "Lightweight & Durable",
    "Smooth Surface For Labeling",
    "Travel Friendly",
    "Hygienic & Safe",
    "Custom Colors Available",
  ],

  sizes: ["60 ml"],
},

{
  slug: "oil-5",

  name: "100ml/19mm Banana Shape Oil/Lotion/Shampoo Bottles",

  description:
    "Premium quality HDPE banana-shaped bottle designed for efficient dispensing and attractive shelf appeal. Its ergonomic curved design ensures a comfortable grip, making it ideal for personal care and pharmaceutical liquid products. Made from high-quality HDPE, it ensures durability, leak resistance, and product safety.",

  images: [
    {
      src: "/medicine_img/oil-5.jpg",
      alt: "100ml Banana Shape Bottle",
    },
  ],

  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Banana Shape" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Bottle Material", value: "HDPE" },
    { label: "Cap Colour", value: "White" },
    { label: "Cap Material", value: "PP" },
    { label: "Inner Plug Material", value: "LDPE" },
    { label: "Neck Size", value: "19mm" },
  ],

  applications: [
    "Hair Oils",
    "Hair Serums",
    "Shampoos",
    "Conditioners",
    "Body Oils",
    "Lotions",
    "Face Serums",
    "Medicated Oils",
    "Ayurvedic Products",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Cosmetics Industry",
    "Veterinary Industry",
    "Herbal Industry",
  ],

  features: [
    "Ergonomic Banana Shape",
    "Comfortable Grip",
    "Leak Resistant Design",
    "Excellent Chemical Resistance",
    "Durable HDPE Material",
    "Controlled Dispensing",
    "Impact Resistant",
    "Lightweight Construction",
    "Custom Color Options",
    "Travel Friendly",
  ],

  sizes: ["100 ml"],
},
{
  slug: "oil-6",

  name: "100ml/19mm Liquid Bottles (Ujjala Type)",

  description:
    "Crafted with precision, the 100ml HDPE Ujjala-type Liquid Bottle (19mm neck) offers a perfect combination of strength, functionality, and sleek design. Engineered for controlled pouring, it is ideal for liquid formulations like fabric brighteners and specialty solutions.",

  images: [
    {
      src: "/medicine_img/oil-6.jpg",
      alt: "100ml Ujjala Type Bottle",
    },
  ],

  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Ujjala Type" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Bottle Material", value: "HDPE" },
    { label: "Cap Colour", value: "White" },
    { label: "Cap Material", value: "PP" },
    { label: "Cap Type", value: "Flip Top" },
    { label: "Neck Size", value: "19mm" },
  ],

  applications: [
    "Hair Oils",
    "Shampoos",
    "Lotions",
    "Face Serums",
    "Fabric Whiteners",
    "Laundry Additives",
    "Stain Removers",
    "Cleaning Liquids",
    "Industrial Solutions",
    "Pesticides",
    "Plant Growth Regulators",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Personal Care Industry",
    "Veterinary Industry",
    "Household Care Industry",
    "Chemical Industry",
    "Textile Industry",
    "Agro Chemical Industry",
  ],

  features: [
    "Controlled Dispensing",
    "Compact 100ml Capacity",
    "Leak Resistant Design",
    "Excellent Chemical Resistance",
    "Squeezable Body",
    "Smooth Surface For Labeling",
    "Lightweight Construction",
    "Durable HDPE Material",
    "Travel Friendly",
    "Custom Colors Available",
  ],

  sizes: ["100 ml"],
},
{
  slug: "oil-7",

  name: "100ml / 24mm Oil/Lotion/Shampoo Bottles (V Wash Type)",

  description:
    "Premium curved HDPE bottle with flip-top cap, offering excellent durability, controlled dispensing, and premium shelf appeal for cosmetic and personal care formulations.",

  images: [
    {
      src: "/medicine_img/oil-7.jpg",
      alt: "V Wash Type Bottle",
    },
  ],

  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Slim Curvy Trapezoidal" },
    { label: "Material", value: "HDPE" },
    { label: "Cap Material", value: "PP" },
    { label: "Cap Type", value: "Flip Top" },
    { label: "Neck Size", value: "24mm" },
  ],

  applications: [
    "Hair Oils",
    "Shampoo",
    "Conditioners",
    "Body Lotions",
    "Face Wash",
    "Liquid Soap",
    "Pharmaceutical Lotions",
  ],

  industryApplications: [
    "Cosmetic Industry",
    "Personal Care Industry",
    "Pharmaceutical Industry",
    "Ayurvedic Industry",
    "Baby Care Industry",
  ],

  features: [
    "Premium Design",
    "Leak Resistant",
    "Travel Friendly",
    "Excellent Grip",
    "Flip Top Dispensing",
    "Custom Branding Support",
    "Impact Resistant",
    "Chemical Resistant",
  ],

  sizes: ["100 ml"],
},
{
  slug: "oil-8",

  name: "100ml / 24mm Oil/Lotion/Shampoo Bottles",

  description:
    "Premium HDPE pump bottle featuring elegant shelf appeal, ergonomic handling, and smooth controlled dispensing for cosmetics, pharmaceuticals, and personal care products.",

  images: [
    {
      src: "/medicine_img/oil-8.jpg",
      alt: "100ml Pump Bottle",
    },
  ],

  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Rectangular" },
    { label: "Bottle Material", value: "HDPE" },
    { label: "Neck Size", value: "24mm" },
    { label: "Cap Type", value: "Pump" },
  ],

  applications: [
    "Body Lotion",
    "Body Wash",
    "Hair Oil",
    "Shampoo",
    "Liquid Soap",
    "Antiseptic Solutions",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Cosmetic Industry",
    "Ayurvedic Industry",
    "Household Care",
  ],

  features: [
    "Pump Dispensing",
    "Premium Shelf Appeal",
    "Leak Resistant",
    "Easy Labeling",
    "Impact Resistant",
    "Chemical Resistant",
  ],

  sizes: ["100 ml"],
},

{
  slug: "oil-9",

  name: "Oil Lotion Shampoo Bottles",

  description:
    "Premium range of HDPE Oil, Lotion and Shampoo bottles designed for safe, leak-proof, and convenient storage of liquid products. Suitable for cosmetic, pharmaceutical, and personal care applications.",

  images: [
    {
      src: "/medicine_img/oil-10.jpg",
      alt: "Oil Lotion Shampoo Bottles",
    },
  ],

  specs: [
    { label: "Capacity", value: "30ml, 50ml, 60ml, 100ml" },
    { label: "Material", value: "HDPE" },
    {
      label: "Shapes",
      value: "Flat, Round, Oval, Ujjala, Banana, Calamine",
    },
  ],

  applications: [
    "Hair Oils",
    "Lotions",
    "Body Oils",
    "Moisturizers",
    "Shampoos",
    "Cosmetic Creams",
    "Pharmaceutical Products",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Beauty Industry",
    "Healthcare Industry",
    "Ayurvedic Industry",
    "Veterinary Industry",
    "FMCG Industry",
  ],

  features: [
    "Leak Proof",
    "Food Grade Material",
    "Controlled Dispensing",
    "Strong & Durable",
    "Moisture Protection",
    "User Friendly Design",
    "Multiple Closure Options",
  ],

  sizes: ["30 ml", "50 ml", "60 ml", "100 ml"],
},
{
  slug: "oil-10",
  name: "30ml Lintiment Bottle",
  description:
    "HDPE 30ml Liniment Bottle designed for external-use medicines, medicated oils and antiseptic liquids.",
  sizes: ["30ml"],
   images: [
    {
      src: "/medicine_img/oil-11.jpg",
      alt: "30ml Lintiment Bottle",
    },
  ],
  applications: [
    "Medicated oils",
    "Liniments",
    "Antiseptic liquids",
    "Veterinary products"
  ],
  features: [
    "Compact design",
    "Leak proof",
    "Food grade material",
    "Chemical resistant"
  ],
  specs: [
    { label: "Capacity", value: "30ml" },
    { label: "Shape", value: "Oval Liniment" },
    { label: "Material", value: "HDPE" },
    { label: "Neck Size", value: "19mm" }
  ]
},
{
  slug: "oil-11",
  name: "50ml HDPE Flat Oil/Lotion Bottles",
  description:
    "Flat HDPE bottle suitable for oils, lotions, serums and pharmaceutical liquids.",
  sizes: ["50ml"],
  images: [
    {
      src: "/medicine_img/oil-12.jpg",
      alt: "50ml HDPE Flat Oil/Lotion Bottles",
    },
  ],

  applications: [
    "Hair oils",
    "Body lotions",
    "Serums",
    "Medicated solutions"
  ],
  features: [
    "Flat design",
    "Travel friendly",
    "Leak proof",
    "Easy storage",
    "Excellent labeling area"
  ],
  specs: [
    { label: "Capacity", value: "50ml" },
    { label: "Shape", value: "Flat" },
    { label: "Material", value: "HDPE" },
    { label: "Neck Size", value: "19mm" }
  ]
},
{
  slug: "oil-12",
  name: "50ml HDPE Round Oil/Lotion Bottles",
  description:
    "Round HDPE bottle ideal for oils, lotions, antiseptic liquids and herbal formulations.",
  sizes: ["50ml"],
    images: [
    {
      src: "/medicine_img/oil-13.jpg",
      alt: "50ml HDPE Round Oil/Lotion Bottles",
    },
  ],
  applications: [
    "Hair oils",
    "Face oils",
    "Lotions",
    "Antiseptics",
    "Massage oils"
  ],
  features: [
    "Round design",
    "Leak proof",
    "Lightweight",
    "Impact resistant",
    "Easy dispensing"
  ],
  specs: [
    { label: "Capacity", value: "50ml" },
    { label: "Shape", value: "Round" },
    { label: "Material", value: "HDPE" },
    { label: "Neck Size", value: "19mm" }
  ]
},
{
  slug: "oil-13",
  name: "100ml/19mm Flat Liquid Bottles (Ujjala Type)",
  description:
    "Premium Flat Oval Ujjala Type HDPE bottle designed for fabric whiteners, detergents, liquid cleaners, oils, lotions and industrial liquids. Its ergonomic flat shape ensures easy handling and controlled dispensing.",
  sizes: ["100ml"],
   images: [
    {
      src: "/medicine_img/oil-14.jpg",
      alt: "100ml/19mm Flat Liquid Bottles (Ujjala Type)",
    },
  ],
  applications: [
    "Fabric Whiteners",
    "Detergents",
    "Hair Oils",
    "Shampoos",
    "Lotions",
    "Antiseptics",
    "Agro Chemicals",
    "Industrial Liquids"
  ],
  industryApplications: [
    "Pharmaceutical Industry",
    "Personal Care & Cosmetics",
    "Veterinary Industry",
    "Herbal & Ayurvedic Industry",
    "Household & Fabric Care",
    "Chemical Industry",
    "Textile Industry",
    "Agro Industry"
  ],
  features: [
    "Flat oval ergonomic design",
    "Controlled dispensing",
    "Chemical resistant",
    "Leak-proof construction",
    "Squeezable body",
    "Easy labeling",
    "Space-saving storage",
    "Lightweight HDPE"
  ],
  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Flat Oval Ujjala Type" },
    { label: "Material", value: "HDPE" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Neck Size", value: "19mm" },
    { label: "Cap Type", value: "Flip Top" }
  ]
},
{
  slug: "oil-14",
  name: "100ml/19mm Flat Oil/Lotion/Shampoo Bottles",
  description:
    "Flat 100ml HDPE bottle specially designed for oils, lotions, shampoos and liquid formulations. Compact, durable and easy to store with excellent shelf presentation.",
  sizes: ["100ml"],
   images: [
    {
      src: "/medicine_img/oil-15.jpg",
      alt: "100ml/19mm Flat Oil/Lotion/Shampoo Bottles",
    },
  ],
  applications: [
    "Hair Oils",
    "Shampoos",
    "Lotions",
    "Liquid Soaps",
    "Syrups",
    "Antiseptics"
  ],
  industryApplications: [
    "Pharmaceutical Industry",
    "Personal Care Industry",
    "Veterinary Industry",
    "Herbal Industry",
    "Household Care",
    "FMCG"
  ],
  features: [
    "Flat space-saving design",
    "Excellent chemical resistance",
    "Leak-proof construction",
    "Controlled dispensing",
    "Lightweight",
    "Easy grip",
    "Easy labeling",
    "Compact storage"
  ],
  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Flat" },
    { label: "Material", value: "HDPE" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Neck Size", value: "19mm" },
    { label: "Cap Type", value: "Flip Top" }
  ]
},
{
  slug: "oil-15",

  name: "100ml / 19mm Oil/Lotion/Shampoo Oval Bottles",

  description:
    "Premium quality oval HDPE bottle offering excellent aesthetics, ergonomic grip, and reliable performance for cosmetic, pharmaceutical, and FMCG products.",

  images: [
    {
      src: "/medicine_img/oil-9.jpg",
      alt: "100ml Oval Bottle",
    },
  ],

  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Oval" },
    { label: "Bottle Material", value: "HDPE" },
    { label: "Neck Size", value: "19mm" },
    { label: "Cap Type", value: "Flip Top" },
  ],

  applications: [
    "Hair Oils",
    "Shampoo",
    "Lotions",
    "Liquid Soaps",
    "Ayurvedic Products",
    "Pharmaceutical Solutions",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Cosmetic Industry",
    "Personal Care Industry",
    "Household Care",
  ],

  features: [
    "Ergonomic Oval Shape",
    "Excellent Shelf Appeal",
    "Leak Resistant",
    "Easy Dispensing",
    "Custom Branding",
    "Lightweight",
  ],

  sizes: ["100 ml"],
},
{
  slug: "oil-16",
  name: "100ml/19mm Oil/Lotion/Shampoo Round Bottles",
  description:
    "Premium 100ml HDPE bottle featuring a flat oval/rectangular profile with rounded edges, ideal for personal care, cosmetic and pharmaceutical products.",
  sizes: ["100ml"],
  images: [
    {
      src: "/medicine_img/oil-16.jpg",
      alt: "100ml Round Bottle",
    },
  ],

  applications: [
    "Hair Oils",
    "Shampoos",
    "Conditioners",
    "Body Lotions",
    "Face Wash",
    "Hand Sanitizers",
    "Massage Oils",
    "Medicated Lotions"
  ],
  industryApplications: [
    "Pharmaceutical & Healthcare",
    "Personal Care Industry",
    "Herbal Industry",
    "FMCG",
    "Industrial Chemicals"
  ],
  features: [
    "Rounded ergonomic design",
    "Excellent squeezability",
    "Leak resistant",
    "Easy labeling",
    "Space efficient",
    "Chemical resistant",
    "Wide cap compatibility",
    "Premium appearance"
  ],
  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Flat Oval / Rounded Edge" },
    { label: "Material", value: "HDPE" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Neck Size", value: "19mm" },
    { label: "Cap Type", value: "Flip Top" }
  ]
},
{
  slug: "oil-17",
  name: "100ml/19mm Classic Calamine Style Oil/Lotion/Shampoo Bottles",
  description:
    "Elegant Classic Calamine Style HDPE bottle with ergonomic curved design. Suitable for oils, lotions, shampoos, medicated solutions and herbal formulations.",
  sizes: ["100ml"],
  images: [
    {
      src: "/medicine_img/oil-17.jpg",
      alt: "100ml Classic Calamine Style Bottle",
    },
  ],

  applications: [
    "Hair Oils",
    "Lotions",
    "Shampoos",
    "Liquid Soaps",
    "Syrups",
    "Antiseptic Solutions",
    "Herbal Products"
  ],
  industryApplications: [
    "Pharmaceutical Industry",
    "Personal Care Industry",
    "Cosmetics Industry",
    "Herbal & Ayurvedic Industry"
  ],
  features: [
    "Classic Calamine shape",
    "Premium shelf appearance",
    "Comfortable grip",
    "Leak-proof design",
    "Chemical resistant",
    "Easy dispensing",
    "Lightweight",
    "Durable HDPE construction"
  ],
  specs: [
    { label: "Capacity", value: "100ml" },
    { label: "Shape", value: "Classic Calamine Style" },
    { label: "Material", value: "HDPE" },
    { label: "Bottle Colour", value: "Milky White" },
    { label: "Neck Size", value: "19mm" },
    { label: "Cap Type", value: "Flip Top" }
  ]
}
  ]
  
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