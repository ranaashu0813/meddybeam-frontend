import { useState } from "react";
import type { Product } from "../types/product";

import CallModal from "./CallModal";
import "./ProductCard.css";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="product-card">
      <div className="image-wrapper">
    <img src={product.image} alt={product.name} />
  </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <button onClick={() => setOpen(true)}>
          Call to Know More
        </button>
      </div>

      {open && (
        <CallModal
          productName={product.name}
          description={product.description}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
