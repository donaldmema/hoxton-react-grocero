import { ProductItem } from "../../data/products";

type Props = { product: ProductItem };

export function Item({ product }: Props) {
  return (
    <li>
      <img
        className="cart--item-icon"
        src="./assets/icons/006-bananas.svg"
        alt="bananas"
      />
      <p>bananas</p>
      <button className="quantity-btn.remove-btn.center">-</button>
      <span className="quantity-text.center">1</span>
      <button className="quantity-btn.add-btn.center">+</button>
    </li>
  );
}
