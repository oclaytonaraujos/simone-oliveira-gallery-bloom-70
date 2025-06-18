
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Exposições', path: '/expositions' },
    { name: 'Artistas', path: '/artists' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Contato', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-glass border-b border-white/20 shadow-glass backdrop-blur-xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link 
              to="/" 
              className="font-playfair text-xl lg:text-2xl font-bold text-gray-900 hover:text-terracotta transition-all duration-300 hover:scale-105"
            >
              <span className="text-shimmer">Simone Oliveira Art Gallery</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-6 py-3 font-inter text-sm font-medium transition-all duration-300 rounded-full group ${
                    isActive(item.path)
                      ? 'text-white bg-terracotta shadow-lg'
                      : 'text-gray-700 hover:text-terracotta hover:bg-white/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {!isActive(item.path) && (
                    <div className="absolute inset-0 rounded-full bg-terracotta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 text-gray-700 hover:text-terracotta transition-colors duration-300 rounded-full hover:bg-white/50"
              >
                <div className="relative">
                  <Menu size={24} className={`transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <X size={24} className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-500 ease-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="glass-card rounded-2xl mx-4 mb-4 p-6 space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 font-inter text-sm font-medium transition-all duration-300 rounded-xl stagger-animation ${
                    isActive(item.path)
                      ? 'text-white bg-terracotta shadow-lg'
                      : 'text-gray-700 hover:text-terracotta hover:bg-white/50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator" style={{
        transform: `scaleX(${typeof window !== 'undefined' ? (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0})`
      }} />
    </>
  );
};

export default Navigation;
