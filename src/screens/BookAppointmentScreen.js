import React from "react";
import { Grommet } from "grommet";
import AppTheme from "../css/app_theme";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import {
  AppHeader,
  AppFooter,
  PageLayout,
  AvailableSlots
} from "../app_components";

function BookAppointmentScreen(props) {
  const { match } = props;
  const doctorList = useSelector(state => state["doctorReducer"].doctorList);
  const handleCancel = () => {
    props.history.push("/");
  };
  if (doctorList && doctorList.length) {
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
          content={<AvailableSlots doctorId={match.params.doctorId} />}
          footer={<AppFooter />}
        />
      </Grommet>
    );
  } else {
    return <Redirect to="/" />;
  }
}

export default BookAppointmentScreen;
