import React from 'react';

const CarouselLogo = (props) => {
    return (
        <div className='users-logo'>
            <div className="users-logo-picture">
                <div className="users-logo-picture" key={props.id_logo}>
                    <img className='users-logo-picture-img' alt='' src={require('../../assets/img/' + props.url + '')}>
                    </img>
                </div>
            </div>
        </div >
    );
};

export default CarouselLogo;