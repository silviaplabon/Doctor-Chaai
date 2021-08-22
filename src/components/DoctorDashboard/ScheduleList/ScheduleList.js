import React, { useState } from "react";
import { db } from "../../../DataBase/FirebaseInitialize/firebase.config.js";

const ScheduleList = ({ doctor, schedule, updateList }) => {
  const [updatePendingList, setUpdatePendingList] = updateList;
  const [oldDoctorId, setOldDoctorId] = useState(doctor.doctorID);
  
  // database collection reference
  const databaseCollection = db.collection("availableSchedule");

  // delete the document from pendingSchedule collection
  const removeToPending = async () => {
    await db
      .collection("pendingSchedule")
      .doc(oldDoctorId)
      .collection("schedule")
      .doc(schedule.id)
      .delete();
  };

  // Add the document in available collection
  const pendingToAvailableSchedul = async () => {
    const scheduleData = { ...schedule };
    // Check the doctor in availableSchedule list if not then add the doctor
    await databaseCollection.doc(oldDoctorId).set({ email: doctor.email });
    // Then Add the schedul in availableSchedule collection
    await databaseCollection
      .doc(oldDoctorId)
      .collection("schedule")
      .doc(schedule.id)
      .set({ scheduleData });
    // call delete function for remove document in pendingSchedul
    await removeToPending();
    // Update the state for reload the pending list
    setUpdatePendingList(!updatePendingList);
  };

  return (
    <div className="d-xl-flex justify-content-between scheduleListItem">
      <div>
        <span className="mx-auto py-1">{schedule.date}</span>
      </div>
      <div>
        <span className="mx-auto py-2">
          {schedule.startTime} - {schedule.endTime}
        </span>
      </div>
      <div>
        <button
          onClick={pendingToAvailableSchedul}
          className="pt-1 scheduleListbtn mx-auto"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ScheduleList;
