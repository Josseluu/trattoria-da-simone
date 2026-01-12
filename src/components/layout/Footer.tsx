import { Link } from 'react-router-dom';
import { UtensilsCrossed, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
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
                  L'Incontro
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-70">
                  Ristorante Italiano
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Auténtica cocina italiana en el corazón de la ciudad. 
              Tradición, sabor y pasión desde 1995.
            </p>
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

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 opacity-70" />
                <span className="text-sm opacity-80">
                  Calle Principal, 123<br />
                  28001 Madrid, España
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 opacity-70" />
                <a href="tel:+34912345678" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  +34 912 345 678
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Horario</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 opacity-70" />
                <div className="text-sm opacity-80">
                  <p><strong>Lun - Vie:</strong> 13:00 - 16:00, 20:00 - 23:30</p>
                  <p><strong>Sáb - Dom:</strong> 13:00 - 16:30, 20:00 - 00:00</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Restaurante L'Incontro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
