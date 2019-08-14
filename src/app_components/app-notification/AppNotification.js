import React from "react";
import {
  MelodyBox,
  MelodyButton,
  MelodyText,
  MelodyLayer
} from "../../basic_components";
import { FormClose, StatusGood } from "grommet-icons";
import PropTypes from "prop-types";

const AppNotification = ({ text, onClose }) => {
  return (
    <MelodyLayer
      position="top"
      modal={false}
      margin={{ vertical: "medium", horizontal: "small" }}
      onEsc={() => onClose}
      responsive={false}
      plain
    >
      <MelodyBox
        align="center"
        direction="row"
        gap="small"
        justify="between"
        round="medium"
        elevation="medium"
        pad={{ vertical: "xsmall", horizontal: "small" }}
        background="status-ok"
      >
        <MelodyBox align="center" direction="row" gap="xsmall">
          <StatusGood />
          <MelodyText>{text}</MelodyText>
        </MelodyBox>
        <MelodyButton icon={<FormClose />} onClick={() => onClose()} plain />
      </MelodyBox>
    </MelodyLayer>
  );
};

AppNotification.propTypes = {
  text: PropTypes.string.isRequired
};

export default AppNotification;
