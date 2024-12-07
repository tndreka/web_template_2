import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Black Forest Ham Platter',
    germanName: 'Schwarzwälder Schinkenplatte',
    description: 'Selection of locally cured Black Forest ham with pickles and rustic bread',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1624174503860-478619028ab3',
    category: 'starters'
  },
  {
    id: '2',
    name: 'Forest Mushroom Soup',
    germanName: 'Waldpilzsuppe',
    description: 'Creamy soup made with local wild mushrooms and fresh herbs',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
    category: 'starters',
    seasonal: true
  },
  {
    id: '3',
    name: 'Black Forest Trout',
    germanName: 'Schwarzwaldforelle',
    description: 'Fresh local trout served with herb butter and roasted potatoes',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659',
    category: 'mains'
  },
  {
    id: '4',
    name: 'Schnitzel',
    germanName: 'Wiener Schnitzel',
    description: 'Traditional breaded veal cutlet served with potato salad and lingonberries',
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1599921841143-819065a55cc6',
    category: 'mains',
    allergens: ['gluten', 'eggs']
  },
  {
    id: '5',
    name: 'Black Forest Cake',
    germanName: 'Schwarzwälder Kirschtorte',
    description: 'Traditional chocolate cake with cherries and whipped cream',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d',
    category: 'desserts',
    allergens: ['gluten', 'dairy', 'eggs']
  },
  {
    id: '6',
    name: 'Apple Strudel',
    germanName: 'Apfelstrudel',
    description: 'Warm apple strudel served with vanilla sauce',
    price: 7.90,
    image: 'https://images.unsplash.com/photo-1630953899906-d16511a72558',
    category: 'desserts',
    allergens: ['gluten', 'nuts']
  },
  {
    id: '7',
    name: 'Local Craft Beer',
    germanName: 'Hausgebrautes Bier',
    description: 'Selection of locally brewed craft beers',
    price: 4.90,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9',
    category: 'drinks'
  },
  {
    id: '8',
    name: 'Black Forest Wine',
    germanName: 'Schwarzwälder Wein',
    description: 'Regional red and white wines from local vineyards',
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    category: 'drinks'
  }
];