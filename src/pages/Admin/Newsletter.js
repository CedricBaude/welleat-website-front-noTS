import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import imgTemp from "../../assets/img/Img-temp.png";
import callSelected from "../../assets/img/call-selected.png";
import callUnSelected from "../../assets/img/call-unselected.png";

const Newsletter = () => {
    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Newsletter</h2>
                    <h3 className='sub-title-dashboard'>LISTE DE PARTICIPANTS</h3>
                </div>

                <div className="dashboard-sub-content-content review">

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Jean Jean</div>
                        </div>

                        <div className='dashboard-review-desc-email'>
                            <div className='dashboard-review-desc-user-email'>Email</div>
                            <div className='dashboard-review-desc-user-email-email'>blablabla@gmail.com</div>
                        </div>
                        <div className='dashboard-review-desc-society'>
                            <div className='dashboard-review-desc-user-society'>Société</div>
                            <div className='dashboard-review-desc-user-society-name'>Welleat</div>
                        </div>
                        <div className='dashboard-review-desc-date'>
                            <div className='dashboard-review-desc-user-date'>Date</div>
                            <div className='dashboard-review-desc-user-date-date'>05/12/2022</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={callUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail unread '>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Jean Jean</div>
                        </div>

                        <div className='dashboard-review-desc-email'>
                            <div className='dashboard-review-desc-user-email'>Email</div>
                            <div className='dashboard-review-desc-user-email-email'>blablabla@gmail.com</div>
                        </div>
                        <div className='dashboard-review-desc-society'>
                            <div className='dashboard-review-desc-user-society'>Société</div>
                            <div className='dashboard-review-desc-user-society-name'>Welleat</div>
                        </div>
                        <div className='dashboard-review-desc-date'>
                            <div className='dashboard-review-desc-user-date'>Date</div>
                            <div className='dashboard-review-desc-user-date-date'>05/12/2022</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={callSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail unread'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Jean Jean</div>
                        </div>

                        <div className='dashboard-review-desc-email'>
                            <div className='dashboard-review-desc-user-email'>Email</div>
                            <div className='dashboard-review-desc-user-email-email'>blablabla@gmail.com</div>
                        </div>
                        <div className='dashboard-review-desc-society'>
                            <div className='dashboard-review-desc-user-society'>Société</div>
                            <div className='dashboard-review-desc-user-society-name'>Welleat</div>
                        </div>
                        <div className='dashboard-review-desc-date'>
                            <div className='dashboard-review-desc-user-date'>Date</div>
                            <div className='dashboard-review-desc-user-date-date'>05/12/2022</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={callUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail unread'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Jean Jean</div>
                        </div>

                        <div className='dashboard-review-desc-email'>
                            <div className='dashboard-review-desc-user-email'>Email</div>
                            <div className='dashboard-review-desc-user-email-email'>blablabla@gmail.com</div>
                        </div>
                        <div className='dashboard-review-desc-society'>
                            <div className='dashboard-review-desc-user-society'>Société</div>
                            <div className='dashboard-review-desc-user-society-name'>Welleat</div>
                        </div>
                        <div className='dashboard-review-desc-date'>
                            <div className='dashboard-review-desc-user-date'>Date</div>
                            <div className='dashboard-review-desc-user-date-date'>05/12/2022</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={callUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Jean Jean</div>
                        </div>

                        <div className='dashboard-review-desc-email'>
                            <div className='dashboard-review-desc-user-email'>Email</div>
                            <div className='dashboard-review-desc-user-email-email'>blablabla@gmail.com</div>
                        </div>
                        <div className='dashboard-review-desc-society'>
                            <div className='dashboard-review-desc-user-society'>Société</div>
                            <div className='dashboard-review-desc-user-society-name'>Welleat</div>
                        </div>
                        <div className='dashboard-review-desc-date'>
                            <div className='dashboard-review-desc-user-date'>Date</div>
                            <div className='dashboard-review-desc-user-date-date'>05/12/2022</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={callSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Jean Jean</div>
                        </div>

                        <div className='dashboard-review-desc-email'>
                            <div className='dashboard-review-desc-user-email'>Email</div>
                            <div className='dashboard-review-desc-user-email-email'>blablabla@gmail.com</div>
                        </div>
                        <div className='dashboard-review-desc-society'>
                            <div className='dashboard-review-desc-user-society'>Société</div>
                            <div className='dashboard-review-desc-user-society-name'>Welleat</div>
                        </div>
                        <div className='dashboard-review-desc-date'>
                            <div className='dashboard-review-desc-user-date'>Date</div>
                            <div className='dashboard-review-desc-user-date-date'>05/12/2022</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={callUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Jean Jean</div>
                        </div>

                        <div className='dashboard-review-desc-email'>
                            <div className='dashboard-review-desc-user-email'>Email</div>
                            <div className='dashboard-review-desc-user-email-email'>blablabla@gmail.com</div>
                        </div>
                        <div className='dashboard-review-desc-society'>
                            <div className='dashboard-review-desc-user-society'>Société</div>
                            <div className='dashboard-review-desc-user-society-name'>Welleat</div>
                        </div>
                        <div className='dashboard-review-desc-date'>
                            <div className='dashboard-review-desc-user-date'>Date</div>
                            <div className='dashboard-review-desc-user-date-date'>05/12/2022</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={callSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Newsletter;