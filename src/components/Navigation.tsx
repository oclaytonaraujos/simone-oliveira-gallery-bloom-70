
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Obras & Exposições', path: '/expositions' },
    { name: 'Sobre a Artista', path: '/artists' },
    { name: 'Sobre a Galeria', path: '/about' },
    { name: 'Contato', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-soft-beige/95 backdrop-blur-lg shadow-elegant border-b border-gentle-green/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - agora visível em todas as telas */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-warm-terracotta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-soft-beige font-semplicita font-medium text-lg">S</span>
            </div>
            <div>
              <h1 className="font-semplicita text-xl font-light text-deep-black group-hover:text-warm-terracotta transition-colors duration-300">
                Simone Oliveira
              </h1>
              <p className="font-helvetica text-xs text-deep-black/70 -mt-1">Art Gallery</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-helvetica text-sm font-medium transition-all duration-300 relative group ${
                  isActivePath(item.path)
                    ? 'text-warm-terracotta'
                    : 'text-deep-black hover:text-warm-terracotta'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-terracotta transition-all duration-300 group-hover:w-full ${
                  isActivePath(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-deep-black hover:text-warm-terracotta hover:bg-warm-terracotta/10 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-soft-beige/95 backdrop-blur-lg border-t border-gentle-green/20`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-xl font-helvetica text-base font-medium transition-all duration-300 ${
                isActivePath(item.path)
                  ? 'text-warm-terracotta bg-warm-terracotta/10'
                  : 'text-deep-black hover:text-warm-terracotta hover:bg-warm-terracotta/5'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
