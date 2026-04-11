import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import "./Shop.css";

const tabs = ["cpap", "bipap", "mask"];

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  // ✅ filter logic
  const filteredProducts = category
    ? products.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div className="shop-container">

      {/* ✅ TABS */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${
              category === tab ? "active-tab" : ""
            }`}
            onClick={() => navigate(`/shop/${tab}`)}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TITLE */}
      <h1 className="shop-title">
        {category ? `${category} Products` : "All Products"}
      </h1>

      {/* PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <p className="product-name">{product.name}</p>
            <p className="product-price">₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;