import React, { useState } from "react";
import {
  MelodyBox,
  MelodyHeading,
  MelodyButton,
  MelodyLayer,
  MelodyFormField,
  MelodyTextInput,
  MelodyForm
} from "../basic_components";
import { Link } from "react-router-dom";
import { AppNotification, FormFieldLabel } from "../app_components";

import { Close } from "grommet-icons";

const LoginLayer = ({ onClose, onSubmit }) => {
  const [showMsg, setShowMsg] = useState(false);
  const [notifMsg, setNotifMsg] = useState("");

  const closeMsg = () => {
    setShowMsg(false);
  };

  return (
    <React.Fragment>
      <MelodyLayer
        position="right"
        full="vertical"
        modal
        onClickOutside={() => onClose()}
        onEsc={() => onClose()}
      >
        <MelodyBox fill="vertical" overflow="auto" width="medium" pad="medium">
          <MelodyBox flex={false} direction="row" justify="between">
            <MelodyHeading level={2} margin="none">
              Login
            </MelodyHeading>
            <MelodyButton icon={<Close />} onClick={() => onClose()} />
          </MelodyBox>
          <MelodyForm onSubmit={onSubmit}>
            <FormFieldLabel label="UserId" name="userid" required />
            <FormFieldLabel
              type="password"
              label="Password"
              name="password"
              required
            />
            <MelodyButton type="submit" label="Login" primary />
          </MelodyForm>
        </MelodyBox>

        <MelodyBox flex={false} as="footer" align="start" pad="medium">
          <MelodyBox>
            <Link to="/register">New User? Register Now.</Link>
          </MelodyBox>
        </MelodyBox>
      </MelodyLayer>
      {showMsg && <AppNotification text={notifMsg} onClose={closeMsg} />}
    </React.Fragment>
  );
};

export default LoginLayer;
