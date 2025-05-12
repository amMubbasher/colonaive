  import React, { useState, useEffect, useRef } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { Menu, X, ChevronDown, Search } from 'lucide-react';
  import { Container } from './ui/Container';
  import { Button } from './ui/Button';

  const regions = [
    { code: 'SG', name: 'Singapore' },
    { code: 'PH', name: 'Philippines' },
    { code: 'IN', name: 'India' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'tl', name: 'Tagalog' }
  ];

  const aboutLinks = [
    { label: "Our Story", path: "/about-us" },
    { label: "Our Advisors", path: "/about/advisors" },
    { label: "Vision 2035", path: "/vision2035" },
    { label: "CSR Showcase", path: "/csr-showcase" }
  ];

  const educationLinks = [
    { label: "Patient Education", path: "/education/patients" },
    { label: "Clinician Education", path: "/education/clinicians" },
    { label: "FAQs", path: "/education/faqs" },
    { label: "Newsroom", path: "/education/newsroom" },
    { label: "Resources", path: "/education/resources" },
    { label: "Upcoming Events", path: "/upcoming-events" }
  ];

  const screeningLinks = [
    { label: "Colonoscopy (Gold Standard)", path: "/education/patients/colonoscopy-gold-standard" },
    { label: "Screening Blood Test", path: "/get-screened" },
    { label: "Find a GP", path: "/find-a-gp" },
    { label: "Find a Specialist", path: "/clinics" }
  ];

  const pillarLinks = [
    { label: "RID-CRC PUB™", path: "/pillars/rid-crc-pub" },
    { label: "RID-CRC SGP™", path: "/pillars/rid-crc-sgp" },
    { label: "RID-CRC GOV™", path: "/pillars/rid-crc-gov" },
    { label: "RID-CRC CSR™", path: "/pillars/rid-crc-csr" },
    { label: "RID-CRC EDU™", path: "/pillars/rid-crc-edu" }
  ];

  const joinLinks = [
    { label: "Become a Champion", path: "/join-the-movement" },
    { label: "Member/Patient Sign-Up", path: "/signup/member" },
    { label: "Clinic Sign-Up", path: "/signup/clinic" },
    { label: "Specialist Sign-Up", path: "/signup/specialist" },
    { label: "Sponsor/CSR Sign-Up", path: "/signup/sponsor" }
  ];

  export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState('SG');
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    
    // Add a ref for the utility bar to calculate its height
    const utilityBarRef = useRef(null);
    const [utilityBarHeight, setUtilityBarHeight] = useState(0);
    
    // Get the height of the utility bar on mount
    useEffect(() => {
      if (utilityBarRef.current) {
        setUtilityBarHeight(utilityBarRef.current.offsetHeight);
      }
      
      const handleResize = () => {
        if (utilityBarRef.current) {
          setUtilityBarHeight(utilityBarRef.current.offsetHeight);
        }
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle scroll effects
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > utilityBarHeight);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [utilityBarHeight]);

    const handleClose = () => {
      setIsOpen(false);
      setActiveSubmenu(null);
    };

    const handleSearch = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        setSearchQuery('');
      }
    };

    const renderDropdown = (label, links, mainPath, menuKey) => (
      <div
        onMouseEnter={() => setActiveSubmenu(menuKey || label)}
        onMouseLeave={() => setActiveSubmenu(null)}
        className="relative group"
      >
        <div className="flex items-center gap-1">
          {mainPath ? (
            <Link
              to={mainPath}
              className="py-2 text-sm font-semibold text-white hover:text-teal-300 transition-colors duration-200"
            >
              {label}
            </Link>
          ) : (
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold text-white hover:text-teal-300 transition-colors duration-200"
            >
              {label}
            </button>
          )}
          <button
            type="button"
            className="p-1 text-white hover:text-teal-300 transition-colors duration-200"
            aria-haspopup="true"
            aria-expanded={activeSubmenu === (menuKey || label)}
            onClick={() => setActiveSubmenu(activeSubmenu === (menuKey || label) ? null : (menuKey || label))}
          >
            <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
          </button>
        </div>

        <div
          className={`absolute top-full left-0 w-60 mt-0.5 rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-50 transition-all duration-200 ${
            activeSubmenu === (menuKey || label) ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          role="menu"
        >
          <ul className="py-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block bg-[#0b1e3b] px-4 py-2 text-sm text-white hover:bg-[#e6f0ff] hover:text-[#004F8C] transition-colors duration-200"
                  role="menuitem"
                  onClick={() => {
                    setActiveSubmenu(null);
                    handleClose();
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );

    return (
      <>
        {/* Add spacer to prevent content from jumping when nav becomes fixed */}
        <div style={{ height: isScrolled ? utilityBarHeight + 72 + 46 : 0 }} />
        
        <header>
          {/* Utility Bar - Will scroll normally */}
          <div
            ref={utilityBarRef}
            className="bg-[#004F8C] py-1.5 text-xs w-full"
          >
            <div className='sm:px-10 max-sm:mx-auto'>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center sm:space-x-8 max-sm:mx-auto">
                  <div className="flex items-center space-x-2.5 group">
                    <span className="text-white uppercase tracking-wider text-sm font-medium group-hover:text-teal-300 transition-colors duration-300">Region</span>
                    <div className="relative">
                      <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="bg-transparent text-white text-sm border border-white/30 rounded-md px-2.5 py-0.5 uppercase focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent cursor-pointer hover:text-teal-300 hover:border-teal-300 transition-all duration-300 pr-7 appearance-none relative z-10"
                      >
                        {regions.map(region => (
                          <option key={region.code} value={region.code} className="bg-[#0B1E3B] text-white">
                            {region.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-y-[-65%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" viewBox="0 0 10 6" className="text-white group-hover:text-teal-300 transition-colors duration-300">
                          <path fill="currentColor" d="M1 1.5L5 4.5L9 1.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2.5 group max-sm:hidden">
                    <span className="text-white uppercase tracking-wider text-sm font-medium group-hover:text-teal-300 transition-colors duration-300">Language</span>
                    <div className="relative">
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="bg-transparent text-white text-sm border border-white/30 rounded-md px-2.5 py-0.5 uppercase focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-transparent cursor-pointer hover:text-teal-300 hover:border-teal-300 transition-all duration-300 pr-7 appearance-none relative z-10"
                      >
                        {languages.map(lang => (
                          <option key={lang.code} value={lang.code} className="bg-[#0B1E3B] text-white">
                            {lang.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover:translate-y-[-65%]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" viewBox="0 0 10 6" className="text-white group-hover:text-teal-300 transition-colors duration-300">
                          <path fill="currentColor" d="M1 1.5L5 4.5L9 1.5" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center space-x-3 pr-4 lg:pr-8">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => navigate('/login')}
                    className="hidden md:block bg-[#006BA6] hover:bg-[#005C8D] text-white rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 pulse-on-hover"
                  >
                    Champion Sign In
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Navigation - Will become fixed when scrolled past utility bar */}
          <div
            className={`bg-[#0B1E3B] transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
            style={{
              position: isScrolled ? 'fixed' : 'relative',
              top: 0,
              width: '100%',
              zIndex: 50
            }}
          >
            <div>
              <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-[68px]' : 'h-[72px]'}`}>
                <Link to="/" className="flex text-xl items-center pl-4 lg:pl-8 group relative">
                  <span className="text-xl sm:text-3xl font-bold text-white tracking-tight transition-all duration-300 group-hover:scale-105 relative inline-block">
                    COLON<span className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300">AiVE</span>™
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-300 group-hover:w-full transition-all duration-700 ease-in-out delay-300 opacity-70"></span>
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-0 bg-gradient-to-r from-teal-400/0 via-teal-400/80 to-teal-400/0 group-hover:w-full transition-all duration-700 ease-in-out"></span>
                </Link>

                <nav className="hidden lg:flex items-center flex-1 justify-center" >
                  {renderDropdown("Education", educationLinks)}
                  {renderDropdown("Get Screened", screeningLinks)}
                  {renderDropdown("Movement Pillars", pillarLinks, "/movement-pillars")}
                  {renderDropdown("Join the Movement", joinLinks)}
                  {renderDropdown("About Us", aboutLinks)}
                  <div className="relative group">
                    <Link
                      to="/clinical-trials"
                      className="px-3 py-2.5 text-sm font-semibold text-white hover:text-teal-300 transition-colors duration-300 relative"
                    >
                      <span>Clinical Trials</span>
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </Link>
                  </div>
                </nav>

                <button
                  className="lg:hidden rounded-md p-2 text-white hover:bg-[#004F8C]/50 transition-colors duration-200 mr-2 sm:mr-4"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Search Bar - Always attached to the navigation */}
            <div className="border-t border-white/10 py-3">
              <div>
                <form onSubmit={handleSearch} className="max-md:w-[95%] max-w-2xl mx-auto flex">
                  <div className="flex-1 relative group">
                    <input
                      type="text"
                      placeholder="Explore topics, care, coverage"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 pr-10 rounded-lg text-sm border border-white/20 bg-white/5 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-200"
                    />
                    <button
                      type="submit"
                      aria-label="Search"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <Search className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>

                  <button className="bg-[#006BA6] hover:bg-[#005C8D] hover:border-teal-300 text-white rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 pulse-on-hover ml-5">Search</button>
                </form>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-slideDown fixed left-0 right-0 z-50 max-h-[calc(100vh-72px-46px)] overflow-y-auto"
            style={{
              top: isScrolled ? 72 + 46 : 72 + 46 + utilityBarHeight,
            }}
          >
            <Container>
              <div className="py-6 space-y-1">
                <form onSubmit={handleSearch} className="relative mb-4 px-4 group">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pr-10 rounded-lg text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 group-hover:border-teal-300"
                  />

                  <button
                    type="submit"
                    aria-label="Search"
                    className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-500 transition-colors duration-300 hover:scale-110"
                  >
                    <Search className="h-4 w-4 transition-transform duration-200" />
                  </button>
                </form>

                <div className="border-b border-gray-200 pb-4 mb-4 px-4">
                  <Button
                    variant="primary"
                    className="w-100 mt-2 bg-[#006BA6] hover:bg-[#005C8D] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 relative overflow-hidden group"
                    onClick={() => {
                      handleClose();
                      navigate('/login');
                    }}
                  >
                    <span className="relative z-10">Champion Sign In</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/30 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between group">
                      <span className="text-sm text-gray-600 font-medium group-hover:text-teal-600 transition-colors duration-300">Region:</span>
                      <select
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}
                        className="text-sm text-gray-700 focus:outline-none p-1 border border-gray-300 rounded transition-all duration-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 relative"
                      >
                        {regions.map(region => (
                          <option key={region.code} value={region.code}>{region.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center justify-between group">
                      <span className="text-sm text-gray-600 font-medium group-hover:text-teal-600 transition-colors duration-300">Language:</span>
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="text-sm text-gray-700 focus:outline-none p-1 border border-gray-300 rounded transition-all duration-300 focus:ring-2 focus:ring-teal-400 focus:border-transparent hover:border-teal-300 relative"
                      >
                        {languages.map(lang => (
                          <option key={lang.code} value={lang.code}>{lang.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {[
                  { label: "Education", links: educationLinks },
                  { label: "Get Screened", links: screeningLinks },
                  { label: "Movement Pillars", links: pillarLinks, mainPath: "/movement-pillars" },
                  { label: "Join the Movement", links: joinLinks, menuKey: "mobileJoinMovement" },
                  { label: "About Us", links: aboutLinks }
                ].map(({ label, links, mainPath, menuKey }) => (
                  <div key={menuKey || label} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/80 transition-colors duration-200">
                    <div className="flex items-center justify-between py-2 px-4">
                      {mainPath ? (
                        <Link
                          to={mainPath}
                          className="flex-grow py-2 text-gray-700 font-medium hover:text-teal-600 transition-colors duration-300 relative group"
                          onClick={handleClose}
                        >
                          <span>{label}</span>
                          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </Link>
                      ) : (
                        <button
                          className="flex-grow text-left py-2 text-gray-700 font-medium hover:text-teal-600 w-full flex justify-between items-center transition-colors duration-300 relative group"
                          onClick={() => setActiveSubmenu(activeSubmenu === (menuKey || label) ? null : (menuKey || label))}
                          aria-expanded={activeSubmenu === (menuKey || label)}
                        >
                          <span>{label}</span>
                          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                        </button>
                      )}
                      {!mainPath && (
                        <button
                          className="p-2 text-gray-500 hover:text-teal-600 transition-colors duration-300"
                          onClick={() => setActiveSubmenu(activeSubmenu === (menuKey || label) ? null : (menuKey || label))}
                          aria-expanded={activeSubmenu === (menuKey || label)}
                          aria-label={`Toggle ${label} submenu`}
                        >
                          <ChevronDown className={`h-5 w-5 transform transition-all duration-300 ${activeSubmenu === (menuKey || label) ? 'rotate-180 text-teal-500' : ''} hover:scale-110`} />
                        </button>
                      )}
                    </div>
                    {activeSubmenu === (menuKey || label) && (
                      <div className="pl-6 pr-4 py-1 space-y-1 bg-gray-50 animate-fadeIn">
                        {links.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 hover:text-teal-600 rounded-md transition-all duration-300 hover:pl-3"
                            onClick={handleClose}
                          >
                            <span className="relative group inline-block">
                              {link.label}
                              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-teal-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/clinical-trials"
                  className="block px-4 py-3 text-gray-700 font-medium hover:text-teal-600 border-b border-gray-100 transition-colors duration-300 relative group"
                  onClick={handleClose}
                >
                  <span>Clinical Trials</span>
                  <span className="absolute -bottom-1 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </Link>
              </div>
            </Container>
          </div>
        )}
      </>
    );
  };


  