import { Layout } from '@/components/layout/Layout';
import { UtensilsCrossed, Heart, Leaf } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Sobre Nosotros</h1>
            <p className="text-lg text-muted-foreground">La historia detrás de L'Incontro</p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Desde 1995, <strong className="text-foreground">Restaurante L'Incontro</strong> ha sido un punto de encuentro 
                para los amantes de la auténtica cocina italiana. Nuestro nombre, que significa "El Encuentro" en italiano, 
                refleja nuestra filosofía: un lugar donde la tradición culinaria italiana se encuentra con la calidez de la hospitalidad española.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 py-8">
              {[
                { icon: UtensilsCrossed, title: 'Tradición', desc: 'Recetas transmitidas de generación en generación, preparadas con técnicas artesanales.' },
                { icon: Leaf, title: 'Ingredientes Frescos', desc: 'Productos de primera calidad, muchos importados directamente de Italia.' },
                { icon: Heart, title: 'Pasión', desc: 'Cada plato es preparado con amor y dedicación por nuestro equipo.' },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 bg-card rounded-lg border">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center text-muted-foreground">
              <p className="italic font-display text-xl">"La buena cocina es el fundamento de la verdadera felicidad"</p>
              <p className="text-sm mt-2">— Auguste Escoffier</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
