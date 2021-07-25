import React from "react";
import doc1 from "../../../images/doc_1.jpg";
import doc2 from "../../../images/doc_2.jpg";
import doc3 from "../../../images/doc_3.jpg";
import "./TalentedStaff.scss";

const TalentedStaff = () => {
  return (
    <div className="container mt-5 mb-5">
      <h5 className="text-center primaryText">Meet The Crew</h5>
      <h3 className="text-center ">Our Talented Staff</h3>

      <div className="text-center row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div className="col py-4 m-auto">
          <div className="card text-black shadow">
            <img src={doc1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>DR. DONALD TOMASH</h3>
              <p className="text-secondary">Pediatrist</p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col py-4 m-auto">
          <div className="card text-black shadow">
            <img src={doc2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>DR. DONALD TOMASH</h3>
              <p className="text-secondary">Pediatrist</p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        <div className="col py-4 m-auto">
          <div className="card text-black shadow">
            <img src={doc3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h3>DR. DONALD TOMASH</h3>
              <p className="text-secondary">Pediatrist</p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentedStaff;
