import React from 'react';
import { Outlet } from 'react-router-dom';


import "./admin.css";

const ALayout = () => {
    return (
        <div className='ALayout'>

            <Outlet />

        </div>
    );
};

export default ALayout;