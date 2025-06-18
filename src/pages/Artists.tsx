
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Artists = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-warm to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
            Sobre Simone Oliveira
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed slide-up">
            Conheça a trajetória, inspirações e processo criativo de uma das mais promissoras 
            artistas contemporâneas do cenário nacional.
          </p>
        </div>
      </section>

      {/* Artist Profile */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 to-light-blue/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=600&h=800"
                alt="Simone Oliveira"
                className="relative w-full h-[600px] object-cover rounded-3xl shadow-modern hover-lift"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
                  Simone Oliveira
                </h2>
                <p className="font-inter text-terracotta font-medium text-lg mb-6">
                  Artista Visual Contemporânea
                </p>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Nascida em São Paulo, Simone Oliveira desenvolveu sua paixão pela arte desde muito jovem. 
                    Formada em Artes Visuais pela Universidade de São Paulo, dedicou sua carreira à exploração 
                    de técnicas mistas que combinam tradição e inovação.
                  </p>
                  
                  <p>
                    Suas obras refletem uma profunda conexão com questões contemporâneas, explorando temas como 
                    urbanização, identidade e transformação social através de uma linguagem visual única que 
                    mescla cores vibrantes com formas expressivas.
                  </p>
                  
                  <p>
                    Com mais de 25 exposições realizadas e obras em coleções privadas por todo o Brasil, 
                    Simone continua a expandir os limites de sua expressão artística, sempre buscando novas 
                    formas de conectar-se com seu público.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-neutral-warm to-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-terracotta mb-2">200+</div>
                  <div className="text-sm text-gray-600">Obras Criadas</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-neutral-warm to-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-terracotta mb-2">25+</div>
                  <div className="text-sm text-gray-600">Exposições</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-neutral-warm to-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-terracotta mb-2">15+</div>
                  <div className="text-sm text-gray-600">Anos de Carreira</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-neutral-warm to-white rounded-xl shadow-lg">
                  <div className="text-3xl font-bold text-terracotta mb-2">50+</div>
                  <div className="text-sm text-gray-600">Colecionadores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-terracotta to-terracotta/80 rounded-2xl p-12 text-center text-white">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Interessado em uma Obra?
            </h2>
            <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato para conhecer as obras disponíveis ou encomendar uma peça personalizada.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-terracotta font-inter font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Entre em Contato
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artists;
