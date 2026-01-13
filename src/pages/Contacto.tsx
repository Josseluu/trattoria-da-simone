import { Layout } from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const locations = [
  {
    name: 'Alameda de Osuna',
    address: 'Avenida Cantabria, 39',
    phone: '913 293 804',
    phoneLink: 'tel:+34913293804',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.5!2d-3.58!3d40.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f3d8b9e5555%3A0x1234567890abcdef!2sAv.%20de%20Cantabria%2C%2039%2C%2028042%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses',
  },
  {
    name: 'Torrejón de Ardoz',
    address: 'Andalucía, 2, 28850 Torrejón de Ardoz, Madrid',
    phone: '911 64 42 49',
    phoneLink: 'tel:+34911644249',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.5!2d-3.48!3d40.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422e9c8b9e5555%3A0xabcdef1234567890!2sC.%20Andaluc%C3%ADa%2C%202%2C%2028850%20Torrej%C3%B3n%20de%20Ardoz%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000001!5m2!1ses!2ses',
  },
];

const schedule = {
  title: 'Horario',
  lines: [
    { label: 'Local Sala y Bar', time: '11:00 a 1:00 (todos los días)' },
    { label: 'Cocina y Pizzería', time: '13:00 a 16:00 y 20:00 a 23:45' },
    { label: 'Descanso', time: 'Martes cerrado' },
  ],
};

export default function ContactoPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container max-w-screen-xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contacto</h1>
          <p className="text-muted-foreground">Encuéntranos en nuestros dos locales</p>
        </div>
      </div>

      <section className="py-12">
        <div className="container max-w-screen-xl">
          <div className="grid md:grid-cols-2 gap-12">
            {locations.map((loc, index) => (
              <div key={index} className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-foreground border-b border-border pb-3">
                  {loc.name}
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Dirección</h3>
                      <p className="text-muted-foreground">{loc.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Teléfono</h3>
                      <a href={loc.phoneLink} className="text-muted-foreground hover:text-primary transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Horario</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        {schedule.lines.map((line, i) => (
                          <p key={i}>
                            <strong>{line.label}:</strong> {line.time}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-lg overflow-hidden h-64">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Ubicación ${loc.name}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Email común */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-card p-4 rounded-lg border">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a href="mailto:info@trattoriadasimone.es" className="text-muted-foreground hover:text-primary transition-colors">
                  info@trattoriadasimone.es
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
