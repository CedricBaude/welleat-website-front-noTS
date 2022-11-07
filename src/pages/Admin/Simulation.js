import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';

const Simulation = () => {
    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <h2>Simutation des gains</h2>
                <br />
                <br />

            </div>
        </div>
    );
};

export default Simulation;