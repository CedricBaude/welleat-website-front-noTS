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
    const [nombre2, SetNombre2] = useState("");
    const [nombre3, SetNombre3] = useState("");
    const [nombre4, SetNombre4] = useState("");
    const [nombre5, SetNombre5] = useState("");
    const [nombre6, SetNombre6] = useState("");
    const [nombre7, SetNombre7] = useState("");

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    // console.log(post.data[0].nom_manageable_data);
    // console.log(post.data[0].valeur_manageable_data);
    // }
    function sendManageableData() {
        const sendableData = { valeur: nombre };
        axios.put('https://testrender-6iwm.onrender.com/data/2', sendableData)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }
    function sendManageableData2() {
        const sendableData = { valeur: nombre2 };
        axios.put('https://testrender-6iwm.onrender.com/data/3', sendableData)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }
    function sendManageableData3() {
        const sendableData = { valeur: nombre3 };
        axios.put('https://testrender-6iwm.onrender.com/data/4', sendableData)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }
    function sendManageableData4() {
        const sendableData = { valeur: nombre4 };
        axios.put('https://testrender-6iwm.onrender.com/data/5', sendableData)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }
    function sendManageableData5() {
        const sendableData = { valeur: nombre5 };
        axios.put('https://testrender-6iwm.onrender.com/data/6', sendableData)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }
    function sendManageableData6() {
        const sendableData = { valeur: nombre6 };
        axios.put('https://testrender-6iwm.onrender.com/data/7', sendableData)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }
    function sendManageableData7() {
        const sendableData = { valeur: nombre7 };
        axios.put('https://testrender-6iwm.onrender.com/data/8', sendableData)
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
                </div>
                <div className="dashboard-sub-content-content">

                    <div className="dashboard-square-data">
                        <form onSubmit={sendManageableData}>
                            <input className="dashboard-square" placeholder={post.data[0].valeur_manageable_data}
                                onChange={e => SetNombre(e.target.value)}
                                type="number"
                                value={nombre} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[0].nom_manageable_data}</div>
                        </form>
                    </div>
                    <div className="dashboard-square-data">
                        <form onSubmit={sendManageableData2}>
                            <input className="dashboard-square" placeholder={post.data[1].valeur_manageable_data}
                                onChange={e => SetNombre2(e.target.value)}
                                type="number"
                                value={nombre2} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[1].nom_manageable_data}</div>
                        </form>
                    </div>
                    <div className="dashboard-square-data">
                        <form onSubmit={sendManageableData3}>
                            <input className="dashboard-square" placeholder={post.data[2].valeur_manageable_data}
                                onChange={e => SetNombre3(e.target.value)}
                                type="number"
                                value={nombre3} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[2].nom_manageable_data}</div>
                        </form>
                    </div>
                    <div className="dashboard-square-data">
                        <form onSubmit={sendManageableData4}>
                            <input className="dashboard-square" placeholder={post.data[3].valeur_manageable_data}
                                onChange={e => SetNombre4(e.target.value)}
                                type="number"
                                value={nombre4} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[3].nom_manageable_data}</div>
                        </form>
                    </div>
                    <div className="dashboard-square-data">
                        <form onSubmit={sendManageableData5}>
                            <input className="dashboard-square" placeholder={post.data[4].valeur_manageable_data}
                                onChange={e => SetNombre5(e.target.value)}
                                type="number"
                                value={nombre5} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[4].nom_manageable_data}</div>
                        </form>
                    </div>
                    <div className="dashboard-square-data">
                        <form onSubmit={sendManageableData6}>
                            <input className="dashboard-square" placeholder={post.data[5].valeur_manageable_data}
                                onChange={e => SetNombre6(e.target.value)}
                                type="number"
                                value={nombre6} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[5].nom_manageable_data}</div>
                        </form>
                    </div>
                    <div className="dashboard-square-data">
                        <form onSubmit={sendManageableData7}>
                            <input className="dashboard-square" placeholder={post.data[6].valeur_manageable_data}
                                onChange={e => SetNombre7(e.target.value)}
                                type="number"
                                value={nombre7} />
                            <div className="dashboard-square-button"><button type='submit' className='addButton' >ENVOYER</button></div>
                            <div className="dashboard-square-data-desc">{post.data[6].nom_manageable_data}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Dashboard;