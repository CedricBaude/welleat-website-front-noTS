import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import callSelected from "../../assets/img/call-selected.png";
import callUnSelected from "../../assets/img/call-unselected.png";
import axios from "axios";


const baseURL = "https://testrender-6iwm.onrender.com/mail/listmail";
const baseURLlistRappel = "https://testrender-6iwm.onrender.com/mail/listrappel/true";


const Contact = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPost(response.data);
        });
    }, []);


    const [listRappel, setRappel] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURLlistRappel).then((response) => {
            // console.log(response.data);
            setRappel(response.data);
            console.log(response.data);
        });
    }, []);

    if ((!post) || (!listRappel)) return null;

    let nbreDEdemande = Number(post.data.length);
    let nbreDemandeRappel = parseFloat((listRappel.message / nbreDEdemande) * 100).toFixed(2);
    console.log(nbreDEdemande);
    console.log(nbreDemandeRappel);

    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Page des contacts</h2>
                    <h3 className='sub-title-dashboard'>PRISE DE CONTACT</h3>
                </div>

                <div className="dashboard-sub-content-content dashboard-contact">
                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{nbreDEdemande}</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Prises de contact</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{post.nbresociete}</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Sociétés</div>
                    </div>

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'>{nbreDemandeRappel}%</span></div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Demandes de rappel</div>
                    </div>


                </div>

                <div className="dashboard-sub-content-content review">
                    {
                        post?.data.map(data => {
                            const dateContact = new Date(data.createdAt).toLocaleDateString("fr")
                            const rappel = () => {
                                if (data.demande_rappel === true) {
                                    return callSelected;

                                } else {
                                    return callUnSelected;
                                }
                            }

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
                                        <div className='dashboard-review-desc-user-email-email'>{data.email_contact
                                        }</div>
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
                                        <div className='dashboard-review-desc-user-detail-pin'><img src={rappel()} alt="" className='' /></div>
                                        <button className='dashboard-review-desc-user-detail unread '>DETAILS</button>
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

export default Contact;