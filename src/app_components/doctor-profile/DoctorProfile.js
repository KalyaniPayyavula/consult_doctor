import React from "react";
import { MelodyText, MelodyBox } from "../../basic_components";
import { List, ListItem } from "../../app_components";
import { Checkmark } from "grommet-icons";

const DoctorProfile = ({ doctorData }) => {
  return (
    <List gap="medium">
      {doctorData.profile.map((profileItem, index) => (
        <ListItem
          dataTestId={doctorData.id + "-" + index}
          key={doctorData.id + "-" + index}
        >
          <MelodyBox>
            <Checkmark />
          </MelodyBox>
          <MelodyText> {profileItem} </MelodyText>
        </ListItem>
      ))}
    </List>
  );
};

export default DoctorProfile;
