import React from 'react';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Nav />
            

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                <Sidebar/>

                <div className="lg:pl-[14rem] mt-[5.8125rem]">
                    <Outlet/>
                    
                </div>

            </div>


        </>
    );
};

export default Main;