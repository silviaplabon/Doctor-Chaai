import React from 'react';
import DeptData from "../../../FakeData/DepartmentData.json";
import "./Department.scss";

const Department = () => {
    return (
        <section className="department py-5">
            <div className="custom-container">
                <div className="text-center pt-3">
                    <h5>where we do the magic</h5>
                    <h2>our departments</h2>
                </div>
                <div className="row py-5 px-2">
                    {DeptData.map(item =>
                        <div key={item.id} className="col-md-4 my-2 m-auto col-12 dept-container">
                            <img src={item.image} alt={item.title} />
                            <div className="px-4 py-5 text-center">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <button className="btn">learn more</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Department;