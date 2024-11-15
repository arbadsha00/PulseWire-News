import React from "react";
import { useLoaderData } from "react-router-dom";

const NewsDetails = () => {
    const data = useLoaderData();
    console.log(data);
  return (
    <div className="  bg-white rounded-lg shadow-md p-4">
      <img
        src={data.data[0].image_url
        }
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4"
          />
           <h2 className="text-xl font-semibold mb-2">{data.data[0].title}</h2>
           <p className="text-gray-700 mb-4">{data.data[0].details}</p>
      </div>
  );
};

export default NewsDetails;
