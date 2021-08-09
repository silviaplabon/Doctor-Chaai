import React from 'react';
import './BlogShow.scss'
const BlogShow = ({ blog }) => {
    const { name, description, date } = blog;
    return (
        <div className="col mt-5">
            <div className="blogContainer">
           
            <div className="card shadow">
                <div className="blogDateContainer">
                    <h6 className="text-white ps-4 py-1">{date}</h6>
                </div>
                <div className=" blogImageContainer">
                    <img
                        src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3RvcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        className="w-100 blogImage" />
                </div>

                <div className="text-center">
                    <h5 className="mt-3" style={{ color: '#1dc0bf' }}>{name}</h5>
                    <p className="mx-3" style={{ color: '#0e0d3f' }}>{description}</p>
                    <button className="btn mb-4 readMoreBlogButton">Read More</button>
                </div>
            </div>     
            </div>
        </div>
    );
};

export default BlogShow;