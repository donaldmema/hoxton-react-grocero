import { ProductItem } from "../../data/products";
import { Product } from "./Product";

import "./ItemList.css";

type Props = { initialProducts: ProductItem[] };

export function ItemList({ initialProducts }: Props) {
  return (
    <ul className="item-list store--item-list">
      {initialProducts.map((product: ProductItem, index: number) => (
        <Product key={index} product={product} />
      ))}
    </ul>
  );
}
