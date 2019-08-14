//This screen will help to register a new user.
//Takes all user details.
import React, { useState } from "react";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { PageLayout, AppHeader, AppFooter } from "../app_components";
import {
  MelodyButton,
  MelodyForm,
  MelodyFormField,
  MelodyBox,
  MelodyHeading,
  MelodyText
} from "../basic_components";
import { AppNotification } from "../app_components";

const RegisterForm = withRouter(props => {
  const appointmentDetails = useSelector(
    state => state["appointmentReducer"].appointment
  );
  const onClose = () => {
    props.history.push("/");
  };

  const bookAppointment = () => {
    setShowMsg(true);
  };

  let [showMsg, setShowMsg] = useState(false);

  return (
    <MelodyBox align="center" justify="center">
      <MelodyHeading>User Details</MelodyHeading>
      <MelodyBox>
        <MelodyBox gap="medium">
          <MelodyText weight="bold">{`Date of Appointment :${
            appointmentDetails.selDate
          } `}</MelodyText>
          <MelodyText weight="bold">{`Time of Appointment :${
            appointmentDetails.selTime
          } `}</MelodyText>
        </MelodyBox>
        <MelodyBox width="medium" margin={{ top: "medium" }}>
          <MelodyForm>
            <MelodyFormField label="Name" name="name" required={true} />
            <MelodyFormField label="Mobile No" name="mobileNo" />
            <MelodyFormField label="Mail Id" name="mailId" />
            <MelodyFormField label="Problem Description" name="pr-descr" />
            <MelodyFormField label="Tests Done" name="test-done" />

            <MelodyButton label="Book Appointment" onClick={bookAppointment} />
          </MelodyForm>
        </MelodyBox>
      </MelodyBox>
      {showMsg && (
        <AppNotification
          text="You reserved the slot successfully"
          onClose={onClose}
        />
      )}
    </MelodyBox>
  );
});
/*
    This screen follows page Layout.
    Uses AppHeader and AppFooter along with the component.
*/
function AppointmentDetails(props) {
  const handleCancel = () => {
    props.history.push("/");
  };

  return (
    <React.Fragment>
      <PageLayout
        header={
          <AppHeader
            actionTitle="Cancel"
            isActionRequired={true}
            actionHandler={handleCancel}
            title="Consult Doctor Online"
          />
        }
        content={<RegisterForm />}
        footer={<AppFooter />}
      />
    </React.Fragment>
  );
}

export default AppointmentDetails;
