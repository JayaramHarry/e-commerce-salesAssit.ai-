import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const fetchedProducts = response.data;
        console.log('Fetched products:', fetchedProducts);
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = (filterCriteria) => {
    console.log('Filtering products by:', filterCriteria);
    const filtered = products.filter(product => {
      return product.category === filterCriteria;
    });
    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
  };

  return (
    <div className="app">
      <Header products={products} setFilteredProducts={handleFilter} />
      <div className="main-content">
        <div className="product-list">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
