import React from "react";

const ScheduleList = ({data,schedule}) => {
    const [selectSchedule, setSelectSchedule] = schedule;
    const {data:scheduleData,index} = data;
  return (
    <>
      <div class="form-check rounded-pill p-0 mt-3 text-white text-center d-flex scheduleList align-items-center" onClick={() => setSelectSchedule(scheduleData)}>
        <input
          class="form-check-input ms-3 mt-0"
          type="radio"
          name="flexRadioDefault"
          id={`flexRadioDefault${index}`}
        />
        <label class="form-check-label w-100 h-100 py-3 d-flex align-content-center justify-content-evenly" for={`flexRadioDefault${index}`}>
          <span>{scheduleData.date}</span>
          <span>{scheduleData.startTime} - {scheduleData.endTime}</span>
        </label>
      </div>
    </>
  );
};

export default ScheduleList;
