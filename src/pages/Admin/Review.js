import React from 'react';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import imgTemp from "../../assets/img/Img-temp.png";
import stickySelected from "../../assets/img/sticky-selected.png";
import stickyUnSelected from "../../assets/img/sticky-unselected.png";
import axios from "axios";
import ModalReview from '../../components/admin/ModalReview';

const baseURL = "http://localhost:5000/avis";

const Review = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPost(response.data);
        });
    }, []);
    const [modalState, setModalState] = useState(false);
    function openModal() {
        setModalState(!modalState);
    };
    return (
        <div className='dashboard-content'>
            <Header />
            <ModalReview toggle={modalState} action={openModal} />
            <div className="dashboard-sub-content">

                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Avis utilisateurs</h2>
                    <h3 className='sub-title-dashboard'>GESTION DES AVIS</h3>
                </div>
                <div className="dashboard-sub-content-content review">
                    <div className="dashboard-review-add-button">
                        <button className='add-review' onClick={openModal} >+ AJOUTER</button>
                        {/* <span className='togglemodal' onClick={openModal}>open modal</span> */}
                    </div>
                    {
                        post?.data.map(data => {
                            return (
                                <div className="dashboard-review" key={data.id}>
                                    <div className='dashboard-review-desc-user'>
                                        <div className='img-temp'>
                                            <img src={imgTemp} alt="" className='' />
                                        </div>
                                        <div className='dashboard-review-desc-user-name'>{data.prenom_users_reviews}</div>
                                    </div>

                                    <div className='dashboard-review-desc-store'>
                                        <div className='dashboard-review-desc-user-store'>Enseigne</div>
                                        <div className='dashboard-review-desc-user-store-name'>{data.magasin_enseigne_users_reviews}</div>
                                    </div>

                                    <div className='dashboard-review-desc-job'>
                                        <div className='dashboard-review-desc-user-job'>Poste</div>
                                        <div className='dashboard-review-desc-user-job-name'>{data.poste_users_reviews}</div>
                                    </div>

                                    <div className='dashboard-review-desc-detail'>
                                        <div className='dashboard-review-desc-user-detail-pin'><img src={data.pin_users_reviews ? stickySelected : stickyUnSelected} alt="pin" /></div>
                                        <button className='dashboard-review-desc-user-detail'>DETAILS</button>
                                    </div>

                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;