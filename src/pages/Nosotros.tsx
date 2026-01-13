import { Layout } from '@/components/layout/Layout';
import { UtensilsCrossed, Heart, Leaf } from 'lucide-react';
import team1 from '@/assets/team-1.png';
import team2 from '@/assets/team-2.png';
import team3 from '@/assets/team-3.png';

const teamMembers = [
  {
    name: 'Simone',
    role: 'Fundador y Chef Principal',
    description: 'Con años de experiencia en la cocina italiana, Simone es el corazón de nuestra trattoria. Su pasión por los sabores auténticos italianos se refleja en cada plato que prepara.',
    image: team1,
  },
  {
    name: 'Nuestro Equipo de Sala',
    role: 'Atención al Cliente',
    description: 'Profesionales dedicados a hacer que tu experiencia sea inolvidable. Siempre con una sonrisa y listos para recomendarte los mejores platos del día.',
    image: team2,
  },
  {
    name: 'Simone',
    role: 'La Pasión por Italia',
    description: 'Cada copa de vino, cada plato, cada momento en Trattoria da Simone está impregnado de la auténtica esencia italiana que Simone trae consigo.',
    image: team3,
  },
];

export default function NosotrosPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container max-w-screen-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Sobre Nosotros</h1>
            <p className="text-lg text-muted-foreground">La historia detrás de Trattoria da Simone</p>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Desde 2023, <strong className="text-foreground">Trattoria da Simone</strong> ha sido un punto de encuentro 
                para los amantes de la auténtica cocina italiana. Un lugar donde la tradición culinaria italiana 
                se encuentra con la calidez de la hospitalidad española.
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
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-card">
        <div className="container max-w-screen-xl">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-background rounded-xl overflow-hidden shadow-lg border">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-screen-xl">
          <div className="text-center text-muted-foreground">
            <p className="italic font-display text-xl">"La buena cocina es el fundamento de la verdadera felicidad"</p>
            <p className="text-sm mt-2">— Auguste Escoffier</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
