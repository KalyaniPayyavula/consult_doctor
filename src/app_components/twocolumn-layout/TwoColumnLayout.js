import React from "react";
import PropTypes from "prop-types";
import { MelodyBox } from "../../basic_components";

const TwoColumnLayout = ({ leftColumn, rightColumn, dataTestId }) => {
  return (
    <MelodyBox
      direction="row"
      pad="small"
      border={{ side: "bottom", color: "gray" }}
      dataTestId={`${dataTestId}-two-column`}
    >
      <MelodyBox flex="true">{leftColumn}</MelodyBox>
      <MelodyBox flex="true" background="light-2">
        {rightColumn}
      </MelodyBox>
    </MelodyBox>
  );
};

TwoColumnLayout.propTypes = {
  leftColumn: PropTypes.node.isRequired,
  rightColumn: PropTypes.node.isRequired,
  dataTestId: PropTypes.string.isRequired
};

export default TwoColumnLayout;
