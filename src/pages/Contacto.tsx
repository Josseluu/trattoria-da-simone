import { Layout } from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactoPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container max-w-screen-xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contacto</h1>
          <p className="text-muted-foreground">Encuéntranos y ven a visitarnos</p>
        </div>
      </div>

      <section className="py-12">
        <div className="container max-w-screen-xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: 'Dirección', content: 'Calle Principal, 123\n28001 Madrid, España' },
                  { icon: Phone, title: 'Teléfono', content: '+34 912 345 678', link: 'tel:+34912345678' },
                  { icon: Mail, title: 'Email', content: 'reservas@lincontro.es', link: 'mailto:reservas@lincontro.es' },
                  { icon: Clock, title: 'Horario', content: 'Lun-Vie: 13:00-16:00, 20:00-23:30\nSáb-Dom: 13:00-16:30, 20:00-00:00' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">{item.content}</a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted rounded-lg overflow-hidden h-80 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6!2d-3.7!3d40.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzAwLjAiTiAzwrA0MicwMC4wIlc!5e0!3m2!1ses!2ses!4v1600000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del restaurante"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
