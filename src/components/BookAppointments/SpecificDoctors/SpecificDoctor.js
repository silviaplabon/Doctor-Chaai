import React from "react";
import { useHistory } from "react-router-dom";
const SpecificDoctor = ({ dept }) => {
  const history = useHistory();
  return (
    <div className="mt-2 text-center">
      <div className="col p-3">
        <div
          onClick={() =>
            history.push(`/appointment/${dept.specialization}/${dept._id}`)
          }
          className="card h-100 p-3 doctorCard"
        >
          <img
            src={dept.photo}
            style={{ width: "6rem" }}
            className="rounded-circle mx-auto mt-4"
            alt={dept._id}
          />
          <div className="card-body">
            <h5 className="card-title m-0 p-0">{dept.name}</h5>
            <p className="card-text m-0 p-1">{dept.experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificDoctor;
