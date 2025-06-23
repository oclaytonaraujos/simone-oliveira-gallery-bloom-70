
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Gallery Info */}
          <div className="space-y-1">
            <h3 className="font-playfair text-sm font-semibold">Simone Oliveira Art Gallery</h3>
            <p className="text-gray-300 text-xs leading-tight line-clamp-2">
              Arte contemporânea de qualidade excepcional
            </p>
            <div className="flex space-x-1">
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={12} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={12} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={12} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-1">
            <h3 className="font-playfair text-sm font-semibold">Contato</h3>
            <div className="space-y-0.5 text-xs">
              <div className="flex items-center space-x-1">
                <MapPin size={10} className="text-terracotta" />
                <span className="text-gray-300">Vila Madalena, SP</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone size={10} className="text-terracotta" />
                <span className="text-gray-300">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={10} className="text-terracotta" />
                <span className="text-gray-300">contato@gallery.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-1">
            <h3 className="font-playfair text-sm font-semibold">Horários</h3>
            <div className="space-y-0 text-gray-300 text-xs">
              <div className="flex justify-between">
                <span>Seg-Sex:</span>
                <span>10h-19h</span>
              </div>
              <div className="flex justify-between">
                <span>Sáb:</span>
                <span>10h-17h</span>
              </div>
              <div className="flex justify-between">
                <span>Dom:</span>
                <span>12h-17h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-1 pt-1 text-center text-gray-400 text-xs">
          <p>&copy; 2024 Simone Oliveira Art Gallery</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
