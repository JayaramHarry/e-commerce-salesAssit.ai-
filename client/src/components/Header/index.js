import React, {useState} from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { IoPersonOutline } from 'react-icons/io5';
import { RiBookmarkLine } from 'react-icons/ri';
import { MdShoppingBag } from 'react-icons/md';
import './style.css';

const Header = ({ products, setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    // Ensure products array is not undefined before filtering
    if (products && products.length > 0) {
      // Filter products based on the selected category (convert to lowercase)
      const filteredProducts = products.filter(product => product.category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filteredProducts);
      setSelectedCategory(category);
    }
  };
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <span className="website-name">TANN  TRIM</span>
            </div>
            <div className="navbar-icons">
              <AiOutlineSearch className="icon" />
              <IoPersonOutline className="icon" />
              <RiBookmarkLine className="icon" />
              <MdShoppingBag className="icon" />
            </div>
          </div>
        </nav>
        <div className="options">
        <div className={`option ${selectedCategory === 'bags' ? 'active' : ''}`} onClick={() => handleCategoryClick('bags')}>Bags</div>
        <div className={`option ${selectedCategory === 'travel' ? 'active' : ''}`} onClick={() => handleCategoryClick('travel')}>Travel</div>
        <div className={`option ${selectedCategory === 'accessories' ? 'active' : ''}`} onClick={() => handleCategoryClick('accessories')}>Accessories</div>
        <div className={`option ${selectedCategory === 'gifting' ? 'active' : ''}`} onClick={() => handleCategoryClick('gifting')}>Gifting</div>
        <div className={`option ${selectedCategory === 'jewelry' ? 'active' : ''}`} onClick={() => handleCategoryClick('jewelery')}>Jewelery</div>
      </div>
      </header>
      <div className="category-section">
        <img src="images/camera_image.png"alt="all-bags"/>
        <img src="images/vanity_pouch.png"alt="all-bags"/>
        <img src="images/tote_bag.png"alt="all-bags"/>
        <img src="images/duffle_bag.png"alt="all-bags"/>
        <img src="images/laptop_sleeve.png"alt="all-bags"/>
        <img src="images/messanger_bags.png"alt="all-bags"/>
        <img src="images/slinger_bags.png"alt="all-bags"/>
        <img src="images/handbags_woman.png"alt="all-bags"/>   
      </div>
    </>
  );
};

export default Header;
