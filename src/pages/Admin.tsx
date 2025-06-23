
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Plus, Edit, Trash2, Save, X, Upload } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  image: string;
  year: string;
  medium: string;
  description: string;
}

const Admin = () => {
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

  const [editingId, setEditingId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Partial<Artwork>>({
    title: '',
    image: '',
    year: '',
    medium: '',
    description: ''
  });

  const handleEdit = (artwork: Artwork) => {
    setEditingId(artwork.id);
    setFormData(artwork);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      title: '',
      image: '',
      year: new Date().getFullYear().toString(),
      medium: '',
      description: ''
    });
  };

  const handleSave = () => {
    if (isAdding) {
      const newArtwork: Artwork = {
        id: Math.max(...artworks.map(a => a.id)) + 1,
        title: formData.title || '',
        image: formData.image || '',
        year: formData.year || '',
        medium: formData.medium || '',
        description: formData.description || ''
      };
      setArtworks([...artworks, newArtwork]);
    } else if (editingId) {
      setArtworks(artworks.map(artwork => 
        artwork.id === editingId 
          ? { ...artwork, ...formData }
          : artwork
      ));
    }
    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setFormData({});
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta obra?')) {
      setArtworks(artworks.filter(artwork => artwork.id !== id));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Em um app real, você faria upload para um servidor
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData({ ...formData, image: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

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
              Gerencie o acervo de obras de arte da galeria Simone Oliveira.
            </p>
          </div>

          {/* Add New Artwork Button */}
          <div className="mb-12 text-center">
            <button
              onClick={handleAdd}
              className="inline-flex items-center px-8 py-4 bg-warm-terracotta text-soft-beige font-helvetica font-medium rounded-full hover:bg-warm-terracotta/90 transition-all duration-300 shadow-elegant hover-lift-elegant"
            >
              <Plus size={20} className="mr-2" />
              Adicionar Nova Obra
            </button>
          </div>

          {/* Add/Edit Form */}
          {(isAdding || editingId) && (
            <div className="mb-12 bg-gentle-green/10 rounded-3xl p-8 border border-gentle-green/20">
              <h3 className="font-semplicita text-2xl font-light text-deep-black mb-8">
                {isAdding ? 'Adicionar Nova Obra' : 'Editar Obra'}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block font-helvetica text-sm font-medium text-deep-black mb-2">
                      Título
                    </label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                        value={formData.year || ''}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
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
                        value={formData.medium || ''}
                        onChange={(e) => setFormData({ ...formData, medium: e.target.value })}
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
                      value={formData.description || ''}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                    {formData.image ? (
                      <div className="relative">
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <button
                          onClick={() => setFormData({ ...formData, image: '' })}
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
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="inline-block px-6 py-2 bg-gentle-green/20 text-deep-black font-helvetica text-sm rounded-full cursor-pointer hover:bg-gentle-green/30 transition-all duration-300 mb-2"
                    >
                      Upload Arquivo
                    </label>
                    
                    <input
                      type="url"
                      value={formData.image || ''}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-4 py-2 bg-soft-beige border border-gentle-green/30 rounded-lg text-sm font-helvetica mt-2"
                      placeholder="ou cole uma URL da imagem"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 mt-8">
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-gentle-green/20 text-deep-black font-helvetica font-medium rounded-full hover:bg-gentle-green/30 transition-all duration-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
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
                      onClick={() => handleEdit(artwork)}
                      className="p-2 bg-soft-beige/90 rounded-full hover:bg-soft-beige transition-all duration-300 shadow-lg"
                    >
                      <Edit size={16} className="text-warm-terracotta" />
                    </button>
                    <button
                      onClick={() => handleDelete(artwork.id)}
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
