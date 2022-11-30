import React from 'react';
import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import stickySelected from "../../assets/img/sticky-selected.png";
import stickyUnSelected from "../../assets/img/sticky-unselected.png";
import axios from "axios";
import ModalReview from '../../components/admin/ModalReview';
import ModalDetailReview from '../../components/admin/ModalDetailReview';

const baseURL = "https://testrender-6iwm.onrender.com/avis";

const Review = () => {
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [deleteData, setDeleteData] = useState("");


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPosts(response.data);
        });
    }, []);

    const [modalState, setModalState] = useState(false);
    const [modalState2, setModalState2] = useState(false);
    function openModal() {
        setModalState(!modalState);
    };
    function openModal2(data) {
        setModalState2(!modalState2);
        setPost(data);
    };

    function deletedData(data) {
        axios.delete("https://testrender-6iwm.onrender.com/avis/" + data.id)
            .then((response) => {
                // console.log(response.data);
                setDeleteData(response.data);
                alert('donnée effacée');
                window.location.reload();
            });
    };

    return (
        <div className='dashboard-content'>
            <Header />
            <ModalReview toggle={modalState} action={openModal} />
            <ModalDetailReview toggle={modalState2} action={openModal2} userReview={post} />
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
                        posts?.data?.map(data => {
                            return (
                                <div className="dashboard-review" key={data.id}>
                                    <div className='dashboard-review-desc-user'>
                                        <div className='img-temp'>
                                            <img src={require('../../assets/img/' + data.photo_users_reviews)} alt="" />
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
                                        <button className='dashboard-review-desc-user-detail ' onClick={() => openModal2(data)}>DETAILS</button>
                                    </div>
                                    <button className='deleteButton' onClick={() => deletedData(data)}></button>
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