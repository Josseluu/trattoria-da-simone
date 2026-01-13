import { Link } from 'react-router-dom';
import { UtensilsCrossed, MapPin, Phone, Clock, Instagram } from 'lucide-react';

export function Footer() {
  const locations = [
    {
      name: 'Avenida Cantabria',
      address: 'Avenida Cantabria, 39',
      phone: '913 293 804',
      phoneLink: 'tel:+34913293804',
    },
    {
      name: 'Torrejón de Ardoz',
      address: 'Andalucía, 2, 28850 Torrejón de Ardoz, Madrid',
      phone: '911 64 42 49',
      phoneLink: 'tel:+34911644249',
    },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container max-w-screen-xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <UtensilsCrossed className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold leading-tight">
                  Trattoria da Simone
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Auténtica cocina italiana en el corazón de la ciudad. 
              Tradición, sabor y pasión.
            </p>
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/trattoria.da.simone/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <Instagram className="h-5 w-5" />
              <span>Síguenos en Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Enlaces</h3>
            <nav className="space-y-2">
              <Link to="/carta" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                La Carta
              </Link>
              <Link to="/nosotros" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Sobre Nosotros
              </Link>
              <Link to="/reservas" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Reservas
              </Link>
              <Link to="/contacto" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold mb-4">Nuestros Locales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {locations.map((loc, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="font-semibold text-sm">{loc.name}</h4>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 opacity-70 flex-shrink-0" />
                    <span className="text-sm opacity-80">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 opacity-70 flex-shrink-0" />
                    <a href={loc.phoneLink} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 mt-6">
              <Clock className="h-4 w-4 mt-0.5 opacity-70" />
              <div className="text-sm opacity-80 space-y-1">
                <p><strong>Local Sala y Bar:</strong> 11:00 a 1:00 (todos los días)</p>
                <p><strong>Cocina y Pizzería:</strong> 13:00 a 16:00 y 20:00 a 23:45 (todos los días)</p>
                <p className="text-primary font-semibold">Martes cerrado por descanso</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Trattoria da Simone. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
