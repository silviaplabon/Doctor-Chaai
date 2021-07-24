import React from 'react';
import FindDoctor from '../FindDoctor/FindDoctor';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import TakeAppointment from '../TakeAppointment/TakeAppointment';
import TalentedStaff from '../TalentedStaff/TalentedStaff';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <FindDoctor/>
            <TakeAppointment/>
            <TalentedStaff />
            <Footer/>
        </div>
    );
};

export default Home;