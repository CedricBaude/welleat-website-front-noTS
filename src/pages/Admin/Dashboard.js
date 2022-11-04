import React from 'react';
import { useNavigate } from 'react-router-dom';
import { accountService } from '../../_services/account.service';

const Dashboard = () => {
    let navigate = useNavigate();
    const logOut = () => {
        accountService.logOut();
        navigate('/');
    }

    return (
        <div>
            <h2>Dashboard qui marche !</h2>
            <br />
            <br />
            <button onClick={logOut}>Logout</button>
        </div>
    );
};

export default Dashboard;