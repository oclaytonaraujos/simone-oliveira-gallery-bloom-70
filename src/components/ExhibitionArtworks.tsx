
import { useState } from 'react';
import { useArtworks } from '../hooks/useArtworks';
import { useExhibitionArtworks, useAddArtworkToExhibition, useRemoveArtworkFromExhibition } from '../hooks/useExhibitionArtworks';
import { Plus, X, Image } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ExhibitionArtworksProps {
  exhibitionId: string;
  exhibitionTitle: string;
}

const ExhibitionArtworks = ({ exhibitionId, exhibitionTitle }: ExhibitionArtworksProps) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  
  const { data: allArtworks = [] } = useArtworks();
  const { data: exhibitionArtworks = [], isLoading } = useExhibitionArtworks(exhibitionId);
  const addArtworkMutation = useAddArtworkToExhibition();
  const removeArtworkMutation = useRemoveArtworkFromExhibition();

  const currentArtworkIds = exhibitionArtworks.map(ea => ea.artwork_id);
  const availableArtworks = allArtworks.filter(artwork => !currentArtworkIds.includes(artwork.id));

  const handleAddArtwork = async (artworkId: string) => {
    try {
      await addArtworkMutation.mutateAsync({ exhibition_id: exhibitionId, artwork_id: artworkId });
      toast.success('Obra adicionada à exposição!');
      setIsAddDialogOpen(false);
    } catch (error) {
      toast.error('Erro ao adicionar obra à exposição');
    }
  };

  const handleRemoveArtwork = async (exhibitionArtworkId: string) => {
    if (window.confirm('Tem certeza que deseja remover esta obra da exposição?')) {
      try {
        await removeArtworkMutation.mutateAsync(exhibitionArtworkId);
        toast.success('Obra removida da exposição!');
      } catch (error) {
        toast.error('Erro ao remover obra da exposição');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-6 bg-gentle-green/10 rounded animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="aspect-[4/3] bg-gentle-green/10 rounded-xl animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h4 className="font-semplicita text-lg font-light text-deep-black">
          Obras da Exposição ({exhibitionArtworks.length})
        </h4>
        
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="bg-warm-terracotta/10 border-warm-terracotta/30 text-warm-terracotta hover:bg-warm-terracotta hover:text-soft-beige"
            >
              <Plus size={16} className="mr-2" />
              Adicionar Obra
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-soft-beige">
            <DialogHeader>
              <DialogTitle className="font-semplicita text-xl font-light text-deep-black">
                Adicionar Obra à {exhibitionTitle}
              </DialogTitle>
            </DialogHeader>
            
            {availableArtworks.length === 0 ? (
              <div className="text-center py-8">
                <Image size={48} className="mx-auto text-gentle-green/60 mb-4" />
                <p className="font-helvetica text-deep-black/60">
                  Todas as obras já estão nesta exposição ou não há obras cadastradas.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableArtworks.map((artwork) => (
                  <div
                    key={artwork.id}
                    className="group cursor-pointer bg-gentle-green/5 rounded-xl overflow-hidden border border-gentle-green/20 hover:border-warm-terracotta/50 transition-all duration-300"
                    onClick={() => handleAddArtwork(artwork.id)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h5 className="font-semplicita text-sm font-light text-deep-black mb-1">
                        {artwork.title}
                      </h5>
                      <p className="font-helvetica text-xs text-deep-black/70">
                        {artwork.year} • {artwork.medium}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {exhibitionArtworks.length === 0 ? (
        <div className="text-center py-8 bg-gentle-green/5 rounded-xl border border-gentle-green/20">
          <Image size={48} className="mx-auto text-gentle-green/60 mb-4" />
          <p className="font-helvetica text-deep-black/60">
            Nenhuma obra adicionada a esta exposição ainda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exhibitionArtworks.map((exhibitionArtwork) => (
            <div
              key={exhibitionArtwork.id}
              className="group relative bg-soft-beige rounded-xl overflow-hidden border border-gentle-green/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={exhibitionArtwork.artwork.image}
                  alt={exhibitionArtwork.artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button
                onClick={() => handleRemoveArtwork(exhibitionArtwork.id)}
                disabled={removeArtworkMutation.isPending}
                className="absolute top-2 right-2 p-1.5 bg-warm-terracotta text-soft-beige rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-warm-terracotta/90 disabled:opacity-50"
              >
                <X size={14} />
              </button>
              
              <div className="p-3">
                <h5 className="font-semplicita text-sm font-light text-deep-black mb-1">
                  {exhibitionArtwork.artwork.title}
                </h5>
                <p className="font-helvetica text-xs text-deep-black/70">
                  {exhibitionArtwork.artwork.year} • {exhibitionArtwork.artwork.medium}
                </p>
                {exhibitionArtwork.artwork.dimensions && (
                  <p className="font-helvetica text-xs text-deep-black/60">
                    {exhibitionArtwork.artwork.dimensions}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExhibitionArtworks;
