import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then(data=>setCategory(data.data.news_category));
  }, []);
  return (
    <div className=" space-y-3">
      <h3 className="text-xl font-semibold">All Category</h3>
          <div className="flex flex-col gap-3">
          {category.map(item=><NavLink to={`/category/${item.category_id}`} key={item.category_id} className={ ({ isActive }) =>
          isActive
            ? "bg-blue-500 text-white font-semibold btn text-xl text-start rounded-none border-none" // Active color and style
            : "text-gray-500 hover:text-blue-500 btn text-xl bg-base-100 border-none font-medium justify-start rounded-none" // Default color
      }>{ item.category_name}</NavLink>)}
      </div>
    </div>
  );
};

export default Category;
