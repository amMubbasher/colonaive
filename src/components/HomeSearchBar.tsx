import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

const searchSuggestions = [
  { text: 'Early symptoms', path: '/education/patients/early-symptoms-of-crc' },
  { text: 'Colonoscopy', path: '/education/patients/colonoscopy-gold-standard' },
  { text: 'How polyps develop', path: '/education/patients/how-crc-develops-from-polyps' },
  { text: 'Find a GP', path: '/find-a-gp' },
  { text: 'Find a specialist', path: '/clinics' },
  { text: 'FAQs', path: '/education/faqs' },
  { text: 'Latest News', path: '/education/newsroom' },
  { text: 'Resources', path: '/education/resources' }
];

export default function HomeSearchBar() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (focusedIndex >= 0 && focusedIndex < filteredSuggestions.length) {
        navigate(filteredSuggestions[focusedIndex].path);
      } else {
        navigate(`/education/faqs?q=${encodeURIComponent(query)}`);
      }
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Escape':
        setShowSuggestions(false);
        setFocusedIndex(-1);
        break;
    }
  };

  const filteredSuggestions = query
    ? searchSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(query.toLowerCase())
      )
    : searchSuggestions;

  return (
    <div className="max-w-sm mx-auto px-4" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
            aria-hidden="true"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search symptoms, screening, FAQs..."
            className="w-full py-3 pl-10 pr-24 rounded-lg border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            aria-label="Search"
            aria-expanded={showSuggestions}
            role="combobox"
            aria-controls="search-suggestions"
            aria-activedescendant={focusedIndex >= 0 ? `suggestion-${focusedIndex}` : undefined}
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition duration-200 flex items-center gap-1 group"
          >
            Search
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {showSuggestions && (
          <div
            id="search-suggestions"
            className="absolute z-10 left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            role="listbox"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <button
                key={index}
                id={`suggestion-${index}`}
                className={`w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 transition duration-150 ${
                  index === focusedIndex ? 'bg-gray-100' : ''
                }`}
                onClick={() => {
                  navigate(suggestion.path);
                  setShowSuggestions(false);
                }}
                role="option"
                aria-selected={index === focusedIndex}
              >
                <span className="block text-sm font-medium">{suggestion.text}</span>
                <span className="block text-xs text-gray-500 mt-0.5">
                  View details →
                </span>
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}