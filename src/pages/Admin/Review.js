import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import imgTemp from "../../assets/img/Img-temp.png";
import stickySelected from "../../assets/img/sticky-selected.png";
import stickyUnSelected from "../../assets/img/sticky-unselected.png";

const Review = () => {
    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Avis utilisateurs</h2>
                    <h3 className='sub-title-dashboard'>GESTION DES AVIS</h3>
                </div>
                <div className="dashboard-sub-content-content review">
                    <div className="dashboard-review-add-button">
                        <button className='add-review'>+ AJOUTER</button>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Thomas</div>
                        </div>

                        <div className='dashboard-review-desc-store'>
                            <div className='dashboard-review-desc-user-store'>Enseigne</div>
                            <div className='dashboard-review-desc-user-store-name'>Leclerc - Atlantis</div>
                        </div>
                        <div className='dashboard-review-desc-job'>
                            <div className='dashboard-review-desc-user-job'>Poste</div>
                            <div className='dashboard-review-desc-user-job-name'>Traiteur</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={stickyUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Thomas</div>
                        </div>

                        <div className='dashboard-review-desc-store'>
                            <div className='dashboard-review-desc-user-store'>Enseigne</div>
                            <div className='dashboard-review-desc-user-store-name'>Leclerc - Atlantis</div>
                        </div>
                        <div className='dashboard-review-desc-job'>
                            <div className='dashboard-review-desc-user-job'>Poste</div>
                            <div className='dashboard-review-desc-user-job-name'>Traiteur</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={stickySelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Thomas</div>
                        </div>

                        <div className='dashboard-review-desc-store'>
                            <div className='dashboard-review-desc-user-store'>Enseigne</div>
                            <div className='dashboard-review-desc-user-store-name'>Leclerc - Atlantis</div>
                        </div>
                        <div className='dashboard-review-desc-job'>
                            <div className='dashboard-review-desc-user-job'>Poste</div>
                            <div className='dashboard-review-desc-user-job-name'>Traiteur</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={stickyUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Thomas</div>
                        </div>

                        <div className='dashboard-review-desc-store'>
                            <div className='dashboard-review-desc-user-store'>Enseigne</div>
                            <div className='dashboard-review-desc-user-store-name'>Leclerc - Atlantis</div>
                        </div>
                        <div className='dashboard-review-desc-job'>
                            <div className='dashboard-review-desc-user-job'>Poste</div>
                            <div className='dashboard-review-desc-user-job-name'>Traiteur</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={stickyUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Thomas</div>
                        </div>

                        <div className='dashboard-review-desc-store'>
                            <div className='dashboard-review-desc-user-store'>Enseigne</div>
                            <div className='dashboard-review-desc-user-store-name'>Leclerc - Atlantis</div>
                        </div>
                        <div className='dashboard-review-desc-job'>
                            <div className='dashboard-review-desc-user-job'>Poste</div>
                            <div className='dashboard-review-desc-user-job-name'>Traiteur</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={stickySelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Thomas</div>
                        </div>

                        <div className='dashboard-review-desc-store'>
                            <div className='dashboard-review-desc-user-store'>Enseigne</div>
                            <div className='dashboard-review-desc-user-store-name'>Leclerc - Atlantis</div>
                        </div>
                        <div className='dashboard-review-desc-job'>
                            <div className='dashboard-review-desc-user-job'>Poste</div>
                            <div className='dashboard-review-desc-user-job-name'>Traiteur</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={stickyUnSelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>

                    <div className="dashboard-review">
                        <div className='dashboard-review-desc-user'>
                            <div className='img-temp'>
                                <img src={imgTemp} alt="" className='' />
                            </div>
                            <div className='dashboard-review-desc-user-name'>Thomas</div>
                        </div>

                        <div className='dashboard-review-desc-store'>
                            <div className='dashboard-review-desc-user-store'>Enseigne</div>
                            <div className='dashboard-review-desc-user-store-name'>Leclerc - Atlantis</div>
                        </div>
                        <div className='dashboard-review-desc-job'>
                            <div className='dashboard-review-desc-user-job'>Poste</div>
                            <div className='dashboard-review-desc-user-job-name'>Traiteur</div>
                        </div>
                        <div className='dashboard-review-desc-detail'>
                            <div className='dashboard-review-desc-user-detail-pin'><img src={stickySelected} alt="" className='' /></div>
                            <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Review;