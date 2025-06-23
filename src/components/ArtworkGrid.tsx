
import { useState, useEffect } from 'react';
import { Eye, Heart, Share2, ZoomIn } from 'lucide-react';

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
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

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
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className="group cursor-pointer stagger-animation"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredId(artwork.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleArtworkClick(artwork)}
          >
            <div className="relative overflow-hidden bg-soft-beige rounded-3xl aspect-[4/5] shadow-elegant hover-lift-elegant transition-all duration-700">
              {/* Loading skeleton */}
              {!loadedImages.has(artwork.id) && (
                <div className="absolute inset-0 bg-gradient-to-r from-gentle-green/20 via-light-blue/20 to-gentle-green/20 animate-pulse" />
              )}
              
              <img
                src={artwork.image}
                alt={artwork.title}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  hoveredId === artwork.id ? 'scale-110 brightness-110' : 'scale-100'
                } ${loadedImages.has(artwork.id) ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(artwork.id)}
              />
              
              {/* Enhanced gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-transparent transition-all duration-500 ${
                  hoveredId === artwork.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Enhanced action buttons */}
              <div 
                className={`absolute top-6 right-6 flex flex-col space-y-3 transition-all duration-500 ${
                  hoveredId === artwork.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
                }`}
              >
                {[ZoomIn, Heart, Share2].map((Icon, idx) => (
                  <button
                    key={idx}
                    className="w-12 h-12 bg-soft-beige/90 rounded-full flex items-center justify-center backdrop-blur-lg border border-gentle-green/30 hover:bg-soft-beige hover:scale-110 transition-all duration-300 shadow-elegant"
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (idx === 0) handleArtworkClick(artwork);
                    }}
                  >
                    <Icon size={18} className="text-warm-terracotta" />
                  </button>
                ))}
              </div>
              
              {/* Enhanced content */}
              <div 
                className={`absolute bottom-0 left-0 right-0 p-8 text-soft-beige transition-all duration-500 ${
                  hoveredId === artwork.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="mb-4">
                  <h3 className="font-semplicita text-2xl font-light mb-3 leading-tight">{artwork.title}</h3>
                  <p className="font-helvetica text-sm opacity-90 mb-2">Por Simone Oliveira</p>
                  <p className="font-helvetica text-xs opacity-75 mb-4">{artwork.year} • {artwork.medium}</p>
                  <div className="w-12 h-px bg-gentle-green/60"></div>
                </div>
              </div>

              {/* Enhanced border glow */}
              <div 
                className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                  hoveredId === artwork.id 
                    ? 'ring-2 ring-warm-terracotta/40 ring-offset-4 ring-offset-soft-beige shadow-2xl' 
                    : ''
                }`}
              />
            </div>

            {/* Enhanced bottom info */}
            <div className="mt-8 px-2">
              <h3 className="font-semplicita text-xl font-light text-deep-black mb-2 group-hover:text-warm-terracotta transition-colors duration-300 leading-tight">
                {artwork.title}
              </h3>
              <p className="font-helvetica text-sm text-deep-black/70 mb-1">Simone Oliveira</p>
              <p className="font-helvetica text-xs text-deep-black/60">{artwork.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal */}
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
              <div className="p-12 flex flex-col justify-center">
                <h2 className="font-semplicita text-4xl font-light text-deep-black mb-4 leading-tight">
                  {selectedArtwork.title}
                </h2>
                <p className="font-helvetica text-lg text-deep-black/80 mb-2">Simone Oliveira</p>
                <p className="font-helvetica text-sm text-deep-black/60 mb-8">
                  {selectedArtwork.year} • {selectedArtwork.medium}
                </p>
                <div className="w-16 h-px bg-warm-terracotta mb-8"></div>
                <p className="font-helvetica text-deep-black/80 leading-relaxed justified-text mb-8">
                  {selectedArtwork.description}
                </p>
                <button
                  onClick={closeModal}
                  className="self-start px-8 py-3 bg-warm-terracotta text-soft-beige font-helvetica font-medium rounded-full hover:bg-warm-terracotta/90 transition-all duration-300 shadow-elegant hover-lift-elegant"
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
