import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const [hoveredMenu, setHoveredMenu] = useState(null);
 const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);

  if (isDropdownOpen) {
    setIsMobileJarsOpen(false);
    setHoveredMenu(null);
  }
};


  useEffect(() => {
    const handleClickOutside = (event) => {
     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  setIsDropdownOpen(false);
  setHoveredMenu(null);
}
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


 const categories = [
  { name: "Pharma Dry syrup Bottles", path: "/products/1" },

  {
    name: "Measuring Spoons",
    isParent: true,
    submenu: [
      {
        name: "Measuring Hollow Spoon",
        path: "/products/2/measuring-hollow-spoon",
      },
      {
        name: "Measuring Double Head Spoon",
        path: "/products/2/measuring-double-head-spoon",
      },
    ],
  },

  { name: "Lotion Bottles", path: "/products/3" },

  { name: "Hand wash Bottles", path: "/products/4" },

  {
    name: "Eye-Ear Dropper Bottle",
    isParent: true,
    submenu: [
      {
        name: "30ml Round Ear-Eye Drop / Lotion Bottle",
        path: "/products/5/30ml-round",
      },
      {
        name: "15ml Oval Ear-Eye Drop / Lotion Bottle",
        path: "/products/5/15ml-oval",
      },
      {
        name: "20ml Oval Ear-Eye Dropper / Lotion Bottle",
        path: "/products/5/20ml-oval",
      },
      {
        name: "20ml Oval Flip-Top Dropper Bottle",
        path: "/products/5/20ml-flip-top",
      },
      {
        name: "50ml Oval Ear-Eye Dropper / Lotion Bottle",
        path: "/products/5/50ml-oval",
      },
    ],
  },

  { name: "Flip-off Seals", path: "/products/6" },

  { name: "RoPP Caps for Pharma PET Bottles", path: "/products/7" },

  {
    name: "Toilet/Floor Cleaner",
    isParent: true,
    submenu: [
      {
        name: "Floor Cleaner / Angled Neck Floor Cleaner Bottle",
        path: "/products/8/floor-cleaner",
      },
      {
        name: "Toilet Cleaner / Angled Neck Toilet Cleaner Bottle",
        path: "/products/8/angled-neck",
      },
    ],
  },

  {
    name: "Jars",
    isParent: true,
    submenu: [
      { name: "Cream Jars", path: "/products/9" },
      { name: "Fancy Jar for Protein Powder", path: "/products/16" },
      { name: "Flip Type Cap Protein Jar", path: "/products/17" },
      { name: "Gattu Jar", path: "/products/18" },
      { name: "HDPE Cream Jar", path: "/products/19" },
      { name: "HDPE Energy Drink / Isabgol Jar", path: "/products/20" },
      { name: "Long Protein Powder Jar", path: "/products/21" },
      { name: "Madetarian Jar", path: "/products/22" },
      { name: "Pediasure Type Protein Powder Jar Set", path: "/products/23" },
      { name: "Protein Jar with Silver Leaf", path: "/products/24" },
      { name: "Protein Powder Jar Set", path: "/products/25" },
      { name: "Sleeve Type Protein Jar Set", path: "/products/26" },
    ],
  },

  { name: "Shampoo Bottles", path: "/products/10" },

  {
    name: "Oil Bottles",
    isParent: true,
    submenu: [
      {
        name: "60ml HDPE Flat Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-1",
      },
      {
        name: "60ml HDPE Oval Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-2",
      },
      {
        name: "60ml HDPE Round Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-3",
      },
      {
        name: "60ml HDPE Ujjala Type Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-4",
      },
      {
        name: "100ml/19mm Banana Shape Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-5",
      },
      {
        name: "100ml/19mm Liquid Bottles (Ujjala Type)",
        path: "/products/11/oil-6",
      },
      {
        name: "100ml/24mm Oil/Lotion/Shampoo Bottles (V Wash Type)",
        path: "/products/11/oil-7",
      },
      {
        name: "100ml/24mm Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-8",
      },
     
      {
        name: "Oil Lotion Shampoo Bottles",
        path: "/products/11/oil-9",
      },
      {
        name: "30ml Lintiment Bottle",
        path: "/products/11/oil-10",
      },
      {
        name: "50ml HDPE Flat Oil/Lotion Bottles",
        path: "/products/11/oil-11",
      },
        {
        name: "50ml HDPE Round Oil/Lotion Bottles",
        path: "/products/11/oil-12",
      },
      {
        name: "100ml/19mm Flat Liquid Bottles (Ujjala Type)",
        path: "/products/11/oil-13",
      },
      {
        name: "100ml/19mm Flat Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-14",
      },
       {
        name: "100ml/19mm Oil/Lotion/Shampoo Oval Bottles",
        path: "/products/11/oil-15",
      },
      {
        name: "100ml/19mm Oil/Lotion/Shampoo Round Bottles",
        path: "/products/11/oil-16",
      },
      {
        name: "100ml/19mm Classic Calamine Style Oil/Lotion/Shampoo Bottles",
        path: "/products/11/oil-17",
      },
    
      
      
    ],
  },

  { name: "Floor cleaner bottles", path: "/products/12" },

  {
    name: "Pharmaceutical Rubber Dropper Assembly",
    path: "/products/13",
  },

  {
    name: "Stopper CAM Lock fittings for Cold rooms PUF Panels",
    path: "/products/14",
  },

  {
    name: "Churan Bottle Set",
    path: "/products/15",
  },
];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 font-medium transition-colors duration-200">
              About Us
            </Link>

            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 font-medium transition-colors duration-200"
              >
                Comprehensive Product Range
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 w-135 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-visible">
                  {categories.map((cat, index) => {
                    if (cat.isParent) {
                      return (
                        <div
                          key={index}
                          className="relative"
                          onMouseEnter={() => setHoveredMenu(cat.name)}
onMouseLeave={() => setHoveredMenu(null)}
                        >
                          <div className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-semibold cursor-pointer select-none">
                            <span>{cat.name}</span>
                            <span className="text-gray-400 font-normal">→</span>
                          </div>

                          <div
                            className={`absolute left-full top-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1 transition-opacity duration-200 ${hoveredMenu === cat.name? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                              }`}
                          >
                            {cat.submenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.path}
                                onClick={() => {
                                  setIsDropdownOpen(false);
                                    setHoveredMenu(null);
                                }}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-semibold transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }

                    return cat.disabled ? (
                      <div
                        key={index}
                        className="px-4 py-2 text-gray-600 cursor-not-allowed text-sm font-semibold"
                      >
                        {cat.name}
                      </div>
                    ) : (
                      <Link
                        key={index}
                        to={cat.path}
                        onClick={() => setIsDropdownOpen(false)}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-semibold"
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src='/logo.png' alt="Company Logo" className="w-40 object-contain" />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/quality" className="text-gray-700 font-medium transition-colors duration-200">
              Quality Assurance
            </Link>
            <Link to="/values" className="text-gray-700 font-medium transition-colors duration-200">
              Care/Key/Our Belief Values
            </Link>
            <Link
              to="/contact"
              className="bg-[#2592AD] text-white px-6 py-2 rounded-sm font-medium transition-colors duration-200 inline-block"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                About Us
              </Link>

              {/* Dropdown for Mobile */}
              <div>
                <button
                  onClick={toggleDropdown}
                  className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                >
                  Comprehensive Product Range
                  <ChevronDown className="h-4 w-4" />
                </button>

                {isDropdownOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {categories.map((cat, index) => {
                      if (cat.isParent) {
                        return (
                          <div key={index}>
                            <button
                             onClick={() =>
  setMobileOpenMenu(
    mobileOpenMenu === cat.name ? null : cat.name
  )
}
                              className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-semibold"
                            >
                              <span>{cat.name}</span>
                              <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${mobileOpenMenu === cat.name ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileOpenMenu === cat.name && (
                              <div className="ml-4 mt-1 space-y-1">
                                {cat.submenu.map((subItem, idx) => (
                                  <Link
                                    key={idx}
                                    to={subItem.path}
                                    onClick={() => {
                                      setIsDropdownOpen(false);
                                      setIsMenuOpen(false);
                                    }}
                                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md text-sm pl-6"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      }

                      return cat.disabled ? (
                        <div
                          key={index}
                          className="px-3 py-2 text-gray-400 cursor-not-allowed text-sm"
                        >
                          {cat.name}
                        </div>
                      ) : (
                        <Link
                          key={index}
                          to={cat.path}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm"
                        >
                          {cat.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/quality"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                Quality Assurance
              </Link>
              <Link
                to="/values"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
              >
                Care/Key/Our Belief Values
              </Link>
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-[#2592AD] text-white px-6 py-2 rounded-sm font-medium transition-colors duration-200 inline-block"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
