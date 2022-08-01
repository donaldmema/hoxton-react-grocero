import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Item } from "./components/Main/Item";

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
              <Item product={{
                id: 0,
                name: "",
                price: 0,
                inCart: 0
              }} />
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
