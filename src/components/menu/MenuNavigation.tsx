import { cn } from '@/lib/utils';

interface MenuNavigationProps {
  categories: { id: string; name: string; nameIt: string }[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

export function MenuNavigation({ categories, activeCategory, onCategoryClick }: MenuNavigationProps) {
  return (
    <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border py-3">
      <div className="container max-w-screen-xl overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
