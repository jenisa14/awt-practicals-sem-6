import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// import { CartContext } from "../context/CartContext";

function Cart() {

  const cartContext = useContext(CartContext);

  if (!cartContext) return null;

  return (
    <div>
      <h2>Cart Items</h2>

      {cartContext.cart.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
}

export default Cart;