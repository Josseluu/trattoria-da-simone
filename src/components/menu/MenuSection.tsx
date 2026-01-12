import { MenuCategory } from '@/data/menuData';
import { MenuItemCard } from './MenuItemCard';

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <h2 className="font-display text-2xl font-bold text-foreground">
            {category.name}
          </h2>
          <span className="text-sm text-muted-foreground italic">
            {category.nameIt}
          </span>
        </div>
        {category.description && (
          <p className="text-muted-foreground mt-1">
            {category.description}
          </p>
        )}
      </div>
      <div className="bg-card rounded-lg border border-border p-4">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
