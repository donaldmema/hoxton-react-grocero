import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";

import initialProducts from "./data/products";

function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="App">
      <body>
        <Header initialProducts={initialProducts} />

        <main id="cart">
          <h2>Your Cart</h2>

          <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
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
            </ul>
          </div>

          <div className="total-section">
            <div>
              <h3>Total</h3>
            </div>

            <div>
              <span className="total-number">2.80</span>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
