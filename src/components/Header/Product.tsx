import { ProductItem } from "../../data/products";

type Props = { product: ProductItem };

export function Product({ product }: Props) {
  function getImgSrc(product: ProductItem) {
    let imgId = String(product.id).padStart(3, "0");
    let imgName = product.name + ".svg";
    return "./assets/icons/" + imgId + "-" + imgName;
  }

  return (
    <li>
      <div className="store--item-icon">
        <img src={getImgSrc(product)} alt={product.name} />
      </div>
      <button>Add to cart</button>
    </li>
  );
}
