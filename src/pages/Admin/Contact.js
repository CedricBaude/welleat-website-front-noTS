import { useState, useLayoutEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import callSelected from "../../assets/img/call-selected.png";
import callUnSelected from "../../assets/img/call-unselected.png";
import axios from "axios";
import ModalContact from '../../components/admin/ModalContact';

const baseURL = "https://testrender-6iwm.onrender.com/mail/listmail";

const Contact = () => {
    const [modalState, setModalState] = useState(false);
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([]);
    const [listRappel, setListRappel] = useState([]);
    const [nbDemandeRappel, setNbDemandeRappel] = useState(0);

    useLayoutEffect(() => {
        axios.get(baseURL).then((response) => {
            setPosts(response.data);
        })
    }, []);

    useLayoutEffect(() => {
        if (posts?.data?.length > 0) {
            const _filter = posts.data.filter((post) => post.demande_rappel);
            setListRappel(_filter);
        }
    }, [posts]);

    useLayoutEffect(() => {
        if (posts?.data?.length > 0 && listRappel.length > 0) {
            setNbDemandeRappel(parseFloat((listRappel.length / posts.data.length) * 100).toFixed(2));
        }
    }, [posts, listRappel]);

    function openModal(data) {
        setModalState(!modalState);
        setPost(data);
    };

    return (
        <div className='dashboard-content'>
            <Header />
            <ModalContact toggle={modalState} action={openModal} contact={post} />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Page des contacts</h2>
                    <h3 className='sub-title-dashboard'>PRISE DE CONTACT</h3>
                </div>

                <div className="dashboard-sub-content-content dashboard-contact">
                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{posts?.data?.length || 0}</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Prises de contact</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{posts.nbresociete || 0}</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Sociétés</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{nbDemandeRappel}%</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Demandes de rappel</div>
                    </div>
                </div>

                <div className="dashboard-sub-content-content review">
                    {posts?.data && posts?.data.map((data) => {
                        const dateContact = new Date(data.createdAt).toLocaleDateString("fr");
                        const rappel = data.demande_rappel ? callSelected : callUnSelected;

                        return (
                            <div className="dashboard-review contact-box" key={data.id}>
                                <div className='dashboard-review-desc-email contact-name'>
                                    <div className='dashboard-review-desc-user-email'>Nom</div>
                                    <div className='dashboard-review-desc-user-email-email'>{data.nom_contact}</div>
                                </div>

                                <div className='dashboard-review-desc-email contact-name'>
                                    <div className='dashboard-review-desc-user-email'>Prénom</div>
                                    <div className='dashboard-review-desc-user-email-email'>{data.prenom_contact}</div>
                                </div>

                                <div className='dashboard-review-desc-email'>
                                    <div className='dashboard-review-desc-user-email'>Email</div>
                                    <div className='dashboard-review-desc-user-email-email'>{data.email_contact}</div>
                                </div>

                                <div className='dashboard-review-desc-society'>
                                    <div className='dashboard-review-desc-user-society'>Société</div>
                                    <div className='dashboard-review-desc-user-society-name'>{data.societe_contact}</div>
                                </div>
                                <div className='dashboard-review-desc-date'>
                                    <div className='dashboard-review-desc-user-date'>Date</div>
                                    <div className='dashboard-review-desc-user-date-date'>{dateContact}</div>
                                </div>
                                <div className='dashboard-review-desc-detail'>
                                    <div className='dashboard-review-desc-user-detail-pin'><img src={rappel} alt="" className='' /></div>
                                    <button className='dashboard-review-desc-user-detail unread ' onClick={() => openModal(data)}>DETAILS</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Contact;