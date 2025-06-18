
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Artist {
  id: number;
  name: string;
  bio: string;
  speciality: string;
  image: string;
  artworks: number;
  exhibitions: number;
}

const Artists = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const artists: Artist[] = [
    {
      id: 1,
      name: "Ana Costa",
      bio: "Artista multimídia com foco em questões urbanas e sociais contemporâneas.",
      speciality: "Pintura e Instalação",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=400&h=400",
      artworks: 24,
      exhibitions: 8
    },
    {
      id: 2,
      name: "Carlos Mendes",
      bio: "Escultor conhecido por suas obras em bronze e mármore que exploram formas orgânicas.",
      speciality: "Escultura",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400",
      artworks: 18,
      exhibitions: 12
    },
    {
      id: 3,
      name: "Mariana Silva",
      bio: "Pintora abstrata que combina técnicas tradicionais com elementos digitais.",
      speciality: "Pintura Abstrata",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400",
      artworks: 31,
      exhibitions: 15
    },
    {
      id: 4,
      name: "Roberto Lima",
      bio: "Fotógrafo e artista visual especializado em paisagens urbanas e naturais.",
      speciality: "Fotografia Artística",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400",
      artworks: 42,
      exhibitions: 20
    },
    {
      id: 5,
      name: "Lucia Santos",
      bio: "Artista conceitual que trabalha com instalações multimídia e arte digital.",
      speciality: "Arte Digital",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400",
      artworks: 16,
      exhibitions: 6
    },
    {
      id: 6,
      name: "Pedro Oliveira",
      bio: "Ceramista e escultor que explora a relação entre forma, função e arte.",
      speciality: "Cerâmica Artística",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400",
      artworks: 28,
      exhibitions: 10
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-warm to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
            Nossos Artistas
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed slide-up">
            Conheça os talentosos artistas que compõem nosso seleto grupo de representados, 
            cada um com sua visão única e contribuição especial para a arte contemporânea.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredId(artist.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden gallery-transition hover:scale-105 hover:shadow-xl">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredId === artist.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                        hoveredId === artist.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <div 
                      className={`absolute bottom-4 left-4 right-4 text-white transition-opacity duration-300 ${
                        hoveredId === artist.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{artist.artworks} obras</p>
                          <p className="text-sm opacity-90">{artist.exhibitions} exposições</p>
                        </div>
                        <ExternalLink size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2">
                      {artist.name}
                    </h3>
                    <p className="font-inter text-terracotta font-medium mb-3">
                      {artist.speciality}
                    </p>
                    <p className="font-inter text-gray-600 mb-4 leading-relaxed">
                      {artist.bio}
                    </p>
                    <Link 
                      to={`/artists/${artist.id}`}
                      className="inline-flex items-center text-terracotta font-medium hover:text-terracotta/80 transition-colors"
                    >
                      Ver Portfolio
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-terracotta to-terracotta/80 rounded-2xl p-12 text-center text-white">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Interessado em Expor Conosco?
            </h2>
            <p className="font-inter text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              A Simone Oliveira Art Gallery está sempre em busca de novos talentos. 
              Entre em contato para submeter seu portfolio.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-terracotta font-inter font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Entre em Contato
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artists;
