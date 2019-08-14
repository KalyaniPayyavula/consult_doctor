//This screen will help to register a new user.
//Takes all user details.
import React from "react";
import { PageLayout, AppHeader, AppFooter } from "../app_components";
import {
  MelodyButton,
  MelodyForm,
  MelodyFormField,
  MelodyBox,
  MelodyHeading
} from "../basic_components";
import { withRouter } from "react-router";

const RegisterForm = withRouter(props => {
  const registerUser = () => {
    props.history.push("/");
  };

  return (
    <MelodyBox align="center" justify="center">
      <MelodyHeading>Register User</MelodyHeading>
      <MelodyBox>
        <MelodyBox width="medium">
          <MelodyForm>
            <MelodyFormField label="Name" name="name" required={true} />
            <MelodyFormField label="Mobile No" name="mobileNo" />
            <MelodyFormField label="Mail Id" name="mailId" />
            <MelodyFormField label="Password" name="password" type="password" />
            <MelodyFormField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <MelodyFormField label="Line1" name="addr-line1" />
            <MelodyFormField label="Line2" name="addr-line2" />
            <MelodyFormField label="City" name="city" />
            <MelodyFormField label="State" name="state" />
            <MelodyFormField label="ZipCode" name="zip-code" />

            <MelodyButton label="Register" onClick={registerUser} />
          </MelodyForm>
        </MelodyBox>
      </MelodyBox>
    </MelodyBox>
  );
});
/*
    This screen follows page Layout.
    Uses AppHeader and AppFooter along with the component.
*/
function RegisterScreen(props) {
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

export default RegisterScreen;
