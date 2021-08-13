import React, { useState } from "react";
import "./FindDoctor.scss";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const FindDoctor = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };

  const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.960069171293!2d90.497437!3d23.631573949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b173439c9d31%3A0x16ad9c10a52ad71d!2sNarayanganj%20300%20Bed%20Hospital!5e0!3m2!1sen!2sbd!4v1628856192320!5m2!1sen!2sbd`;
  return (
    <div className="container-sm py-4">
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={() => setModal(false)}>close</button> */}

        <div className="modal-div">
          {/* <button className="rounded-pill btn btn-primary">Close</button> */}
          <h1>
            <iframe className="g-map" src={url}></iframe>
          </h1>
        </div>
      </Modal>

      <div className="row row-cols-1 row-cols-sm-2 g-4">
        <div className="cols p-4">
          <div className="findImg">
            <img
              src="https://i.ibb.co/YXR0G01/portrait-doctor1.jpg"
              alt="find doctor"
            />
            <div className="findImgBg"></div>
          </div>
        </div>
        <div className="cols d-flex align-items-center">
          <div className="p-4">
            <h2 className="titleDesign1 my-3">Your Nearest Doctor</h2>
            <p className="text-muted mt-3">
              Select preferred doctor and time slot to book an in-clinic or
              video consultation. Its very easy and simple process to booking.
            </p>
            <button
              className="btn rounded-pill btnDesign1 mt-3"
              onClick={() => handleModal()}
            >
              Find Doctor Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
