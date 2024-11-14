import React from "react";
import empty from"../assets/empty.png"
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";
const CategoryNews = () => {
  const { data: news } = useLoaderData();
   
    if (!news.length) {
        return <><img className="px-4" src={empty} alt="" /></>
    }
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold">PulseWire Home</h3>
          <div className="space-y-6">
             
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
