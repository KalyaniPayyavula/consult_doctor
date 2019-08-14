import React from "react";
import { Grommet } from "grommet";
import AppTheme from "../css/app_theme";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";
import {
  AppHeader,
  AppFooter,
  AppointmentGrid,
  PageLayout,
  TwoColumnLayout,
  DoctorPhoto
} from "../app_components";

const AppointmentContent = withRouter(({ doctorId }) => {
  const doctorList = useSelector(state => state["doctorReducer"].doctorList);
  const filterArray = doctorList.filter(obj => obj.id === Number(doctorId));
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
});

function BookAppointmentScreen(props) {
  const { match } = props;
  const handleCancel = () => {
    props.history.push("/");
  };
  return (
    <Grommet theme={AppTheme}>
      <PageLayout
        header={
          <AppHeader
            title="Book Appointment"
            isActionRequired={true}
            actionTitle="Cancel"
            actionHandler={handleCancel}
          />
        }
        content={<AppointmentContent doctorId={match.params.doctorId} />}
        footer={<AppFooter />}
      />
    </Grommet>
  );
}

export default BookAppointmentScreen;
