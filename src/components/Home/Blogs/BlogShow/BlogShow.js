import moment from "moment";
import React from 'react';
import './BlogShow.scss';


const BlogShow = ({ blog }) => {
  const { title, description, date, image } = blog;
  const maxLength = 94;
  let trimmedString = description.substr(0, maxLength);
  trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
  return (
    <div className="col mt-5">
      <div className="blogContainer">
        <div className="card shadow blogRadiusContainer">
          <div className="blogDateContainer">
            <h6 className="text-white ps-4 pt-3 pb-2">{moment(date).format("MMM Do YY hh:mm a")}</h6>
          </div>
          <div className="blogImageContainer">
            <img src={image} alt="profile" className="w-100 blogImage" />
          </div>
          <div className="text-center blogDetailsContainer">
            <h5 className="mt-3 mx-3 blogDetailTitle " style={{ color: '#1dc0bf' }}>
              {title}
            </h5>
            <p className="mx-3 blogDetailDescription" style={{ color: '#0e0d3f' }}>
              {trimmedString}......
            </p>
            <button
              type="button"
              className="btn mb-4 readMoreBlogButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <div class="modal-header text-center">
                            <h5 className=" modal-title mt-2 text-center" style={{ color: '#1dc0bf' }} id="exampleModalLabel">{name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
            <div className="modal-body">
              <div className="col-12 mx-auto">
                <h4
                  className="modal-title mt-2 text-center"
                  style={{ color: '#1dc0bf' }}
                  id="exampleModalLabel"
                >
                  {title}
                </h4>
                <div className="">
                  <img
                    src={image}
                    alt="profile"
                    className="w-75 mt-2 mx-auto d-block"
                  />
                </div>
                <p className="mx-3 mt-3" style={{ color: '#0e0d3f' }}>
                  {description}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn readMoreBlogButton"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShow;
