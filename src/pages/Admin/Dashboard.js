import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import axios from "axios";


const baseURL = "https://testrender-6iwm.onrender.com/data";


const Dashboard = () => {
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response.data);
            setPost(response.data);
        });
    }, []);

    if (!post) return null;


    // console.log(post.data[0].nom_manageable_data);
    // console.log(post.data[0].valeur_manageable_data);
    return (
        <div className='dashboard-content'>
            <Header />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Dashboard</h2>
                    <h3 className='sub-title-dashboard' >SITE VITRINE</h3>
                    {/* <div className="separator-line"></div> */}
                </div>
                <div className="dashboard-sub-content-content">


                    {
                        post.data.map(data => (
                            <div className="dashboard-square-data" key={data.id}>
                                <input type="number" className="dashboard-square" placeholder={data.valeur_manageable_data} />

                                <div className="dashboard-square-data-desc">{data.nom_manageable_data}</div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>

    )

}
export default Dashboard;