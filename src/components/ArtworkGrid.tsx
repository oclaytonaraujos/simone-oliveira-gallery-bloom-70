
import { useArtworks } from '../hooks/useArtworks';
import { useIsMobile } from '../hooks/use-mobile';

const ArtworkGrid = () => {
  const { data: artworks, isLoading, error } = useArtworks();
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-gentle-green/10 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-deep-black/70 font-helvetica">Erro ao carregar as obras</p>
      </div>
    );
  }

  if (!artworks || artworks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-deep-black/70 font-helvetica">Nenhuma obra encontrada</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {artworks.map((artwork, index) => (
        <div
          key={artwork.id}
          className="group cursor-pointer stagger-animation hover-lift-elegant"
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-elegant bg-soft-beige aspect-[3/4]">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-deep-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="font-semplicita text-lg sm:text-xl text-soft-beige mb-2 font-light">
                  {artwork.title}
                </h3>
                <p className="font-helvetica text-soft-beige/80 text-sm mb-1">
                  {artwork.year} • {artwork.medium}
                </p>
                {artwork.description && (
                  <p className="font-helvetica text-soft-beige/70 text-sm line-clamp-2">
                    {artwork.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtworkGrid;
