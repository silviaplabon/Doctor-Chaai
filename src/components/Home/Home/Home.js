import React from 'react';
import Department from '../Department/Department';
import FindDoctor from '../FindDoctor/FindDoctor';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import TakeAppointment from '../TakeAppointment/TakeAppointment';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <FindDoctor/>
            <TakeAppointment/>
            <Department/>
            <Footer/>
        </div>
    );
};

export default Home;