import React from 'react';
import BlogShow from '../BlogShow/BlogShow';
import './BlogsCollection.scss';
const BlogsCollection = () => {
  const blogs = [
    {
      date: ' August 01, 2021',
      name: 'Vaccination',
      description:
        'Hospital management System or HMS Software is mainly a system that',
    },
    {
      date: ' August 01, 2021',
      name: 'Vaccination',
      description:
        'Hospital management System or HMS Software is mainly a system that ',
    },
    {
      date: ' August 01, 2021',
      name: 'Vaccination',
      description:
        'Hospital management System or HMS Software is mainly a system that',
    },
  ];
  return (
    <div className="container mb-5 mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <hr className="hrStyleBlog me-1"></hr>
        <h5 className="text-center " style={{color: '#1dc0bf'}}>
          Our Blog
        </h5>
      </div>
      <h2 className="text-center mb-2" style={{color: '#050546'}}>
        GET OUR DAILY NEWS FEEDS
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {blogs.map((blog) => (
          <BlogShow blog={blog}></BlogShow>
        ))}
      </div>
    </div>
  );
};

export default BlogsCollection;
