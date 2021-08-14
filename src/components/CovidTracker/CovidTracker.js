import React, { useEffect, useState } from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import './CovidTracker.scss'


const CovidTracker = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries/Bangladesh')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })

    }, []);

    return (
        <div>
            <div className="container covid-Container">
                <NavBar />
                <h1 className="mt-3 text-center heading">Covid 19 <span>Tracker</span></h1>
                <h4 className="mx-3 mt-lg-3">LAST UPDATED <span> {new Date().toLocaleTimeString()}</span><span>  {new Date().toLocaleDateString()}</span></h4>
                <div className="row mx-auto mt-5">
                    <div className="col-md-4">
                        <div className="card shadow-sm card-result text-white mb-5">
                            <div className="card-body">
                                <h5 className="card-title">COUNTRY</h5>
                                <h1 className="card-text">{data.country}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm card-result text-white mb-5">
                            <div className="card-body">
                                <h5 className="card-title">CASES</h5>
                                <h1 className="card-text">{data.cases}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm card-result text-white mb-5">
                            <div className="card-body">
                                <h5 className="card-title">TOTAL RECOVERED</h5>
                                <h1 className="card-text">{data.recovered}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm card-result text-white mb-5">
                            <div className="card-body">
                                <h5 className="card-title">TODAYS CASES</h5>
                                <h1 className="card-text">{data.todayCases}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-sm card-result text-white mb-5">
                            <div className="card-body">
                                <h5 className="card-title">DEATHS</h5>
                                <h1 className="card-text">{data.deaths}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm card-result text-white mb-5">
                            <div className="card-body">
                                <h5 className="card-title">TODAYS DEATH</h5>
                                <h1 className="card-text">{data.todayDeaths}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CovidTracker;