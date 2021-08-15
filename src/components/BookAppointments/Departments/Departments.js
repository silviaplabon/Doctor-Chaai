import React from 'react';
import departmentImg from '../../../images/department.png'
import Footer from '../../Home/Footer/Footer';
import NavBar from '../../Home/NavBar/NavBar';
import Department from './Department';
import './Departments.scss'

const Departments = () => {

    const DepartmentsData = [
        {
            id: 1,
            name: 'Endocrinologist',
            img: departmentImg
        },
        {
            id: 2,
            name: 'Gynecologist',
            img: departmentImg
        },
        {
            id: 3,
            name: 'Neurologist',
            img: departmentImg
        },
        {
            id: 4,
            name: 'Endocrinologist',
            img: departmentImg
        },
        {
            id: 5,
            name: 'Neurologist',
            img: departmentImg
        },
        {
            id: 6,
            name: 'Endocrinologist',
            img: departmentImg
        }
    ]

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12 mb-5">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                DepartmentsData.map((department) => <Department key={department.id} department={department} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Departments;