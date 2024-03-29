import React, { useState } from 'react';
import Header from '../../components/public/Header';
import homeLogo from "../../assets/img/welleat-logo.png";
import './style.css';
import Appli from '../../components/public/Appli';
import Easy from '../../components/public/Easy';
import Efficient from '../../components/public/Efficient';
import Sure from '../../components/public/Sure';
import Eco from '../../components/public/Eco';
import Simulation from '../../components/public/Simulation';
import Use from '../../components/public/Use';
import Stats from '../../components/public/Stats';
import Contact from '../../components/public/Contact';
import Footer from '../../components/public/Footer';
import Story from '../../components/public/Story';

const Home = () => {
    const [appContentBackGround, setappContentBackGround] = useState(false);
    const changeBackGroundBody = () => {
        if (window.scrollY >= 1600) {
            setappContentBackGround(true)
        }
        else {
            setappContentBackGround(false)
        }
    };
    window.addEventListener('scroll', changeBackGroundBody);
    return (
        <div className={appContentBackGround ? 'app-content active' : 'app-content'}  >
            <Header />
            <div className="home-container" id="home" >
                <img src={homeLogo} alt="" className='home-logo' />
                <h1>Révolutionnons la production culinaire<span className='point'>.</span></h1>
            </div>
            <Appli />
            <Easy />
            <Efficient />
            <Sure />
            <Eco />
            <Stats />
            <Simulation />
            <Use />
            <Contact />
            <Story />

            <Footer />
        </div>
    );
};

export default Home;