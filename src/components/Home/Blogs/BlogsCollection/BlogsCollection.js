import axios from 'axios';
import React, {useEffect, useState} from 'react';
import BlogShow from '../BlogShow/BlogShow';
import './BlogsCollection.scss';
const BlogsCollection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // http://localhost:4300/blog/getBlog
    axios
      .get('https://whispering-reef-28119.herokuapp.com/blog/getBlog')
      .then(function (response) {
        // handle success
        console.log(response.data.result);
        setBlogs(response.data.result);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
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
          <BlogShow key={blog.id} blog={blog}></BlogShow>
        ))}
      </div>
    </div>
  );
};

export default BlogsCollection;
