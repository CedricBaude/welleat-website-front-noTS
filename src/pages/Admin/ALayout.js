import React from 'react';
import { Outlet } from 'react-router-dom';


import "./admin.css";

const ALayout = () => {
    return (
        <div className='ALayout'>
            <div id="admin">
                <div id="admin-body">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ALayout;