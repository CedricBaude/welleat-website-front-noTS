import React from 'react';
import './modalStory.css';
const modalStoryContainerActive = 'modalStoryContainerActive';
const modalStoryContainer = 'modalStoryContainer';

const ModalStory = (props) => {
    const modalState = props.toggle
    const close = props.action
    return (
        <div className={`${modalStoryContainer} ${modalState ? modalStoryContainerActive : ''}`}>
            <div className="modalStoryReview">
                <div className="modalStoryReviewHeader">
                    <h3>Ajouter un media</h3>
                    <div className="modalClose" onClick={close}></div>
                </div>

                <div className="modalStoryReviewBody">
                    <div className="modalStoryReviewInput">
                        <label htmlFor="">Titre</label>
                        <input type="text" />
                    </div>
                    <div className="modalStoryReviewInput">
                        <label htmlFor="">Lien du media</label>
                        <input type="text" />
                    </div>
                    <div className="modalStoryReviewTextArea">
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>

                </div>
                <div className="modalStoryReviewFooter">
                    <button className='addStoryReview'>AJOUTER</button>
                </div>
            </div>

        </div>
    );
};

export default ModalStory;