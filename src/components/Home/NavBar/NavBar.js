import { faGripLines, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../images/doctor-logo.png";
import "./NavBar.scss";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Modal from "react-modal";

const containerStyle = {
  width: "800px",
  height: "800px",
  
};
const center = {
  lat: 23.810651,
  lng: 90.4126466,
};
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
const NavBar = () => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyD2RMHht5w-I5bAx3j32GJSMNc0i0XoEb8",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [expand, setExpand] = useState(true);

  const handleLogout = () => {
    setLoggedInUser(localStorage.removeItem("Authorization"));
  };

//   const handleClick = (e) => {};

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="container-fluid">
            <div className="d-lg-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="navbar-brand">
                  <img className="logoImg" src={logo} alt="doctors-chaai" />
                </div>
                <button
                  onClick={() => setExpand(!expand)}
                  className="navbar-toggler togglerBtn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {expand ? (
                    <FontAwesomeIcon icon={faGripLines} />
                  ) : (
                    <FontAwesomeIcon icon={faTimes} />
                  )}
                </button>
              </div>
              <div
                className="collapse navbar-collapse ms-lg-3"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbarItem">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Find Doctor
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleModal}>
                      Find Medical
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Help
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/covid19">
                      Covid Tracker
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav align-items-center ms-lg-auto mb-2 mb-lg-0 navbarBtnItem">
                  {/* <li className="nav-item ">
                                    <Link className="nav-link logInBtn" aria-current="page" to="/home">LogIn</Link>
                                </li> */}
                  {loggedInUser?.userName ? (
                    <li className="nav-item mt-3 mt-lg-0">
                      <Link
                        onClick={handleLogout}
                        className="signUpBtn rounded-pill"
                        aria-current="page"
                        to="/login"
                      >
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item mt-3 mt-lg-0">
                      <Link
                        className="signUpBtn rounded-pill"
                        aria-current="page"
                        to="/register"
                      >
                        SignUp
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={modal}
        ariaHideApp={false}
        onRequestClose={() => setModal(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={() => setModal(false)}>close</button> */}

        <div className="modal-div">
          {/* <button className="rounded-pill btn btn-primary">Close</button> */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </div>
      </Modal>
    </>
  );
};

export default NavBar;
