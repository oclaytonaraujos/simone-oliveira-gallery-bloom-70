
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FloatingContactButtons from '../components/FloatingContactButtons';
import { useExhibitions } from '../hooks/useExhibitions';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Expositions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: exhibitions, isLoading, error } = useExhibitions();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'bg-gentle-green text-soft-beige';
      case 'upcoming':
        return 'bg-warm-terracotta text-soft-beige';
      case 'past':
        return 'bg-deep-black/20 text-deep-black';
      default:
        return 'bg-deep-black/20 text-deep-black';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current':
        return 'Em Cartaz';
      case 'upcoming':
        return 'Em Breve';
      case 'past':
        return 'Encerrada';
      default:
        return 'Status';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-soft-beige">
        <Navigation />
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-semplicita text-4xl md:text-5xl font-light text-deep-black mb-4">
                Exposições
              </h1>
              <div className="w-20 h-1 bg-warm-terracotta mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gentle-green/10 rounded-3xl p-6 animate-pulse">
                  <div className="aspect-[4/3] bg-gentle-green/20 rounded-2xl mb-6"></div>
                  <div className="h-6 bg-gentle-green/20 rounded mb-3"></div>
                  <div className="h-4 bg-gentle-green/20 rounded mb-2"></div>
                  <div className="h-4 bg-gentle-green/20 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-soft-beige">
        <Navigation />
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-semplicita text-4xl md:text-5xl font-light text-deep-black mb-4">
              Exposições
            </h1>
            <p className="text-deep-black/70 font-helvetica">Erro ao carregar exposições</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`pt-20 pb-16 px-4 sm:px-6 lg:px-8 ${isLoaded ? 'hero-reveal' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-semplicita text-4xl md:text-5xl lg:text-6xl font-light text-deep-black mb-6 leading-tight">
              Exposições
            </h1>
            <div className="w-20 h-1 bg-warm-terracotta mx-auto mb-6"></div>
            <p className="font-helvetica text-lg text-deep-black/80 max-w-3xl mx-auto leading-relaxed">
              Explore as exposições de Simone Oliveira, uma jornada através de diferentes momentos e temas 
              de sua carreira artística.
            </p>
          </div>

          {/* Exhibitions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitions?.map((exhibition, index) => (
              <div
                key={exhibition.id}
                className="bg-gentle-green/10 rounded-3xl overflow-hidden shadow-elegant hover-lift-elegant stagger-animation"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-helvetica font-medium ${getStatusColor(exhibition.status)}`}>
                      {getStatusText(exhibition.status)}
                    </span>
                  </div>
                  
                  <h3 className="font-semplicita text-2xl font-light text-deep-black mb-3">
                    {exhibition.title}
                  </h3>
                  
                  {exhibition.description && (
                    <p className="font-helvetica text-deep-black/70 mb-4 leading-relaxed">
                      {exhibition.description}
                    </p>
                  )}
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-deep-black/60">
                      <Calendar size={16} className="mr-2" />
                      <span className="font-helvetica text-sm">
                        {formatDate(exhibition.start_date)} - {formatDate(exhibition.end_date)}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-deep-black/60">
                      <MapPin size={16} className="mr-2" />
                      <span className="font-helvetica text-sm">
                        {exhibition.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {(!exhibitions || exhibitions.length === 0) && (
            <div className="text-center py-16">
              <p className="font-helvetica text-deep-black/70 text-lg">
                Nenhuma exposição encontrada no momento.
              </p>
            </div>
          )}
        </div>
      </section>

      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Expositions;
