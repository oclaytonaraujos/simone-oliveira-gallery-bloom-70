
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Users, Calendar, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, number: "12", label: "Anos de Experiência" },
    { icon: Users, number: "150+", label: "Artistas Representados" },
    { icon: Award, number: "50+", label: "Exposições Realizadas" },
    { icon: Heart, number: "1000+", label: "Obras Comercializadas" }
  ];

  const team = [
    {
      name: "Simone Oliveira",
      role: "Fundadora e Curadora Chefe",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1ab?w=400&h=400",
      bio: "Com mais de 15 anos de experiência em curadoria de arte, Simone fundou a galeria com a visão de criar um espaço que conecte artistas emergentes e estabelecidos com colecionadores."
    },
    {
      name: "Rafael Monteiro",
      role: "Curador Assistente",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400",
      bio: "Especialista em arte contemporânea brasileira, Rafael traz uma perspectiva inovadora para nossa seleção de artistas e exposições."
    },
    {
      name: "Isabella Costa",
      role: "Diretora de Vendas",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400",
      bio: "Com vasta experiência no mercado de arte, Isabella é responsável por conectar colecionadores às obras perfeitas para suas coleções."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-warm to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
            Sobre Nós
          </h1>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed slide-up">
            Conheça a história, missão e visão da Simone Oliveira Art Gallery, 
            um espaço dedicado à excelência em arte contemporânea.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-up">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=1000" 
                alt="Galeria"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="fade-in">
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-6 font-inter text-lg text-gray-600 leading-relaxed">
                <p>
                  Fundada em 2012 por Simone Oliveira, nossa galeria nasceu do sonho de criar um 
                  espaço onde a arte contemporânea pudesse florescer e encontrar seu público ideal. 
                  Localizada no coração cultural da Vila Madalena, em São Paulo, rapidamente se 
                  tornou referência na promoção de artistas emergentes e consagrados.
                </p>
                <p>
                  Ao longo dos anos, desenvolvemos uma reputação sólida baseada na qualidade 
                  excepcional de nossa curadoria e no relacionamento próximo com artistas e 
                  colecionadores. Nossa abordagem única combina rigor técnico com sensibilidade 
                  artística, resultando em exposições memoráveis e vendas bem-sucedidas.
                </p>
                <p>
                  Hoje, representamos mais de 150 artistas de diversas nacionalidades e estilos, 
                  mantendo sempre o compromisso com a inovação e a excelência que nos define 
                  desde o primeiro dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-warm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-terracotta rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Promover e difundir a arte contemporânea de qualidade, criando pontes entre 
                artistas talentosos e colecionadores apaixonados, contribuindo para o 
                enriquecimento cultural da sociedade.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-light-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Ser reconhecida como uma das principais galerias de arte contemporânea do Brasil, 
                referência em curadoria de excelência e descoberta de novos talentos artísticos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossos Números
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de uma década dedicada à promoção da arte contemporânea
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-terracotta to-terracotta/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="font-playfair text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="font-inter text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nossa Equipe
            </h2>
            <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os profissionais apaixonados que fazem a diferença na nossa galeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-terracotta font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">
                    {member.bio}
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

export default About;
