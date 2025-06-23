
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AdminAuth from '../components/AdminAuth';
import { Plus, Edit, Trash2, Save, X, Upload, Calendar, MapPin } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  image: string;
  year: string;
  medium: string;
  description: string;
}

interface Exhibition {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  status: 'current' | 'upcoming' | 'past';
  location: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'artworks' | 'exhibitions'>('artworks');
  
  const [artworks, setArtworks] = useState<Artwork[]>([
    {
      id: 1,
      title: "Reflexões Urbanas",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800",
      year: "2024",
      medium: "Óleo sobre tela",
      description: "Uma exploração profunda dos contrastes da vida urbana moderna."
    },
    {
      id: 2,
      title: "Movimento Azul",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=600&h=800",
      year: "2023",
      medium: "Acrílica sobre tela",
      description: "Uma dança de tons azuis que captura a fluidez do movimento natural."
    }
  ]);

  const [exhibitions, setExhibitions] = useState<Exhibition[]>([
    {
      id: 1,
      title: "Reflexões da Modernidade",
      description: "Uma exploração profunda das tensões urbanas através de pintura e técnica mista contemporânea.",
      startDate: "2024-01-15",
      endDate: "2024-03-30",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600",
      status: 'current',
      location: "Galeria Nacional de Arte, São Paulo"
    },
    {
      id: 2,
      title: "Geometrias Orgânicas",
      description: "Um diálogo entre formas geométricas e elementos naturais em uma coleção única de obras.",
      startDate: "2024-02-01",
      endDate: "2024-04-15",
      image: "https://images.unsplash.com/photo-1594736797933-d0d6a5d80b62?w=800&h=600",
      status: 'current',
      location: "Centro Cultural Vila Madalena"
    }
  ]);

  const [editingArtworkId, setEditingArtworkId] = useState<number | null>(null);
  const [editingExhibitionId, setEditingExhibitionId] = useState<number | null>(null);
  const [isAddingArtwork, setIsAddingArtwork] = useState(false);
  const [isAddingExhibition, setIsAddingExhibition] = useState(false);
  const [artworkFormData, setArtworkFormData] = useState<Partial<Artwork>>({});
  const [exhibitionFormData, setExhibitionFormData] = useState<Partial<Exhibition>>({});

  // Artwork handlers
  const handleEditArtwork = (artwork: Artwork) => {
    setEditingArtworkId(artwork.id);
    setArtworkFormData(artwork);
    setIsAddingArtwork(false);
  };

  const handleAddArtwork = () => {
    setIsAddingArtwork(true);
    setEditingArtworkId(null);
    setArtworkFormData({
      title: '',
      image: '',
      year: new Date().getFullYear().toString(),
      medium: '',
      description: ''
    });
  };

  const handleSaveArtwork = () => {
    if (isAddingArtwork) {
      const newArtwork: Artwork = {
        id: Math.max(...artworks.map(a => a.id)) + 1,
        title: artworkFormData.title || '',
        image: artworkFormData.image || '',
        year: artworkFormData.year || '',
        medium: artworkFormData.medium || '',
        description: artworkFormData.description || ''
      };
      setArtworks([...artworks, newArtwork]);
    } else if (editingArtworkId) {
      setArtworks(artworks.map(artwork => 
        artwork.id === editingArtworkId 
          ? { ...artwork, ...artworkFormData }
          : artwork
      ));
    }
    setEditingArtworkId(null);
    setIsAddingArtwork(false);
    setArtworkFormData({});
  };

  const handleCancelArtwork = () => {
    setEditingArtworkId(null);
    setIsAddingArtwork(false);
    setArtworkFormData({});
  };

  const handleDeleteArtwork = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta obra?')) {
      setArtworks(artworks.filter(artwork => artwork.id !== id));
    }
  };

  // Exhibition handlers
  const handleEditExhibition = (exhibition: Exhibition) => {
    setEditingExhibitionId(exhibition.id);
    setExhibitionFormData(exhibition);
    setIsAddingExhibition(false);
  };

  const handleAddExhibition = () => {
    setIsAddingExhibition(true);
    setEditingExhibitionId(null);
    setExhibitionFormData({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      image: '',
      status: 'upcoming',
      location: ''
    });
  };

  const handleSaveExhibition = () => {
    if (isAddingExhibition) {
      const newExhibition: Exhibition = {
        id: Math.max(...exhibitions.map(e => e.id)) + 1,
        title: exhibitionFormData.title || '',
        description: exhibitionFormData.description || '',
        startDate: exhibitionFormData.startDate || '',
        endDate: exhibitionFormData.endDate || '',
        image: exhibitionFormData.image || '',
        status: exhibitionFormData.status || 'upcoming',
        location: exhibitionFormData.location || ''
      };
      setExhibitions([...exhibitions, newExhibition]);
    } else if (editingExhibitionId) {
      setExhibitions(exhibitions.map(exhibition => 
        exhibition.id === editingExhibitionId 
          ? { ...exhibition, ...exhibitionFormData }
          : exhibition
      ));
    }
    setEditingExhibitionId(null);
    setIsAddingExhibition(false);
    setExhibitionFormData({});
  };

  const handleCancelExhibition = () => {
    setEditingExhibitionId(null);
    setIsAddingExhibition(false);
    setExhibitionFormData({});
  };

  const handleDeleteExhibition = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta exposição?')) {
      setExhibitions(exhibitions.filter(exhibition => exhibition.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'artwork' | 'exhibition') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === 'artwork') {
          setArtworkFormData({ ...artworkFormData, image: e.target?.result as string });
        } else {
          setExhibitionFormData({ ...exhibitionFormData, image: e.target?.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-soft-beige">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-semplicita text-5xl lg:text-6xl font-light text-deep-black mb-6 leading-tight">
              Administração
            </h1>
            <p className="font-helvetica text-lg text-deep-black/80 max-w-2xl mx-auto justified-text">
              Gerencie o acervo de obras e exposições da galeria Simone Oliveira.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-1 bg-gentle-green/10 p-1 rounded-2xl mb-12 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('artworks')}
              className={`flex-1 py-3 px-6 rounded-xl font-helvetica font-medium text-sm transition-all duration-300 ${
                activeTab === 'artworks'
                  ? 'bg-warm-terracotta text-soft-beige shadow-lg'
                  : 'text-deep-black hover:text-warm-terracotta hover:bg-gentle-green/20'
              }`}
            >
              Obras
            </button>
            <button
              onClick={() => setActiveTab('exhibitions')}
              className={`flex-1 py-3 px-6 rounded-xl font-helvetica font-medium text-sm transition-all duration-300 ${
                activeTab === 'exhibitions'
                  ? 'bg-warm-terracotta text-soft-beige shadow-lg'
                  : 'text-deep-black hover:text-warm-terracotta hover:bg-gentle-green/20'
              }`}
            >
              Exposições
            </button>
          </div>

          {/* Add New Button */}
          <div className="mb-12 text-center">
            <button
              onClick={activeTab === 'artworks' ? handleAddArtwork : handleAddExhibition}
              className="inline-flex items-center px-8 py-4 bg-warm-terracotta text-soft-beige font-helvetica font-medium rounded-full hover:bg-warm-terracotta/90 transition-all duration-300 shadow-elegant hover-lift-elegant"
            >
              <Plus size={20} className="mr-2" />
              {activeTab === 'artworks' ? 'Adicionar Nova Obra' : 'Adicionar Nova Exposição'}
            </button>
          </div>

          {/* Artworks Tab */}
          {activeTab === 'artworks' && (
            <>
              {/* Artwork Form */}
              {(isAddingArtwork || editingArtworkId) && (
                <div className="mb-12 bg-gentle-green/10 rounded-3xl p-8 border border-gentle-green/20">
                  <h3 className="font-semplicita text-2xl font-light text-deep-black mb-8">
                    {isAddingArtwork ? 'Adicionar Nova Obra' : 'Editar Obra'}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                          Título
                        </label>
                        <input
                          type="text"
                          value={artworkFormData.title || ''}
                          onChange={(e) => setArtworkFormData({ ...artworkFormData, title: e.target.value })}
                          className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                          placeholder="Nome da obra"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                            Ano
                          </label>
                          <input
                            type="text"
                            value={artworkFormData.year || ''}
                            onChange={(e) => setArtworkFormData({ ...artworkFormData, year: e.target.value })}
                            className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                            placeholder="2024"
                          />
                        </div>
                        
                        <div>
                          <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                            Técnica
                          </label>
                          <input
                            type="text"
                            value={artworkFormData.medium || ''}
                            onChange={(e) => setArtworkFormData({ ...artworkFormData, medium: e.target.value })}
                            className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                            placeholder="Óleo sobre tela"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                          Descrição
                        </label>
                        <textarea
                          value={artworkFormData.description || ''}
                          onChange={(e) => setArtworkFormData({ ...artworkFormData, description: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica resize-none"
                          placeholder="Descrição da obra..."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                        Imagem
                      </label>
                      <div className="border-2 border-dashed border-gentle-green/30 rounded-xl p-8 text-center hover:border-warm-terracotta/50 transition-all duration-300">
                        {artworkFormData.image ? (
                          <div className="relative">
                            <img
                              src={artworkFormData.image}
                              alt="Preview"
                              className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <button
                              onClick={() => setArtworkFormData({ ...artworkFormData, image: '' })}
                              className="absolute top-2 right-2 p-2 bg-warm-terracotta text-soft-beige rounded-full hover:bg-warm-terracotta/90 transition-all duration-300"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <Upload size={48} className="mx-auto text-gentle-green/60 mb-4" />
                            <p className="font-helvetica text-deep-black/60 mb-4">
                              Clique para fazer upload ou cole uma URL
                            </p>
                          </div>
                        )}
                        
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, 'artwork')}
                          className="hidden"
                          id="artwork-image-upload"
                        />
                        <label
                          htmlFor="artwork-image-upload"
                          className="inline-block px-6 py-2 bg-gentle-green/20 text-deep-black font-helvetica text-sm rounded-full cursor-pointer hover:bg-gentle-green/30 transition-all duration-300 mb-2"
                        >
                          Upload Arquivo
                        </label>
                        
                        <input
                          type="url"
                          value={artworkFormData.image || ''}
                          onChange={(e) => setArtworkFormData({ ...artworkFormData, image: e.target.value })}
                          className="w-full px-4 py-2 bg-soft-beige border border-gentle-green/30 rounded-lg text-sm font-helvetica mt-2"
                          placeholder="ou cole uma URL da imagem"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4 mt-8">
                    <button
                      onClick={handleCancelArtwork}
                      className="px-6 py-3 bg-gentle-green/20 text-deep-black font-helvetica font-medium rounded-full hover:bg-gentle-green/30 transition-all duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSaveArtwork}
                      className="inline-flex items-center px-6 py-3 bg-warm-terracotta text-soft-beige font-helvetica font-medium rounded-full hover:bg-warm-terracotta/90 transition-all duration-300 shadow-elegant"
                    >
                      <Save size={18} className="mr-2" />
                      Salvar
                    </button>
                  </div>
                </div>
              )}

              {/* Artworks List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {artworks.map((artwork) => (
                  <div key={artwork.id} className="bg-soft-beige border border-gentle-green/20 rounded-3xl overflow-hidden shadow-elegant hover-lift-elegant">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button
                          onClick={() => handleEditArtwork(artwork)}
                          className="p-2 bg-soft-beige/90 rounded-full hover:bg-soft-beige transition-all duration-300 shadow-lg"
                        >
                          <Edit size={16} className="text-warm-terracotta" />
                        </button>
                        <button
                          onClick={() => handleDeleteArtwork(artwork.id)}
                          className="p-2 bg-soft-beige/90 rounded-full hover:bg-soft-beige transition-all duration-300 shadow-lg"
                        >
                          <Trash2 size={16} className="text-warm-terracotta" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-semplicita text-xl font-light text-deep-black mb-2">
                        {artwork.title}
                      </h3>
                      <p className="font-helvetica text-sm text-deep-black/70 mb-1">
                        {artwork.year} • {artwork.medium}
                      </p>
                      <p className="font-helvetica text-sm text-deep-black/60 line-clamp-2">
                        {artwork.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Exhibitions Tab */}
          {activeTab === 'exhibitions' && (
            <>
              {/* Exhibition Form */}
              {(isAddingExhibition || editingExhibitionId) && (
                <div className="mb-12 bg-gentle-green/10 rounded-3xl p-8 border border-gentle-green/20">
                  <h3 className="font-semplicita text-2xl font-light text-deep-black mb-8">
                    {isAddingExhibition ? 'Adicionar Nova Exposição' : 'Editar Exposição'}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                          Título
                        </label>
                        <input
                          type="text"
                          value={exhibitionFormData.title || ''}
                          onChange={(e) => setExhibitionFormData({ ...exhibitionFormData, title: e.target.value })}
                          className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                          placeholder="Nome da exposição"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                          Localização
                        </label>
                        <input
                          type="text"
                          value={exhibitionFormData.location || ''}
                          onChange={(e) => setExhibitionFormData({ ...exhibitionFormData, location: e.target.value })}
                          className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                          placeholder="Local da exposição"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                            Data de Início
                          </label>
                          <input
                            type="date"
                            value={exhibitionFormData.startDate || ''}
                            onChange={(e) => setExhibitionFormData({ ...exhibitionFormData, startDate: e.target.value })}
                            className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                          />
                        </div>
                        
                        <div>
                          <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                            Data de Término
                          </label>
                          <input
                            type="date"
                            value={exhibitionFormData.endDate || ''}
                            onChange={(e) => setExhibitionFormData({ ...exhibitionFormData, endDate: e.target.value })}
                            className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                          Status
                        </label>
                        <select
                          value={exhibitionFormData.status || 'upcoming'}
                          onChange={(e) => setExhibitionFormData({ ...exhibitionFormData, status: e.target.value as Exhibition['status'] })}
                          className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica"
                        >
                          <option value="upcoming">Em Breve</option>
                          <option value="current">Em Cartaz</option>
                          <option value="past">Finalizada</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                          Descrição
                        </label>
                        <textarea
                          value={exhibitionFormData.description || ''}
                          onChange={(e) => setExhibitionFormData({ ...exhibitionFormData, description: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 bg-soft-beige border border-gentle-green/30 rounded-xl focus:ring-2 focus:ring-warm-terracotta/20 focus:border-warm-terracotta transition-all duration-300 font-helvetica resize-none"
                          placeholder="Descrição da exposição..."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                        Imagem
                      </label>
                      <div className="border-2 border-dashed border-gentle-green/30 rounded-xl p-8 text-center hover:border-warm-terracotta/50 transition-all duration-300">
                        {exhibitionFormData.image ? (
                          <div className="relative">
                            <img
                              src={exhibitionFormData.image}
                              alt="Preview"
                              className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <button
                              onClick={() => setExhibitionFormData({ ...exhibitionFormData, image: '' })}
                              className="absolute top-2 right-2 p-2 bg-warm-terracotta text-soft-beige rounded-full hover:bg-warm-terracotta/90 transition-all duration-300"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <Upload size={48} className="mx-auto text-gentle-green/60 mb-4" />
                            <p className="font-helvetica text-deep-black/60 mb-4">
                              Clique para fazer upload ou cole uma URL
                            </p>
                          </div>
                        )}
                        
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, 'exhibition')}
                          className="hidden"
                          id="exhibition-image-upload"
                        />
                        <label
                          htmlFor="exhibition-image-upload"
                          className="inline-block px-6 py-2 bg-gentle-green/20 text-deep-black font-helvetica text-sm rounded-full cursor-pointer hover:bg-gentle-green/30 transition-all duration-300 mb-2"
                        >
                          Upload Arquivo
                        </label>
                        
                        <input
                          type="url"
                          value={exhibitionFormData.image || ''}
                          onChange={(e) => setExhibitionFormData({ ...exhibitionFormData, image: e.target.value })}
                          className="w-full px-4 py-2 bg-soft-beige border border-gentle-green/30 rounded-lg text-sm font-helvetica mt-2"
                          placeholder="ou cole uma URL da imagem"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-4 mt-8">
                    <button
                      onClick={handleCancelExhibition}
                      className="px-6 py-3 bg-gentle-green/20 text-deep-black font-helvetica font-medium rounded-full hover:bg-gentle-green/30 transition-all duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleSaveExhibition}
                      className="inline-flex items-center px-6 py-3 bg-warm-terracotta text-soft-beige font-helvetica font-medium rounded-full hover:bg-warm-terracotta/90 transition-all duration-300 shadow-elegant"
                    >
                      <Save size={18} className="mr-2" />
                      Salvar
                    </button>
                  </div>
                </div>
              )}

              {/* Exhibitions List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {exhibitions.map((exhibition) => (
                  <div key={exhibition.id} className="bg-soft-beige border border-gentle-green/20 rounded-3xl overflow-hidden shadow-elegant hover-lift-elegant">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={exhibition.image}
                        alt={exhibition.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exhibition.status === 'current' ? 'text-green-600 bg-green-100' :
                          exhibition.status === 'upcoming' ? 'text-blue-600 bg-blue-100' :
                          'text-gray-600 bg-gray-100'
                        }`}>
                          {exhibition.status === 'current' ? 'Em Cartaz' :
                           exhibition.status === 'upcoming' ? 'Em Breve' : 'Finalizada'}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 flex space-x-2">
                        <button
                          onClick={() => handleEditExhibition(exhibition)}
                          className="p-2 bg-soft-beige/90 rounded-full hover:bg-soft-beige transition-all duration-300 shadow-lg"
                        >
                          <Edit size={16} className="text-warm-terracotta" />
                        </button>
                        <button
                          onClick={() => handleDeleteExhibition(exhibition.id)}
                          className="p-2 bg-soft-beige/90 rounded-full hover:bg-soft-beige transition-all duration-300 shadow-lg"
                        >
                          <Trash2 size={16} className="text-warm-terracotta" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semplicita text-xl font-light text-deep-black mb-2">
                        {exhibition.title}
                      </h3>
                      <p className="font-helvetica text-sm text-deep-black/60 mb-4 leading-relaxed">
                        {exhibition.description}
                      </p>
                      <div className="flex items-center text-deep-black/50 text-sm mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>
                          {new Date(exhibition.startDate).toLocaleDateString('pt-BR')} - {new Date(exhibition.endDate).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <div className="flex items-center text-deep-black/50 text-sm">
                        <MapPin size={16} className="mr-2" />
                        <span>{exhibition.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
