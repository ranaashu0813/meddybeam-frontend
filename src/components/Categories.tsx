import React from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

import CategoriesData from "../data/Catagories";  

export const Categories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-section">
      
      <div className="categories-text">
        <h1>Our Categories</h1>
        <p>
          Explore lots of new products and collections designed for better breathing care.
        </p>
      </div>

      <div className="categories-container">
        {CategoriesData.map((cat) => (
          <div key={cat.id} className="category-card">

            {/* 👇 CLICKABLE */}
            <div
              className="circle-outer clickable"
            onClick={() => navigate(`/shop/${cat.link}`)}
            >
              <div
                className="circle-bg"
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>

              <div className="circle-inner">
                <img src={cat.image} alt={cat.title} />
              </div>
            </div>

            <p className="category-title">{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};