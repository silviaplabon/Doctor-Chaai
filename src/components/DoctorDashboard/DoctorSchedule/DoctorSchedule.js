import { faEraser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import subDays from "date-fns/subDays";
import moment from "moment";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UserContext } from "../../../App.js";
import { db } from "../../../DataBase/FirebaseInitialize/firebase.config.js";
import AvailableScheduleList from "../AvailableScheduleList/AvailableScheduleList";
import ScheduleList from "../ScheduleList/ScheduleList";
import "./DoctorSchedule.scss";

const DoctorSchedule = () => {
  const [loggedInUser] = useContext(UserContext);
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [startTime, setStartTime] = useState(moment());
  const [endTime, setEndTime] = useState(moment());
  const [scheduleData, setScheduleData] = useState({});
  const [allPendingSchedule, setAllPendingSchedule] = useState([]);
  const [allAvailableSchedule, setAllAvailableSchedule] = useState([]);
  const [addNewPending, setAddNewPending] = useState(false);
  const [updatePendingList, setUpdatePendingList] = useState(false);
  const [updateAvaliableList, setUpdateAvaliableList] = useState(false);
  const [doctorID, setDoctorId] = useState("");
  const [findDoctor, setFindDoctor] = useState(false);

  useEffect(() => {
    // set the date and time in state with formating
    setScheduleData({
      date: `${moment(scheduleDate).format("MMM Do YY")}`,
      startTime: `${moment(startTime).format("hh:mm a")}`,
      endTime: `${moment(endTime).format("hh:mm a")}`,
    });
  }, [startTime, endTime, scheduleDate]);

  // database collection reference
  const pendingCollection = db.collection("pendingSchedule");
  const availableCollection = db.collection("availableSchedule");
  //Email for test check
  const email = loggedInUser.email;

  // Call The function for find doctor from pendingSchedule
  useEffect(() => {
    // Find the doctor in pendingSchedule
    const findDoctorPending = async () => {
      // Find the doctor with email
      const snapshot = await pendingCollection
        .where("email", "==", email)
        .get();
      // check the doctors finded or not find
      if (!snapshot.empty) {
        let docId;
        snapshot.forEach((doc) => {
          docId = doc.id;
          setDoctorId(docId);
        });
      }
    };
    findDoctorPending();
  }, [findDoctor, email, pendingCollection]);

  //Find the doctor if is available then add pending schedul otherwise add doctor with pending schedul
  const pendingScheduleAdd = async () => {
    // check the doctors finded or not find
    if (doctorID !== "") {
      // Add the schedul
      pendingCollection
        .doc(doctorID)
        .collection("schedule")
        .add({ scheduleData });
    } else {
      // First Add the doctor
      const newDoctor = await pendingCollection.add({ email: email });
      // Then Add the schedul
      await pendingCollection
        .doc(newDoctor.id)
        .collection("schedule")
        .add({ scheduleData });
    }
  };

  // Call The function for get pending schedule from pendingSchedule
  useEffect(() => {
    if (doctorID?.length) {
      //Get the schedul from availableSchedule
      const pendingScheduleGet = async () => {
        const data = await pendingCollection
          .doc(doctorID)
          .collection("schedule")
          .get();
        let tempAllSchedule = [];
        let tempScheduleObj;
        data.forEach((doc) => {
          tempScheduleObj = {
            id: doc.id,
            ...doc.data().scheduleData,
          };
          tempAllSchedule.push(tempScheduleObj);
        });
        setAllPendingSchedule(tempAllSchedule);
      };
      pendingScheduleGet();
    } else {
      setFindDoctor(!findDoctor);
    }
  }, [
    addNewPending,
    updatePendingList,
    doctorID,
    findDoctor,
    pendingCollection,
  ]);
  useEffect(() => {
    if (doctorID?.length) {
      // Get the all schedul from availableSchedule
      const availableScheduleGet = async () => {
        const data = await availableCollection
          .doc(doctorID)
          .collection("schedule")
          .get();
        let tempAllSchedule = [];
        let tempScheduleObj;
        data.forEach((doc) => {
          tempScheduleObj = {
            id: doc.id,
            ...doc.data().scheduleData,
          };
          tempAllSchedule.push(tempScheduleObj);
        });
        setAllAvailableSchedule(tempAllSchedule);
      };
      availableScheduleGet();
    } else {
      setFindDoctor(!findDoctor);
    }
  }, [
    updatePendingList,
    updateAvaliableList,
    doctorID,
    availableCollection,
    findDoctor,
  ]);

  return (
    <div className="doctorDashboardData w-100 SubParentDesign">
      <div className="row row-cols-1 row-cols-md-2 mt-4 px-xl-5">
        <div className="col mx-auto pe-xxl-5">
          <div className="scheduleParent">
            <div className="pendingSchedule pb-3">
              <h4>Your Selected Schedule</h4>
              <div className="scheduleListParent">
                {allPendingSchedule.map((data) => (
                  <ScheduleList
                    key={data.id}
                    doctor={{ email, doctorID }}
                    schedule={data}
                    updateList={[updatePendingList, setUpdatePendingList]}
                  />
                ))}
              </div>
            </div>
            <div className="pendingSchedule mt-5">
              <h4>Your Available Schedule</h4>
              <div className="availableListParent scheduleListParent">
                {allAvailableSchedule.map((data) => (
                  <AvailableScheduleList
                    key={data.id}
                    doctor={{ email, doctorID }}
                    schedule={data}
                    updateList={[updateAvaliableList, setUpdateAvaliableList]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Date and Time start */}
        <div className="col mx-auto position-relative text-end ps-xxl-5">
          <DatePicker
            className="customStyleCalendar mx-auto"
            selected={scheduleDate}
            onChange={(date) => setScheduleDate(date)}
            minDate={subDays(new Date(), 0)}
            inline
          />
          <div className="w-100 overflow-hidden mt-5">
            <div className="timePicker">
              <h4>Start Time</h4>
              <TimePicker
                popupClassName="popupTimeCard"
                clearIcon={
                  <span className="timeRemoveIcon">
                    <FontAwesomeIcon icon={faEraser} />
                  </span>
                }
                onChange={setStartTime}
                defaultValue={startTime}
                use12Hours={true}
                placement="bottomRight"
                minuteStep={5}
                showSecond={false}
              />
            </div>
          </div>
          <br />
          <div className="w-100 overflow-hidden">
            <div className="timePicker">
              <h4>End Time</h4>
              <TimePicker
                popupClassName="popupTimeCard"
                clearIcon={
                  <span className="timeRemoveIcon">
                    <FontAwesomeIcon icon={faEraser} />
                  </span>
                }
                onChange={setEndTime}
                defaultValue={endTime}
                use12Hours={true}
                placement="bottomRight"
                minuteStep={5}
                showSecond={false}
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn px-4 py-2 mt-4 mx-auto"
              onClick={() => {
                pendingScheduleAdd();
                setAddNewPending(!addNewPending);
              }}
              style={{
                background: "#050545",
                color: "white",
                fontWeight: "600",
                borderRadius: "8px",
              }}
            >
              Add Shedul
            </button>
          </div>
        </div>
        {/* Date and Time end */}
      </div>
    </div>
  );
};

export default DoctorSchedule;
