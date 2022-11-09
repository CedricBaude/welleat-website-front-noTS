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
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Simulation des gains</h2>
                    <h3 className='sub-title-dashboard' >DATA SIMULATEUR</h3>
                </div>

                <div className="dashboard-sub-content-content dashboard-simulation">
                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>3223</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Prises de contact</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>1213</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Sociétés</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>12%</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Demandes de rappel</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'></span>12%</div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Inscrits à la newsletter</div>
                    </div>
                </div>
                <div className="dashboard-sub-content-content review ">

                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                    <div className="dashboard-review dashboard-simu ">

                        <div className='dashboard-review-desc-date-welleat'>
                            <div className='dashboard-review-desc-user-date-welleat'>Date</div>
                            <div className='dashboard-review-desc-user-date-date-welleat'>05/12/2022</div>
                        </div>

                        <div className='dashboard-review-desc-ca'>
                            <div className='dashboard-review-desc-user-ca'>CA</div>
                            <div className='dashboard-review-desc-user-ca-content'>120000€</div>
                        </div>
                        <div className='dashboard-review-desc-margin'>
                            <div className='dashboard-review-desc-user-margin'>Marge</div>
                            <div className='dashboard-review-desc-user-margin-content'>201320€</div>
                        </div>
                        <div className='dashboard-review-desc-ca-welleat'>
                            <div className='dashboard-review-desc-user-ca-welleat'>CA avec Welleat</div>
                            <div className='dashboard-review-desc-user-ca-content-welleat'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-margin-welleat'>
                            <div className='dashboard-review-desc-user-margin-welleat'>Marge avec Welleat.</div>
                            <div className='dashboard-review-desc-user-margin-welleat-content'>90091902€</div>
                        </div>
                        <div className='dashboard-review-desc-profit-welleat'>
                            <div className='dashboard-review-desc-user-profit-welleat'>Bénéfice avec Welleat.</div>
                            <div className='dashboard-review-desc-user-profit-welleat-content'>90091902€</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Simulation;