import { Link } from "react-router-dom";
import Nav from "../components/Nav";

import { useContext } from 'react';
const Register = () => {
  
  return (
    <div>
      <Nav></Nav>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-32">
        <h1 className="text-3xl font-semibold text-center mt-8 pb-3">
          Register your account
        </h1>
        <div className="divider"></div>
        <form className="card-body pt-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo Url</span>
            </label>
            <input
              name="photoUrl"
              type="text"
              placeholder="Photo Url"
              className="input bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input bg-gray-100"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input bg-gray-100"
              required
            />
            <label className="label">
              {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
            </label>
          </div>
          <div className="form-control">
            <button className="btn bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 text-white text-xl">
              Register 
            </button>
          </div>
          <p className="text-center text-sm pt-2 text-gray-500">
            Already Have An Account ?{" "}
            <Link className="text-blue-500 font-semibold" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
