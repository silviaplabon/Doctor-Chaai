import React from 'react';
import BlogShow from '../BlogShow/BlogShow'
import './BlogsCollection.scss'
const BlogsCollection = () => {
    const blogs = [
        {
            id:1,
            date: ' August 01, 2021',
            name: 'Vaccination',
            description: 'Hospital management System or HMS Software is mainly a system that designed for multispeciality hospitals, to cover a wide range ofhospital administration and management processes. It is an integrated end-to-end HospitalManagement System that provides relevant information across the hospital to support effectivedecision making for patient care, hospital administration and critical financial accounting, in aseamless flow.Hospital Management System is a software product suite designed to improve the quality andmanagement of hospital management in the areas of clinical process analysis and activity-basedcosting. Hospital Management System enables you to develop your organization and improve itseffectiveness and quality of work. Managing the key processes efficiently is critical to thesuccess of the hospital helps you manage your processes'
        },
        {
            id:2,
            date: ' August 14, 2021',
            name: 'E Health',
            description: 'Hospital management System or HMS Software is mainly a system that designed for multispeciality hospitals, to cover a wide range ofhospital administration and management processes. It is an integrated end-to-end HospitalManagement System that provides relevant information across the hospital to support effectivedecision making for patient care, hospital administration and critical financial accounting, in aseamless flow.Hospital Management System is a software product suite designed to improve the quality andmanagement of hospital management in the areas of clinical process analysis and activity-basedcosting. Hospital Management System enables you to develop your organization and improve itseffectiveness and quality of work. Managing the key processes efficiently is critical to thesuccess of the hospital helps you manage your processes'
        },
        {
            id:3,
            date: ' August 15, 2021',
            name: 'Vaccination',
            description: 'Hospital management System or HMS Software is mainly a system that designed for multispeciality hospitals, to cover a wide range ofhospital administration and management processes. It is an integrated end-to-end HospitalManagement System that provides relevant information across the hospital to support effectivedecision making for patient care, hospital administration and critical financial accounting, in aseamless flow.Hospital Management System is a software product suite designed to improve the quality andmanagement of hospital management in the areas of clinical process analysis and activity-basedcosting. Hospital Management System enables you to develop your organization and improve itseffectiveness and quality of work. Managing the key processes efficiently is critical to thesuccess of the hospital helps you manage your processes'
        },
    ]
    return (
        <div className="container mb-5 mt-5">
            <div className="d-flex justify-content-center align-items-center">
                <hr className="hrStyleBlog me-1"></hr>
                <h5 className="text-center " style={{ color: '#1dc0bf' }}>Our Blog</h5>
            </div>
            <h2 className="text-center mb-2" style={{ color: '#050546' }}>GET OUR DAILY NEWS FEEDS</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    blogs.map(blog => <BlogShow key={blog.id} blog={blog}></BlogShow>)
                }
            </div>

        </div>
    );
};

export default BlogsCollection;