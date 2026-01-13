import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Clock, MapPin, Star, Instagram, X } from 'lucide-react';
import dish1 from '@/assets/dish-1.png';
import dish2 from '@/assets/dish-2.png';
import dish3 from '@/assets/dish-3.png';
import dish4 from '@/assets/dish-4.png';
import dish5 from '@/assets/dish-5.png';
import dish6 from '@/assets/dish-6.png';
import heroVideo from '@/assets/hero-pizza-video.mp4';

const Index = () => {
  const [selectedDish, setSelectedDish] = useState<{ name: string; src: string } | null>(null);

  const highlights = [
    { icon: UtensilsCrossed, title: 'Cocina Auténtica', desc: 'Recetas tradicionales italianas' },
    { icon: Star, title: 'Desde 2023', desc: 'Tu pizzería de confianza' },
    { icon: Clock, title: 'Dos Locales', desc: 'En Alameda y Torrejón de Ardoz' },
  ];

  const dishes = [
    { src: dish1, name: 'Pasta Negra Frutti di Mare' },
    { src: dish2, name: 'Carpaccio di Salmón' },
    { src: dish3, name: 'La Pizza de la Casa' },
    { src: dish4, name: 'Focaccia di Prosciutto' },
    { src: dish5, name: 'Nuestras Zamburiñas' },
    { src: dish6, name: 'Cannoli de Sicilia' },
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

      {/* Promotions Section */}
      <section className="py-8 bg-primary">
        <div className="container max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Menu del día */}
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center text-primary-foreground border border-primary-foreground/20">
              <h3 className="font-display text-2xl font-bold mb-2">Menú del Día</h3>
              <p className="text-3xl font-bold mb-2">13€</p>
              <p className="text-sm opacity-90">Primer plato + Segundo plato + Pan + Bebida + Postre o Café</p>
              <p className="text-xs mt-2 opacity-75">Disponible en ambos restaurantes</p>
            </div>
            {/* Jueves Locos */}
            <div className="bg-primary-foreground/10 rounded-xl p-6 text-center text-primary-foreground border border-primary-foreground/20">
              <h3 className="font-display text-2xl font-bold mb-2">Jueves Locos de Pizza</h3>
              <p className="text-3xl font-bold mb-2">3x2</p>
              <p className="text-sm opacity-90">En todas las pizzas</p>
              <p className="text-xs mt-2 opacity-75">Solo en Torrejón de Ardoz</p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {dishes.map((dish, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                onClick={() => setSelectedDish(dish)}
              >
                <img 
                  src={dish.src} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-display font-semibold text-sm md:text-base">{dish.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-12 bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="container max-w-screen-xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center md:text-left">
            <Instagram className="h-12 w-12" />
            <div>
              <h3 className="font-display text-2xl font-bold">¡Síguenos en Instagram!</h3>
              <p className="opacity-90">Descubre nuestras novedades, platos del día y promociones exclusivas</p>
            </div>
            <a 
              href="https://www.instagram.com/trattoria.da.simone/"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-pink-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              @trattoria.da.simone
            </a>
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

      {/* Image Modal */}
      {selectedDish && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDish(null)}
        >
          <div className="relative max-w-3xl w-full">
            <button 
              onClick={() => setSelectedDish(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedDish.src} 
              alt={selectedDish.name} 
              className="w-full rounded-2xl"
            />
            <p className="text-center text-white font-display text-2xl font-bold mt-4">
              {selectedDish.name}
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Index;
