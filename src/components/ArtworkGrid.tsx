
import { useState, useEffect } from 'react';
import { Eye, Heart, Share2, ZoomIn, MessageCircle, Mail } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

interface Artwork {
  id: number;
  title: string;
  image: string;
  year: string;
  medium: string;
  description?: string;
}

const ArtworkGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [touchedId, setTouchedId] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const isMobile = useIsMobile();

  // Obras de Simone Oliveira
  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Reflexões Urbanas",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Óleo sobre tela",
      description: "Uma exploração profunda dos contrastes da vida urbana moderna, onde cada pincelada revela as camadas ocultas da experiência citadina."
    },
    {
      id: 2,
      title: "Movimento Azul",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=600&h=800",
      year: "2023",
      medium: "Acrílica sobre tela",
      description: "Uma dança de tons azuis que captura a fluidez e a serenidade do movimento natural, inspirada nas ondas do oceano."
    },
    {
      id: 3,
      title: "Geometria Orgânica",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2024",
      medium: "Técnica mista",
      description: "A harmoniosa fusão entre formas geométricas precisas e elementos orgânicos, criando um diálogo visual único."
    },
    {
      id: 4,
      title: "Horizontes",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800",
      year: "2023",
      medium: "Óleo sobre tela",
      description: "Uma contemplação sobre os limites e possibilidades, onde cada horizonte representa um novo começo."
    },
    {
      id: 5,
      title: "Abstração Verde",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Acrílica sobre tela",
      description: "Uma celebração da natureza através de formas abstratas que evocam crescimento e renovação."
    },
    {
      id: 6,
      title: "Formas em Diálogo",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2023",
      medium: "Técnica mista",
      description: "Um estudo sobre a comunicação visual, onde formas distintas se encontram e criam narrativas inesperadas."
    }
  ];

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  const handleArtworkClick = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setTouchedId(null); // Reset touch state when opening modal
  };

  const handleArtworkTouch = (artworkId: number) => {
    if (touchedId === artworkId) {
      // Se já foi tocado, abre o modal
      const artwork = artworks.find(a => a.id === artworkId);
      if (artwork) {
        handleArtworkClick(artwork);
      }
    } else {
      // Se for o primeiro toque, apenas revela as informações
      setTouchedId(artworkId);
      // Auto-hide after 3 seconds on mobile
      setTimeout(() => setTouchedId(null), 3000);
    }
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  const handleWhatsAppContact = (artwork: Artwork) => {
    const whatsappNumber = "5511987654321"; // Número da Simone
    const message = encodeURIComponent(`Olá Simone! Tenho interesse na obra "${artwork.title}" (${artwork.year}). Gostaria de saber mais informações sobre preço e disponibilidade.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleEmailContact = (artwork: Artwork) => {
    const email = "contato@simoneoliveira.art";
    const subject = encodeURIComponent(`Interesse na obra: ${artwork.title}`);
    const body = encodeURIComponent(`Olá Simone,\n\nTenho interesse na obra "${artwork.title}" (${artwork.year} - ${artwork.medium}).\n\nGostaria de saber mais informações sobre:\n- Preço\n- Disponibilidade\n- Dimensões\n- Forma de pagamento\n\nAguardo seu contato.\n\nAtenciosamente.`);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
        {artworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className="group cursor-pointer stagger-animation touch-manipulation"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => isMobile ? handleArtworkTouch(artwork.id) : handleArtworkClick(artwork)}
            onMouseEnter={() => !isMobile && setHoveredId(artwork.id)}
            onMouseLeave={() => !isMobile && setHoveredId(null)}
          >
            <div className="relative overflow-hidden bg-soft-beige rounded-2xl md:rounded-3xl aspect-[4/5] shadow-elegant hover-lift-elegant transition-all duration-700">
              {/* Loading skeleton */}
              {!loadedImages.has(artwork.id) && (
                <div className="absolute inset-0 bg-gradient-to-r from-gentle-green/20 via-light-blue/20 to-gentle-green/20 animate-pulse" />
              )}
              
              <img
                src={artwork.image}
                alt={artwork.title}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  (hoveredId === artwork.id || touchedId === artwork.id) ? 'scale-110 brightness-110' : 'scale-100'
                } ${loadedImages.has(artwork.id) ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(artwork.id)}
              />
              
              {/* Enhanced gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-transparent transition-all duration-500 ${
                  (hoveredId === artwork.id || touchedId === artwork.id) ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Enhanced action buttons */}
              <div 
                className={`absolute top-3 md:top-6 right-3 md:right-6 flex flex-col space-y-2 md:space-y-3 transition-all duration-500 ${
                  (hoveredId === artwork.id || touchedId === artwork.id) ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                }`}
              >
                {[ZoomIn, Heart, Share2].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-8 h-8 md:w-12 md:h-12 bg-soft-beige/90 rounded-full flex items-center justify-center backdrop-blur-lg border border-gentle-green/30 hover:bg-soft-beige hover:scale-110 transition-all duration-300 shadow-elegant touch-manipulation active:scale-95"
                    style={{ 
                      transitionDelay: `${idx * 0.1}s`,
                      minHeight: '32px',
                      minWidth: '32px'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (idx === 0) handleArtworkClick(artwork);
                    }}
                  >
                    <Icon size={isMobile ? 14 : 18} className="text-warm-terracotta" />
                  </button>
                ))}
              </div>
              
              {/* Enhanced content */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-4 md:p-8 text-soft-beige transition-all duration-500 ${
                  (hoveredId === artwork.id || touchedId === artwork.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="mb-2 md:mb-4">
                  <h3 className="font-semplicita text-lg md:text-2xl font-light mb-2 md:mb-3 leading-tight">{artwork.title}</h3>
                  <p className="font-helvetica text-xs md:text-sm opacity-90 mb-1 md:mb-2">Por Simone Oliveira</p>
                  <p className="font-helvetica text-xs opacity-75 mb-2 md:mb-4">{artwork.year} • {artwork.medium}</p>
                  <div className="w-8 md:w-12 h-px bg-gentle-green/60"></div>
                </div>
              </div>

              {/* Enhanced border glow */}
              <div 
                className={`absolute inset-0 rounded-2xl md:rounded-3xl transition-all duration-500 ${
                  (hoveredId === artwork.id || touchedId === artwork.id)
                    ? 'ring-1 md:ring-2 ring-warm-terracotta/40 ring-offset-2 md:ring-offset-4 ring-offset-soft-beige shadow-2xl' 
                    : ''
                }`}
              />
              
              {/* Mobile touch indicator */}
              {isMobile && touchedId === artwork.id && (
                <div className="absolute top-2 left-2 bg-warm-terracotta/90 text-soft-beige px-2 py-1 rounded-full text-xs font-helvetica animate-pulse">
                  Toque novamente para abrir
                </div>
              )}
            </div>

            {/* Enhanced bottom info */}
            <div className="mt-4 md:mt-8 px-1 md:px-2">
              <h3 className="font-semplicita text-sm md:text-xl font-light text-deep-black mb-1 md:mb-2 group-hover:text-warm-terracotta transition-colors duration-300 leading-tight">
                {artwork.title}
              </h3>
              <p className="font-helvetica text-xs md:text-sm text-deep-black/70 mb-1">Simone Oliveira</p>
              <p className="font-helvetica text-xs text-deep-black/60">{artwork.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal with Contact Buttons */}
      {selectedArtwork && (
        <div className="fixed inset-0 bg-deep-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-soft-beige rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-elegant" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="relative">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-12 flex flex-col justify-center">
                <h2 className="font-semplicita text-2xl sm:text-4xl font-light text-deep-black mb-4 leading-tight">
                  {selectedArtwork.title}
                </h2>
                <p className="font-helvetica text-base sm:text-lg text-deep-black/80 mb-2">Simone Oliveira</p>
                <p className="font-helvetica text-sm text-deep-black/60 mb-6 sm:mb-8">
                  {selectedArtwork.year} • {selectedArtwork.medium}
                </p>
                <div className="w-16 h-px bg-warm-terracotta mb-6 sm:mb-8"></div>
                <p className="font-helvetica text-deep-black/80 leading-relaxed justified-text mb-6 sm:mb-8 text-sm sm:text-base">
                  {selectedArtwork.description}
                </p>
                
                {/* Contact Buttons */}
                <div className="space-y-4 mb-6 sm:mb-8">
                  <p className="font-helvetica text-sm text-deep-black/70 mb-4">
                    Interessado nesta obra? Entre em contato para mais informações:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleWhatsAppContact(selectedArtwork)}
                      className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-helvetica font-medium rounded-full transition-all duration-300 shadow-elegant hover-lift-elegant touch-manipulation active:scale-95"
                      style={{ minHeight: '48px' }}
                    >
                      <MessageCircle size={18} className="mr-2" />
                      WhatsApp
                    </button>
                    
                    <button
                      onClick={() => handleEmailContact(selectedArtwork)}
                      className="flex items-center justify-center px-6 py-3 bg-warm-terracotta hover:bg-warm-terracotta/90 text-soft-beige font-helvetica font-medium rounded-full transition-all duration-300 shadow-elegant hover-lift-elegant touch-manipulation active:scale-95"
                      style={{ minHeight: '48px' }}
                    >
                      <Mail size={18} className="mr-2" />
                      E-mail
                    </button>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="self-start px-8 py-3 bg-deep-black/10 hover:bg-deep-black/20 text-deep-black font-helvetica font-medium rounded-full transition-all duration-300 shadow-elegant hover-lift-elegant touch-manipulation active:scale-95"
                  style={{ minHeight: '48px' }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtworkGrid;
