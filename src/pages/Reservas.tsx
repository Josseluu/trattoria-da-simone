import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ReservasPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({ title: '¡Reserva enviada!', description: 'Te contactaremos pronto para confirmar.' });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h2 className="font-display text-2xl font-bold">¡Gracias por tu reserva!</h2>
            <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto para confirmar.</p>
            <Button onClick={() => setIsSubmitted(false)}>Hacer otra reserva</Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container max-w-screen-xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Reserva tu Mesa</h1>
          <p className="text-muted-foreground">Completa el formulario y te confirmaremos por email</p>
        </div>
      </div>

      <section className="py-12">
        <div className="container max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input id="name" name="name" required placeholder="Tu nombre" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="tu@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+34 600 000 000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="flex items-center gap-1"><Calendar className="h-3 w-3" /> Fecha *</Label>
                  <Input id="date" name="date" type="date" required min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <Label htmlFor="time" className="flex items-center gap-1"><Clock className="h-3 w-3" /> Hora *</Label>
                  <Input id="time" name="time" type="time" required />
                </div>
              </div>
              <div>
                <Label htmlFor="guests" className="flex items-center gap-1"><Users className="h-3 w-3" /> Número de comensales *</Label>
                <Input id="guests" name="guests" type="number" min="1" max="20" required placeholder="2" />
              </div>
              <div>
                <Label htmlFor="comments">Comentarios o peticiones especiales</Label>
                <Textarea id="comments" name="comments" placeholder="Alergias, celebraciones, preferencias..." rows={3} />
              </div>
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Reserva'}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
