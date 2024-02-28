import React from "react";
import "./Category.css";

const CategoryPage: React.FC = () => {
  return (
    <div className="category-page">
      <div className="card">
        <div className="image-container">
          <div className="image"></div>
          <div className="tag">
            <span className="text">Tag</span>
          </div>
        </div>
        <div className="text-content">
          <h2 className="subtitle">Title</h2>
          <p className="like">Likes</p>
          <div className="vector"></div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
