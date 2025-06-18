
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Exposições', path: '/expositions' },
    { name: 'Artistas', path: '/artists' },
    { name: 'Sobre Nós', path: '/about' },
    { name: 'Contato', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-playfair text-xl font-semibold text-gray-900 hover:text-terracotta transition-colors">
            Simone Oliveira Art Gallery
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-inter text-sm font-medium transition-colors relative ${
                  isActive(item.path)
                    ? 'text-terracotta'
                    : 'text-gray-700 hover:text-terracotta'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute bottom-[-20px] left-0 right-0 h-0.5 bg-terracotta"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-terracotta transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block font-inter text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-terracotta'
                      : 'text-gray-700 hover:text-terracotta'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
