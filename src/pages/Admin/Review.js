import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';

const Review = () => {
    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <h2>Page des avis utilisateurs</h2>
                <br />
                <br />
            </div>
        </div>
    );
};

export default Review;