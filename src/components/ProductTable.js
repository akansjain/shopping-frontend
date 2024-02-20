import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/ProductTable.css';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);
  const addToCart = async (productId) => {
    try {
      const response = await axios.post('http://localhost:8080/api/cart/add', {
        productId: productId,
        quantity: 1 
      });
      console.log('Product added to cart:', response.data);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };
  

  return (
    <table className="productTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Add to cart</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td><button onClick={() => addToCart(product.id)}>Add</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
