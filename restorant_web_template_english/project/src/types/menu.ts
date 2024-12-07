export interface MenuItem {
  id: string;
  name: string;
  germanName: string;
  description: string;
  price: number;
  image?: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  seasonal?: boolean;
  allergens?: string[];
}