import { MenuItem } from '@/data/menuData';
import { AllergenBadge } from './AllergenBadge';
import { cn } from '@/lib/utils';

interface MenuItemCardProps {
  item: MenuItem;
  className?: string;
}

export function MenuItemCard({ item, className }: MenuItemCardProps) {
  return (
    <div
      className={cn(
        "group flex justify-between items-start gap-4 py-3 border-b border-border/50 last:border-0",
        "hover:bg-muted/30 transition-colors rounded-lg px-2 -mx-2",
        className
      )}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-display font-semibold text-foreground">
            {item.name}
          </h4>
          {item.allergens.length > 0 && (
            <div className="flex gap-1 flex-wrap">
              {item.allergens.map((allergen) => (
                <AllergenBadge key={allergen} allergen={allergen} size="sm" />
              ))}
            </div>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-0.5">
            {item.description}
          </p>
        )}
      </div>
      <div className="font-display font-bold text-primary whitespace-nowrap">
        {item.price.toFixed(2)} €
      </div>
    </div>
  );
}
