import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import axios from "axios";

const baseURLlistnewsletter = "https://testrender-6iwm.onrender.com/newsletter";

const Newsletter = () => {
    const [listnewsletter, setlistnewsletter] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURLlistnewsletter).then((response) => {

            setlistnewsletter(response.data);
            console.log(response.data);
        });
    }, []);

    if (!listnewsletter) return null;

    let nbreDEdemande = Number(listnewsletter.data.length);

    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Newsletter</h2>
                    <h3 className='sub-title-dashboard'>LISTE DE PARTICIPANTS</h3>
                </div>

                <div className="dashboard-sub-content-content newsletter">
                    <div className="dashboard-square-data newsletter-square">
                        <div className="dashboard-square square-data-gray"><span className='square-data-gray-number'></span>{nbreDEdemande}</div>
                        <div className="dashboard-square-data-desc square-data-gray-desc">Inscrits à la newsletter</div>
                    </div>

                    {
                        listnewsletter.data.map(data => {
                            const dateNewsLetter = new Date(data.createdAt).toLocaleDateString("fr")
                            return (
                                <div className="dashboard-review newsletter-user" key={data.id}>
                                    <div className='dashboard-newsletter-desc-user'>
                                        <div className="dashboard-newsletter-desc-name">Nom</div>
                                        <div className='dashboard-newsletter-desc-user-name'>{data.prenom_newsletter}</div>
                                    </div>
                                    <div className='dashboard-newsletter-desc-email'>
                                        <div className="dashboard-newsletter-desc-user-email">Email</div>
                                        <div className='dashboard-newsletter-desc-user-email-email'>{data.email_newsletter}</div>
                                    </div>
                                    <div className='dashboard-newsletter-desc-date'>
                                        <div className="dashboard-newsletter-desc-user-date">Date</div>
                                        <div className='dashboard-newsletter-desc-user-date-date'>{dateNewsLetter}</div>
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

export default Newsletter;