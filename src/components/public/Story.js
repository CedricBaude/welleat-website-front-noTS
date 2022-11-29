import React, { useState, useLayoutEffect } from 'react';
import './style.css';
import axios from 'axios';

const baseURL = "https://testrender-6iwm.onrender.com/story";

const Story = () => {
    const [listStorys, setlistStorys] = useState(null);

    useLayoutEffect(() => {
        axios.get(baseURL).then((response) => {
            setlistStorys(response.data);
            console.log(response.data);
        });
    }, []);
    return (
        <section className='sub-content story' id=''>
            <h3 className='sub-title-2'>La story Welleat<span className='dot'>.</span></h3>
            <div className="story-content">

                {
                    listStorys?.data.map((data) => {
                        return (
                            <div className="story-content-content" key={data.id}>
                                <div className="story-content-1 story-last">{data.nom_story}</div>
                                <div className="story-content-2">{data.description_story}</div>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    );
};

export default Story;