import React from 'react';
import { useState } from 'react';
import Header from '../../components/admin/Header';
import axios from "axios";
import ModalStory from '../../components/admin/ModalStory';

const baseURLStory = "https://testrender-6iwm.onrender.com/story";

const Story = () => {
    const [story, setStory] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURLStory).then((response) => {

            setStory(response.data);
            console.log(response.data);
        });
    }, []);
    const [modalState, setModalState] = useState(false);
    function openModal() {
        setModalState(!modalState);
    };

    if (!story) return null;

    return (
        <div className='dashboard-content'>
            <Header />
            <ModalStory toggle={modalState} action={openModal} />
            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Story</h2>
                    <h3 className='sub-title-dashboard' >GESTION DE LA STORY WELLEAT.</h3>
                </div>
                <div className="dashboard-sub-content-content review">
                    <div className="dashboard-review-add-button">
                        <button className='add-review' onClick={openModal} >+ AJOUTER</button>
                        {/* <span className='togglemodal' onClick={openModal}>open modal</span> */}
                    </div>
                    {
                        story?.data.map(data => {
                            return (
                                <div className="dashboard-review" key={data.id}>
                                    <div className='dashboard-review-desc-user'>
                                        <div className='dashboard-review-desc-user-name'>{data.nom_story}</div>
                                    </div>

                                    <div className='dashboard-review-desc-store'>
                                        <div className='dashboard-review-desc-user-store-name'>{data.description_story}</div>
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

export default Story;