import React from "react";
import { MelodyHeading, MelodyBox, MelodyButton } from "../../basic_components";
import PropTypes from "prop-types";

const AppHeader = ({ isActionRequired, title, actionTitle, actionHandler }) => {
  return (
    <MelodyBox
      direction="row"
      flex="true"
      border={{ side: "bottom", color: "gray" }}
    >
      <MelodyBox align="center" justify="center" flex={{ grow: 2 }}>
        <MelodyHeading>{title}</MelodyHeading>
      </MelodyBox>
      {isActionRequired && (
        <MelodyBox flex="true" align="center" justify="center">
          <MelodyButton label={actionTitle} onClick={actionHandler} />
        </MelodyBox>
      )}
    </MelodyBox>
  );
};

AppHeader.propTypes = {
  isActionRequired: PropTypes.bool,
  title: PropTypes.string.isRequired
};

AppHeader.defaultProps = {
  isActionRequired: false
};

export default AppHeader;
