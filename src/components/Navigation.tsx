
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
    { name: 'Sobre a Artista', path: '/artists' },
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
          ? 'bg-soft-beige/95 border-b border-gentle-green/20 shadow-elegant backdrop-blur-xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link 
              to="/" 
              className="flex items-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <span className="font-semplicita text-2xl font-light text-deep-black tracking-wide">
                  Simone Oliveira
                </span>
                <span className="art-gallery-tag text-sm text-warm-terracotta -mt-1">
                  Art Gallery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-6 py-3 font-helvetica text-sm font-medium transition-all duration-300 rounded-full group ${
                    isActive(item.path)
                      ? 'text-soft-beige bg-warm-terracotta shadow-lg'
                      : 'text-deep-black hover:text-warm-terracotta hover:bg-gentle-green/20'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {!isActive(item.path) && (
                    <div className="absolute inset-0 rounded-full bg-warm-terracotta/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 text-deep-black hover:text-warm-terracotta transition-colors duration-300 rounded-full hover:bg-gentle-green/20"
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
            <div className="bg-soft-beige/95 backdrop-blur-lg border border-gentle-green/20 rounded-2xl mx-4 mb-4 p-6 space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 font-helvetica text-sm font-medium transition-all duration-300 rounded-xl stagger-animation ${
                    isActive(item.path)
                      ? 'text-soft-beige bg-warm-terracotta shadow-lg'
                      : 'text-deep-black hover:text-warm-terracotta hover:bg-gentle-green/20'
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
