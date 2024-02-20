import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Cart.css'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/cart');
        setCartItems(response.data);
        calculateTotal(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * 1, 0);
    setTotalPrice(total);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table className="cart">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>1</td>
              <td>${item.price * 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
