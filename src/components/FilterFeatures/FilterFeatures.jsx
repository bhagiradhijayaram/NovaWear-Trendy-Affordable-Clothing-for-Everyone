import { useState } from "react";
import "./FilterFeatures.css";

const categories = [
  { id: 1, category: "All" },
  { id: 2, category: "Men" },
  { id: 3, category: "Women" },
  { id: 4, category: "Kids" },
  { id: 5, category: "Sports" },
];

const FilterFeatures = ({ filterProducts, handleSearch, searchTerm }) => {
  const onHandleCategory = (category) => {
    filterProducts(category);
  };
  return (
    <div className="filter-container">
      <h1 className="filter-heading">Find What You Love Faster</h1>
      <p className="filter-description">
        Quickly find products for Men, Women, Kids, or Sports with a single
        click.
      </p>
      <div className="search-box">
        <input
          type="search"
          placeholder="Search categories..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <ul className="category-list">
        {categories.map((item) => (
          <li key={item.id} onClick={() => onHandleCategory(item.category)}>
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterFeatures;
