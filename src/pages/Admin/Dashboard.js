import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';

import { useEffect, useRef, useState } from 'react';

import { dataService } from '../../_services/data.service';

const Dashboard = () => {
    const [dataM, setDataM] = useState([])
    const flag = useRef(false)

    useEffect(() => {

        if (flag.current === false) {
            dataService.getManageableData()
                .then(res => {
                    console.log(res.data)
                    setDataM(res.data)
                })
                .catch(err => console.log(err))
        }
        return () => flag.current = true

    }, [])
    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Dashboard</h2>
                    <h3 className='sub-title-dashboard' >SITE VITRINE</h3>
                    {/* <div className="separator-line"></div> */}
                </div>
                <div>

                    <div>
                        {dataM.id}

                    </div>

                </div>

                <div className="dashboard-sub-content-content">
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">20111</div>
                        <div className="dashboard-square-data-desc">Nombre d'UX</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">20111</div>
                        <div className="dashboard-square-data-desc">Nombre d'UX</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">20111</div>
                        <div className="dashboard-square-data-desc">Nombre d'UX</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square">332</div>
                        <div className="dashboard-square-data-desc">...</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;