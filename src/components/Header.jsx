import moment from "moment/moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto md:w-11/12 my-10 text-center space-y-2">
      <div className="flex gap-2 items-center justify-center">
        <img className="w-[60px] md:w-[80px]" src={logo} alt="" />
        <h1 className="font-bold text-4xl md:text-6xl  bg-gradient-to-r from-cyan-400 via-indigo-500 to-pink-500 text-transparent bg-clip-text">
          PulseWire
        </h1>
          </div>
          <p className="md:text-lg text-gray-500">Your Daily Dose of Clarity</p>
          <h3 className="font-medium md:text-xl text-gray-600">
              {
                   moment().format('dddd, MMMM DD, YYYY')
         }
          </h3>
    </div>
  );
};

export default Header;
