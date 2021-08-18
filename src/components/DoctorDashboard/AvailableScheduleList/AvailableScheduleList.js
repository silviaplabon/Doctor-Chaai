import React, { useState } from "react";
import { db } from "../../../DataBase/FirebaseInitialize/firebase.config.js";

const AvailableScheduleList = ({ doctor, schedule, updateList }) => {
  const [updateAvaliableList, setUpdateAvaliableList] = updateList;
  const [oldDoctorId, setOldDoctorId] = useState(doctor.doctorID);

  // database collection reference
  const databaseCollection = db.collection("availableSchedule");

  // delete the document from availableSchedule collection
  const removeToPending = async () => {
    await databaseCollection
      .doc(oldDoctorId)
      .collection("schedule")
      .doc(schedule.id)
      .delete();
      //Update state for reloading
      setUpdateAvaliableList(!updateAvaliableList);
  };


  return (
    <div className="d-xl-flex justify-content-between availableListItem scheduleListItem">
      <div>
        <span className="mx-auto py-1">{schedule.date}</span>
      </div>
      <div>
        <span className="mx-auto py-2">{schedule.startTime} - {schedule.endTime}</span>
      </div>
      <div>
        <button onClick={removeToPending} className="pt-1 availableListbtn scheduleListbtn mx-auto">
          Remove
        </button>
      </div>
    </div>
  );
};

export default AvailableScheduleList;
