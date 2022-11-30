import React, { useState } from 'react';
import './modalStory.css';
import axios from 'axios';

const modalStoryContainerActive = 'modalStoryContainerActive';
const modalStoryContainer = 'modalStoryContainer';

const ModalStory = (props) => {
    const modalState = props.toggle
    const close = props.action
    const [whenData, SetwhenData] = useState("");
    const [whereData, SetwhereData] = useState("");

    function sendModalStoryData() {
        const sendableData = {
            nom: whenData,
            description: whereData
        };
        axios.post('https://testrender-6iwm.onrender.com/story', sendableData)
            .then(response => console.log(response));
        alert("Données modifiées avec succés !")
    }

    return (
        <div className={`${modalStoryContainer} ${modalState ? modalStoryContainerActive : ''}`}>
            <div className="modalStoryReview">
                <div className="modalStoryReviewHeader">
                    <h3>Ajouter une story</h3>
                    <div className="modalClose" onClick={close}></div>
                </div>
                <div className="modalStoryReviewBody">
                    <form onSubmit={sendModalStoryData}>
                        <div className="modalStoryReviewInput">
                            <label htmlFor="">Quand?</label>
                            <input type="text" onChange={e => SetwhenData(e.target.value)} />
                        </div>
                        <div className="modalStoryReviewTextArea">
                            <label htmlFor="">Quoi? </label>
                            <textarea name="" id="" cols="30" rows="10" onChange={e => SetwhereData(e.target.value)}></textarea>
                        </div>
                        <div className='addStory'>
                            <button type='submit' className='addStoryButton'>+ AJOUTER</button>
                        </div>
                    </form>
                </div>
                <div className="modalStoryReviewFooter">
                </div>
            </div>

        </div>
    );
};

export default ModalStory;