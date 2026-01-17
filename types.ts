export type Category = 'entrees' | 'pizzas' | 'pates' | 'viandes' | 'vins' | 'boissons';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: Category;
  highlight?: boolean; // For "Incontournables"
  imageUrl?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}