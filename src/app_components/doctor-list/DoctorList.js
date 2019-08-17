import React from "react";
import { withRouter } from "react-router";

import {
  TwoColumnLayout,
  DoctorPhoto,
  DoctorProfile
} from "../../app_components";

const DoctorList = ({ doctorList, bookAppointment }) => {
  return (
    <React.Fragment>
      {doctorList.map(doctorData => (
        <TwoColumnLayout
          dataTestId="doctor-homescreen"
          key={doctorData.id}
          leftColumn={
            <DoctorPhoto
              doctorData={doctorData}
              bookAppointment={() => bookAppointment(doctorData.id)}
              isButtonRequired={true}
            />
          }
          rightColumn={<DoctorProfile doctorData={doctorData} />}
        />
      ))}
    </React.Fragment>
  );
};

export default withRouter(DoctorList);
