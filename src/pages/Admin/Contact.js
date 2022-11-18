import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import imgTemp from "../../assets/img/Img-temp.png";
import callSelected from "../../assets/img/call-selected.png";
import callUnSelected from "../../assets/img/call-unselected.png";
import axios from "axios";


const baseURL = "http://localhost:5000/mail/listmail";
const baseURLlistRappel = "http://localhost:5000/mail/listrappel/true";
const baseURLlistnexletter = "http://localhost:5000/newsletter";

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
        });
    }, []);


    const [listnewletter, setlistnewletter] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURLlistnexletter).then((response) => {
            // console.log(response.data);
            setlistnewletter(response.data);
        });
    }, []);

    if (!post) return null;


    console.log(post);
    console.log(listRappel);
    console.log(listnewletter);
    let nbreDEdemande = Number(post.data.length);
    let nbreDemandeRappel = parseFloat((listRappel.message / nbreDEdemande) * 100).toFixed(2);
    let nbreDemandeInscrit = parseFloat((listnewletter.message / nbreDEdemande) * 100).toFixed(2);
    console.log(nbreDEdemande);
    console.log(post.data[0].nom_manageable_data);
    console.log(post.data[0].valeur_manageable_data);
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

                    <div className="dashboard-square-data">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'></span>{nbreDemandeInscrit}%</div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Inscrits à la newsletter</div>
                    </div>
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

export default Contact;