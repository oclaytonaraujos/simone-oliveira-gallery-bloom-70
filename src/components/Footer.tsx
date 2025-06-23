
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gallery Info */}
          <div className="space-y-3">
            <h3 className="font-playfair text-lg font-semibold">Simone Oliveira Art Gallery</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicada a promover e exibir arte contemporânea de qualidade excepcional, 
              conectando artistas talentosos com colecionadores e amantes da arte.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-terracotta transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-playfair text-lg font-semibold">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin size={14} className="text-terracotta" />
                <span className="text-gray-300 text-sm">
                  Rua das Artes, 123<br />
                  Vila Madalena, São Paulo - SP
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-terracotta" />
                <span className="text-gray-300 text-sm">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-terracotta" />
                <span className="text-gray-300 text-sm">contato@simoneoliveiragallery.com</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h3 className="font-playfair text-lg font-semibold">Horário de Funcionamento</h3>
            <div className="space-y-1 text-gray-300 text-sm">
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

        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Simone Oliveira Art Gallery. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
