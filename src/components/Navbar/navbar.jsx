import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeParent, setActiveParent] = useState(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);

  const location = useLocation();

  const dropdownRef = useRef(null);
  const dropdownCloseTimer = useRef(null);

  const cancelDropdownClose = () => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };

  const closeProductDropdown = () => {
    cancelDropdownClose();
    setIsDropdownOpen(false);
    setActiveParent(null);
  };

  const scheduleDropdownClose = () => {
    cancelDropdownClose();
    dropdownCloseTimer.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
      setActiveParent(null);
      dropdownCloseTimer.current = null;
    }, 350);
  };

  // Active page indicator helpers
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const isProductActive = () => location.pathname.startsWith('/products');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setActiveParent(null);
  };

  // Close desktop dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 1024) return;

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeProductDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      cancelDropdownClose();
    };
  }, []);

  const categories = [
   {
  name: "Pharma Dry Syrup Bottles",
  isParent: true,
  submenu: [
    {
      name: "Dry Scrup bottle Group",
      path: "/products/1/group",
    },

    {
      name: "10ml/25mm Dry Syrup Bottle",
      path: "/products/1/10ml-25mm",
    },
    {
      name: "15ml/25mm Dry Syrup Bottle",
      path: "/products/1/15ml-25mm",
    },
    {
      name: "30ml/25mm Dry Syrup Bottle",
      path: "/products/1/30ml-25mm",
    },
    {
      name: "30ml/28mm Dry Syrup Bottle",
      path: "/products/1/30ml-28mm",
    },
    {
      name: "50ml/28mm Dry Syrup Bottle",
      path: "/products/1/50ml-28mm",
    },
    {
      name: "60ml/25mm Dry Syrup Bottle",
      path: "/products/1/60ml-25mm",
    },
    {
      name: "60ml/28mm Dry Syrup Bottle",
      path: "/products/1/60ml-28mm",
    },
    {
      name: "100ml/25mm Dry Syrup Bottle",
      path: "/products/1/100ml-25mm",
    },
  ],
},

{
  name: "Pharma PET Bottles",
  isParent: true,
  submenu: [
    {
      name: "10ml Pharma PET Bottle - 22mm",
      path: "/products/55/10ml-22mm",
    },
    {
      name: "15ml Pharma PET Bottle - 22mm",
      path: "/products/55/15ml-22mm",
    },
    {
      name: "15ml Pharma PET Bottle - 25mm",
      path: "/products/55/15ml-25mm",
    },
    {
      name: "30ml Pharma PET Bottle - 25mm",
      path: "/products/55/30ml-25mm",
    },
    {
      name: "60ml Pharma PET Bottle - 22mm",
      path: "/products/55/60ml-22mm",
    },
    {
      name: "60ml Pharma PET Bottle - 25mm",
      path: "/products/55/60ml-25mm",
    },
    {
      name: "100ml Pharma PET Bottle - 22mm",
      path: "/products/55/100ml-22mm",
    },
    {
      name: "100ml Pharma PET Bottle - 25mm",
      path: "/products/55/100ml-25mm",
    },
    {
      name: "120ml Pharma PET Bottle - 25mm",
      path: "/products/55/120ml-25mm",
    },
    {
      name: "150ml Pharma PET Bottle - 25mm",
      path: "/products/55/150ml-25mm",
    },
    {
      name: "170ml Pharma PET Bottle - 25mm",
      path: "/products/55/170ml-25mm",
    },
    {
      name: "200ml Pharma PET Bottle - 25mm",
      path: "/products/55/200ml-25mm",
    },
    {
      name: "220ml Pharma PET Bottle - 25mm",
      path: "/products/55/220ml-25mm",
    },
    {
      name: "225ml Pharma PET Bottle - 25mm",
      path: "/products/55/225ml-25mm",
    },
    {
      name: "300ml Pharma PET Bottle - 25mm",
      path: "/products/55/300ml-25mm",
    },
    {
      name: "450/500ml Pharma PET Bottle - 25mm",
      path: "/products/55/450-500ml-25mm",
    },
  ],
},


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
      name: "Floor Cleaner Bottles",
      path: "/products/12"
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
    // { 
    //   name: "Floor cleaner bottles",
    //   path: "/products/12" 
    // },
    { 
      name: "Pharmaceutical Rubber Dropper Assembly",
      path: "/products/13"
    },
    { 
      name: "Stopper CAM Lock fittings for Cold rooms PUF Panels",
      path: "/products/14"
    },
    { 
      name: "Churan Bottle Set",
      path: "/products/15" 
    },
    {
      name: "Tablet Containers",
      path: "/products/16",
    },
    {
      name:"Applicator For Piles",
      path:"/products/17"
    },
    {
      name: "Talcum Powder Bottles",
      path: "/products/18",
      isParent: true,
      submenu: [
        {
          name: "10gms Flat Talcum Powder Bottle",
          path: "/products/18/10gms-flat-talcum-powder-bottle",
        },
        {
          name: "75gms Triangular Talcum Powder Bottle",
          path: "/products/18/75gms-triangular-talcum-powder-bottle",
        },
      ],
    }
  ];

  const currentActiveData = categories.find(cat => cat.name === activeParent && cat.isParent);

  return (
    <nav className="sticky top-0 z-[100] border-b border-[#c5dfe7] bg-[#e8f3f5] shadow-sm">
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={dropdownRef}
        onMouseEnter={cancelDropdownClose}
        onMouseLeave={() => {
          if (window.innerWidth >= 1024) {
            scheduleDropdownClose();
          }
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            closeProductDropdown();
          }
        }}
      >
        <div className="flex justify-between items-center h-16 gap-4">

          {/* Left Desktop Menu */}
          <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap ${
                isActive('/') ? 'text-[#2592AD] font-semibold' : 'text-gray-700 hover:text-[#2592AD]'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap ${
                isActive('/about') ? 'text-[#2592AD] font-semibold' : 'text-gray-700 hover:text-[#2592AD]'
              }`}
            >
              About Us
            </Link>

            {/* Desktop Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(true)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onFocus={() => setIsDropdownOpen(true)}
                aria-expanded={isDropdownOpen}
                aria-controls="product-mega-menu"
                className={`flex items-center font-medium transition-colors duration-200 focus:outline-none xl:text-base lg:text-sm whitespace-nowrap ${
                  isProductActive() || isDropdownOpen ? 'text-[#2592AD] font-semibold' : 'text-gray-700 hover:text-[#2592AD]'
                }`}
              >
                Comprehensive Product Range
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

            </div>
          </div>

          {/* Logo Identity */}
          <div className="flex-shrink-0 lg:mx-0">
            <Link to="/">
              <img src='/logo.png' alt="Company Logo" className="w-32 sm:w-40 max-w-full object-contain" />
            </Link>
          </div>

          {/* Right Desktop Nav Menu */}
          <div className="hidden lg:flex items-center xl:space-x-8 lg:space-x-4">
            <Link 
              to="/quality" 
              className={`font-medium transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap ${
                isActive('/quality') ? 'text-[#2592AD] font-semibold' : 'text-gray-700 hover:text-[#2592AD]'
              }`}
            >
              Quality Assurance
            </Link>

            <Link 
              to="/values" 
              className={`font-medium transition-colors duration-200 xl:text-base lg:text-sm whitespace-nowrap ${
                isActive('/values') ? 'text-[#2592AD] font-semibold' : 'text-gray-700 hover:text-[#2592AD]'
              }`}
            >
              Our Belief Values
            </Link>

            <Link
              to="/contact"
              className={`xl:px-6 lg:px-4 py-2 rounded shadow-sm font-medium transition-all duration-200 inline-block xl:text-sm lg:text-xs whitespace-nowrap ${
                isActive('/contact') 
                  ? 'bg-[#1f7c94] text-white font-semibold' 
                  : 'bg-[#2592AD] text-white hover:bg-[#1f7c94]'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 p-2 hover:bg-[#e5efdd] rounded-md focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {/* Desktop product mega menu */}
        <div
          id="product-mega-menu"
          className="mega-menu-panel absolute left-4 top-full z-[101] overflow-hidden rounded-xl border border-[#c5dfe7] bg-[#e8f3f5] shadow-xl pointer-events-none lg:block hidden"
          style={{
            width: isDropdownOpen ? 'min(calc(100vw - 2rem), 78rem)' : '0px',
            maxHeight: isDropdownOpen ? 'min(72vh, 720px)' : '0px',
            opacity: isDropdownOpen ? 1 : 0,
            pointerEvents: isDropdownOpen ? 'auto' : 'none',
          }}
          aria-hidden={!isDropdownOpen}
          inert={!isDropdownOpen}
          onMouseEnter={cancelDropdownClose}
        >
          <div className="w-[min(calc(100vw_-_2rem),78rem)] max-h-[min(72vh,720px)] overflow-y-auto p-3 sm:p-4 custom-scrollbar">
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-1 md:grid-cols-3 lg:grid-cols-5">
              {categories.map((cat) => {
                const isSubActive = cat.isParent && cat.submenu.some((sub) => isActive(sub.path));
                const isSelected = activeParent === cat.name;
                const itemClassName = `flex min-h-11 w-full items-center justify-between gap-2 rounded-lg border px-2.5 py-2 text-left text-sm font-semibold transition-colors ${
                  isSelected || isSubActive
                    ? 'border-[#cbdcbe] bg-[#e5efdd] text-[#1f7c94]'
                    : 'border-transparent text-gray-700 hover:border-[#dce8d4] hover:bg-[#edf4e8] hover:text-[#1f7c94]'
                }`;

                if (cat.isParent) {
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      className={itemClassName}
                      onMouseEnter={() => {
                        if (!activeParent) setActiveParent(cat.name);
                      }}
                      onFocus={() => {
                        if (!activeParent) setActiveParent(cat.name);
                      }}
                      onClick={() => setActiveParent(cat.name)}
                      aria-expanded={isSelected}
                      aria-controls="product-mega-submenu"
                    >
                      <span>{cat.name}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isSelected ? 'rotate-180' : ''}`} />
                    </button>
                  );
                }

                return (
                  <Link
                    key={cat.name}
                    to={cat.path}
                    onClick={closeProductDropdown}
                    className={`${itemClassName} ${isActive(cat.path) ? 'border-[#cbdcbe] bg-[#e5efdd] text-[#1f7c94]' : ''}`}
                  >
                    <span>{cat.name}</span>
                  </Link>
                );
              })}
            </div>

            <div
              id="product-mega-submenu"
              className="mega-menu-submenu overflow-hidden"
              style={{
                maxHeight: currentActiveData ? 'min(42vh, 380px)' : '0px',
                opacity: currentActiveData ? 1 : 0,
                marginTop: currentActiveData ? '1rem' : '0px',
              }}
              aria-hidden={!currentActiveData}
            >
              {currentActiveData && (
                <section key={currentActiveData.name} className="mega-menu-content border-t border-[#dce8d4] pt-4">
                  <h3 className="mb-3 text-sm font-bold text-[#1f7c94]">{currentActiveData.name}</h3>
                  <div className="grid max-h-[min(38vh,340px)] grid-cols-2 gap-1 overflow-y-auto pr-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {currentActiveData.submenu.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setActiveParent(null);
                        }}
                        className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          isActive(subItem.path)
                            ? 'bg-[#e5efdd] text-[#1f7c94]'
                            : 'text-gray-700 hover:bg-[#edf4e8] hover:text-[#1f7c94]'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Context Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#c5dfe7] bg-[#e8f3f5] shadow-inner max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-3 py-2 rounded-md font-medium ${
                isActive('/') ? 'bg-[#2592AD]/10 text-[#2592AD] font-semibold' : 'text-gray-700 hover:bg-[#e5efdd]'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-3 py-2 rounded-md font-medium ${
                isActive('/about') ? 'bg-[#2592AD]/10 text-[#2592AD] font-semibold' : 'text-gray-700 hover:bg-[#e5efdd]'
              }`}
            >
              About Us
            </Link>

            {/* Mobile Product Category Dropdown */}
            <div>
              <button
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
                aria-controls="mobile-product-menu"
                className={`w-full flex justify-between items-center px-3 py-2 rounded-md font-medium text-left ${
                  isProductActive() ? 'text-[#2592AD] font-semibold' : 'text-gray-700 hover:bg-[#e5efdd]'
                }`}
              >
                <span>Comprehensive Product Range</span>
                <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <div
                id="mobile-product-menu"
                className="mobile-product-menu overflow-hidden"
                style={{
                  maxHeight: isDropdownOpen ? '55vh' : '0px',
                  opacity: isDropdownOpen ? 1 : 0,
                  marginTop: isDropdownOpen ? '0.25rem' : '0px',
                }}
                aria-hidden={!isDropdownOpen}
                inert={!isDropdownOpen}
              >
                <div className="ml-1 max-h-[55vh] space-y-1 overflow-y-auto rounded-md border border-[#c5dfe7] bg-[#e8f3f5] p-1 shadow-lg custom-scrollbar">
                  {categories.map((cat, index) => {
                    if (cat.isParent) {
                      const isSubOpen = mobileOpenMenu === cat.name;
                      const isSubActive = cat.submenu.some(sub => isActive(sub.path));
                      return (
                        <div key={index} className="w-full">
                          <button
                            onClick={() => setMobileOpenMenu(isSubOpen ? null : cat.name)}
                            className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-semibold text-left transition-colors ${
                              isSubOpen || isSubActive ? 'text-[#2592AD] bg-[#edf4e8] shadow-xs' : 'text-gray-700'
                            }`}
                          >
                            <span className="block truncate pr-4 text-xs sm:text-sm">{cat.name}</span>
                            <ChevronDown className={`h-4 w-4 shrink-0 transition-transform text-gray-400 ${isSubOpen ? 'rotate-180' : '-rotate-90'}`} />
                          </button>

                          <div
                            className="mobile-product-submenu overflow-hidden"
                            style={{
                              maxHeight: isSubOpen ? 'min(48vh, 360px)' : '0px',
                              opacity: isSubOpen ? 1 : 0,
                              marginTop: isSubOpen ? '0.25rem' : '0px',
                            }}
                            aria-hidden={!isSubOpen}
                            inert={!isSubOpen}
                          >
                            <div className="ml-2 max-h-[min(48vh,360px)] space-y-1 overflow-y-auto border-l border-gray-200 pl-2">
                              {cat.submenu.map((subItem, idx) => (
                                <Link
                                  key={idx}
                                  to={subItem.path}
                                  onClick={() => {
                                    setIsDropdownOpen(false);
                                    setIsMenuOpen(false);
                                  }}
                                  className={`block px-3 py-2 text-[11px] sm:text-xs font-semibold leading-normal break-words ${
                                    isActive(subItem.path)
                                      ? 'text-[#2592AD] font-bold bg-[#dcecf1] rounded'
                                      : 'text-gray-600 hover:text-[#2592AD]'
                                  }`}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
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
                        className={`block px-3 py-2 rounded-md text-xs sm:text-sm font-semibold truncate ${
                          isActive(cat.path)
                            ? 'text-[#2592AD] bg-[#edf4e8] font-bold shadow-xs'
                            : 'text-gray-700 hover:bg-[#e5efdd]'
                        }`}
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            <Link 
              to="/quality" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-3 py-2 rounded-md font-medium ${
                isActive('/quality') ? 'bg-[#2592AD]/10 text-[#2592AD] font-semibold' : 'text-gray-700 hover:bg-[#e5efdd]'
              }`}
            >
              Quality Assurance
            </Link>

            <Link 
              to="/values" 
              onClick={() => setIsMenuOpen(false)} 
              className={`block px-3 py-2 rounded-md font-medium ${
                isActive('/values') ? 'bg-[#2592AD]/10 text-[#2592AD] font-semibold' : 'text-gray-700 hover:bg-[#e5efdd]'
              }`}
            >
              Our Belief Values
            </Link>
            
            <div className="px-3 pt-3">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-center px-6 py-2 rounded font-medium transition-colors duration-200 block text-sm shadow-sm ${
                  isActive('/contact')
                    ? 'bg-[#1f7c94] text-white font-semibold'
                    : 'bg-[#2592AD] text-white'
                }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Scrollbar Customization Layout Hook */}
      <style>{`
        .mega-menu-panel {
          transition: width 480ms cubic-bezier(0.22, 1, 0.36, 1), max-height 500ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease;
        }
        .mega-menu-submenu {
          transition: max-height 320ms cubic-bezier(0.22, 1, 0.36, 1), margin-top 320ms ease, opacity 180ms ease;
        }
        .mega-menu-content {
          animation: mega-menu-content-enter 220ms ease-out both;
        }
        @keyframes mega-menu-content-enter {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-product-menu,
        .mobile-product-submenu {
          transition: max-height 380ms cubic-bezier(0.22, 1, 0.36, 1), margin-top 320ms ease, opacity 180ms ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .mega-menu-panel,
          .mega-menu-submenu,
          .mega-menu-content,
          .mobile-product-menu,
          .mobile-product-submenu {
            transition: none;
          }
        }
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
