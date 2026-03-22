import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import { CartContext } from "../context/CartContext";

function Products() {

  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphones" }
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id}>
          {p.name}
          <button onClick={() => cartContext.addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;