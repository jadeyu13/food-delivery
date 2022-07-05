import Icecream from '../img/i1.png';
import FreshStraberryies from '../img/f1.png';
import MixedKebab from '../img/c3.png';
import MixedFish from '../img/fi1.png';

export const heroData = [
  {
    id: 1,
    name: 'Icecream',
    description: 'Chocolate & Vanilla',
    price: '4.25',
    imageSrc: Icecream,
  },
  {
    id: 2,
    name: 'Straberries',
    description: 'Fresh Straberries',
    price: '3.99',
    imageSrc: FreshStraberryies,
  },
  {
    id: 3,
    name: 'Chicken Kebab',
    description: 'Mixed Chicken Kebab',
    price: '10.99',
    imageSrc: MixedKebab,
  },
  {
    id: 4,
    name: 'Sea Food',
    description: 'Mixed Seafood Plate',
    price: '19.99',
    imageSrc: MixedFish,
  },
];

export const categories = [
  { id: 1, name: 'Chicken', urlParamName: 'chicken' },
  { id: 2, name: 'Curry', urlParamName: 'curry' },
  { id: 3, name: 'Rice', urlParamName: 'rice' },
  {
    id: 4,
    name: 'Fish',
    urlParamName: 'fish',
  },
  { id: 5, name: 'Fruits', urlParamName: 'fruits' },
  { id: 6, name: 'Icecream', urlParamName: 'icereams' },
  { id: 7, name: 'Soft Drinks', urlParamName: 'drinks' },
];
