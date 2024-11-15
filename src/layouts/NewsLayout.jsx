import React from 'react';
import Header from '../components/Header';
import RightSide from '../components/RightSide';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div className='container w-11/12 mx-auto'>
            <Header></Header>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                <div className="md:col-span-3">
                   <Outlet></Outlet>

                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default NewsLayout;