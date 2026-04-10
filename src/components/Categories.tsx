import React from "react";
import "./Categories.css";
import image1 from "../assets/i1.jpeg";
import image2 from "../assets/i5.jpeg";
import image3 from "../assets/i3.jpeg";
type Category = {
  id: number;
  title: string;
  image: string;
};

const categories: Category[] = [
  {
    id: 1,
    title: "CPAP Machine",
    image: image1,
  },
  {
    id: 2,
    title: "BiPAP Machine",
    image: image2,
  },
  {
    id: 3,
    title: "Mask & Accessories",
    image: image3,
  },
];

const Categories: React.FC = () => {
  return (
    <div className="categories-section">
      
      {/* TEXT */}
      <div className="categories-text">
        <h1>Our Categories</h1>
        <p>
          Explore lots of new products and collections designed for better breathing care.
        </p>
      </div>

      {/* IMAGES */}
      <div className="categories-container">
        {categories.map((cat) => (
          <div key={cat.id} className="category-card">

            <div className="circle-outer">

              {/* Blur Layer */}
              <div
                className="circle-bg"
                style={{ backgroundImage: `url(${cat.image})` }}
              ></div>

              {/* Inner Circle */}
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

export default Categories;