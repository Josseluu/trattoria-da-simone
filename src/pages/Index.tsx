import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Clock, MapPin, Star } from 'lucide-react';
import foodCannoli from '@/assets/food-cannoli.png';
import foodPizza from '@/assets/food-pizza.png';
import heroVideo from '@/assets/hero-pizza-video.mp4';

const Index = () => {
  const highlights = [
    { icon: UtensilsCrossed, title: 'Cocina Auténtica', desc: 'Recetas tradicionales italianas' },
    { icon: Star, title: 'Ingredientes Premium', desc: 'Productos importados de Italia' },
    { icon: Clock, title: 'Abierto Cada Día', desc: 'De 8:30 a 1:00, lunes a domingo' },
  ];

  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="relative z-10 container max-w-screen-xl">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium border border-white/20">
              <UtensilsCrossed className="h-4 w-4" />
              Trattoria Italiana
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Benvenuti a<br />
              <span className="text-primary">Trattoria da Simone</span>
            </h1>
            <p className="text-lg text-white/90 max-w-xl mx-auto drop-shadow-md">
              Descubre la auténtica cocina italiana con nuestras pastas frescas, pizzas artesanales 
              y platos tradicionales elaborados con pasión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/carta">Ver La Carta</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white">
                <Link to="/contacto">Cómo Llegar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-card">
        <div className="container max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-16">
        <div className="container max-w-screen-xl">
          <h2 className="font-display text-3xl font-bold text-center mb-8">
            Nuestros Platos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src={foodPizza} 
                alt="Pizza Quattro Stagioni" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-display text-xl font-semibold">Pizza Quattro Stagioni</span>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl aspect-square">
              <img 
                src={foodCannoli} 
                alt="Cannoli Siciliani" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-display text-xl font-semibold">Cannoli Siciliani</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para una experiencia italiana?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Ven a visitarnos y disfruta de nuestra cocina tradicional en un ambiente acogedor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/carta">Ver La Carta</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="font-semibold text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contacto" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Cómo Llegar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
