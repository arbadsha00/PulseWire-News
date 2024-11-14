import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latest = () => {
  return (
    <div className="container mx-auto w-11/12 flex items-center bg-gray-100 p-4 gap-4">
      <h3 className="bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 font-medium text-xl text-white py-2 px-4">
        Latest
      </h3>

      <Marquee className="font-semibold text-lg space-x-10">
        <Link className="" to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          illum.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          illum.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          illum.
        </Link>
      </Marquee>
    </div>
  );
};

export default Latest;
