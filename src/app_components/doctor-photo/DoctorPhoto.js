import React from "react";
import {
  MelodyBox,
  MelodyImage,
  MelodyButton,
  MelodyText
} from "../../basic_components";
import PropTypes from "prop-types";
import { Location } from "grommet-icons";

const DoctorPhoto = ({ bookAppointment, doctorData, isButtonRequired }) => {
  const photoImage = require(`../../resources/${doctorData.photo}`);
  return (
    <MelodyBox flex="true" direction="column" gap="small">
      <MelodyBox align="center" justify="center" flex={{ grow: "3" }}>
        <MelodyImage src={photoImage} fit="contain" alignSelf="center" />
      </MelodyBox>
      <MelodyBox align="center" justify="center">
        <MelodyText weight="bold">Dr.{doctorData.name}</MelodyText>
      </MelodyBox>
      <MelodyBox align="center" justify="center" direction="row">
        <Location />
        <MelodyText>{doctorData.location}</MelodyText>
      </MelodyBox>
      {isButtonRequired && (
        <MelodyBox align="center">
          <MelodyButton
            label="Book Appointment"
            onClick={() => bookAppointment(doctorData.id)}
          />
        </MelodyBox>
      )}
    </MelodyBox>
  );
};

DoctorPhoto.propTypes = {
  bookAppointment: PropTypes.func,
  doctorData: PropTypes.object.isRequired,
  isButtonRequired: PropTypes.bool
};

DoctorPhoto.defaultProps = {
  isButtonRequired: false
};

export default DoctorPhoto;
