import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import notFound from "../assets/not found.png"
const Error = () => {
  const error = useRouteError();
    return (
        <div className='flex flex-col items-center relative'>
        <img className='' src={notFound} alt="" />
        <Link to='/' className='btn px-10 absolute bottom-[25%] md:bottom-[30%] shadow-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-pink-500 text-white text-xl border-none'>Home</Link>
        </div>
    );
};

export default Error;