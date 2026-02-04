import { useState } from 'react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { 
      name: 'About Amlak', 
      hasDropdown: true,
      dropdownItems: ['Our Story', 'Mission & Vision', 'Leadership']
    },
    { 
      name: 'Prices of Financing Products', 
      hasDropdown: false 
    },
    { 
      name: 'Individuals', 
      hasDropdown: true,
      dropdownItems: ['Personal Finance', 'Home Finance', 'Vehicle Finance']
    },
    { 
      name: 'Corporate & SMEs', 
      hasDropdown: false 
    },
    { 
      name: 'Contact Us', 
      hasDropdown: true,
      dropdownItems: ['Contact Information', 'Locations', 'Support']
    },
  ];

  return (
    <nav className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1240px]">
      <div className="bg-white rounded-[20px] shadow-lg p-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-800 font-bold text-xl leading-tight">Amlak</span>
              <span className="text-blue-600 text-xs leading-tight">International</span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-blue-700 font-medium text-sm md:text-md lg:text-[17px] flex items-center space-x-1 transition-colors">
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <svg
                      className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === index && (
                  <div className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
                    {item.dropdownItems.map((dropdownItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                      >
                        {dropdownItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Selector */}
            <button className="text-blue-700 font-semibold text-sm px-4 py-2 rounded-full hover:bg-blue-50 transition-colors">
              English
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
