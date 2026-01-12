import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { MenuSection } from '@/components/menu/MenuSection';
import { MenuNavigation } from '@/components/menu/MenuNavigation';
import { AllergenFilter } from '@/components/menu/AllergenBadge';
import { menuCategories, filterMenuByAllergens, Allergen } from '@/data/menuData';
import { Button } from '@/components/ui/button';
import { Filter, X } from 'lucide-react';

export default function CartaPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [excludeAllergens, setExcludeAllergens] = useState<Allergen[]>([]);
  const [includeAllergens, setIncludeAllergens] = useState<Allergen[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredCategories = filterMenuByAllergens(menuCategories, excludeAllergens, includeAllergens);
  const hasActiveFilters = excludeAllergens.length > 0 || includeAllergens.length > 0;

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const clearFilters = () => {
    setExcludeAllergens([]);
    setIncludeAllergens([]);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    filteredCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filteredCategories]);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container max-w-screen-xl text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">La Carta</h1>
          <p className="text-muted-foreground mt-2">Auténtica cocina italiana tradicional</p>
        </div>
      </div>

      <MenuNavigation
        categories={filteredCategories.map(c => ({ id: c.id, name: c.name, nameIt: c.nameIt }))}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <div className="container max-w-screen-xl py-8">
        <div className="flex justify-between items-center mb-6">
          <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrar por Alérgenos
            {hasActiveFilters && <span className="bg-primary text-primary-foreground text-xs px-1.5 rounded-full">{excludeAllergens.length + includeAllergens.length}</span>}
          </Button>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
              <X className="h-4 w-4" /> Limpiar filtros
            </Button>
          )}
        </div>

        {showFilters && (
          <div className="mb-8">
            <AllergenFilter
              selectedExclude={excludeAllergens}
              selectedInclude={includeAllergens}
              onExcludeChange={setExcludeAllergens}
              onIncludeChange={setIncludeAllergens}
            />
          </div>
        )}

        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
