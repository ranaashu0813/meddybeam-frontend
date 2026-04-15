import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./Shop.css";
import categories from "../data/Catagories";

const Shop: React.FC = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  // Use all categories for shop tabs
  const shopCategories = categories;

  // ✅ filter logic
  if (!category || !shopCategories.some(cat => cat.link.toLowerCase() === category.toLowerCase())) {
    return (
      <div className="error-message">
        <h1>OOPS NO ITEM FOUND 😮</h1>
        <p>Sorry, the category you're looking for doesn't exist.</p>
      </div>
    );
  }
  const filteredProducts = category
    ? products.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  const currentCat = shopCategories.find(cat => cat.link.toLowerCase() === category?.toLowerCase());

  return (
    <div className="shop-container">

      {/* ✅ TABS */}
      <div className="tabs">
        {shopCategories.map((cat) => (
          <button
            key={cat.id}
            className={`tab-btn ${
              category?.toLowerCase() === cat.link.toLowerCase() ? "active-tab" : ""
            }`}
            onClick={() => navigate(`/shop/${cat.link}`)}
          >
            {cat.title.toUpperCase()}
          </button>
        ))}
      </div>

      {/* TITLE */}
      <h1 className="shop-title">
        {currentCat ? `${currentCat.title} Products` : "All Products"}
      </h1>

      {/* PRODUCTS */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;