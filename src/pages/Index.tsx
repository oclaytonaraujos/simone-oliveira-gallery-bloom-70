
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ArtworkGrid from '../components/ArtworkGrid';
import { ArrowRight, MapPin, Phone, Mail, Sparkles, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsLoaded(true);
    
    // Only track mouse position on desktop for performance
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMobile]);

  const stats = [{
    icon: Eye,
    label: 'Obras Criadas',
    value: '200+'
  }, {
    icon: Users,
    label: 'Colecionadores',
    value: '50+'
  }, {
    icon: Sparkles,
    label: 'Exposições',
    value: '25+'
  }];

  return (
    <div className="min-h-screen bg-soft-beige overflow-hidden">
      <Navigation />
      
      {/* Floating Elements Background - Desktop only for performance */}
      {!isMobile && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-warm-terracotta/10 to-light-blue/10 rounded-full blur-3xl floating" style={{
            left: mousePosition.x * 0.02 + '%',
            top: mousePosition.y * 0.02 + '%'
          }} />
          <div className="absolute w-64 h-64 bg-gradient-to-r from-gentle-green/10 to-warm-terracotta/10 rounded-full blur-3xl floating" style={{
            right: mousePosition.x * 0.01 + '%',
            bottom: mousePosition.y * 0.01 + '%',
            animationDelay: '2s'
          }} />
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-elegant pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&h=1080')] bg-cover bg-center opacity-5 parallax-bg"></div>
        
        <div className={`text-center z-10 px-4 sm:px-6 max-w-5xl mx-auto ${isLoaded ? 'hero-reveal' : 'opacity-0'}`}>
          {/* Brand Identity */}
          <div className="mb-6 sm:mb-8 md:mb-12 flex flex-col items-center">
            <h1 className="font-semplicita text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-deep-black mb-2 sm:mb-3 md:mb-4 tracking-wide leading-tight">
              Simone Oliveira
            </h1>
            <div className="art-gallery-tag text-lg sm:text-xl md:text-2xl lg:text-3xl text-warm-terracotta mb-4 sm:mb-6 md:mb-8">
              Art Gallery
            </div>
          </div>
          
          <p className="font-helvetica text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-deep-black/80 max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed font-light text-left sm:text-center px-2">
            Explore o universo artístico de Simone Oliveira, onde cada obra conta uma história única através de 
            <span className="text-warm-terracotta font-medium"> cores vibrantes e formas expressivas </span> 
            que tocam a alma e despertam emoções profundas em cada observador.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-2xl mx-auto px-2 sm:px-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="bg-soft-beige/90 backdrop-blur-lg border border-gentle-green/30 rounded-2xl p-4 sm:p-5 md:p-6 text-center hover-lift-elegant stagger-animation touch-manipulation" style={{
                animationDelay: `${0.8 + index * 0.2}s`
              }}>
                <stat.icon size={18} className="mx-auto mb-2 sm:mb-3 text-warm-terracotta sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <div className="font-semplicita text-lg sm:text-xl md:text-2xl font-light text-deep-black mb-1">{stat.value}</div>
                <div className="font-helvetica text-xs sm:text-sm text-deep-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-warm-terracotta/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-warm-terracotta rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-soft-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="reveal-up">
              <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gentle-green/20 rounded-full mb-4 sm:mb-6 md:mb-8 touch-manipulation">
                <span className="font-helvetica text-xs sm:text-sm font-medium text-warm-terracotta">Sobre a Artista</span>
              </div>
              
              <h2 className="font-semplicita text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-deep-black mb-4 sm:mb-6 md:mb-8 leading-tight">
                Visão 
                <span className="text-gradient-artistic"> Artística</span>
              </h2>
              
              <p className="font-helvetica text-sm sm:text-base md:text-lg text-deep-black/80 leading-relaxed mb-3 sm:mb-4 md:mb-6 font-light text-left">
                Simone Oliveira é uma artista que dedica sua vida à criação de obras que 
                desafiam convenções e exploram as profundezas da experiência humana. Cada pincelada 
                carrega sua paixão pela arte e sua visão única do mundo contemporâneo.
              </p>
              
              <p className="font-helvetica text-sm sm:text-base md:text-lg text-deep-black/80 leading-relaxed mb-6 sm:mb-8 md:mb-10 font-light text-left">
                Com mais de uma década de dedicação à arte, Simone desenvolveu um estilo próprio que 
                combina técnicas tradicionais com elementos modernos, criando um diálogo visual 
                que ressoa com diferentes gerações de apreciadores da arte.
              </p>
              
              <Link to="/artists" className="inline-flex items-center text-warm-terracotta font-helvetica font-medium hover:text-warm-terracotta/80 transition-all duration-300 group text-sm sm:text-base touch-manipulation active:scale-95">
                Conheça mais sobre Simone
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" />
              </Link>
            </div>
            
            <div className="reveal-up" style={{
              animationDelay: '0.3s'
            }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-warm-terracotta/20 to-light-blue/20 rounded-2xl sm:rounded-3xl transform rotate-3"></div>
                <img src="/lovable-uploads/1730db82-b48a-4890-a40a-92dcfb123144.png" alt="Simone Oliveira - Retrato" className="relative w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-elegant hover-lift-elegant" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gentle-green/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-20">
            <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-warm-terracotta/10 rounded-full mb-4 sm:mb-6 md:mb-8 touch-manipulation">
              <Sparkles size={12} className="mr-2 text-warm-terracotta sm:w-4 sm:h-4" />
              <span className="font-helvetica text-xs sm:text-sm font-medium text-warm-terracotta">Obras de Destaque</span>
            </div>
            
            <h2 className="font-semplicita text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-deep-black mb-4 sm:mb-6 md:mb-8 leading-tight">
              Criações de <span className="text-gradient-artistic">Simone</span>
            </h2>
            
            <p className="font-helvetica text-sm sm:text-base md:text-lg text-deep-black/80 max-w-3xl mx-auto leading-relaxed font-light text-left sm:text-center px-2">
              Explore uma seleção cuidadosa das obras mais marcantes de Simone Oliveira, 
              cada uma contando uma história única através de cores, formas e emoções profundas.
            </p>
          </div>
          
          <ArtworkGrid />
          
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <Link to="/expositions" className="inline-flex items-center px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-warm-terracotta text-soft-beige font-helvetica font-medium rounded-full hover:bg-warm-terracotta/90 transition-all duration-300 group shadow-elegant hover-lift-elegant text-sm sm:text-base touch-manipulation active:scale-95" style={{ minHeight: '48px' }}>
              <span className="relative z-10 flex items-center">
                Ver Todas as Obras
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Artist in Studio Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-soft-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-semplicita text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-deep-black mb-3 sm:mb-4 md:mb-6">
              No Ateliê
            </h2>
            <p className="font-helvetica text-sm sm:text-base md:text-lg text-deep-black/80 max-w-2xl mx-auto text-left sm:text-center px-2">
              Acompanhe Simone em seu processo criativo, onde cada obra nasce da paixão 
              e dedicação à arte. Seu ateliê é um espaço de inspiração e criatividade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="lg:col-span-1">
              <img 
                src="/lovable-uploads/e06b8e32-b139-4ac9-9789-dd2d68767dca.png" 
                alt="Simone Oliveira pintando em seu ateliê" 
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl sm:rounded-3xl shadow-elegant hover-lift-elegant touch-manipulation"
              />
            </div>
            <div className="lg:col-span-1">
              <img 
                src="/lovable-uploads/79f14aaa-ddef-4045-8d3e-50714c9dc43b.png" 
                alt="Simone Oliveira criando arte" 
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl sm:rounded-3xl shadow-elegant hover-lift-elegant touch-manipulation"
              />
            </div>
            <div className="lg:col-span-1 flex flex-col justify-center space-y-4 sm:space-y-6">
              <img 
                src="/lovable-uploads/03348f07-97c9-429b-a76d-774e1979a3e4.png" 
                alt="Simone Oliveira com pincéis" 
                className="w-full h-36 sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl sm:rounded-2xl shadow-lg hover-lift-elegant touch-manipulation"
              />
              <div className="bg-gentle-green/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6">
                <h3 className="font-semplicita text-lg sm:text-xl md:text-2xl font-light text-deep-black mb-2 sm:mb-3 md:mb-4">
                  Processo Criativo
                </h3>
                <p className="font-helvetica text-xs sm:text-sm md:text-base text-deep-black/80 leading-relaxed text-left">
                  Cada obra é resultado de um processo meditativo e intuitivo, onde a artista 
                  se conecta profundamente com suas emoções e inspirações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gentle-green/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            <div className="reveal-up">
              <div className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-warm-terracotta/10 rounded-full mb-4 sm:mb-6 md:mb-8 touch-manipulation">
                <span className="font-helvetica text-xs sm:text-sm font-medium text-warm-terracotta">Localização</span>
              </div>
              
              <h2 className="font-semplicita text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-deep-black mb-6 sm:mb-8 md:mb-12 leading-tight">
                Visite o Ateliê
              </h2>
              
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                {[{
                  icon: MapPin,
                  title: 'Ateliê',
                  content: 'Rua das Artes, 123\nVila Madalena, São Paulo - SP\nCEP: 05414-001'
                }, {
                  icon: Phone,
                  title: 'Telefone',
                  content: '(11) 3456-7890'
                }, {
                  icon: Mail,
                  title: 'E-mail',
                  content: 'contato@simoneoliveira.art'
                }].map((item, index) => (
                  <div key={item.title} className="flex items-start space-x-3 sm:space-x-4 md:space-x-6 group touch-manipulation">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-warm-terracotta/10 rounded-xl flex items-center justify-center group-hover:bg-warm-terracotta/20 transition-colors duration-300">
                      <item.icon size={18} className="text-warm-terracotta sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-helvetica font-semibold text-deep-black mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h3>
                      <p className="font-helvetica text-deep-black/70 whitespace-pre-line leading-relaxed text-sm sm:text-base">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8 md:mt-12">
                <Link to="/contact" className="inline-flex items-center px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-warm-terracotta text-soft-beige font-helvetica font-medium rounded-full hover:bg-warm-terracotta/90 transition-all duration-300 group shadow-elegant hover-lift-elegant text-sm sm:text-base touch-manipulation active:scale-95" style={{ minHeight: '48px' }}>
                  <span className="relative z-10 flex items-center">
                    Entre em Contato
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1 sm:w-5 sm:h-5" />
                  </span>
                </Link>
              </div>
            </div>
            
            <div className="h-64 sm:h-80 md:h-96 lg:h-full min-h-[250px] sm:min-h-[320px] md:min-h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant hover-lift-elegant reveal-up touch-manipulation" style={{
              animationDelay: '0.3s'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0963555469983!2d-46.68266708502189!3d-23.562308084682793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f4b0c7b95%3A0x2b2b8b8b8b8b8b8b!2sVila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1649876543210!5m2!1spt!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localização do Ateliê de Simone Oliveira" 
                className="filter grayscale hover:grayscale-0 transition-all duration-500" 
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
