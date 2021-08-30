import React from 'react';
import DeptData from "../../../FakeData/DepartmentData.json";
import "./Department.scss";

const Department = () => {
    return (
        <section className="department py-5">
            <div className="container">
                <div className="text-center pt-3">
                    <h5>where we do the magic</h5>
                    <h2>our departments</h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5">
                    {DeptData.map(item =>
                        <div key={item.id} className="col my-3 my-sm-4 m-auto px-3 px-sm-5 px-md-4 overflow-hidden">
                            <div className="dept-container">
                            <img src={item.image} alt={item.title} />
                            <div className="px-4 py-5 text-center">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <button className="btn">learn more</button>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Department;