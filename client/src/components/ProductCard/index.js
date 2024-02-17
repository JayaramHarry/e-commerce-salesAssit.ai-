import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiBookmarkLine } from 'react-icons/ri';
import { IoShareOutline } from "react-icons/io5";

import "./style.css";

const ProductCard = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [dataFetched, setDataFetched] = useState(false); // Track if data has been fetched

  useEffect(() => {
    if (!dataFetched) { // Fetch data only if it hasn't been fetched before
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          const products = response.data;
          console.log("Fetched products:", products); // Log the fetched products
          setProductsByCategory(groupProductsByCategory(products));
          setLoading(false); // Set loading state to false after fetching data
          setDataFetched(true); // Set dataFetched to true
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }
  }, [dataFetched]); // Only run this effect when dataFetched changes

  console.log("Products by category:", productsByCategory); // Log the products by category

  const groupProductsByCategory = (products) => {
    return products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});
  };

  return (
    <div>
      {!loading && // Only render if loading is false
        Object.entries(productsByCategory).map(([category, products]) => (
          <div key={category}>
            <div className='category-container'>
              <h3>{category.toUpperCase()}</h3>
              <div className='length-icon-continer'>
                <p>{products.length} products</p>
                <IoShareOutline className='icon'/>
              </div>
            </div>
            <div className="product-list">
              {products.map(product => (
                <div key={product.id} className="product">
                  <RiBookmarkLine className="image-bookmark" />
                  <img src={product.image} alt={product.title} />
                  <h4>{product.title}</h4>
                  <p>Price: ${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductCard;

