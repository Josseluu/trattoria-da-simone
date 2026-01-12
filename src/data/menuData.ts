export type Allergen = 
  | 'gluten' 
  | 'lactose' 
  | 'egg' 
  | 'shellfish' 
  | 'nuts' 
  | 'fish' 
  | 'vegetarian' 
  | 'vegan';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  allergens: Allergen[];
}

export interface MenuCategory {
  id: string;
  name: string;
  nameIt: string;
  description?: string;
  items: MenuItem[];
}

export const allergenLabels: Record<Allergen, { name: string; icon: string; color: string }> = {
  gluten: { name: 'Gluten', icon: '🌾', color: 'bg-amber-100 text-amber-800' },
  lactose: { name: 'Lácteos', icon: '🥛', color: 'bg-blue-100 text-blue-800' },
  egg: { name: 'Huevo', icon: '🥚', color: 'bg-yellow-100 text-yellow-800' },
  shellfish: { name: 'Marisco', icon: '🦐', color: 'bg-red-100 text-red-800' },
  nuts: { name: 'Frutos Secos', icon: '🥜', color: 'bg-orange-100 text-orange-800' },
  fish: { name: 'Pescado', icon: '🐟', color: 'bg-cyan-100 text-cyan-800' },
  vegetarian: { name: 'Vegetariano', icon: '🥬', color: 'bg-green-100 text-green-800' },
  vegan: { name: 'Vegano', icon: '🌱', color: 'bg-emerald-100 text-emerald-800' },
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'antipasti',
    name: 'Entrantes',
    nameIt: 'Antipasti',
    description: 'Deliciosos entrantes de la cocina italiana tradicional',
    items: [
      { id: 'ant-1', name: 'Verdure alla Griglia', description: 'Verduras a la parrilla', price: 13.55, allergens: ['vegetarian'] },
      { id: 'ant-2', name: 'Carpaccio di Filetto', description: 'Carpaccio de solomillo con rúcula y parmesano', price: 13.95, allergens: ['lactose'] },
      { id: 'ant-3', name: 'Carpaccio di Salmone', description: 'Carpaccio de salmón fresco', price: 12.45, allergens: ['fish'] },
      { id: 'ant-4', name: 'Provola al Forno', description: 'Queso provola al horno', price: 10.70, allergens: ['lactose', 'vegetarian'] },
      { id: 'ant-5', name: 'Pepata de Cozze', description: 'Mejillones a la pimienta', price: 12.45, allergens: ['shellfish'] },
      { id: 'ant-6', name: 'Focaccia di Prosciutto', description: 'Focaccia con jamón italiano', price: 9.35, allergens: ['gluten'] },
      { id: 'ant-7', name: 'Tominata al Forno', description: 'Queso tomino al horno envuelto en panceta', price: 11.90, allergens: ['lactose'] },
      { id: 'ant-8', name: 'Millefoglie di Verdure', description: 'Milhojas de verduras con queso de cabra', price: 12.90, allergens: ['lactose', 'vegetarian'] },
    ],
  },
  {
    id: 'insalate',
    name: 'Ensaladas',
    nameIt: 'Insalate',
    description: 'Frescas ensaladas con ingredientes mediterráneos',
    items: [
      { id: 'ins-1', name: 'Mozzarella di Bufala e Pomodoro', description: 'Mozzarella de búfala con tomate', price: 11.45, allergens: ['lactose', 'vegetarian'] },
      { id: 'ins-2', name: 'Siciliana', description: 'Ensalada siciliana tradicional', price: 12.10, allergens: ['vegetarian'] },
      { id: 'ins-3', name: "Dell'Ortoverde", description: 'Ensalada del huerto verde', price: 10.30, allergens: ['vegetarian', 'vegan'] },
      { id: 'ins-4', name: 'Di Rucola', description: 'Ensalada de rúcula', price: 11.75, allergens: ['vegetarian'] },
      { id: 'ins-5', name: 'Napolitana', description: 'Ensalada napolitana', price: 12.85, allergens: ['vegetarian'] },
      { id: 'ins-6', name: 'Insalata Pomodoro', description: 'Ensalada de tomate fresco', price: 9.95, allergens: ['vegetarian', 'vegan'] },
      { id: 'ins-7', name: 'Torre di Pisa', description: 'Ensalada torre de Pisa', price: 12.95, allergens: ['lactose', 'vegetarian'] },
      { id: 'ins-8', name: "Insalata L'Incontro", description: 'Nuestra ensalada especial de la casa', price: 12.50, allergens: ['lactose', 'vegetarian'] },
      { id: 'ins-9', name: 'Insalata di Peperoni con Tonno', description: 'Pimientos asados con atún', price: 12.95, allergens: ['fish'] },
      { id: 'ins-10', name: 'Insalata di Formaggio di Capra', description: 'Ensalada con queso de cabra', price: 14.50, allergens: ['lactose', 'vegetarian'] },
    ],
  },
  {
    id: 'pasta-seca',
    name: 'Pasta Seca',
    nameIt: 'Pasta Seca',
    description: 'Pasta seca con salsas tradicionales (Spaghetti, Penne, Rigatoni, Fusilli)',
    items: [
      { id: 'ps-1', name: 'Pomodoro y Albahaca', description: 'Salsa de tomate fresco con albahaca', price: 11.35, allergens: ['gluten', 'vegetarian'] },
      { id: 'ps-2', name: 'Amatriciana', description: 'Salsa de tomate, guanciale y pecorino', price: 11.75, allergens: ['gluten', 'lactose'] },
      { id: 'ps-3', name: 'Aglio-Oleo-Gamberetti', description: 'Ajo, aceite de oliva y gambas', price: 11.75, allergens: ['gluten', 'shellfish'] },
      { id: 'ps-4', name: 'Norma', description: 'Berenjena, tomate y ricotta salada', price: 11.90, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'ps-5', name: 'Gorgonzola e Noci', description: 'Queso gorgonzola y nueces', price: 12.85, allergens: ['gluten', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'ps-6', name: 'Bolognese', description: 'Ragú de carne tradicional', price: 11.35, allergens: ['gluten', 'lactose'] },
      { id: 'ps-7', name: 'Pesto', description: 'Pesto genovés con albahaca y piñones', price: 11.75, allergens: ['gluten', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'ps-8', name: 'Alfredo', description: 'Crema de parmesano', price: 12.45, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'ps-9', name: 'Carbonara', description: 'Guanciale, huevo y pecorino', price: 11.35, allergens: ['gluten', 'lactose', 'egg'] },
      { id: 'ps-10', name: 'Salsa Salmón', description: 'Salsa cremosa con salmón', price: 12.45, allergens: ['gluten', 'lactose', 'fish'] },
      { id: 'ps-11', name: 'Puttanesca', description: 'Tomate, aceitunas, alcaparras y anchoas', price: 11.35, allergens: ['gluten', 'fish'] },
      { id: 'ps-12', name: 'Arrabiata', description: 'Tomate picante con guindilla', price: 11.35, allergens: ['gluten', 'vegetarian', 'vegan'] },
      { id: 'ps-13', name: 'Aglio-Oleo-Peperoncino', description: 'Ajo, aceite y guindilla', price: 11.35, allergens: ['gluten', 'vegetarian', 'vegan'] },
      { id: 'ps-14', name: 'Frutti di Mare', description: 'Variedad de mariscos frescos', price: 12.85, allergens: ['gluten', 'shellfish', 'fish'] },
      { id: 'ps-15', name: 'Crema de Nueces', description: 'Salsa cremosa de nueces', price: 12.45, allergens: ['gluten', 'lactose', 'nuts', 'vegetarian'] },
    ],
  },
  {
    id: 'pasta-fresca',
    name: 'Pasta Fresca',
    nameIt: 'Pasta Fresca',
    description: 'Pasta fresca hecha en casa (Tagliatelle, Pappardelle, Fettuccine)',
    items: [
      { id: 'pf-1', name: 'Pomodoro y Albahaca', description: 'Salsa de tomate fresco con albahaca', price: 12.10, allergens: ['gluten', 'egg', 'vegetarian'] },
      { id: 'pf-2', name: 'Trufa y Hongos', description: 'Salsa de trufa negra y hongos silvestres', price: 12.45, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-3', name: 'Gorgonzola', description: 'Salsa cremosa de gorgonzola', price: 12.85, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-4', name: 'Carbonara', description: 'Guanciale, huevo y pecorino', price: 12.00, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pf-5', name: 'Pesto', description: 'Pesto genovés tradicional', price: 12.10, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pf-6', name: 'Pesto Pomodoro', description: 'Pesto con tomate cherry', price: 12.45, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pf-7', name: 'Pappardelle Arrabiata', description: 'Pappardelle con salsa picante', price: 12.85, allergens: ['gluten', 'egg', 'vegetarian'] },
      { id: 'pf-8', name: 'Fettuccine Norma', description: 'Fettuccine con berenjena y ricotta', price: 12.10, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-9', name: 'Aglio-Oleo-Gamberetti', description: 'Ajo, aceite y gambas', price: 12.45, allergens: ['gluten', 'egg', 'shellfish'] },
      { id: 'pf-10', name: 'Bolognese', description: 'Ragú de carne tradicional', price: 12.00, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pf-11', name: 'Alfredo', description: 'Crema de parmesano', price: 13.10, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-12', name: 'Quattro Formaggi', description: 'Cuatro quesos italianos', price: 12.45, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-13', name: 'Salsa Salmón', description: 'Salsa cremosa con salmón', price: 13.45, allergens: ['gluten', 'egg', 'lactose', 'fish'] },
      { id: 'pf-14', name: 'Gnocchetti Puttanesca', description: 'Gnocchi con salsa puttanesca', price: 12.45, allergens: ['gluten', 'egg', 'fish'] },
      { id: 'pf-15', name: 'Aglio-Oleo-Peperoncino', description: 'Ajo, aceite y guindilla', price: 12.45, allergens: ['gluten', 'egg', 'vegetarian'] },
    ],
  },
  {
    id: 'pasta-rellena',
    name: 'Pasta Rellena',
    nameIt: 'Pasta Fresca Rellena',
    description: 'Pasta rellena artesanal (Ravioli, Tortellini, Fagottini)',
    items: [
      { id: 'pr-1', name: 'Pomodoro y Albahaca', description: 'Con salsa de tomate y albahaca', price: 13.10, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pr-2', name: 'Trufa y Hongos', description: 'Con salsa de trufa y hongos', price: 13.55, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pr-3', name: 'Gorgonzola', description: 'Con crema de gorgonzola', price: 13.10, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pr-4', name: 'Fagottini Bolognese', description: 'Fagottini con ragú boloñés', price: 12.45, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pr-5', name: 'Raviolacci Carbonara', description: 'Raviolacci con salsa carbonara', price: 12.85, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pr-6', name: 'Quattro Formaggi', description: 'Con cuatro quesos', price: 13.10, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pr-7', name: 'Tortellini Pesto', description: 'Tortellini con pesto genovés', price: 12.00, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pr-8', name: 'Tortellini Pesto Pomodoro', description: 'Tortellini con pesto y tomate', price: 12.85, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pr-9', name: 'Panzarotti', description: 'Pasta rellena frita tradicional', price: 13.90, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pr-10', name: 'Salsa Salmón', description: 'Con salsa cremosa de salmón', price: 13.90, allergens: ['gluten', 'egg', 'lactose', 'fish'] },
      { id: 'pr-11', name: 'Cappelletti', description: 'Cappelletti tradicionales', price: 12.90, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pr-12', name: 'Gnocchi Aglio-Oleo-Peperoncino', description: 'Gnocchi con ajo, aceite y guindilla', price: 11.90, allergens: ['gluten', 'egg', 'vegetarian'] },
      { id: 'pr-13', name: 'Crema de Nueces', description: 'Con crema de nueces', price: 13.90, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pr-14', name: 'Pesto Rosso e Panna', description: 'Con pesto rojo y nata', price: 12.90, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
    ],
  },
  {
    id: 'pizze',
    name: 'Pizzas',
    nameIt: 'Pizze',
    description: 'Pizzas artesanales horneadas en horno de leña',
    items: [
      { id: 'pz-1', name: 'Margherita', description: 'Tomate, mozzarella y albahaca', price: 10.30, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-2', name: 'Napoli', description: 'Tomate, mozzarella y anchoas', price: 11.35, allergens: ['gluten', 'lactose', 'fish'] },
      { id: 'pz-3', name: 'Prosciutto', description: 'Tomate, mozzarella y jamón', price: 11.35, allergens: ['gluten', 'lactose'] },
      { id: 'pz-4', name: 'Capricciosa', description: 'Tomate, mozzarella, jamón, champiñones y alcachofas', price: 11.90, allergens: ['gluten', 'lactose'] },
      { id: 'pz-5', name: 'Quattro Formaggi', description: 'Cuatro quesos italianos', price: 11.90, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-6', name: 'Norma', description: 'Tomate, mozzarella, berenjena y ricotta', price: 11.35, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-7', name: 'Alfredo', description: 'Crema, mozzarella y pollo', price: 11.90, allergens: ['gluten', 'lactose'] },
      { id: 'pz-8', name: 'Olimpica', description: 'Tomate, mozzarella y variedad de ingredientes', price: 12.45, allergens: ['gluten', 'lactose'] },
      { id: 'pz-9', name: 'Vegetariana', description: 'Variedad de verduras frescas', price: 11.35, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-10', name: 'Calzone', description: 'Pizza cerrada rellena', price: 11.90, allergens: ['gluten', 'lactose'] },
      { id: 'pz-11', name: 'Quattro Stagioni', description: 'Cuatro estaciones: diferentes ingredientes en cada cuarto', price: 12.45, allergens: ['gluten', 'lactose'] },
      { id: 'pz-12', name: 'Bismark', description: 'Tomate, mozzarella, jamón y huevo', price: 11.90, allergens: ['gluten', 'lactose', 'egg'] },
      { id: 'pz-13', name: 'Prosciutto e Funghi', description: 'Tomate, mozzarella, jamón y champiñones', price: 11.35, allergens: ['gluten', 'lactose'] },
      { id: 'pz-14', name: 'Da Lucia', description: 'Especialidad de la casa', price: 11.35, allergens: ['gluten', 'lactose'] },
      { id: 'pz-15', name: 'Rabo de Toro', description: 'Salsa de tomate, mozzarella, jamón york y bacon', price: 12.95, allergens: ['gluten', 'lactose'] },
      { id: 'pz-16', name: 'Salami', description: 'Tomate, mozzarella y salami', price: 12.95, allergens: ['gluten', 'lactose'] },
      { id: 'pz-17', name: 'Pollo', description: 'Tomate, mozzarella, pollo y pimiento', price: 12.85, allergens: ['gluten', 'lactose'] },
      { id: 'pz-18', name: 'Diavola', description: 'Tomate, mozzarella, champiñón, pepperoni y pimiento', price: 13.55, allergens: ['gluten', 'lactose'] },
      { id: 'pz-19', name: 'Mesina', description: 'Tomate, mozzarella, atún y cebolla', price: 12.95, allergens: ['gluten', 'lactose', 'fish'] },
      { id: 'pz-20', name: 'Pizza al Gusto', description: 'Tomate, mozzarella y 4 ingredientes a elegir', price: 14.60, allergens: ['gluten', 'lactose'] },
      { id: 'pz-21', name: 'Focaccia Siciliana', description: 'Focaccia con aceite de oliva', price: 6.30, allergens: ['gluten', 'vegetarian', 'vegan'] },
      { id: 'pz-22', name: 'Pizza Bianco Rosso', description: 'Pizza especial blanca y roja', price: 15.50, allergens: ['gluten', 'lactose'] },
    ],
  },
  {
    id: 'forno',
    name: 'Del Horno',
    nameIt: 'Nostri Forno',
    description: 'Platos horneados tradicionales',
    items: [
      { id: 'fo-1', name: 'Lasagna Bolognesa', description: 'Lasaña tradicional con ragú boloñés', price: 12.45, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'fo-2', name: 'Lasagna Vegetariana', description: 'Lasaña con verduras de temporada', price: 12.45, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'fo-3', name: 'Pasta Gratinati al Forno', description: 'Pasta gratinada al horno', price: 12.50, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'fo-4', name: 'Melanzane Parmigiana', description: 'Berenjenas a la parmesana', price: 12.45, allergens: ['lactose', 'vegetarian'] },
    ],
  },
  {
    id: 'risotto',
    name: 'Risottos',
    nameIt: 'Nostri Risotto',
    description: 'Arroces típicos italianos cremosos',
    items: [
      { id: 'ri-1', name: 'Risotto ai Funghi Porcini', description: 'Risotto con setas porcini', price: 15.55, allergens: ['lactose', 'vegetarian'] },
      { id: 'ri-2', name: 'Risotto Gorgonzola e Noci', description: 'Risotto con gorgonzola y nueces', price: 13.95, allergens: ['lactose', 'nuts', 'vegetarian'] },
      { id: 'ri-3', name: 'Risotto Frutti di Mare', description: 'Risotto con mariscos frescos', price: 13.95, allergens: ['lactose', 'shellfish', 'fish'] },
      { id: 'ri-4', name: 'Risotto Carbonara', description: 'Risotto estilo carbonara', price: 13.55, allergens: ['lactose', 'egg'] },
      { id: 'ri-5', name: 'Risotto al Lambrusco con Pulpo', description: 'Risotto con vino Lambrusco y pulpo a la brasa', price: 15.95, allergens: ['lactose', 'shellfish'] },
    ],
  },
  {
    id: 'secondi',
    name: 'Carnes',
    nameIt: 'Secondi Piatti',
    description: 'Segundos platos de carne selecta',
    items: [
      { id: 'se-1', name: 'Filetto alla Griglia', description: 'Solomillo a la parrilla', price: 19.95, allergens: [] },
      { id: 'se-2', name: 'Bistecca alla Fiorentina', description: 'Chuletón estilo florentino (500g aprox.)', price: 27.30, allergens: [] },
      { id: 'se-3', name: 'Filetto al Gorgonzola', description: 'Solomillo con salsa de gorgonzola', price: 19.95, allergens: ['lactose'] },
      { id: 'se-4', name: 'Filetto alla Modenese', description: 'Solomillo estilo Módena', price: 19.95, allergens: [] },
      { id: 'se-5', name: 'Scalopine al Marsala', description: 'Escalopines con vino Marsala', price: 13.95, allergens: [] },
      { id: 'se-6', name: 'Scalopine al Limone', description: 'Escalopines al limón', price: 13.55, allergens: [] },
      { id: 'se-7', name: 'Entrecote alla Griglia', description: 'Entrecot a la parrilla', price: 18.00, allergens: [] },
      { id: 'se-8', name: 'Vitello Tonato', description: 'Ternera con salsa de atún', price: 13.95, allergens: ['fish', 'egg'] },
    ],
  },
];

export const getAllAllergens = (): Allergen[] => {
  return ['gluten', 'lactose', 'egg', 'shellfish', 'nuts', 'fish', 'vegetarian', 'vegan'];
};

export const filterMenuByAllergens = (
  categories: MenuCategory[],
  excludeAllergens: Allergen[],
  includeAllergens: Allergen[]
): MenuCategory[] => {
  return categories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      // Exclude items that contain any of the excluded allergens
      const hasExcludedAllergen = excludeAllergens.some(allergen => 
        item.allergens.includes(allergen)
      );
      
      // Include items that have all of the included allergens (like vegetarian filter)
      const hasAllIncludedAllergens = includeAllergens.length === 0 || 
        includeAllergens.every(allergen => item.allergens.includes(allergen));
      
      return !hasExcludedAllergen && hasAllIncludedAllergens;
    }),
  })).filter(category => category.items.length > 0);
};
