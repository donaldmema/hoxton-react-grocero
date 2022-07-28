import { ProductItem } from "../../data/products";
import { ItemList } from "./ItemList";

type Props = { initialProducts: ProductItem[] };

export function Header({ initialProducts }: Props) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ItemList initialProducts={initialProducts} />
    </header>
  );
}
