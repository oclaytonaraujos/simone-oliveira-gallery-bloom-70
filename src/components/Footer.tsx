
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Gallery Info */}
          <div className="space-y-2">
            <h3 className="font-playfair text-base font-semibold">Simone Oliveira Art Gallery</h3>
            <p className="text-gray-300 text-xs leading-tight">
              Dedicada a promover e exibir arte contemporânea de qualidade excepcional, 
              conectando artistas talentosos com colecionadores e amantes da arte.
            </p>
            <div className="flex space-x-2">
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors p-1 rounded-full hover:bg-gray-800"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors p-1 rounded-full hover:bg-gray-800"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors p-1 rounded-full hover:bg-gray-800"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="font-playfair text-base font-semibold">Contato</h3>
            <div className="space-y-1">
              <div className="flex items-start space-x-2">
                <MapPin size={12} className="text-terracotta mt-0.5" />
                <span className="text-gray-300 text-xs">
                  Rua das Artes, 123<br />
                  Vila Madalena, São Paulo - SP
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={12} className="text-terracotta" />
                <span className="text-gray-300 text-xs">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={12} className="text-terracotta" />
                <span className="text-gray-300 text-xs">contato@simoneoliveiragallery.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-2">
            <h3 className="font-playfair text-base font-semibold">Horário de Funcionamento</h3>
            <div className="space-y-0.5 text-gray-300 text-xs">
              <div className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>10h - 19h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span>10h - 17h</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span>12h - 17h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-3 pt-2 text-center text-gray-400 text-xs">
          <p>&copy; 2024 Simone Oliveira Art Gallery. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
