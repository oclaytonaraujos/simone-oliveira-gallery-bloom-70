
import { useState } from 'react';

interface Artwork {
  id: number;
  title: string;
  artist: string;
  image: string;
  year: string;
  medium: string;
}

const ArtworkGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Placeholder artworks - serão substituídas por dados reais posteriormente
  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Reflexões Urbanas",
      artist: "Ana Costa",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Óleo sobre tela"
    },
    {
      id: 2,
      title: "Movimento Azul",
      artist: "Carlos Mendes",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=600&h=800",
      year: "2023",
      medium: "Acrílica sobre tela"
    },
    {
      id: 3,
      title: "Geometria Orgânica",
      artist: "Mariana Silva",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2024",
      medium: "Técnica mista"
    },
    {
      id: 4,
      title: "Horizontes",
      artist: "Roberto Lima",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800",
      year: "2023",
      medium: "Óleo sobre tela"
    },
    {
      id: 5,
      title: "Abstração Verde",
      artist: "Lucia Santos",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Acrílica sobre tela"
    },
    {
      id: 6,
      title: "Formas em Diálogo",
      artist: "Pedro Oliveira",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2023",
      medium: "Escultura em bronze"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {artworks.map((artwork) => (
        <div
          key={artwork.id}
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredId(artwork.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-[4/5]">
            <img
              src={artwork.image}
              alt={artwork.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredId === artwork.id ? 'scale-110' : 'scale-100'
              }`}
            />
            <div 
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredId === artwork.id ? 'opacity-20' : 'opacity-0'
              }`}
            />
            <div 
              className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white transition-opacity duration-300 ${
                hoveredId === artwork.id ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <h3 className="font-playfair text-lg font-semibold">{artwork.title}</h3>
              <p className="font-inter text-sm opacity-90">{artwork.artist}</p>
              <p className="font-inter text-xs opacity-75">{artwork.year} • {artwork.medium}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid;
