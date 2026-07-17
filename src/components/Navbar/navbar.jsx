import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeParent, setActiveParent] = useState(null);
  const [submenuCoords, setSubmenuCoords] = useState({ top: 0, left: 0, anchorBottom: false });
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

  const dropdownRef = useRef(null);
  const itemRefs = useRef({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setActiveParent(null);
    }
  };

  // Close desktop dropdowns on click outside (Fixed for Mobile responsive layout)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 1024) return;

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setActiveParent(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Controls desktop right-side flyout position & handles bottom collision
  const handleParentHover = (catName) => {
    if (!catName) {
      setActiveParent(null);
      return;
    }
    
    setActiveParent(catName);
    const itemEl = itemRefs.current[catName];
    if (itemEl) {
      const rect = itemEl.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const expectedBoxHeight = 320; 
      
      const hitsBottomLimit = rect.top + expectedBoxHeight > windowHeight;

      setSubmenuCoords({
        top: hitsBottomLimit ? rect.bottom : rect.top,
        left: rect.right + 4,
        anchorBottom: hitsBottomLimit
      });
    }
  };

  const categories = [
    { name: "Pharma Dry syrup Bottles", path: "/products/1" },
    {
      name: "Measuring Spoons",
      isParent: true,
      submenu: [
        { name: "Measuring Hollow Spoon", path: "/products/2/measuring-hollow-spoon" },
        { name: "Measuring Double Head Spoon", path: "/products/2/measuring-double-head-spoon" },
      ],
    },
    { name: "Lotion Bottles", path: "/products/3" },
    { name: "Hand wash Bottles", path: "/products/4" },
    {
      name: "Eye-Ear Dropper Bottle",
      isParent: true,
      submenu: [
        { name: "30ml Round Ear-Eye Drop / Lotion Bottle", path: "/products/5/30ml-round" },
        { name: "15ml Oval Ear-Eye Drop / Lotion Bottle", path: "/products/5/15ml-oval" },
        { name: "20ml Oval Ear-Eye Dropper / Lotion Bottle", path: "/products/5/20ml-oval" },
        { name: "20ml Oval Flip-Top Dropper Bottle", path: "/products/5/20ml-flip-top" },
        { name: "50ml Oval Ear-Eye Dropper / Lotion Bottle", path: "/products/5/50ml-oval" },
      ],
    },
    { name: "Flip-off Seals", path: "/products/6" },
    { name: "RoPP Caps for Pharma PET Bottles", path: "/products/7" },
    {
      name: "Toilet/Floor Cleaner",
      isParent: true,
      submenu: [
        { name: "Floor Cleaner / Angled Neck Floor Cleaner Bottle", path: "/products/8/floor-cleaner" },
        { name: "Toilet Cleaner / Angled Neck Toilet Cleaner Bottle", path: "/products/8/angled-neck" },
      ],
    },
    {
      name: "Jars",
      isParent: true,
      submenu: [
        { name: "HDPE Cream Jar", path: "/products/9/cream-jar" },
        { name: "HDPE Fancy Jar", path: "/products/9/fancy-jar" },
        { name: "Flip Type Cap Protein Powder Jar", path: "/products/9/flip-type-cap-protein-powder-jar" },
        { name: "Gattu Jar", path: "/products/9/gattu-jar" },
        { name: "HDPE Energy Drink / Isabgol Jar", path: "/products/9/hdpe-energy-drink-isabgol-jar" },
        { name: "Long Protein Powder Jar", path: "/products/9/long-protein-powder-jar" },
        { name: "Mediterranean Jar", path: "/products/9/mediterranean-jar" },
        { name: "Pediasure Type Protein Powder Jar", path: "/products/9/pediasure-type-protein-powder-jar" },
        { name: "Protein Jar with Silver Leaf", path: "/products/9/protein-jar-with-silver-leaf" },
        { name: "Protein Powder Jar Set", path: "/products/9/protein-powder-jar-set" },
        { name: "Sleeve Type Protein Jar Set", path: "/products/9/sleeve-type-protein-jar-set" },
      ],
    },
    { name: "Shampoo Bottles", path: "/products/10" },
    {
      name: "Oil Bottles",
      isParent: true,
      submenu: [
        { name: "60ml HDPE Flat Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-1" },
        { name: "60ml HDPE Oval Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-2" },
        { name: "60ml HDPE Round Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-3" },
        { name: "60ml HDPE Ujjala Type Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-4" },
        { name: "100ml/19mm Banana Shape Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-5" },
        { name: "100ml/19mm Liquid Bottles (Ujjala Type)", path: "/products/11/oil-6" },
        { name: "100ml/24mm Oil/Lotion/Shampoo Bottles (V Wash Type)", path: "/products/11/oil-7" },
        { name: "100ml/24mm Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-8" },
        { name: "Oil Lotion Shampoo Bottles", path: "/products/11/oil-9" },
        { name: "30ml Lintiment Bottle", path: "/products/11/oil-10" },
        { name: "50ml HDPE Flat Oil/Lotion Bottles", path: "/products/11/oil-11" },
        { name: "50ml HDPE Round Oil/Lotion Bottles", path: "/products/11/oil-12" },
        { name: "100ml/19mm Flat Liquid Bottles (Ujjala Type)", path: "/products/11/oil-13" },
        { name: "100ml/19mm Flat Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-14" },
        { name: "100ml/19mm Oil/Lotion/Shampoo Oval Bottles", path: "/products/11/oil-15" },
        { name: "100ml/19mm Oil/Lotion/Shampoo Round Bottles", path: "/products/11/oil-16" },
        { name: "100ml/19mm Classic Calamine Style Oil/Lotion/Shampoo Bottles", path: "/products/11/oil-17" },
      ],
    },
    { name: "Floor cleaner bottles", path: "/products/12" },
    { name: "Pharmaceutical Rubber Dropper Assembly", path: "/products/13" },
    { name: "Stopper CAM Lock fittings for Cold rooms PUF Panels", path: "/products/14" },
    { name: "Churan Bottle Set", path: "/products/15" },
  ];

  const currentActiveData = categories.find(cat => cat.name === activeParent);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">

          {/* Left Desktop Menu: Scaled down text and layout gaps to accommodate medium monitors perfectly */}
          <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
            <Link to="/" className="text-gray-700 font-medium hover:text-[#2592AD] transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 font-medium hover:text-[#2592AD] transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap">
              About Us
            </Link>

            {/* Desktop Dropdown Trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`flex items-center font-medium transition-colors duration-200 focus:outline-none xl:text-base lg:text-sm whitespace-nowrap ${
                  isDropdownOpen ? 'text-[#2592AD]' : 'text-gray-700 hover:text-[#2592AD]'
                }`}
              >
                Comprehensive Product Range
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Box 1: Desktop Main List Dropdown Container */}
              {isDropdownOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 py-2 max-h-[65vh] overflow-y-auto custom-scrollbar"
                  onMouseLeave={() => handleParentHover(null)}
                >
                  {categories.map((cat, index) => {
                    if (cat.isParent) {
                      return (
                        <div
                          key={index}
                          ref={el => itemRefs.current[cat.name] = el}
                          onMouseEnter={() => handleParentHover(cat.name)}
                          className={`flex justify-between items-center px-4 py-2.5 text-sm font-semibold cursor-pointer select-none transition-colors ${
                            activeParent === cat.name ? 'bg-slate-50 text-[#2592AD]' : 'text-gray-700 hover:bg-slate-50'
                          }`}
                        >
                          <span className="truncate pr-2">{cat.name}</span>
                          <ChevronRight className="h-4 w-4 text-gray-400 shrink-0" />
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={index}
                        to={cat.path}
                        onClick={() => setIsDropdownOpen(false)}
                        onMouseEnter={() => handleParentHover(null)}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-slate-50 hover:text-[#2592AD] text-sm font-semibold transition-colors truncate"
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </div>
              )}

              {/* Box 2: Detached Floating Window (Desktop Only) */}
              {isDropdownOpen && activeParent && currentActiveData?.submenu && (
                <div
                  style={{
                    position: 'fixed',
                    top: submenuCoords.anchorBottom ? 'auto' : `${submenuCoords.top}px`,
                    bottom: submenuCoords.anchorBottom ? `${window.innerHeight - submenuCoords.top}px` : 'auto',
                    left: `${submenuCoords.left}px`,
                  }}
                  className="w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-[60] py-2 max-h-[45vh] overflow-y-auto custom-scrollbar transition-all duration-75"
                  onMouseEnter={() => handleParentHover(activeParent)}
                  onMouseLeave={() => handleParentHover(null)}
                >
                  {currentActiveData.submenu.map((subItem, idx) => (
                    <Link
                      key={idx}
                      to={subItem.path}
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setActiveParent(null);
                      }}
                      className="block px-4 py-2 text-gray-700 hover:bg-slate-50 hover:text-[#2592AD] text-xs font-semibold transition-colors duration-150"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Logo Identity: Handles flexible shrinking on narrow layouts */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Link to="/">
              <img src='/logo.png' alt="Company Logo" className="w-32 sm:w-40 max-w-full object-contain" />
            </Link>
          </div>

          {/* Right Desktop Nav Menu */}
          <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
            <Link to="/quality" className="text-gray-700 font-medium hover:text-[#2592AD] transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap">
              Quality Assurance
            </Link>
            <Link to="/values" className="text-gray-700 font-medium hover:text-[#2592AD] transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap">
              Our Belief Values
            </Link>
            <Link
              to="/contact"
              className="bg-[#2592AD] text-white xl:px-6 lg:px-4 py-2 rounded shadow-sm font-medium hover:bg-[#1f7c94] transition-all duration-200 inline-block xl:text-sm lg:text-xs whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle Button: Visually placed on the absolute left on mobile screens */}
          <div className="lg:hidden order-first">
            <button onClick={toggleMenu} className="text-gray-700 p-2 hover:bg-gray-100 rounded-md focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Context Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-inner max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">
              Home
            </Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">
              About Us
            </Link>

            {/* Mobile Product Category Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium text-left"
              >
                <span>Comprehensive Product Range</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="ml-1 mt-1 pl-1 border-l border-gray-100 space-y-1 max-h-[55vh] overflow-y-auto custom-scrollbar bg-slate-50/50 p-1 rounded-md">
                  {categories.map((cat, index) => {
                    if (cat.isParent) {
                      const isSubOpen = mobileOpenMenu === cat.name;
                      return (
                        <div key={index} className="w-full">
                          <button
                            onClick={() => setMobileOpenMenu(isSubOpen ? null : cat.name)}
                            className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-semibold text-left transition-colors ${
                              isSubOpen ? 'text-[#2592AD] bg-white shadow-xs' : 'text-gray-700'
                            }`}
                          >
                            <span className="block truncate pr-4 text-xs sm:text-sm">{cat.name}</span>
                            <ChevronDown className={`h-4 w-4 shrink-0 transition-transform text-gray-400 ${isSubOpen ? 'rotate-180' : '-rotate-90'}`} />
                          </button>
                          
                          {/* Subsections render sequentially in ONE main nested list stream */}
                          {isSubOpen && (
                            <div className="ml-2 mt-1 pl-2 border-l border-gray-200 space-y-1">
                              {cat.submenu.map((subItem, idx) => (
                                <Link
                                  key={idx}
                                  to={subItem.path}
                                  onClick={() => {
                                    setIsDropdownOpen(false);
                                    setIsMenuOpen(false);
                                  }}
                                  className="block px-3 py-2 text-gray-600 hover:text-[#2592AD] text-[11px] sm:text-xs font-semibold leading-normal break-words"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={index}
                        to={cat.path}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                        className="block px-3 py-2 text-gray-700 hover:bg-white rounded-md text-xs sm:text-sm font-semibold truncate"
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link to="/quality" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">
              Quality Assurance
            </Link>
            <Link to="/values" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">
              Our Belief Values
            </Link>
            
            <div className="px-3 pt-3">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center bg-[#2592AD] text-white px-6 py-2 rounded font-medium transition-colors duration-200 block text-sm shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Scrollbar Customization Layout Hook */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;