
import { useState, useEffect } from 'react';
import { ZoomIn, MessageCircle, Mail } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  image: string;
  year: string;
  medium: string;
  dimensions: string;
  description?: string;
}

const ArtworkHorizontalScroll = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Reflexões Urbanas",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Óleo sobre tela",
      dimensions: "80 x 60 cm",
      description: "Uma exploração profunda dos contrastes da vida urbana moderna, onde cada pincelada revela as camadas ocultas da experiência citadina."
    },
    {
      id: 2,
      title: "Movimento Azul",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=600&h=800",
      year: "2023",
      medium: "Acrílica sobre tela",
      dimensions: "100 x 70 cm",
      description: "Uma dança de tons azuis que captura a fluidez e a serenidade do movimento natural, inspirada nas ondas do oceano."
    },
    {
      id: 3,
      title: "Geometria Orgânica",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2024",
      medium: "Técnica mista",
      dimensions: "90 x 65 cm",
      description: "A harmoniosa fusão entre formas geométricas precisas e elementos orgânicos, criando um diálogo visual único."
    },
    {
      id: 4,
      title: "Horizontes",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800",
      year: "2023",
      medium: "Óleo sobre tela",
      dimensions: "120 x 80 cm",
      description: "Uma contemplação sobre os limites e possibilidades, onde cada horizonte representa um novo começo."
    },
    {
      id: 5,
      title: "Abstração Verde",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Acrílica sobre tela",
      dimensions: "75 x 55 cm",
      description: "Uma celebração da natureza através de formas abstratas que evocam crescimento e renovação."
    },
    {
      id: 6,
      title: "Formas em Diálogo",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2023",
      medium: "Técnica mista",
      dimensions: "85 x 60 cm",
      description: "Um estudo sobre a comunicação visual, onde formas distintas se encontram e criam narrativas inesperadas."
    },
    {
      id: 7,
      title: "Paisagem Interior",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=600&h=800",
      year: "2024",
      medium: "Óleo sobre tela",
      dimensions: "95 x 70 cm",
      description: "Uma jornada introspectiva através de cores e formas que revelam os territórios emocionais da alma."
    },
    {
      id: 8,
      title: "Luz Fragmentada",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=800",
      year: "2023",
      medium: "Técnica mista",
      dimensions: "110 x 80 cm",
      description: "A decomposição da luz em múltiplas facetas, criando um caleidoscópio de sensações visuais."
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

  const handleWhatsAppContact = (artwork: Artwork) => {
    const whatsappNumber = "5511987654321";
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
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-6 px-4 min-w-max">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="flex-shrink-0 w-72 cursor-pointer group"
              onClick={() => handleArtworkClick(artwork)}
            >
              <div className="relative overflow-hidden bg-soft-beige rounded-2xl aspect-[4/5] shadow-elegant hover-lift-elegant transition-all duration-500">
                {!loadedImages.has(artwork.id) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gentle-green/20 via-light-blue/20 to-gentle-green/20 animate-pulse" />
                )}
                
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                    loadedImages.has(artwork.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => handleImageLoad(artwork.id)}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-soft-beige/90 rounded-full flex items-center justify-center backdrop-blur-lg shadow-lg">
                    <ZoomIn size={16} className="text-warm-terracotta" />
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-4 text-soft-beige opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semplicita text-lg font-light mb-1 leading-tight">{artwork.title}</h3>
                  <p className="font-helvetica text-xs opacity-90">{artwork.year} • {artwork.dimensions}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="font-semplicita text-base font-light text-deep-black mb-1 group-hover:text-warm-terracotta transition-colors duration-300">
                  {artwork.title}
                </h3>
                <p className="font-helvetica text-sm text-deep-black/70 mb-1">Simone Oliveira</p>
                <p className="font-helvetica text-xs text-deep-black/60">{artwork.year} • {artwork.dimensions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 bg-deep-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-soft-beige rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-elegant" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/5] lg:aspect-auto">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="font-semplicita text-3xl lg:text-4xl font-light text-deep-black mb-4 leading-tight">
                  {selectedArtwork.title}
                </h2>
                <p className="font-helvetica text-lg text-deep-black/80 mb-2">Simone Oliveira</p>
                <p className="font-helvetica text-sm text-deep-black/60 mb-2">
                  {selectedArtwork.year} • {selectedArtwork.medium}
                </p>
                <p className="font-helvetica text-sm text-deep-black/60 mb-6">
                  Dimensões: {selectedArtwork.dimensions}
                </p>
                <div className="w-16 h-px bg-warm-terracotta mb-6"></div>
                <p className="font-helvetica text-deep-black/80 leading-relaxed mb-8 text-sm lg:text-base">
                  {selectedArtwork.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <p className="font-helvetica text-sm text-deep-black/70">
                    Interessado nesta obra? Entre em contato:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleWhatsAppContact(selectedArtwork)}
                      className="flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-helvetica font-medium rounded-full transition-all duration-300 shadow-elegant hover-lift-elegant"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      WhatsApp
                    </button>
                    
                    <button
                      onClick={() => handleEmailContact(selectedArtwork)}
                      className="flex items-center justify-center px-6 py-3 bg-warm-terracotta hover:bg-warm-terracotta/90 text-soft-beige font-helvetica font-medium rounded-full transition-all duration-300 shadow-elegant hover-lift-elegant"
                    >
                      <Mail size={18} className="mr-2" />
                      E-mail
                    </button>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  className="self-start px-8 py-3 bg-deep-black/10 hover:bg-deep-black/20 text-deep-black font-helvetica font-medium rounded-full transition-all duration-300 shadow-elegant hover-lift-elegant"
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

export default ArtworkHorizontalScroll;
