
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
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
            Conheça a trajetória, inspirações e processo criativo de uma das mais talentosas 
            artistas do cenário nacional.
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
                src="/lovable-uploads/1730db82-b48a-4890-a40a-92dcfb123144.png"
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
                  Artista Visual
                </p>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Nascida em São Paulo, Simone Oliveira desenvolveu sua paixão pela arte desde muito jovem. 
                    Formada em Artes Visuais pela Universidade de São Paulo, dedicou sua carreira à exploração 
                    de técnicas mistas que combinam tradição e inovação.
                  </p>
                  
                  <p>
                    Suas obras refletem uma profunda conexão com questões humanas, explorando temas como 
                    emoção, identidade e transformação pessoal através de uma linguagem visual única que 
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

      {/* Artist at Work Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 bg-neutral-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
              Processo Criativo
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Veja Simone em seu elemento natural - criando arte em seu ateliê
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/e06b8e32-b139-4ac9-9789-dd2d68767dca.png" 
                alt="Simone pintando em seu ateliê" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover-lift"
              />
              <div className="text-center">
                <h3 className="font-playfair text-lg font-semibold text-gray-900">Criação em Andamento</h3>
                <p className="font-inter text-sm text-gray-600">Simone trabalhando em uma de suas obras</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/79f14aaa-ddef-4045-8d3e-50714c9dc43b.png" 
                alt="Simone em seu ateliê" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover-lift"
              />
              <div className="text-center">
                <h3 className="font-playfair text-lg font-semibold text-gray-900">Momento de Inspiração</h3>
                <p className="font-inter text-sm text-gray-600">No ambiente criativo do ateliê</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <img 
                src="/lovable-uploads/03348f07-97c9-429b-a76d-774e1979a3e4.png" 
                alt="Simone com seus pincéis" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg hover-lift"
              />
              <div className="text-center">
                <h3 className="font-playfair text-lg font-semibold text-gray-900">Ferramentas da Arte</h3>
                <p className="font-inter text-sm text-gray-600">Com os instrumentos de sua paixão</p>
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
