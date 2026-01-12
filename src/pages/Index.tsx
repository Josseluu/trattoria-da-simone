import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Clock, MapPin, Star } from 'lucide-react';

const Index = () => {
  const highlights = [
    { icon: UtensilsCrossed, title: 'Cocina Auténtica', desc: 'Recetas tradicionales italianas' },
    { icon: Star, title: 'Ingredientes Premium', desc: 'Productos importados de Italia' },
    { icon: Clock, title: 'Desde 1995', desc: 'Más de 25 años de tradición' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-32">
        <div className="container max-w-screen-xl">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <UtensilsCrossed className="h-4 w-4" />
              Ristorante Italiano
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Benvenuti a<br />
              <span className="text-primary">L'Incontro</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Descubre la auténtica cocina italiana con nuestras pastas frescas, pizzas artesanales 
              y platos tradicionales elaborados con pasión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/carta">Ver La Carta</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <Link to="/reservas">Reservar Mesa</Link>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para una experiencia italiana?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Reserva tu mesa y disfruta de nuestra cocina tradicional en un ambiente acogedor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/reservas">Reservar Ahora</Link>
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
