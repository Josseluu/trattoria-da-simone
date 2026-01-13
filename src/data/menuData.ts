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
      { id: 'ant-1', name: 'Verdure alla Griglia', description: 'Parrillada de verduras de temporada', price: 15.50, allergens: ['vegetarian'] },
      { id: 'ant-2', name: 'Carpaccio di Filetto', description: 'Finas láminas de solomillo maceradas con setas, rúcula, limón y parmesano', price: 16.00, allergens: ['lactose'] },
      { id: 'ant-3', name: 'Carpaccio di Salmone', description: 'Finas láminas de salmón sobre lecho de rúcula aderezado con limón y aceite virgen extra', price: 17.90, allergens: ['fish'] },
      { id: 'ant-4', name: 'Provola al Forno', description: 'Queso provolone horneado con salsa de tomate y albahaca', price: 13.50, allergens: ['lactose', 'vegetarian'] },
      { id: 'ant-5', name: 'Pepata de Cozze', description: 'Plato típico con mejillones, salsa de tomate, orégano, acompañado con tostas', price: 14.50, allergens: ['shellfish', 'gluten'] },
      { id: 'ant-6', name: 'Focaccia di Prosciutto', description: 'Masa fina crujiente horneada con jamón ibérico y aceite de oliva virgen extra', price: 12.90, allergens: ['gluten'] },
      { id: 'ant-7', name: 'Millefoglie di Verdure con Formaggio di Capra', description: 'Milhoja de verduritas con queso de cabra', price: 14.50, allergens: ['lactose', 'vegetarian'] },
    ],
  },
  {
    id: 'insalate',
    name: 'Ensaladas',
    nameIt: 'Insalate',
    description: 'Frescas ensaladas con ingredientes mediterráneos',
    items: [
      { id: 'ins-1', name: 'Mozzarella di Bufala e Pomodoro', description: 'Mozzarella de búfala y tomate fresco', price: 14.50, allergens: ['lactose', 'vegetarian'] },
      { id: 'ins-2', name: 'Siciliana', description: 'Lechuga gourmet, variedad de quesos, tomate cherry, nueces y vinagreta de jerez y miel', price: 14.90, allergens: ['lactose', 'nuts', 'vegetarian'] },
      { id: 'ins-3', name: "Dell'Ortoverde", description: 'Lechuga gourmet, atún, tomate, huevos, cebolla, espárragos y aceitunas', price: 12.00, allergens: ['fish', 'egg'] },
      { id: 'ins-4', name: 'Di Rucola', description: 'Rúcula, parmesano laminado, tomate cherry y nueces', price: 13.00, allergens: ['lactose', 'nuts', 'vegetarian'] },
      { id: 'ins-5', name: 'Napolitana', description: 'Lechuga gourmet, pollo, bacon frito, picatostes y mayonesa de anchoas', price: 14.00, allergens: ['gluten', 'egg', 'fish'] },
      { id: 'ins-6', name: 'Insalata Pomodoro', description: 'Tomate fresco, cebolla, atún y alcaparras', price: 11.00, allergens: ['fish'] },
      { id: 'ins-7', name: 'Insalata da Simone', description: 'Espinacas con virutas de queso de cabra, manzana ácida, champiñón, pasas con vinagreta de jerez y miel', price: 14.50, allergens: ['lactose', 'vegetarian'] },
      { id: 'ins-8', name: 'Insalata di Formaggio di Capra', description: 'Variado de lechugas, queso de cabra, pasas, nueces y vinagreta de jerez y miel', price: 14.50, allergens: ['lactose', 'nuts', 'vegetarian'] },
    ],
  },
  {
    id: 'pasta-seca',
    name: 'Pasta Seca',
    nameIt: 'Pasta Seca',
    description: 'Pasta seca con salsas tradicionales (Spaghetti, Fusili, Farfale, Rigatoni, Penne)',
    items: [
      { id: 'ps-1', name: 'Pomodoro y Albahaca', description: 'Salsa de tomate con un toque de albahaca', price: 12.90, allergens: ['gluten', 'vegetarian'] },
      { id: 'ps-2', name: 'Aglio-Oleo-Gamberritti', description: 'Ajo, aceite y gambas', price: 13.90, allergens: ['gluten', 'shellfish'] },
      { id: 'ps-3', name: 'Gorgonzola e Noci', description: 'Queso gorgonzola y nueces', price: 13.50, allergens: ['gluten', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'ps-4', name: 'Bolognese', description: 'Salsa típica preparada con carne picada, tomate, apio y zanahoria', price: 12.00, allergens: ['gluten'] },
      { id: 'ps-5', name: 'Pesto', description: 'Salsa hecha con aceite de oliva, albahaca, piñones y parmesano', price: 13.50, allergens: ['gluten', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'ps-6', name: 'Quatro Formaggi', description: 'Mezcla de cuatro quesos', price: 13.50, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'ps-7', name: 'Pesto e Pomodoro', description: 'Salsa de pesto con salsa de tomate', price: 13.90, allergens: ['gluten', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'ps-8', name: 'Arrabiata', description: 'Salsa de tomate, ajo, guindilla y perejil', price: 13.00, allergens: ['gluten', 'vegetarian', 'vegan'] },
      { id: 'ps-9', name: 'Frutti di Mare', description: 'Salsa de tomate con marisco', price: 16.00, allergens: ['gluten', 'shellfish'] },
      { id: 'ps-10', name: 'Amatricciana', description: 'Salsa de tomate con carrillo de cerdo ahumado, cebolla y queso de oveja', price: 13.50, allergens: ['gluten', 'lactose'] },
      { id: 'ps-11', name: 'Norma', description: 'Salsa de tomate, berenjenas, albahaca y ricota', price: 13.00, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'ps-12', name: 'Vongole', description: 'Almejas con ajo, aceite de oliva, vino blanco y perejil', price: 13.50, allergens: ['gluten', 'shellfish'] },
      { id: 'ps-13', name: 'Alfredo', description: 'Salsa de tomate y gorgonzola', price: 13.50, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'ps-14', name: 'Carbonara', description: 'Con carrillo de cerdo, huevo y parmesano', price: 13.90, allergens: ['gluten', 'lactose', 'egg'] },
      { id: 'ps-15', name: 'Salsa Salmón', description: 'Cebolla, salmón ahumado, cognac, nata y tomate', price: 14.50, allergens: ['gluten', 'lactose', 'fish'] },
      { id: 'ps-16', name: 'Putanesca', description: 'Tomate, anchoas, aceitunas negras, y alcaparras', price: 13.50, allergens: ['gluten', 'fish'] },
      { id: 'ps-17', name: 'Aglio-Oleo-Peperoncino', description: 'Ajo, aceite y guindilla', price: 11.50, allergens: ['gluten', 'vegetarian', 'vegan'] },
      { id: 'ps-18', name: 'Crema de Nueces', description: 'Salsa cremosa de nueces', price: 13.90, allergens: ['gluten', 'lactose', 'nuts', 'vegetarian'] },
    ],
  },
  {
    id: 'pasta-fresca-rellena',
    name: 'Pasta Fresca Rellena',
    nameIt: 'Pasta Fresca Rellena',
    description: 'Pasta rellena artesanal (Fagottini, Raviolacci, Tortellini, Panzarotti, Gnocchi, Cappelliti)',
    items: [
      { id: 'pfr-1', name: 'Pomodoro y Albahaca', description: 'Salsa de tomate con un toque de albahaca', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pfr-2', name: 'Trufa y Hongos', description: 'Salsa de trufa y hongos', price: 15.50, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pfr-3', name: 'Gorgonzola', description: 'Crema de gorgonzola', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pfr-4', name: 'Bolognese', description: 'Salsa típica preparada con carne picada, tomate, apio y zanahoria', price: 14.00, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pfr-5', name: 'Carbonara', description: 'Con carrillo de cerdo, huevo y parmesano', price: 14.50, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pfr-6', name: 'Quatro Formaggi', description: 'Mezcla de cuatro quesos', price: 14.90, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pfr-7', name: 'Pesto', description: 'Pesto genovés con albahaca y piñones', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pfr-8', name: 'Pesto Pomodoro', description: 'Salsa de pesto con salsa de tomate', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pfr-9', name: 'Salsa Salmón', description: 'Cebolla, salmón ahumado, cognac, nata y tomate', price: 16.00, allergens: ['gluten', 'egg', 'lactose', 'fish'] },
      { id: 'pfr-10', name: 'Putanesca', description: 'Tomate, anchoas, aceitunas negras, y alcaparras', price: 14.00, allergens: ['gluten', 'egg', 'fish'] },
      { id: 'pfr-11', name: 'Aglio-Oleo-Peperoncino', description: 'Ajo, aceite y guindilla', price: 12.00, allergens: ['gluten', 'egg', 'vegetarian'] },
      { id: 'pfr-12', name: 'Crema de Nueces', description: 'Salsa cremosa de nueces', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
    ],
  },
  {
    id: 'pasta-fresca',
    name: 'Pasta Fresca',
    nameIt: 'Pasta Fresca',
    description: 'Pasta fresca hecha en casa (Pappardelle, Fetuccine, Tagliolini, Trofie, Strozzapreti, Gnocchetti di Patata)',
    items: [
      { id: 'pf-1', name: 'Pomodoro y Albahaca', description: 'Salsa de tomate con un toque de albahaca', price: 14.50, allergens: ['gluten', 'egg', 'vegetarian'] },
      { id: 'pf-2', name: 'Trufa y Hongos', description: 'Salsa de trufa y hongos', price: 15.00, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-3', name: 'Gorgonzola', description: 'Crema de gorgonzola', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-4', name: 'Carbonara', description: 'Con carrillo de cerdo, huevo y parmesano', price: 14.00, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pf-5', name: 'Pesto', description: 'Pesto genovés con albahaca y piñones', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pf-6', name: 'Pesto Pomodoro', description: 'Salsa de pesto con salsa de tomate', price: 14.90, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
      { id: 'pf-7', name: 'Arrabiata', description: 'Salsa de tomate, ajo, guindilla y perejil', price: 14.00, allergens: ['gluten', 'egg', 'vegetarian'] },
      { id: 'pf-8', name: 'Norma', description: 'Salsa de tomate, berenjenas, albahaca y ricota', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-9', name: 'Aglio, Oleo, Gamberretti', description: 'Ajo, aceite y gambas', price: 15.90, allergens: ['gluten', 'egg', 'shellfish'] },
      { id: 'pf-10', name: 'Bolognese', description: 'Salsa típica preparada con carne picada, tomate, apio y zanahoria', price: 14.00, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'pf-11', name: 'Alfredo', description: 'Salsa de tomate y gorgonzola', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-12', name: 'Quatro Formaggi', description: 'Mezcla de cuatro quesos', price: 14.50, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'pf-13', name: 'Salsa Salmón', description: 'Cebolla, salmón ahumado, cognac, nata y tomate', price: 15.90, allergens: ['gluten', 'egg', 'lactose', 'fish'] },
      { id: 'pf-14', name: 'Putanesca', description: 'Tomate, anchoas, aceitunas negras, y alcaparras', price: 14.50, allergens: ['gluten', 'egg', 'fish'] },
      { id: 'pf-15', name: 'Aglio-Oleo-Peperoncino', description: 'Ajo, aceite y guindilla', price: 12.50, allergens: ['gluten', 'egg', 'vegetarian'] },
      { id: 'pf-16', name: 'Crema de Nueces', description: 'Salsa cremosa de nueces', price: 14.90, allergens: ['gluten', 'egg', 'lactose', 'nuts', 'vegetarian'] },
    ],
  },
  {
    id: 'pizze',
    name: 'Pizzas',
    nameIt: 'Pizze',
    description: 'Pizzas artesanales horneadas en horno de leña',
    items: [
      { id: 'pz-1', name: 'Marguerita', description: 'Salsa tomate y mozzarella', price: 11.50, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-2', name: 'Napoli', description: 'Salsa de tomate, mozzarella, anchoas y alcaparras', price: 14.50, allergens: ['gluten', 'lactose', 'fish'] },
      { id: 'pz-3', name: 'Prosciutto', description: 'Salsa de tomate, mozzarella y jamón york', price: 13.50, allergens: ['gluten', 'lactose'] },
      { id: 'pz-4', name: 'Capricciosa', description: 'Salsa de tomate, mozzarella, aceitunas, jamón york y huevo', price: 13.50, allergens: ['gluten', 'lactose', 'egg'] },
      { id: 'pz-5', name: 'Quattro Formaggi', description: 'Cuatro quesos', price: 14.50, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-6', name: 'Norma', description: 'Salsa tomate, mozzarella, berenjenas, albahaca y requesón', price: 14.50, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-7', name: 'Alfredo', description: 'Salsa tomate, gorgonzola, cebolla y champiñón', price: 13.90, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-8', name: 'Olimpica', description: 'Salsa de tomate, mozzarella, jamón york y rúcula', price: 13.50, allergens: ['gluten', 'lactose'] },
      { id: 'pz-9', name: 'Vegetariana', description: 'Salsa de tomate y verduras de estación', price: 13.50, allergens: ['gluten', 'lactose', 'vegetarian'] },
      { id: 'pz-10', name: 'Calzone', description: 'Pizza con forma de media luna rellena de salsa de tomate, mozzarella, espinacas y jamón york', price: 15.90, allergens: ['gluten', 'lactose'] },
      { id: 'pz-11', name: 'Quattro Stagioni', description: 'Salsa de tomate, mozzarella, alcachofas, aceitunas, champiñones y espárragos', price: 14.00, allergens: ['gluten', 'lactose'] },
      { id: 'pz-12', name: 'Bismark', description: 'Salsa de tomate, mozzarella, jamón york y huevo', price: 14.50, allergens: ['gluten', 'lactose', 'egg'] },
      { id: 'pz-13', name: 'Prosciutto i Fungui', description: 'Salsa de tomate, mozzarella, jamón york y champiñón', price: 13.50, allergens: ['gluten', 'lactose'] },
      { id: 'pz-14', name: 'Da Lucia', description: 'Salsa de tomate, mozzarella, jamón york y bacon', price: 14.00, allergens: ['gluten', 'lactose'] },
      { id: 'pz-15', name: 'Salami', description: 'Salsa de tomate, mozzarella y salami', price: 13.50, allergens: ['gluten', 'lactose'] },
      { id: 'pz-16', name: 'Pollo', description: 'Salsa de tomate, mozzarella, pollo y pimiento', price: 13.90, allergens: ['gluten', 'lactose'] },
      { id: 'pz-17', name: 'Diavola', description: 'Salsa de tomate, mozzarella, champiñón, pepperoni y pimiento', price: 14.90, allergens: ['gluten', 'lactose'] },
      { id: 'pz-18', name: 'Mesina', description: 'Salsa de tomate, mozzarella, atún y cebolla', price: 14.50, allergens: ['gluten', 'lactose', 'fish'] },
      { id: 'pz-19', name: 'Pizza al Gusto', description: 'Salsa de tomate, mozzarella y cuatro ingredientes a elegir', price: 17.50, allergens: ['gluten', 'lactose'] },
      { id: 'pz-20', name: 'Focaccia Siciliana', description: 'Focaccia con ajo, aceite y orégano', price: 10.00, allergens: ['gluten', 'vegetarian', 'vegan'] },
    ],
  },
  {
    id: 'forno',
    name: 'Del Horno',
    nameIt: 'Nostri Forno',
    description: 'Platos horneados tradicionales',
    items: [
      { id: 'fo-1', name: 'Lasagna Bolognesa', description: 'Lasaña tradicional con ragú boloñés', price: 15.50, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'fo-2', name: 'Lasagna Vegetariana', description: 'Lasaña con verduras de temporada', price: 15.00, allergens: ['gluten', 'egg', 'lactose', 'vegetarian'] },
      { id: 'fo-3', name: 'Pasta Gratinati al Forno', description: 'Pasta gratinada al horno', price: 14.50, allergens: ['gluten', 'egg', 'lactose'] },
      { id: 'fo-4', name: 'Melanzane Parmigiana', description: 'Berenjenas a la parmesana', price: 15.00, allergens: ['lactose', 'vegetarian'] },
    ],
  },
  {
    id: 'risotto',
    name: 'Risottos',
    nameIt: 'Nostri Risotto',
    description: 'Nuestros arroces típicos italianos',
    items: [
      { id: 'ri-1', name: 'Risotto ai Fungui Porcini', description: 'Arroz con Boletus Edulis', price: 16.50, allergens: ['lactose', 'vegetarian'] },
      { id: 'ri-2', name: 'Risotto Gorgonzola e Noci', description: 'Arroz con gorgonzola y nueces', price: 16.90, allergens: ['lactose', 'nuts', 'vegetarian'] },
      { id: 'ri-3', name: 'Risotto Frutti di Mare', description: 'Arroz con marisco', price: 16.90, allergens: ['lactose', 'shellfish'] },
      { id: 'ri-4', name: 'Risotto Carbonara', description: 'Arroz con carrillada de cerdo, huevo y parmesano', price: 15.50, allergens: ['lactose', 'egg'] },
    ],
  },
  {
    id: 'secondi',
    name: 'Carnes',
    nameIt: 'Seconde Piatti',
    description: 'Segundos platos de carne selecta',
    items: [
      { id: 'se-1', name: 'Filetto alla Griglia', description: 'Solomillo de ternera a la parrilla', price: 26.50, allergens: [] },
      { id: 'se-2', name: 'Bistecca alla Fiorentina', description: 'Chuletón típico de Florencia a la parrilla', price: 45.50, allergens: [] },
      { id: 'se-3', name: 'Escalopines al Limón', description: 'Solomillo ibérico con salsa de limón', price: 15.50, allergens: [] },
      { id: 'se-4', name: 'Escalopines al Marsala', description: 'Solomillo ibérico con vino Marsala', price: 16.00, allergens: [] },
      { id: 'se-5', name: 'Escalopines al Gorgonzola', description: 'Solomillo ibérico con salsa gorgonzola', price: 16.50, allergens: ['lactose'] },
      { id: 'se-6', name: 'Entrecote alla Griglia', description: 'Lomo alto de ternera al grill', price: 24.50, allergens: [] },
    ],
  },
  {
    id: 'pesce',
    name: 'Pescado',
    nameIt: 'Pesce',
    description: 'Pescado fresco del día',
    items: [
      { id: 'pe-1', name: 'Pesce chiedere allo Chef Simone', description: 'Preguntar al Chef Simone sobre el pescado del día', price: 0, allergens: ['fish'] },
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
