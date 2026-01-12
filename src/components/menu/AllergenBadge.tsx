import { Badge } from '@/components/ui/badge';
import { Allergen, allergenLabels } from '@/data/menuData';
import { cn } from '@/lib/utils';

interface AllergenBadgeProps {
  allergen: Allergen;
  size?: 'sm' | 'md';
  showLabel?: boolean;
}

export function AllergenBadge({ allergen, size = 'sm', showLabel = false }: AllergenBadgeProps) {
  const { name, icon, color } = allergenLabels[allergen];

  return (
    <Badge
      variant="secondary"
      className={cn(
        color,
        size === 'sm' ? 'text-xs px-1.5 py-0.5' : 'text-sm px-2 py-1',
        'font-normal'
      )}
      title={name}
    >
      <span className={size === 'sm' ? 'text-sm' : 'text-base'}>{icon}</span>
      {showLabel && <span className="ml-1">{name}</span>}
    </Badge>
  );
}

interface AllergenFilterProps {
  selectedExclude: Allergen[];
  selectedInclude: Allergen[];
  onExcludeChange: (allergens: Allergen[]) => void;
  onIncludeChange: (allergens: Allergen[]) => void;
}

export function AllergenFilter({
  selectedExclude,
  selectedInclude,
  onExcludeChange,
  onIncludeChange,
}: AllergenFilterProps) {
  const excludeAllergens: Allergen[] = ['gluten', 'lactose', 'egg', 'shellfish', 'nuts', 'fish'];
  const includeAllergens: Allergen[] = ['vegetarian', 'vegan'];

  const toggleExclude = (allergen: Allergen) => {
    if (selectedExclude.includes(allergen)) {
      onExcludeChange(selectedExclude.filter((a) => a !== allergen));
    } else {
      onExcludeChange([...selectedExclude, allergen]);
    }
  };

  const toggleInclude = (allergen: Allergen) => {
    if (selectedInclude.includes(allergen)) {
      onIncludeChange(selectedInclude.filter((a) => a !== allergen));
    } else {
      onIncludeChange([...selectedInclude, allergen]);
    }
  };

  return (
    <div className="space-y-4 p-4 bg-card rounded-lg border border-border">
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-2">Excluir alérgenos:</h4>
        <div className="flex flex-wrap gap-2">
          {excludeAllergens.map((allergen) => {
            const isSelected = selectedExclude.includes(allergen);
            const { name, icon, color } = allergenLabels[allergen];
            return (
              <button
                key={allergen}
                onClick={() => toggleExclude(allergen)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                  'border-2 flex items-center gap-1.5',
                  isSelected
                    ? 'border-destructive bg-destructive/10 text-destructive line-through'
                    : cn(color, 'border-transparent hover:border-border')
                )}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-2">Solo mostrar:</h4>
        <div className="flex flex-wrap gap-2">
          {includeAllergens.map((allergen) => {
            const isSelected = selectedInclude.includes(allergen);
            const { name, icon, color } = allergenLabels[allergen];
            return (
              <button
                key={allergen}
                onClick={() => toggleInclude(allergen)}
                className={cn(
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                  'border-2 flex items-center gap-1.5',
                  isSelected
                    ? 'border-primary bg-primary/10 text-primary'
                    : cn(color, 'border-transparent hover:border-border')
                )}
              >
                <span>{icon}</span>
                <span>{name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
