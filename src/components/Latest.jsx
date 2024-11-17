import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then(res => res.json())
      .then(data => setData(data.data));
  },[])
  return (
    <div className="container mx-auto w-11/12 flex items-center bg-base-200 p-4 gap-4">
      <h3 className="bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 font-medium text-xl text-white py-2 px-4">
        Latest
      </h3>

      <Marquee className="font-semibold text-lg space-x-10">
        {data.map(item=><Link key={item._id} className="" to={`news/${item._id}`}>
         | {item.title}  |
        </Link>)}
        
        
      </Marquee>
    </div>
  );
};

export default Latest;
