import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isJarsHovered, setIsJarsHovered] = useState(false);
  const [isMobileJarsOpen, setIsMobileJarsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (isDropdownOpen) {
      setIsJarsHovered(false);
      setIsMobileJarsOpen(false);
    }
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsJarsHovered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const categories = [
    { name: "Pharma Dry syrup Bottles", path: "/products/1" },
    { name: "Measuring Spoons", path: "/products/2" },
    { name: "Lotion Bottles", path: "/products/3" },
    { name: "Hand wash Bottles", path: "/products/4" },
    { name: "Eye-Ear Dropper Bottle", path: "/products/5" },
    { name: "Flip-off Seals", path: "/products/6" },
    { name: "RoPP Caps for Pharma PET Bottles", path: "/products/7" },
    { name: "ToiletCleaner", path: "/products/8" },
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
        { name: "Sleeve Type Protein Jar Set", path: "/products/26" }
      ]
    },
    { name: "Shampoo Bottles", path: "/products/10" },
    { name: "Oil Bottles", path: "/products/11" },
    { name: "Floor cleaner bottles", path: "/products/12" },
    { name: "Pharmaceutical Rubber Dropper Assembly", path: "/products/13" },
    { name: "Stopper CAM Lock fittings for Cold rooms PUF Panels", path: "/products/14" },
    { name: "Churan Bottle Set", path: "/products/15" },
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
                          onMouseEnter={() => setIsJarsHovered(true)}
                          onMouseLeave={() => setIsJarsHovered(false)}
                        >
                          <div className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm font-semibold cursor-pointer select-none">
                            <span>{cat.name}</span>
                            <span className="text-gray-400 font-normal">→</span>
                          </div>

                          <div
                            className={`absolute left-full top-0 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50 py-1 transition-opacity duration-200 ${isJarsHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                              }`}
                          >
                            {cat.submenu.map((subItem, idx) => (
                              <Link
                                key={idx}
                                to={subItem.path}
                                onClick={() => {
                                  setIsDropdownOpen(false);
                                  setIsJarsHovered(false);
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
                              onClick={() => setIsMobileJarsOpen(!isMobileJarsOpen)}
                              className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md text-sm font-semibold"
                            >
                              <span>{cat.name}</span>
                              <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isMobileJarsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isMobileJarsOpen && (
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
