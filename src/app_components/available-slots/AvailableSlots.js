import React from "react";
import {
  AppointmentGrid,
  TwoColumnLayout,
  DoctorPhoto
} from "../../app_components";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

const AvailableSlots = ({ match }) => {
  const doctorList = useSelector(state => state["doctorReducer"].doctorList);
  const filterArray = doctorList.filter(
    obj => obj.id === Number(match.params.doctorId)
  );
  const doctorData = filterArray[0];

  return (
    <React.Fragment>
      <TwoColumnLayout
        dataTestId="book-appscreen"
        leftColumn={<DoctorPhoto doctorData={doctorData} />}
        rightColumn={<AppointmentGrid />}
      />
    </React.Fragment>
  );
};

export default withRouter(AvailableSlots);
