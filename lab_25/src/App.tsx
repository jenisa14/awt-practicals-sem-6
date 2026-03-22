
import Cart from "./assets/components/Cart";
import Products from "./assets/components/Products";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <h1>Shopping Cart</h1>
      <Products />
      <Cart/>
    </CartProvider>
  );
}

export default App;