
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArtworkGrid from '../components/ArtworkGrid';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-neutral-warm to-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080')] bg-cover bg-center opacity-5"></div>
        <div className={`text-center z-10 px-4 ${isLoaded ? 'logo-reveal' : 'opacity-0'}`}>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
            <span className="block">SIMONE OLIVEIRA</span>
            <span className="block text-terracotta">ART GALLERY</span>
          </h1>
          <p className="font-inter text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Descobrindo e celebrando a arte contemporânea através de uma curadoria excepcional
          </p>
          <Link 
            to="/expositions"
            className="inline-flex items-center px-8 py-3 bg-terracotta text-white font-inter font-medium rounded-full hover:bg-terracotta/90 transition-all duration-300 hover:scale-105"
          >
            Explorar Exposições
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nossa Curadoria
              </h2>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-6">
                A Simone Oliveira Art Gallery é um espaço dedicado à promoção e exibição de arte contemporânea 
                de qualidade excepcional. Nossa missão é conectar artistas talentosos com colecionadores e 
                amantes da arte, criando um diálogo único entre criador e observador.
              </p>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-8">
                Com mais de uma década de experiência em curadoria de arte, selecionamos cuidadosamente 
                cada obra exposta, garantindo uma experiência visual e emocional inesquecível para nossos visitantes.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center text-terracotta font-inter font-medium hover:text-terracotta/80 transition-colors"
              >
                Saiba mais sobre nós
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            <div className="slide-up">
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=1000" 
                alt="Interior da galeria"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Obras em Destaque
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore nossa seleção cuidadosa de obras que representam o melhor da arte contemporânea, 
              escolhidas por nossa equipe de curadores especializados.
            </p>
          </div>
          <ArtworkGrid />
          <div className="text-center mt-12">
            <Link 
              to="/artists"
              className="inline-flex items-center px-8 py-3 border-2 border-terracotta text-terracotta font-inter font-medium rounded-full hover:bg-terracotta hover:text-white transition-all duration-300"
            >
              Ver Todos os Artistas
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Visite-nos
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin size={24} className="text-terracotta mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 mb-1">Localização</h3>
                    <p className="text-gray-600">
                      Rua das Artes, 123<br />
                      Vila Madalena, São Paulo - SP<br />
                      CEP: 05414-001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone size={24} className="text-terracotta mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 mb-1">Telefone</h3>
                    <p className="text-gray-600">(11) 3456-7890</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail size={24} className="text-terracotta mt-1" />
                  <div>
                    <h3 className="font-inter font-semibold text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@simoneoliveiragallery.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-inter font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
                >
                  Entre em Contato
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0963555469983!2d-46.68266708502189!3d-23.562308084682793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f4b0c7b95%3A0x2b2b8b8b8b8b8b8b!2sVila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1649876543210!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Simone Oliveira Art Gallery"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
