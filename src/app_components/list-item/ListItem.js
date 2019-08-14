import React from "react";
import { MelodyBox } from "../../basic_components";
import PropTypes from "prop-types";

const ListItem = props => {
  return (
    <MelodyBox
      dataTestId={`${props.dataTestId}-list-item`}
      direction="row"
      {...props}
    />
  );
};

ListItem.propTypes = {
  dataTestId: PropTypes.string.isRequired
};

export default ListItem;
