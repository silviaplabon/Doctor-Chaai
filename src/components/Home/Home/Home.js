import React from 'react';
import Features from '../Features/Features';
import FindDoctor from '../FindDoctor/FindDoctor';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import OurService from '../OurService/OurService';
import TakeAppointment from '../TakeAppointment/TakeAppointment';
import TalentedStaff from '../TalentedStaff/TalentedStaff';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <FindDoctor/>
            <Features />
            <TakeAppointment/>
<<<<<<< HEAD
            <TalentedStaff />
=======
            <OurService/>
>>>>>>> 7ce9e7c26e2635259cdb494796209a1a5d29dbc0
            <Footer/>

        </div>
    );
};

export default Home;