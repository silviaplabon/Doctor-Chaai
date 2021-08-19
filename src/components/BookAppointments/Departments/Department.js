import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Departments.scss'

const Department = ({ department }) => {
    return (
        <div className="dept-container">
            <Link className="link" to={`/doctorDepartments/${department.name}`}>
                <div className="col">
                    <div className="card dept-card h-100">
                        <div className="card-body text-center">
                            <img className="deptImg" src={department.img} alt="" />
                            <h5 className="card-title">{department.name}</h5>
                        </div>
                    </div>
                </div>
            </Link >
        </div>
    );
};

export default Department;