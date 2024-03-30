import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  // document.documentElement.classList.add("dark");

  const [offcanvas, setOffCanvas] = useState(false);

  return (
    <CartProvider>
      <Cart setOffCanvas={setOffCanvas} offcanvas={offcanvas} />
      <Header setOffCanvas={setOffCanvas} />
      <Hero />
      <Products />
    </CartProvider>
  );
}

export default App;
