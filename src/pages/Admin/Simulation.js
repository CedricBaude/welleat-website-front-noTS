import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import { useState, useLayoutEffect } from 'react';
import axios from "axios";

const baseSimu = "https://testrender-6iwm.onrender.com/earning_simulator";

const Simulation = () => {
    const [postsSimu, setPostsSimu] = useState("");

    useLayoutEffect(() => {
        axios.get(baseSimu).then((response) => {
            setPostsSimu(response.data);
        })
    }, []);
    console.log(postsSimu);
    // console.log(postsSimu?.data?.length);
    const nbUse = postsSimu?.data?.length;
    // console.log(nbUse)

    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Simulation des gains</h2>
                    <h3 className='sub-title-dashboard' >DATA SIMULATEUR</h3>
                </div>

                <div className="dashboard-sub-content-content dashboard-simulation">
                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{postsSimu.TotalCa}</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">CA total</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{postsSimu.TotalMarge}</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Marge totale</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{postsSimu.Totalbenefice}</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Bénéfice</div>
                    </div>
                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'></span>{nbUse}</div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Nombre d'utilisation</div>
                    </div>
                </div>
                <div className="dashboard-sub-content-content review ">
                    {
                        postsSimu?.data?.map((data) => {
                            const dateSimu = new Date(data.createdAt).toLocaleDateString("fr");
                            return (
                                <div className="dashboard-review dashboard-simu" key={data.id}>
                                    <div className='dashboard-review-desc-date-welleat'>
                                        <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                                        <div className='dashboard-review-desc-user-date-date-welleat'>{dateSimu}</div>
                                    </div>

                                    <div className='dashboard-review-desc-ca'>
                                        <div className='dashboard-review-desc-user-ca'>CA</div>
                                        <div className='dashboard-review-desc-user-ca-content'>{data.CA}</div>
                                    </div>
                                    <div className='dashboard-review-desc-margin'>
                                        <div className='dashboard-review-desc-user-margin'>Marge</div>
                                        <div className='dashboard-review-desc-user-margin-content'>{data.marge}</div>
                                    </div>
                                    <div className='dashboard-review-desc-ca-welleat'>
                                        <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                                        <div className='dashboard-review-desc-user-ca-content-welleat'>{data.CA_avec_WellEat}</div>
                                    </div>
                                    <div className='dashboard-review-desc-margin-welleat'>
                                        <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                                        <div className='dashboard-review-desc-user-margin-welleat-content'>{data.marge_avec_WellEat}</div>
                                    </div>
                                    <div className='dashboard-review-desc-profit-welleat'>
                                        <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                                        <div className='dashboard-review-desc-user-profit-welleat-content'>{data.benefice_avec_WellEat}</div>
                                    </div>

                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Simulation;