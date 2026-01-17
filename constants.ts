import { MenuItem } from './types';

export const PHONE_NUMBER = "01 39 50 46 58";
export const ADDRESS = "17, rue Ducis - Place du Marché - 78000 Versailles";
export const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Pizza+Capri+17+rue+Ducis+Versailles";

export const MENU_ITEMS: MenuItem[] = [
  // Entrées
  {
    id: 'e1',
    name: "Avocat de Capri",
    description: "Avocat, gorgonzola, crème, aubergine, courgette gratiné",
    price: "14,00 €",
    category: 'entrees',
    highlight: true,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUsQzaAzXcb8LGaJanuGm3W25wrIiATRvlw&s"
  },
  {
    id: 'e2',
    name: "Fritto Misto di Capri",
    description: "Beignet calamar, beignet crevette, beignet de légumes, beignet de mozzarella",
    price: "20,00 €",
    category: 'entrees',
    highlight: true,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUsQzaAzXcb8LGaJanuGm3W25wrIiATRvlw&s"
  },
  {
    id: 'e3',
    name: "Antipasti di Capri",
    description: "Légumes grillés, tapenade, olives vertes et noires, caviar d'aubergines, mozzarella fondante",
    price: "17,00 €",
    category: 'entrees',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUsQzaAzXcb8LGaJanuGm3W25wrIiATRvlw&s"
  },
  {
    id: 'e4',
    name: "Salade Capri",
    description: "Salade, jambon, blanc de poulet, tomates, œuf dur, pecorino",
    price: "14,50 €",
    category: 'entrees',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUsQzaAzXcb8LGaJanuGm3W25wrIiATRvlw&s"
  },

  // Pizzas
  {
    id: 'p1',
    name: "Margherita",
    description: "Sauce tomate, mozzarella, basilic frais",
    price: "11,00 €",
    category: 'pizzas',
    highlight: true,
    imageUrl: "https://www.hervecuisine.com/wp-content/uploads/pizzaweb.jpg"
  },
  {
    id: 'p2',
    name: "Régina (Reine)",
    description: "Sauce tomate, mozzarella, jambon, champignons",
    price: "13,50 €",
    category: 'pizzas',
    imageUrl: "https://static.vecteezy.com/system/resources/previews/016/117/081/non_2x/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull-photo.jpg"
  },
  {
    id: 'p3',
    name: "Capri",
    description: "Sauce tomate, mozzarella, lardons, oignons, crème fraîche, œuf, origan, oignon confit",
    price: "14,00 €",
    category: 'pizzas',
    highlight: true,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/016/117/081/non_2x/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull-photo.jpg"
  },
  {
    id: 'p4',
    name: "Truffe & Champignons (Inspiration)",
    description: "Crème de truffe, mozzarella, champignons de Paris, roquette",
    price: "16,50 €",
    category: 'pizzas',
    highlight: true,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/016/117/081/non_2x/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull-photo.jpg"
  },
  {
    id: 'p5',
    name: "4 Fromages",
    description: "Sauce tomate, gorgonzola, chèvre, taleggio, mozzarella, grana, pecorino",
    price: "16,00 €",
    category: 'pizzas',
    imageUrl: "https://www.hervecuisine.com/wp-content/uploads/pizzaweb.jpg"
  },
  {
    id: 'p6',
    name: "Calzone (Chausson)",
    description: "Sauce tomate, mozzarella, jambon, œuf",
    price: "14,50 €",
    category: 'pizzas',
    imageUrl: "https://static.vecteezy.com/system/resources/previews/016/117/081/non_2x/pepperoni-pizza-with-a-slice-taken-out-with-cheese-pull-photo.jpg"
  },
  {
    id: 'p7',
    name: "Végétarienne",
    description: "Sauce tomate, mozzarella, champignons, poivrons, artichauts, aubergines",
    price: "13,50 €",
    category: 'pizzas',
    imageUrl: "https://www.hervecuisine.com/wp-content/uploads/pizzaweb.jpg"
  },

  // Pâtes
  {
    id: 'pa1',
    name: "Lasagne à la bolognaise",
    description: "Pâtes fraîches, sauce viande maison, béchamel, gratiné au four",
    price: "14,50 €",
    category: 'pates',
    highlight: true,
    imageUrl: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/5f24139ace17917d2acf45266604bc0aa0a43a08.jpg"
  },
  {
    id: 'pa2',
    name: "Tagliatelle 4 fromages",
    description: "Sauce crémeuse Gorgonzola, chèvre, taleggio, grana",
    price: "14,00 €",
    category: 'pates',
    imageUrl: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/5f24139ace17917d2acf45266604bc0aa0a43a08.jpg"
  },
  {
    id: 'pa3',
    name: "Rigatoni Matriciana",
    description: "Rigatoni, lardons, oignons, poivrons, sauce tomate mijotée",
    price: "13,00 €",
    category: 'pates',
    imageUrl: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/5f24139ace17917d2acf45266604bc0aa0a43a08.jpg"
  },
  {
    id: 'pa4',
    name: "Spaghetti Carbonara",
    description: "Lardons, crème fraîche, jaune d'œuf, parmesan",
    price: "13,50 €",
    category: 'pates',
    imageUrl: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/48a49653c8716457eb0b2f7eb3c7d74c/Derivates/5f24139ace17917d2acf45266604bc0aa0a43a08.jpg"
  },

  // Viandes
  {
    id: 'v1',
    name: "Escalope Milanaise",
    description: "Veau pané, croustillant et doré, servi avec pâtes ou salade",
    price: "17,50 €",
    category: 'viandes',
    highlight: true,
    imageUrl: "https://www.castel-viandes.fr/wp-content/uploads/2022/04/Castel-Viandes-39f5d622-7a77-4d10-b20f-60e71e7f5531-282.jpg"
  },
  {
    id: 'v2',
    name: "Saltimbocca Romana",
    description: "Veau, jambon de Parme, crème fraîche, vin blanc, soja",
    price: "20,00 €",
    category: 'viandes',
    imageUrl: "https://www.castel-viandes.fr/wp-content/uploads/2022/04/Castel-Viandes-39f5d622-7a77-4d10-b20f-60e71e7f5531-282.jpg"
  },
  {
    id: 'v3',
    name: "Escalope Bocchini all parmigiana",
    description: "Veau, jambon de Parme, tomates, mozzarella gratinée, crème fraîche",
    price: "20,00 €",
    category: 'viandes',
    imageUrl: "https://www.castel-viandes.fr/wp-content/uploads/2022/04/Castel-Viandes-39f5d622-7a77-4d10-b20f-60e71e7f5531-282.jpg"
  },

  // Vins
  {
    id: 'w1',
    name: "Chianti (DOC)",
    description: "Rouge - Toscane. Notes de cerise et de terre, structure élégante.",
    price: "22,00 € (Btl)",
    category: 'vins',
    imageUrl: "https://img.passeportsante.net/1200x675/2021-05-03/i102200-vin.webp"
  },
  {
    id: 'w2',
    name: "Valpolicella (DOC)",
    description: "Rouge - Vénétie. Léger, fruité et frais.",
    price: "22,00 € (Btl)",
    category: 'vins',
    imageUrl: "https://img.passeportsante.net/1200x675/2021-05-03/i102200-vin.webp"
  },
  {
    id: 'w3',
    name: "Lambrusco Dolce (DOC)",
    description: "Rouge pétillant - Émilie-Romagne. Doux et festif.",
    price: "20,00 € (Btl)",
    category: 'vins',
    imageUrl: "https://img.passeportsante.net/1200x675/2021-05-03/i102200-vin.webp"
  },

  // Boissons (Nouveau)
  {
    id: 'b1',
    name: "Coca-Cola / Zéro",
    description: "33cl",
    price: "4,50 €",
    category: 'boissons',
    imageUrl: "https://picsum.photos/400/300?random=22"
  },
  {
    id: 'b2',
    name: "San Pellegrino",
    description: "Eau pétillante italienne (50cl / 1L)",
    price: "4,50 € / 6,50 €",
    category: 'boissons',
    imageUrl: "https://picsum.photos/400/300?random=23"
  },
  {
    id: 'b3',
    name: "Bière Moretti",
    description: "Bière blonde italienne authentique",
    price: "6,00 €",
    category: 'boissons',
    imageUrl: "https://picsum.photos/400/300?random=24"
  },
  {
    id: 'b4',
    name: "Jus de fruits artisanaux",
    description: "Pomme, Orange, Abricot",
    price: "5,00 €",
    category: 'boissons',
    imageUrl: "https://picsum.photos/400/300?random=25"
  },
  {
    id: 'b5',
    name: "Espresso Italien",
    description: "Café grain Lavazza",
    price: "2,50 €",
    category: 'boissons',
    imageUrl: "https://picsum.photos/400/300?random=26"
  },
  {
    id: 'b6',
    name: "Cappuccino",
    description: "Mousse de lait onctueuse",
    price: "4,50 €",
    category: 'boissons',
    imageUrl: "https://picsum.photos/400/300?random=27"
  },
  {
    id: 'b7',
    name: "Limoncello",
    description: "Digestif au citron (4cl)",
    price: "7,00 €",
    category: 'boissons',
    imageUrl: "https://picsum.photos/400/300?random=28"
  }
];