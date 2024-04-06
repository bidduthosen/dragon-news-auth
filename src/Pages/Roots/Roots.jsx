import React from 'react';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='container mx-auto px-12'>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;