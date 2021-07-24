import React from 'react';
import FindDoctor from '../FindDoctor/FindDoctor';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import OurService from '../OurService/OurService';
import TakeAppointment from '../TakeAppointment/TakeAppointment';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <FindDoctor/>
            <TakeAppointment/>
            <OurService/>
            <Footer/>
        </div>
    );
};

export default Home;