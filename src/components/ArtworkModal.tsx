
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Artwork } from '../hooks/useArtworks';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

const ArtworkModal = ({ artwork, onClose }: ArtworkModalProps) => {
  if (!artwork) return null;

  return (
    <Dialog open={!!artwork} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-soft-beige border-gentle-green/20">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="font-semplicita text-2xl font-light text-deep-black">
              {artwork.title}
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gentle-green/10 rounded-full transition-colors duration-300"
            >
              <X size={20} className="text-deep-black/70" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl">
            <img
              src={artwork.image}
              alt={artwork.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semplicita text-xl font-light text-deep-black mb-4">
                Detalhes da Obra
              </h3>
              
              <div className="space-y-3">
                <div>
                  <span className="font-helvetica text-sm font-medium text-deep-black/70">Ano:</span>
                  <p className="font-helvetica text-deep-black">{artwork.year}</p>
                </div>
                
                <div>
                  <span className="font-helvetica text-sm font-medium text-deep-black/70">Técnica:</span>
                  <p className="font-helvetica text-deep-black">{artwork.medium}</p>
                </div>
                
                {artwork.dimensions && (
                  <div>
                    <span className="font-helvetica text-sm font-medium text-deep-black/70">Dimensões:</span>
                    <p className="font-helvetica text-deep-black">{artwork.dimensions}</p>
                  </div>
                )}
                
                {artwork.description && (
                  <div>
                    <span className="font-helvetica text-sm font-medium text-deep-black/70">Descrição:</span>
                    <p className="font-helvetica text-deep-black leading-relaxed">{artwork.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ArtworkModal;
