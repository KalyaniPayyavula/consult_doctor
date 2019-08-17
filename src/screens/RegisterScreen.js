//This screen will help to register a new user.
//Takes all user details.
import React from "react";
import {
  PageLayout,
  AppHeader,
  AppFooter,
  FormFieldLabel
} from "../app_components";
import {
  MelodyButton,
  MelodyForm,
  MelodyBox,
  MelodyHeading,
  MelodyText
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
          <MelodyForm onSubmit={registerUser}>
            <FormFieldLabel label="UserId" name="UserId" required />
            <FormFieldLabel
              label="Password"
              name="password"
              type="password"
              required
            />
            <FormFieldLabel
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              required
            />
            <FormFieldLabel label="Mobile No" name="mobileNo" required />
            <FormFieldLabel label="EMail" name="email" required />
            <MelodyText>Address:</MelodyText>
            <FormFieldLabel label="Line1" name="addr-line1" />
            <FormFieldLabel label="Line2" name="addr-line2" />
            <FormFieldLabel label="City" name="city" />
            <FormFieldLabel label="State" name="state" />
            <FormFieldLabel label="ZipCode" name="zip-code" />

            <MelodyButton type="submit" label="Register" primary />
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
