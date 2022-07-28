export type ProductItem = {
  id: number;
  name: string;
  price: number;
  inCart: number;
};

const initialProducts: Array<ProductItem> = [
  { id: 1, name: "beetroot", price: 0.35, inCart: 0 },
  { id: 2, name: "carrot", price: 0.25, inCart: 0 },
  { id: 3, name: "apple", price: 0.3, inCart: 0 },
  { id: 4, name: "apricot", price: 0.15, inCart: 0 },
  { id: 5, name: "avocado", price: 1.25, inCart: 0 },
  { id: 6, name: "bananas", price: 0.2, inCart: 0 },
  { id: 7, name: "bell-pepper", price: 1.15, inCart: 0 },
  { id: 8, name: "berry", price: 0.1, inCart: 0 },
  { id: 9, name: "blueberry", price: 0.15, inCart: 0 },
  { id: 10, name: "eggplant", price: 2.1, inCart: 0 },
];

export default initialProducts;
