import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from '../../components/admin/Header';
// import { accountService } from '../../_services/account.service';
import './dashboard.css';
import axios from "axios";

const baseURL = "https://testrender-6iwm.onrender.com/data";


const Dashboard = () => {
    const [post, setPost] = useState("");
    const [nombre, SetNombre] = useState("");

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    // console.log(post.data[0].nom_manageable_data);
    // console.log(post.data[0].valeur_manageable_data);
    // function handleClick() {

    //     console.log('Le lien a été cliqué.');
    // }
    function handleClick() {
        const variableAPasser = { valeur: nombre };
        axios.put('https://testrender-6iwm.onrender.com/data/2', variableAPasser)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }
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


                    {/* {
                        post.data.map(data => (
                            <div className="dashboard-square-data" key={data.id}>
                                <input type="number" className="dashboard-square" placeholder={data.valeur_manageable_data} />

                                <div className="dashboard-square-data-desc">{data.nom_manageable_data}</div>
                            </div>
                        ))
                    } */}

                    <div className="dashboard-square-data">
                        <form onSubmit={handleClick}>
                            <input className="dashboard-square" placeholder={post.data[0].valeur_manageable_data}
                                onChange={e => SetNombre(e.target.value)}
                                type="number"
                                value={nombre} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[0].nom_manageable_data}</div>
                        </form>
                    </div>
                    <div className="dashboard-square-data">
                        <input type="number" className="dashboard-square" defaultValue={post.data[1].valeur_manageable_data} />
                        <div className="dashboard-square-button"><button className='addButton'>MODIFIER</button></div>
                        <div className="dashboard-square-data-desc">{post.data[1].nom_manageable_data}</div>
                    </div>
                    <div className="dashboard-square-data">
                        <input type="number" className="dashboard-square" defaultValue={post.data[2].valeur_manageable_data} />
                        <div className="dashboard-square-button"><button className='addButton'>MODIFIER</button></div>
                        <div className="dashboard-square-data-desc">{post.data[2].nom_manageable_data}</div>
                    </div>
                    <div className="dashboard-square-data">
                        <input type="number" className="dashboard-square" defaultValue={post.data[3].valeur_manageable_data} />
                        <div className="dashboard-square-button"><button className='addButton'>MODIFIER</button></div>
                        <div className="dashboard-square-data-desc">{post.data[3].nom_manageable_data}</div>
                    </div>
                    <div className="dashboard-square-data">
                        <input type="number" className="dashboard-square" defaultValue={post.data[4].valeur_manageable_data} />
                        <div className="dashboard-square-button"><button className='addButton'>MODIFIER</button></div>
                        <div className="dashboard-square-data-desc">{post.data[4].nom_manageable_data}</div>
                    </div>
                    <div className="dashboard-square-data">
                        <input type="number" className="dashboard-square" defaultValue={post.data[5].valeur_manageable_data} />
                        <div className="dashboard-square-button"><button className='addButton'>MODIFIER</button></div>
                        <div className="dashboard-square-data-desc">{post.data[5].nom_manageable_data}</div>
                    </div>
                    <div className="dashboard-square-data">
                        <input type="number" className="dashboard-square" defaultValue={post.data[6].valeur_manageable_data} />
                        <div className="dashboard-square-button"><button className='addButton'>MODIFIER</button></div>
                        <div className="dashboard-square-data-desc">{post.data[6].nom_manageable_data}</div>
                    </div>



                </div>

            </div>
        </div>

    )

}
export default Dashboard;