import React from 'react';
import axios from 'axios';
import Header from '../../components/admin/Header';

const baseURLMedia = "https://testrender-6iwm.onrender.com/media";



const Media = () => {
    const [listMedia, setListMedia] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURLMedia).then((response) => {

            setListMedia(response.data);
            console.log(response.data);
        });
    }, []);

    if (!listMedia) return null;
    return (
        <div className='dashboard-content'>
            <Header />

            <div className="dashboard-sub-content">
                <div className="dashboard-sub-content-heading">
                    <h2 className='title-dashboard'>Media</h2>
                    <h3 className='sub-title-dashboard'>GESTION DES MEDIAS.</h3>
                </div>
            </div>
        </div>
    );
};

export default Media;