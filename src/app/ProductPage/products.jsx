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
  name: "Jars",
  rating: 4.9,
  reviews: 42,

  variants: [
    {
      slug: "cream-jar",
      name: "HDPE Cream Jar Set",
      images: [{ src: "/cream-jar.png", alt: "HDPE Cream Jar Set" }],

      specifications: {
        capacity: "100 gm",
        shape: "Round",
        jarColor: "Milky White",
        jarMaterial: "High Density Polyethylene (HDPE)",
        capColor: "Coloured",
        capMaterial: "Polypropylene (PP)",
        innerLidColor: "Natural",
        innerLidMaterial: "Low Density Polyethylene (LDPE)",
      },

      applicationAreas: [
        "Pharmaceutical Industry",
        "Cosmetic & Personal Care",
        "Ayurvedic & Herbal Products",
        "Dermatology Use",
        "Veterinary Applications",
      ],

      applications: [
        "Packaging medicated creams, ointments, balms, and gels",
        "Face creams, under-eye creams, moisturizers, serums, and beauty balms",
        "Product samples, promotional packs, and travel-size variants",
        "Herbal creams, natural balms, and organic skincare formulations",
      ],

      features: [
        "Premium HDPE Material",
        "Lightweight & Compact",
        "Secure & Leak-Resistant Closure",
        "Excellent Product Protection",
      ],

      description:
        "At Neelam Print O Pack, we bring you high-quality HDPE Cream Jar Sets designed to deliver reliability, safety, and aesthetic appeal for modern packaging needs.",

      highlights: [
        "Premium Grade HDPE",
        "Leak Resistant Screw Cap",
        "Moisture Protection",
        "Travel Friendly",
      ],

      sizes: ["100 gm"],
    },

    {
      slug: "fancy-jar",
      name: "HDPE Fancy Jar",
      images: [{ src: "/fancy-jar.png", alt: "HDPE Fancy Jar" }],

      specifications: {
        capacity: "200 gm",
        shape: "Cylindrical",
        shapeDescription:
          "Cylindrical, round base, straight vertical sides, wide circular opening, and a lid with a colored rim.",
        jarColor: "White",
        jarMaterial: "High Density Polyethylene (HDPE)",
        capColor: "Any Color",
        capMaterial: "Polypropylene (PP)",
        rimColor: "Any Color",
        rimMaterial: "Polypropylene (PP)",
      },

      applicationAreas: [
        "Pharmaceutical Industry",
        "Food & Beverage",
        "Nutraceutical & Health Supplements",
        "Ayurvedic & Herbal Products",
      ],

      applications: [
        "Protein powder and nutritional supplements",
        "Health powders (herbal mixes, collagen, etc.)",
        "Spices and seasoning blends",
        "Dry fruits or snack portions",
      ],

      features: [
        "Attractive fancy design",
        "Strong and durable",
        "Lightweight and easy to handle",
        "Wide mouth opening for easy filling and scooping",
      ],

      tagline: "Luxury Outside. Power Inside.",

      description:
        "This refined premium storage jar is designed for brands that value elegance and sophistication.",

      highlights: [
        "Premium HDPE Construction",
        "Luxury Matte Finish",
        "Colored Accent Rim",
        "Wide Mouth Design",
      ],

      sizes: ["200 gm"],
    },
    {
  slug: "flip-type-cap-protein-powder-jar",
  name: "HDPE Flip Type Cap Protein Powder Jar Set",
  images: [{ src: "/flip-type-cap-protein-powder-jar.png", alt: "HDPE Flip Type Cap Protein Powder Jar Set" }],

  description:
    "Elevate your packaging standards with our premium-grade HDPE wide-mouth jar, designed to deliver both performance and visual appeal. Crafted with precision, this jar combines robust durability with a refined matte finish, offering a sophisticated look that enhances your product's shelf presence. The ergonomically designed wide-mouth opening ensures effortless filling, dispensing, and cleaning, while the reinforced rim provides a secure and reliable seal with compatible closures—safeguarding contents from moisture, contamination, and external elements. Built from high-quality HDPE, this jar offers superior chemical resistance, impact strength, and lightweight convenience, making it an ideal choice for demanding industrial as well as premium consumer applications.",

  specs: [
    { label: "Capacity", value: "200 gm" },
    {
      label: "Shape",
      value: "Straight Cylindrical Body with Extended Rim",
    },
    {
      label: "Alternative Shape",
      value: "Wide-Mouth Cylindrical Jar",
    },
    {
      label: "Jar Colour",
      value: "Any Color",
    },
    {
      label: "Jar Material",
      value: "High Density Polyethylene (HDPE)",
    },
    {
      label: "Cap Colour",
      value: "Coloured",
    },
    {
      label: "Cap Material",
      value: "Polypropylene (PP)",
    },
  ],

  applications: [
    "Ointments, creams and gels",
    "Tablets and capsules",
    "Medical powders",
    "Isabgol packaging",
    "Face creams, moisturizers and scrubs",
    "Hair masks, gels and wax",
    "Body butter and lip balms",
    "Travel-size cosmetic storage",
    "Dry fruits, spices and condiments",
    "Protein powder sample packs",
    "Honey, jams and spreads",
    "Ghee packaging",
    "Grease, lubricants and adhesives",
    "Pigments, dyes and chemical samples",
    "Storage of screws and fittings",
    "Buttons, beads and household items",
    "DIY and craft materials",
    "Travel containers for toiletries",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Cosmetic & Personal Care",
    "Food & Nutraceutical",
    "Industrial Applications",
    "Household & General Use",
    "Ayurvedic & Herbal Products",
  ],

  features: [
    "Durable HDPE Construction",
    "Lightweight and Strong",
    "Wide Mouth Opening",
    "Extended Rim for Secure Sealing",
    "Smooth Surface Finish",
    "Ideal for Labeling and Printing",
    "Compact and Handy Design",
    "Reusable and Eco-Friendly",
    "Excellent Moisture Resistance",
    "Impact Resistant Construction",
    "Compatible with Snap-Fit Lids",
    "Suitable for Heat-Seal Closures",
  ],

  highlights: [
    "Premium HDPE Material",
    "Wide Mouth Design",
    "Secure Closure System",
    "Moisture Protection",
    "Chemical Resistant",
    "Reusable Packaging",
    "Branding Friendly Surface",
    "Multi-Industry Applications",
  ],

  sizes: ["200 gm"],

  tags: [
    "Flip Type Cap Jar",
    "Protein Powder Jar",
    "HDPE Jar",
    "Wide Mouth Jar",
    "Nutraceutical Jar",
    "Pharmaceutical Jar",
    "Cosmetic Jar",
    "Storage Container",
    "Food Grade Packaging",
  ],
},
{
  slug: "gattu-jar",
  name: "HDPE Gattu Jar Set",
  images: [{ src: "/gattu-jar.png", alt: "HDPE Gattu Jar Set" }],

  description:
    "Elevate your packaging standards with our HDPE 200 gm Gattu Jar Set, thoughtfully engineered to deliver unmatched durability and product protection. Crafted from superior-grade HDPE, this jar set combines robustness with a refined finish, making it an ideal choice for brands that value both performance and presentation. Designed with a wide-mouth opening, it ensures effortless filling and smooth dispensing of creams, powders, and semi-solid formulations. The secure leak-proof closure preserves freshness and safeguards contents from moisture, dust, and contamination.",

  specs: [
    { label: "Capacity", value: "200 gm" },
    {
      label: "Shape",
      value: "Round Cylindrical Wide-Mouth Jar with Dome Cap",
    },
    { label: "Jar Colour", value: "Milky White" },
    {
      label: "Jar Material",
      value: "High Density Polyethylene (HDPE)",
    },
    { label: "Cap Colour", value: "Coloured" },
    {
      label: "Cap Material",
      value: "Polypropylene (PP)",
    },
  ],

  applications: [
    "Spices, dry fruits, pickles, chutneys and honey",
    "Ghee packaging",
    "Herbal powders, balms and natural formulations",
    "Cosmetic creams, gels, scrubs and hair masks",
    "Pharmaceutical creams, powders and granules",
    "Isabgol packaging",
    "Household storage products",
    "DIY materials and adhesives",
    "Industrial greases and lubricants",
    "Retail and bulk packaging",
    "Chemical powders and pastes",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Food Industry",
    "Cosmetic & Personal Care",
    "Ayurvedic & Herbal Industry",
    "Chemical Industry",
    "Paint & Coating Industry",
    "Household & Utility Products",
  ],

  features: [
    "Premium Grade HDPE Material",
    "Sturdy & Impact Resistant",
    "Leak-Proof Secure Closure",
    "Wide Mouth Design",
    "Excellent Product Protection",
    "Lightweight & User Friendly",
    "Reusable & Eco-Friendly",
    "Versatile Applications",
    "Customizable Options",
    "Hygienically Manufactured",
  ],

  highlights: [
    "Premium HDPE Construction",
    "Wide Mouth Design",
    "Leak-Proof Closure",
    "Moisture Protection",
    "Impact Resistant",
    "Custom Branding Available",
  ],

  sizes: ["200 gm"],
},
{
  slug: "hdpe-energy-drink-isabgol-jar",
  name: "HDPE Energy Drink / Isabgol Jar Set",
  images: [{ src: "/hdpe-energy-drink-isabgol-jar.png", alt: "HDPE Energy Drink / Isabgol Jar Set" }],

  tagline: "Power Packed Freshness, Sealed to Perform.",

  description:
    "Elevate your product packaging with the HDPE 100 gm Energy Drink Jar Set from Neelam Print O Pack, expertly designed to meet the dynamic demands of the nutraceutical and beverage industry. Crafted from high-quality HDPE material, this jar ensures superior strength, durability, and resistance. Built to preserve freshness and potency, the jar offers excellent protection against moisture and external contaminants. The secure leak-resistant closure system ensures safe storage and easy handling while the wide-mouth opening allows convenient filling, scooping and usage.",

  specs: [
    { label: "Capacity", value: "100 gm" },
    {
      label: "Shape",
      value:
        "Round Cylindrical Jar with Tapered Shoulder and Ribbed Screw Cap",
    },
    { label: "Jar Colour", value: "Milky White" },
    {
      label: "Jar Material",
      value: "High Density Polyethylene (HDPE)",
    },
    { label: "Cap Colour", value: "Coloured" },
    {
      label: "Cap Material",
      value: "Polypropylene (PP)",
    },
  ],

  applications: [
    "Energy drink powders",
    "Protein supplements",
    "Nutritional blends",
    "Pre-workout powders",
    "Post-workout powders",
    "Stamina boosting formulations",
    "Herbal energy powders",
    "Ayurvedic wellness mixes",
    "Dietary supplements",
    "Immunity boosters",
    "Therapeutic drink powders",
    "Isabgol packaging",
    "Glucose powders",
    "Instant beverage premixes",
    "Retail health products",
  ],

  industryApplications: [
    "Pharmaceutical Nutraceuticals",
    "Health & Nutrition Industry",
    "Sports & Fitness Products",
    "Ayurvedic & Herbal Formulations",
    "Food & Beverage Sector",
    "Institutional & Retail Packaging",
  ],

  features: [
    "Premium Quality HDPE Material",
    "Food Safe & Hygienic",
    "Excellent Moisture Barrier",
    "Airtight Leak Resistant Closure",
    "Lightweight & Sturdy Design",
    "Wide Mouth Opening",
    "Compact & User Friendly",
    "Smooth Surface Finish",
    "Customizable Options",
    "Versatile Usage",
  ],

  highlights: [
    "Food Grade HDPE",
    "Airtight Screw Cap",
    "Moisture Protection",
    "Wide Mouth Design",
    "Premium Shelf Appeal",
    "Custom Branding Options",
  ],

  sizes: ["100 gm"],
},
{
  slug: "long-protein-powder-jar",
  name: "HDPE Long Protein Powder Jar Set",
  images: [{ src: "/long-protein-powder-jar.png", alt: "HDPE Long Protein Powder Jar Set" }],

  description:
    "Crafted for modern nutrition brands, the HDPE Long Protein Powder Jar Set (200 gm) by Neelam Print O Pack offers the perfect balance of durability, hygiene, and premium presentation. Manufactured using high-grade food-safe HDPE, this jar ensures exceptional strength while remaining lightweight and easy to handle. Its airtight sealing mechanism protects contents from moisture, air exposure, and contaminants, preserving freshness and nutritional value. The ergonomic long cylindrical body combined with a wide-mouth opening allows effortless filling, scooping, and cleaning. Ideal for protein powders, supplements, nutraceuticals, herbal formulations, and wellness products, this jar also supports custom branding, labeling, and color options for enhanced shelf appeal.",

  specs: [
    { label: "Capacity", value: "200 gm" },
    { label: "Shape", value: "Straight-Sided Long Cylindrical Jar with Wide Mouth" },
    { label: "Jar Colour", value: "Milky White" },
    { label: "Jar Material", value: "High Density Polyethylene (HDPE)" },
    { label: "Cap Colour", value: "Coloured" },
    { label: "Cap Material", value: "Polypropylene (PP)" }
  ],

  applications: [
    "Protein Powders",
    "Dietary Supplements",
    "Mass Gainers",
    "Health Mixes",
    "Medicinal Powders",
    "Herbal Formulations",
    "Isabgol Packaging",
    "Pre-Workout Supplements",
    "Post-Workout Supplements",
    "Energy Powders",
    "Flavoured Drink Mixes",
    "Cocoa Powder",
    "Milk Additives",
    "Nutritional Blends",
    "Herbal Powders",
    "Organic Supplements",
    "Beauty Supplements",
    "Body Powders",
    "Retail Packaging",
    "Veterinary Formulations"
  ],

  industryApplications: [
    "Nutraceutical Industry",
    "Pharmaceutical Industry",
    "Fitness & Wellness Industry",
    "Food & Beverage Industry",
    "Herbal & Ayurvedic Industry",
    "Cosmetic & Personal Care Industry",
    "Retail & Consumer Packaging",
    "Veterinary & Animal Healthcare Industry"
  ],

  features: [
    "Premium Food-Grade HDPE Construction",
    "Airtight & Moisture-Resistant Closure",
    "Strong & Impact-Resistant Design",
    "Wide Mouth Opening",
    "Lightweight & Travel-Friendly",
    "Safe for Food & Supplements",
    "Customizable Colors & Branding",
    "Reusable & Eco-Friendly",
    "Excellent Product Protection",
    "Ideal Storage Capacity",
    "Hygienically Manufactured",
    "Suitable for Multiple Industries"
  ],

  highlights: [
    "Food Grade HDPE",
    "Airtight Freshness Protection",
    "Wide Mouth Design",
    "Impact Resistant Body",
    "Custom Branding Available",
    "Travel Friendly",
    "Premium Shelf Appeal",
    "Moisture Resistant Storage"
  ],

  sizes: ["200 gm"]
},
{
  slug: "mediterranean-jar",
  name: "HDPE Mediterranean Jar Set",
  images: [{ src: "/mediterranean-jar.png", alt: "HDPE Mediterranean Jar Set" }],

  description:
    "Premium HDPE Mediterranean Jar Set designed for food, cosmetic, pharmaceutical and personal care applications. Combines elegant aesthetics with excellent product protection and durability.",

  specs: [
    { label: "Capacity", value: "200 gm" },
    { label: "Shape", value: "Straight-Sided Round Jar" },
    { label: "Shape Description", value: "Compact cylindrical wide-mouth jar with flat base" },
    { label: "Jar Material", value: "HDPE" },
    { label: "Cap Material", value: "PP" },
    { label: "Jar Color", value: "Any Color" }
  ],

  applications: [
    "Spices & Dry Fruits",
    "Protein Supplements",
    "Health Blends",
    "Tablets & Capsules",
    "Ayurvedic Formulations",
    "Face Creams",
    "Body Butters",
    "Herbal Powders",
    "Kitchen Storage",
    "Industrial Granules"
  ],

  industryApplications: [
    "Food & Nutraceutical Industry",
    "Pharmaceutical Industry",
    "Cosmetic & Personal Care",
    "Wellness & Herbal Products",
    "Industrial Packaging",
    "Veterinary Industry"
  ],

  features: [
    "Premium HDPE Construction",
    "Mediterranean Inspired Design",
    "Leak Resistant Closure",
    "Wide Mouth Opening",
    "Lightweight Yet Durable",
    "Excellent Moisture Protection",
    "Custom Branding Options",
    "Food Grade Material",
    "Easy Filling & Dispensing",
    "Shelf Appeal Design"
  ],

  sizes: ["200 gm"]
},

{
  slug: "pediasure-type-protein-powder-jar",
  name: "HDPE Pediasure Type Protein Powder Jar Set",
  images: [{ src: "/pediasure-type-protein-powder-jar.png", alt: "HDPE Pediasure Type Protein Powder Jar Set" }],

  description:
    "Premium wide-mouth HDPE jar with elegant curved design, ideal for protein powders, cosmetics, creams, nutraceuticals and wellness products.",

  specs: [
    { label: "Capacity", value: "150 gm, 200 gm, 400 gm" },
    { label: "Shape", value: "Curved Waist Cylindrical Jar" },
    { label: "Jar Material", value: "HDPE" },
    { label: "Cap Material", value: "PP" },
    { label: "Cap Type", value: "Flat Round Screw Cap" },
    { label: "Jar Color", value: "White" }
  ],

  applications: [
    "Face Creams",
    "Body Butter",
    "Hair Masks",
    "Hair Gel",
    "Scrubs",
    "Ayurvedic Creams",
    "Medicinal Balms",
    "Honey",
    "Peanut Butter",
    "Protein Powder",
    "Dry Fruit Powder",
    "Salon Products"
  ],

  industryApplications: [
    "Cosmetics & Personal Care",
    "Pharmaceutical Industry",
    "Food & Nutraceutical Industry",
    "Beauty & Salon Industry"
  ],

  features: [
    "Wide Mouth Design",
    "Leak Resistant Screw Cap",
    "Impact Resistant Body",
    "Large Labeling Area",
    "Reusable & Recyclable",
    "Portable Design",
    "Multiple Lid Colors",
    "Chemical Resistant",
    "Moisture Resistant",
    "Stackable Design"
  ],

  sizes: ["150 gm", "200 gm", "400 gm"]
},

{
  slug: "protein-jar-with-silver-leaf",
  name: "HDPE Protein Jar With Silver Leaf",
  images: [{ src: "/protein-jar-with-silver-leaf.png", alt: "HDPE Protein Jar With Silver Leaf" }],

  description:
    "Premium wide-mouth HDPE container featuring a decorative silver leaf band and secure screw cap closure. Ideal for food, nutraceutical, cosmetic and pharmaceutical packaging.",

  specs: [
    { label: "Capacity", value: "200 gm" },
    { label: "Shape", value: "Wide Mouth Cylindrical Jar" },
    { label: "Jar Material", value: "HDPE" },
    { label: "Cap Material", value: "PP" },
    { label: "Jar Color", value: "Any Color" }
  ],

  applications: [
    "Protein Powders",
    "Herbal Powders",
    "Capsules",
    "Tablets",
    "Honey",
    "Chocolate Spreads",
    "Dry Fruits",
    "Confectionery Products",
    "Face Creams",
    "Hair Masks",
    "Veterinary Supplements",
    "Pet Nutrition Products"
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Nutraceutical Industry",
    "Cosmetic Industry",
    "Food Industry",
    "Veterinary Industry",
    "Ayurvedic Industry"
  ],

  features: [
    "Premium Silver Band Lid",
    "Food Grade HDPE",
    "Wide Mouth Design",
    "Strong Screw Cap Closure",
    "Excellent Branding Surface",
    "Moisture Resistant",
    "Impact Resistant",
    "Reusable Design",
    "Customizable Colors",
    "Premium Retail Appearance"
  ],

  sizes: ["200 gm"]
},
{
  slug: "protein-powder-jar-set",
  name: "HDPE Protein Powder Jar Set",
  images: [{ src: "/protein-powder-jar-set.png", alt: "HDPE Protein Powder Jar Set" }],

  description:
    "The HDPE Protein Powder Jar Set is a premium wide-mouth cylindrical packaging solution designed for protein powders, supplements, pharmaceuticals, cosmetics, food products, veterinary formulations, agrochemicals, and industrial compounds. Manufactured from high-quality HDPE material, the jar delivers exceptional durability, impact resistance, and moisture protection while maintaining a lightweight structure. Its pedestal-base design enhances stability and shelf appeal, while the ribbed screw cap provides a secure and reliable seal against contamination and leakage. The smooth cylindrical body offers excellent branding and labeling space, making it ideal for retail and commercial packaging applications.",

  specs: [
    { label: "Capacity", value: "200 gm" },
    {
      label: "Shape",
      value: "Cylindrical Shape with Slightly Flared Pedestal Base",
    },
    {
      label: "Shape Description",
      value:
        "Round cylindrical jar with straight side walls, wide-mouth opening and pedestal-style base",
    },
    { label: "Jar Colour", value: "Any Color" },
    {
      label: "Jar Material",
      value: "High Density Polyethylene (HDPE)",
    },
    { label: "Cap Colour", value: "Coloured" },
    { label: "Cap Material", value: "Polypropylene (PP)" },
    { label: "Cap Shape", value: "Round Ribbed Screw Cap" },
  ],

  applications: [
    "Protein Powder Packaging",
    "Dietary Supplements",
    "Herbal Supplements",
    "Health Powders",
    "Tablets & Capsules",
    "Veterinary Powders",
    "Animal Feed Supplements",
    "Dry Fruits",
    "Spices & Seasonings",
    "Candies & Confectionery",
    "Beauty Powders",
    "Hair Masks",
    "Body Scrubs",
    "Cosmetic Creams",
    "Laboratory Powders",
    "Industrial Compounds",
    "Agricultural Nutrients",
    "Pesticides & Agrochemicals",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Veterinary & Animal Health",
    "Nutraceutical Industry",
    "Cosmetics & Personal Care",
    "Food & Confectionery",
    "Chemical Industry",
    "Agrochemical Industry",
    "Industrial Packaging",
  ],

  features: [
    "Wide Mouth Opening",
    "Premium HDPE Construction",
    "Durable & Impact Resistant",
    "Secure Ribbed Screw Cap",
    "Leak Resistant Closure",
    "Pedestal Base Design",
    "Premium Shelf Appearance",
    "Moisture Resistant",
    "Chemical Resistant",
    "Smooth Label-Friendly Surface",
    "Reusable & Recyclable",
    "Food Grade Material Option",
    "Lightweight Construction",
    "Good Barrier Properties",
    "Customizable Appearance",
    "Multipurpose Packaging Solution",
  ],

  highlights: [
    "Premium HDPE Material",
    "Pedestal Base Design",
    "Wide Mouth Access",
    "Secure Screw Cap",
    "Excellent Shelf Presence",
    "Moisture Protection",
    "Custom Branding Friendly",
    "Suitable For Multiple Industries",
  ],

  sizes: ["200 gm"],

  tagline: "Strong Protection, Smart Packaging.",
},
{
  slug: "sleeve-type-protein-jar-set",
  name: "HDPE Sleeve Type Protein Powder Jar Set",
  images: [{ src: "/sleeve-type-protein-jar.png", alt: "HDPE Sleeve Type Protein Powder Jar Set" }],

  specifications: {
    capacity: "200 gm",
    shape: "Curved Waist Shape (Slim middle with wider top and bottom)",
    shapeDescription:
      "This jar features an ergonomic hourglass design with a narrow center and wider top and bottom sections, providing superior grip and an attractive premium appearance.",
    jarColor: "Any Color",
    jarMaterial: "High Density Polyethylene (HDPE)",
    capColor: "Coloured",
    capMaterial: "Polypropylene (PP)",
  },

  applicationAreas: [
    "Pharmaceutical Industry",
    "Veterinary Industry",
    "Food & Nutraceutical Industry",
    "Cosmetics & Personal Care Industry",
    "Chemical Industry",
    "Household & Consumer Products",
    "Ayurvedic Industry",
  ],

  applications: [
    "Tablet and capsule packaging",
    "Nutraceutical supplements",
    "Protein powders and health supplements",
    "Animal feed supplements and veterinary products",
    "Hair masks, body scrubs, and cosmetic powders",
    "Spices, seasoning blends, and dry food products",
    "Industrial additives, pigments, and laboratory powders",
    "Household cleaning powders and dry storage materials",
  ],

  features: [
    "Ergonomic Hourglass Shape",
    "Wide Mouth Opening",
    "High-Quality HDPE Material",
    "Moisture Resistant",
    "Durable & Reusable",
    "Leak-Resistant Closure Compatibility",
    "Large Labeling Surface",
    "Enhanced Grip Control",
    "Impact & Drop Resistant",
    "Food-Grade Material Option",
    "Tamper-Evident Seal Compatibility",
    "Excellent Barrier Properties",
    "Smooth Surface Finish",
    "Odor-Resistant Material",
    "Custom Color Availability",
    "UV Protection Option",
    "Space-Efficient Storage",
    "Bulk Manufacturing Friendly",
  ],

  description:
    "The HDPE Sleeve Type Protein Powder Jar Set is a premium wide-mouth packaging solution featuring an ergonomic hourglass-shaped body for enhanced grip and handling. Manufactured from high-quality HDPE, it offers exceptional durability, moisture resistance, and product protection. The wide-mouth design ensures easy filling, scooping, and dispensing, making it ideal for protein powders, nutraceuticals, pharmaceuticals, cosmetics, veterinary products, and industrial applications. Its smooth surface provides excellent branding opportunities while maintaining a modern and professional shelf presence.",

  tagline: "Designed for Grip. Built for Protection.",

  highlights: [
    "Ergonomic Waist-Grip Design",
    "Premium HDPE Construction",
    "Wide Mouth Access",
    "Superior Moisture Protection",
    "Strong & Lightweight",
    "Custom Branding Ready",
    "Reusable & Recyclable",
    "Export Quality Packaging",
  ],

  sizes: ["200 gm"],
}
  ]
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
    "Capacity: 500ml",
    "Shape: Slanted Shoulder Rectangular Bottle",
    "Shape Description: Rectangular body with ergonomic slanted shoulder and angled neck for easy pouring without spilling",
    "Bottle Colour: Natural and White",
    "Bottle Material: High Density Polyethylene (HDPE)",
    "Cap Colour: Pink, Blue and any color as per requirement",
    "Cap Material: Polypropylene (PP)",
    "Inner Plug Colour: Natural",
    "Inner Plug Material: Low Density Polyethylene (LDPE)",
  ],

  applications: [
    "Floor Cleaning Liquids – Ideal for packaging phenyl and floor disinfectants",
    "Toilet & Bathroom Cleaners – Angled neck helps direct liquid under toilet rims and corners",
    "Surface Disinfectants – Suitable for liquid disinfectant solutions used on tiles and floors",
    "Multipurpose Household Cleaners – Used for packaging all-purpose liquid cleaning products",
    "Industrial Cleaning Liquids – Can hold chemical cleaning agents for factories and workshops",
    "Kitchen Cleaning Solutions – Packaging for liquid degreasers and kitchen surface cleaners",
    "Sanitizing Liquids – Used for hygiene and sanitation liquids in homes and institutions",
  ],

  industryApplications: [
    "FMCG Cleaning Products Industry",
    "Home Care & Household Cleaning Industry",
    "Sanitation & Hygiene Products Industry",
    "Hospital & Healthcare Industry",
    "Hospitality Industry",
  ],

  features: [
    "Ergonomic Angled Neck – Provides controlled and precise pouring",
    "HDPE Construction – Ensures durability and excellent chemical resistance",
    "Leak-Resistant Neck – Compatible with standard screw caps",
    "Stable Flat Base – Provides secure placement on shelves and storage areas",
    "Large Front Label Panel – Ideal for branding and product information",
    "Lightweight Structure – Easy to handle and transport",
    "Chemical Compatibility – Suitable for a wide range of cleaning formulations",
    "Surface Finish – Smooth finish for premium appearance",
    "Bottle Geometry – Designed for spill-free pouring",
    "Rectangular Body – Space-efficient for storage and shelf display",
    "Grip Design – Comfortable and consumer-friendly",
    "Color Options – Available in multiple colors as per requirement",
    "Closure Compatibility – Supports screw caps and flip-top caps",
    "Impact Resistance – Strong plastic construction for long service life",
    "Filling Line Compatible – Suitable for automated filling machines",
  ],

  sizes: ["500 ml"],
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
  name: "Plastic Cam Locks for PUF Panels",
  rating: 4.8,
  reviews: 34,

  description:
    "Engineered for reliability and precision, our Plastic HIPS Cam Lock Housing is designed to deliver secure and efficient locking performance across a wide range of housing and enclosure applications. Manufactured from high-quality High Impact Polystyrene (HIPS), this cam lock housing offers an excellent balance of strength, durability, and lightweight performance, making it ideal for modern residential and industrial hardware systems. The component features a precision-molded rectangular dual-chamber structure with a dedicated circular cam socket that ensures smooth cam rotation and dependable locking functionality. Reinforced ribs and a robust body design enhance structural stability, providing long-lasting performance even under repeated usage. Its corrosion-resistant plastic construction eliminates issues associated with metal rusting, making it suitable for environments where durability and maintenance-free operation are essential.",

  images: [
      { src: "/stopperCAM.png", alt: "Syrup bottle and box mockup" },
      { src: "/stopperCAM2.png", alt: "Brown glass bottle" },
      { src: "/stopperCAM3.png", alt: "White medicine bottle" },
      { src: "/stopperCAM4.png", alt: "Label close-up" },
      { src: "/stopperCAM5.png", alt: "Packaging box" },
      { src: "/stopperCAM6.png", alt: "Packaging box" },
    ],

  specs: [
    "Material: High Impact Polystyrene (HIPS)",
    "Available Sizes: 40mm, 60mm",
    "Rectangular Cam Lock Housing",
    "Dual-Chamber Molded Construction",
    "Circular Cam Lock Socket",
    "Rounded Edge Design",
    "Integrated Mounting Tabs",
    "Reinforced Ribbed Structure",
  ],

  applications: [
    "Electrical Appliance Locking Systems",
    "Water Purifier Assemblies",
    "RO System Components",
    "Plastic Cabinet Locking Mechanisms",
    "Consumer Appliance Parts",
    "Electrical Panel Covers",
    "Water Dispenser Internal Assemblies",
    "Industrial Equipment Covers",
    "Plastic Enclosure Locking Systems",
    "Modular Component Assembly",
  ],

  industryApplications: [
    "Residential Construction Industry",
    "Modular Furniture Manufacturing",
    "Home Improvement & Hardware Industry",
    "Electrical Enclosure Manufacturing",
    "Kitchen & Interior Design Industry",
    "Plastic Hardware Manufacturing",
    "Home Appliance Housing Manufacturing",
  ],

  features: [
    "High Impact Polystyrene (HIPS) Construction",
    "Lightweight Yet Strong Design",
    "Precision-Molded Structure",
    "Corrosion-Resistant Material",
    "Dual-Chamber Housing Design",
    "Integrated Circular Cam Socket",
    "Reinforced Ribbed Surface",
    "Easy Installation System",
    "Electrical Insulation Properties",
    "Smooth Molded Finish",
    "Chemical Resistance",
    "Dimensional Stability",
    "Low Maintenance Component",
    "Cost-Effective Industrial Solution",
    "Long Service Life",
  ],

  sizes: [
    "40 mm",
    "60 mm",
  ],
},{
  id: 15,
  name: "HDPE Churan Bottle",
  rating: 4.9,
  reviews: 42,

  images: [
    {
      src: "/medicine_img/churan-bottle.png",
      alt: "HDPE Churan Bottle",
    },
  ],

  specifications: {
    capacity: "100 gm",
    shape: "Cylindrical Straight Round Bottle with Short Shoulder and Narrow Neck",
    bottleColor: "Colors available as per request",
    bottleMaterial: "High Density Polyethylene (HDPE)",
    capColor: "Colors available as per request",
    capMaterial: "Polypropylene (PP)",
  },

  applicationAreas: [
    "Pharmaceutical Industry",
    "Ayurvedic & Herbal Industry",
    "Food & Beverage Industry",
    "Agrochemical Industry",
    "Veterinary Industry",
  ],

  applications: [
    "Packaging of herbal powders (Churan, Ayurvedic formulations)",
    "Liquid concentrates such as flavoring agents and syrups",
    "Pesticides and agricultural nutrients",
    "Veterinary liquid medicines",
    "Liquid fertilizers and plant growth solutions",
    "Pharmaceutical syrups and solutions",
    "Personal care liquids such as hair oils and lotions",
  ],

  features: [
    "Durable HDPE Construction",
    "Lightweight Design",
    "Compact Cylindrical Body",
    "Short Shoulder Profile",
    "Narrow Neck Finish",
    "Secure Screw Cap Compatibility",
    "Excellent Chemical Resistance",
    "Smooth Surface Finish",
    "Food-Grade Material Option",
    "Custom Color Availability",
    "Strong Base Support",
    "Leak-Resistant Packaging",
  ],

  description:
    "Our HDPE Churan Bottle is a versatile and durable packaging solution designed to meet the requirements of pharmaceutical, herbal, agrochemical, veterinary, and food industries. Manufactured from high-quality HDPE material, it provides excellent strength, lightweight handling, and reliable product protection. The cylindrical body with a short shoulder and narrow neck ensures controlled dispensing and efficient storage while maintaining a professional appearance. Its smooth surface supports easy labeling and branding, while the secure screw-cap closure helps preserve product freshness and prevents leakage during storage and transportation. Combining durability, functionality, and visual appeal, this bottle is ideal for powders, syrups, liquid concentrates, fertilizers, veterinary medicines, and personal care products.",

  tagline: "Packaging That Defines Premium.",

  highlights: [
    "100 gm Capacity",
    "Premium HDPE Material",
    "Leak-Resistant Closure",
    "Excellent Chemical Resistance",
    "Lightweight & Durable",
    "Custom Color Options",
    "Ideal for Herbal & Pharmaceutical Products",
    "Professional Shelf Presence",
  ],

  sizes: ["100 gm"],
},
{
  id: 16,
  name: "HDPE Tablet Containers",
  rating: 4.9,
  reviews: 42,

  description:
    "Our Wide-Mouth Cylindrical Tablet Packer is thoughtfully engineered to meet the demanding standards of the pharmaceutical and nutraceutical packaging industry. Designed with precision and durability, this container offers a clean cylindrical profile and a wide-mouth opening that enables effortless filling, dispensing, and handling of tablets, capsules, and supplements. Manufactured using high-quality pharmaceutical-grade HDPE material, the container ensures excellent product protection against moisture, contamination, and external environmental factors. Its robust construction provides strength and reliability throughout the supply chain, while the smooth surface finish allows superior labeling and branding presentation. The container features a secure threaded neck compatible with screw caps and tamper-evident closures, ensuring product integrity and consumer safety. Its stable flat base and space-efficient cylindrical structure make it ideal for automated filling lines, storage, and transportation.",

  images: [
    { src: "/tabletContainer.png", alt: "HDPE Tablet Container Front View" },

  ],

  specs: [
    "Capacity: Small 30cc, 30cc, 60cc",
    "Shape: Straight Cylindrical Wide-Mouth Tablet Container",
    "Shape Description: Cylindrical body with straight vertical walls",
    "Flat Base: Stable standing design",
    "Wide-Mouth Threaded Neck: Easy filling and dispensing of tablets and capsules",
    "Short Neck Profile: Integrated smoothly with the body",
    "Shoulder Type: Rounded shoulder transition",
    "Closure Type: Screw-cap closure with ribbed cap compatibility",
    "Bottle Colour: White and custom colors available",
    "Bottle Material: High Density Polyethylene (HDPE)",
    "Cap Colour: Any Color",
    "Cap Material: Polypropylene (PP)",
  ],

  applications: [
    "Packaging of pharmaceutical tablets",
    "Storage of capsules and soft gels",
    "Packaging of nutraceutical supplements",
    "Ayurvedic and herbal medicines",
    "Vitamin and mineral tablets",
    "Veterinary tablets and supplements",
    "Powdered health supplements (small quantities)",
    "Sample medicine packaging",
    "Food-grade nutraceutical pellets",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Nutraceutical & Dietary Supplement Industry",
    "Ayurvedic & Herbal Medicine Industry",
    "Veterinary Healthcare Industry",
    "Biotechnology & Laboratory Industry",
    "Healthcare & Medical Supply Industry",
    "Food Supplement Manufacturing",
  ],

  features: [
    "Wide-Mouth Design – Ensures easy filling, dispensing, and tablet retrieval",
    "Durable HDPE Construction – Provides excellent strength and long-lasting performance",
    "Lightweight Yet Sturdy – Ideal for efficient handling, storage, and transportation",
    "Secure Screw-Thread Neck – Allows tight sealing with compatible screw caps",
    "Moisture-Resistant Packaging – Helps protect tablets and capsules from humidity",
    "Chemical-Resistant Material – Suitable for pharmaceutical and nutraceutical formulations",
    "Smooth Surface Finish – Perfect for high-quality labeling and printing",
    "Stable Flat Base – Ensures excellent standing stability during filling and storage",
    "Compact Cylindrical Profile – Optimizes shelf space and carton packing efficiency",
    "Tamper-Evident Closure Compatibility – Supports induction seal or TE caps for product safety",
    "Food-Grade Material Options – Suitable for dietary supplements and nutraceutical products",
    "Multiple Capacity Options – Available in various volumes to suit different packaging needs",
    "Ergonomic Grip Design – Easy to handle for both manufacturers and end users",
  ],

  sizes: [
    "Small 30cc",
    "30cc",
    "60cc",
  ],
},
{
  id: 17,
  name: "Applicator for Piles",
  rating: 4.9,
  reviews: 38,

  description:
    "A precision-designed rectal applicator featuring a smooth tapered nozzle with a side slit for controlled and hygienic delivery of medicated creams and ointments. It ensures easy attachment to tubes, leak-proof usage, and comfortable application, making it ideal for pharmaceutical, Ayurvedic, healthcare, and veterinary purposes. Manufactured from high-quality Polypropylene (PP), the applicator provides safe, reliable, and convenient medication delivery.",

  images: [
    { src: "/pilesApplicator.png", alt: "Applicator for Piles Front View" },
   
  ],

  specs: [
    "Long tapered conical nozzle with side slit opening and screw base",
    "White Colour",
    "Polypropylene (PP) Material",
    "Smooth rounded tip design",
    "Protective cap included",
    "Measurement markings available",
  ],

  applications: [
    "Rectal application of ointments and creams",
    "Treatment of piles (hemorrhoids)",
    "Fissure and anal irritation relief",
    "Targeted internal medication delivery",
    "Ayurvedic medicinal applications",
    "Healthcare and hospital use",
    "Veterinary medication application",
  ],

  industryApplications: [
    "Pharmaceutical Industry",
    "Ayurvedic Medicine Products",
    "Healthcare & Hospitals",
    "Personal Care Industry",
    "Veterinary Industry",
  ],

  features: [
    "Smooth tapered tip for easy insertion",
    "Side slit for controlled dispensing",
    "Leak-proof screw fit",
    "Hygienic protective cap",
    "Durable medical-grade plastic construction",
    "Reusable or disposable options available",
    "Comfortable and safe application",
    "Lightweight and easy to handle",
    "Secure attachment to cream and ointment tubes",
    "Suitable for professional healthcare use",
  ],

  sizes: [
    "Standard Size",
  ],
},
{
  id: 18,
  name: "Talcum Powder Bottles",
  slug: "talcum-powder-bottles",

  variants: [
    {
      slug: "10gms-flat-talcum-powder-bottle",

      name: "10gms Flat Talcum Powder Bottle",
      rating: 4.8,
      reviews: 36,

      description:
        "Our 10gms Flat Talcum Powder Bottle is manufactured using premium-grade HDPE material and designed for safe, hygienic, and controlled dispensing of medicinal and personal care powders. The flat-profile bottle offers easy handling, efficient storage, and attractive shelf presentation. Combined with a secure screw cap and inner plug, it protects contents from moisture and contamination while ensuring convenient daily usage.",

      images: [
        { src: "/talcumBottle10g_1.png", alt: "10g Flat Talcum Powder Bottle" },
      
      ],

      specs: [
        "Capacity: 10gms",
        "Shape: Flat",
        "Bottle Colour: Milky White",
        "Bottle Material: High Density Polyethylene (HDPE)",
        "Cap Colours: White, Blue, Brown, Red",
        "Cap Material: Polypropylene (PP)",
        "Inner Plug Material: Low Density Polyethylene (LDPE)",
      ],

      applications: [
        "Antiseptic powder packaging",
        "Disinfectant powder packaging",
        "Burn and wound care powders",
        "Antifungal powders",
        "Veterinary powder formulations",
        "Medicinal dusting powders",
      ],

      industryApplications: [
        "Pharmaceutical Industry",
        "Cosmetic Industry",
        "Healthcare & Medicine Industry",
        "Veterinary Industry",
        "Dermatological Manufacturing",
        "Ayurvedic Industry",
      ],

      features: [
        "Dimensionally accurate design",
        "Crack-resistant construction",
        "Food-grade raw material",
        "Leak-proof packaging",
        "Fine surface finish",
        "Moisture-resistant body",
        "Airtight cap closure",
        "Ergonomic bottle design",
        "Controlled powder dispensing",
        "Wide neck for filling",
        "Good labeling area",
        "Shrink sleeve option available",
      ],

      sizes: ["10 gms"],
    },

    {
      slug: "75gms-triangular-talcum-powder-bottle",

      name: "75gms Triangular Talcum Powder Bottle",
      rating: 4.9,
      reviews: 42,

      description:
        "The 75gms Triangular Talcum Powder Bottle is a premium HDPE packaging solution designed for medicinal, cosmetic, and personal care powder products. Its unique triangular shape provides enhanced shelf visibility, comfortable handling, and effective branding opportunities. Equipped with a secure screw cap and inner plug, the bottle ensures product freshness, safety, and controlled dispensing.",

      images: [
        { src: "/talcumBottle75g_1.png", alt: "75g Triangular Talcum Powder Bottle" },
      ],

      specs: [
        "Capacity: 75gms",
        "Shape: Triangular",
        "Bottle Colour: Milky White",
        "Bottle Material: High Density Polyethylene (HDPE)",
        "Cap Colours: Blue, Green, Red, Orange",
        "Cap Material: Polypropylene (PP)",
        "Inner Plug Material: Low Density Polyethylene (LDPE)",
      ],

      applications: [
        "Antiseptic powders",
        "Antifungal powders",
        "Skin irritation treatment powders",
        "Sweat rash powders",
        "Veterinary powders",
        "Medicinal dusting powders",
      ],

      industryApplications: [
        "Pharmaceutical Industry",
        "Cosmetic Industry",
        "Healthcare & Medicine Industry",
        "Veterinary Industry",
        "Dermatological Manufacturing",
        "Personal Care Industry",
        "Ayurvedic Industry",
      ],

      features: [
        "Dimensionally accurate design",
        "Crack-resistant construction",
        "Food-grade raw material",
        "Leak-proof packaging",
        "Fine surface finish",
        "Moisture-resistant body",
        "Airtight cap closure",
        "Ergonomic bottle design",
        "Controlled powder dispensing",
        "Wide neck for filling",
        "Large labeling area",
        "Shrink sleeve option available",
      ],

      sizes: ["75 gms"],
    },
  ],
}
]

export default products