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
import { AppNotification, FormFieldLabel } from "../app_components";

const RegisterForm = withRouter(props => {
  const appointmentDetails = useSelector(
    state => state["appointmentReducer"].appointment
  );
  const onClose = () => {
    props.history.push("/");
  };

  const bookAppointment = event => {
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
          <MelodyForm onSubmit={bookAppointment}>
            <FormFieldLabel label="Name" name="name" required />
            <FormFieldLabel label="Mobile No" name="mobileNo" required />
            <FormFieldLabel label="Mail Id" name="mailId" required />
            <FormFieldLabel
              label="Problem Description"
              name="pr-descr"
              required
            />
            <MelodyFormField label="Tests Done" name="test-done" />

            <MelodyButton type="submit" primary label="Book Appointment" />
            <MelodyText
              margin={{ left: "small" }}
              size="small"
              color="status-critical"
            >
              * Required Field
            </MelodyText>
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
