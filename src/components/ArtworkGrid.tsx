
import { useState, useEffect } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  year: string;
  medium: string;
  price?: string;
}

const ArtworkGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Placeholder artworks - serão substituídas por dados reais posteriormente
  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Reflexões Urbanas",
      artist: "Ana Costa",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Óleo sobre tela",
      price: "R$ 8.500"
    },
    {
      id: 2,
      title: "Movimento Azul",
      artist: "Carlos Mendes",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=600&h=800",
      year: "2023",
      medium: "Acrílica sobre tela",
      price: "R$ 12.000"
    },
    {
      id: 3,
      title: "Geometria Orgânica",
      artist: "Mariana Silva",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2024",
      medium: "Técnica mista",
      price: "R$ 6.800"
    },
    {
      id: 4,
      title: "Horizontes",
      artist: "Roberto Lima",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800",
      year: "2023",
      medium: "Óleo sobre tela",
      price: "R$ 15.500"
    },
    {
      id: 5,
      title: "Abstração Verde",
      artist: "Lucia Santos",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Acrílica sobre tela",
      price: "R$ 9.200"
    },
    {
      id: 6,
      title: "Formas em Diálogo",
      artist: "Pedro Oliveira",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2023",
      medium: "Escultura em bronze",
      price: "R$ 22.000"
    }
  ];

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork, index) => (
        <div
          key={artwork.id}
          className="group cursor-pointer stagger-animation"
          style={{ animationDelay: `${index * 0.1}s` }}
          onMouseEnter={() => setHoveredId(artwork.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-neutral-warm to-white rounded-3xl aspect-[4/5] shadow-modern hover-lift">
            {/* Loading skeleton */}
            {!loadedImages.has(artwork.id) && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
            )}
            
            <img
              src={artwork.image}
              alt={artwork.title}
              className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                hoveredId === artwork.id ? 'scale-110' : 'scale-100'
              } ${loadedImages.has(artwork.id) ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => handleImageLoad(artwork.id)}
            />
            
            {/* Gradient overlay */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                hoveredId === artwork.id ? 'opacity-100' : 'opacity-0'
              }`}
            />
            
            {/* Action buttons */}
            <div 
              className={`absolute top-4 right-4 flex space-x-2 transition-all duration-500 ${
                hoveredId === artwork.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              {[Eye, Heart, Share2].map((Icon, idx) => (
                <button
                  key={idx}
                  className="w-10 h-10 bg-glass rounded-full flex items-center justify-center backdrop-blur-lg border border-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <Icon size={16} className="text-white" />
                </button>
              ))}
            </div>
            
            {/* Content */}
            <div 
              className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
                hoveredId === artwork.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="mb-4">
                <h3 className="font-playfair text-xl font-semibold mb-2">{artwork.title}</h3>
                <p className="font-inter text-sm opacity-90 mb-1">{artwork.artist}</p>
                <p className="font-inter text-xs opacity-75 mb-2">{artwork.year} • {artwork.medium}</p>
                {artwork.price && (
                  <p className="font-inter text-sm font-semibold bg-terracotta/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    {artwork.price}
                  </p>
                )}
              </div>
            </div>

            {/* Subtle border glow */}
            <div 
              className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                hoveredId === artwork.id 
                  ? 'ring-2 ring-terracotta/30 ring-offset-2 ring-offset-white' 
                  : ''
              }`}
            />
          </div>

          {/* Bottom info (always visible) */}
          <div className="mt-6 px-2">
            <h3 className="font-playfair text-lg font-semibold text-gray-900 mb-1 group-hover:text-terracotta transition-colors duration-300">
              {artwork.title}
            </h3>
            <p className="font-inter text-sm text-gray-600">{artwork.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid;
