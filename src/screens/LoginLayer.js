import React, { useState } from "react";
import {
  MelodyBox,
  MelodyHeading,
  MelodyButton,
  MelodyLayer,
  MelodyFormField,
  MelodyTextInput
} from "../basic_components";
import { Link } from "react-router-dom";
import { AppNotification } from "../app_components";

import { Close } from "grommet-icons";

const LoginLayer = ({ onClose, onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const [notifMsg, setNotifMsg] = useState("");

  const closeMsg = () => {
    setShowMsg(false);
  };

  const preSubmit = (userId, pwd) => {
    if (userId.length === 0 || pwd.length === 0) {
      //show notification
      setNotifMsg("username or password can't be empty!");
      setShowMsg(true);
    } else {
      onSubmit(userId, pwd);
    }
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
          <MelodyBox flex="grow" overflow="auto" pad={{ vertical: "medium" }}>
            <MelodyFormField label="User Name">
              <MelodyTextInput onInput={e => setUserName(e.target.value)} />
            </MelodyFormField>
            <MelodyFormField label="Password">
              <MelodyTextInput
                type="password"
                onInput={e => setPassword(e.target.value)}
              />
            </MelodyFormField>
            <MelodyButton
              type="submit"
              label="Submit"
              onClick={() => preSubmit(userName, password)}
              primary
            />
          </MelodyBox>
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
