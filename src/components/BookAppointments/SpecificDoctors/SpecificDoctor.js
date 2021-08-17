import React from 'react';
const SpecificDoctor = ({ dept }) => {
  console.log(dept);
  return (
    <div className="mt-5 text-center">
      <div className="col">
        <div className="card mb-5">
          <img
            src={dept.photo}
            style={{ width: '20%' }}
            className="rounded mx-auto"
            alt={dept._id}
          />
          <div className="card-body">
            <h5 className="card-title">{dept.name}</h5>
            <p className="card-text">{dept.experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificDoctor;
