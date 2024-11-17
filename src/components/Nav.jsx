import { useContext } from "react";
import { RiUser4Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Provider/AuthContext";

const Nav = () => {


  const links = (
    <>
      <li>
        <NavLink
          className={
            ({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white font-semibold rounded-none " // Active color and style
                : "text-gray-700 hover:text-blue-500 " // Default color
          }
          to="/category/01"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            ({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white font-semibold rounded-none" // Active color and style
                : "text-gray-700 hover:text-blue-500" // Default color
          }
          to="/career"
        >
          Career
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            ({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white font-semibold rounded-none" // Active color and style
                : "text-gray-700 hover:text-blue-500" // Default color
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
    </>
  );

  const { user, logOut,loading } = useContext(AuthContext);
  // console.log(user);
  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>
}
  return (
    <div className="navbar  p-0   container mx-auto w-11/12 my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-0 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-base menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div>{user?.displayName}</div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-base">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={()=>logOut()}className="btn border-none font-semibold text-xl bg-blue-500 text-white rounded-none">
           <RiUser4Line className="text-3xl " /> LogOut
          </button>
        ) : (
          <Link
            to="/login"
            className="btn border-none font-semibold text-xl bg-blue-500 text-white rounded-none"
          >
            <RiUser4Line className="text-3xl " /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
