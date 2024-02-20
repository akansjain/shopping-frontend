import React, { useState } from 'react';
import './App.css';
import ProductTable from './components/ProductTable';
import Cart from './components/Cart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <div className="App">
      <header className="App-header">
      <nav>
      <button onClick={toggleCart} className="cart-icon-button">
      <ShoppingCartIcon />
        </button>
    </nav>
      </header>
      {!isCartVisible && <ProductTable />}
      {isCartVisible && <Cart />}
    </div>
  );
}

export default App;
