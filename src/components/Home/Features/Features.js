import React from 'react';
import { NavLink } from 'react-router-dom';
import './Features.scss';

const Features = () => {
    return (
        <div className="container">
            <div className="row text-white">
                <div className="col-md-4 col-sm-6 mx-auto p-0">
                    <div className="card border-0 h-100 rounded-0 first">
                        <div className="card-body">
                            <h4 className="card-title">Top Doctors</h4>
                            <p className="card-text">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
                        </div>
                        <div className="features">
                            <NavLink to="#" className="feature-btn">Read more</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 mx-auto p-0">
                    <div className="card border-0 h-100 rounded-0 second">
                        <div className="card-body">
                            <h4 className="card-title">24 Hours Service</h4>
                            <p className="card-text">Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
                        </div>
                        <div className=" features">
                            <NavLink to="#" className="feature-btn">Read more</NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 mx-auto p-0">
                    <div className="card border-0 h-100 rounded-0 third">
                        <div className="card-body">
                            <h4 className="card-title">Opening Hours</h4>
                            <div className="tableData">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Monday- Friday</td>
                                        <td>8.00 - 17.00</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>9.00 - 16.00</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>9.30 - 17.30</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Features;