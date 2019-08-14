import React from "react";
import { MelodyText, MelodyBox, MelodyButton } from "../basic_components";

import { List, ListItem } from "../app_components";

let userProfile = [
  { key: "User Name", value: "Pathi" },
  { key: "Password", value: "****" },
  { key: "Mobile Number", value: "+91 89519 06517" },
  { key: "Email", value: "abc@gmail.com" },
  { key: "Address", value: "" },
  { key: "Line1", value: "Electronic City" },
  { key: "City", value: "Bangalore" },
  { key: "State", value: "Karnataka" },
  { key: "ZipCode", value: "560 001" }
];

function ProfileScreen(props) {
  return (
    <MelodyBox margin="medium">
      <List gap="medium">
        {userProfile.map((profileItem, index) => (
          <ListItem dataTestId={index} key={index}>
            <MelodyBox
              direction="row"
              justify="between"
              align="center"
              margin="small"
              gap="xlarge"
            >
              <MelodyText>{profileItem.key}</MelodyText>
              <MelodyText> {profileItem.value} </MelodyText>
            </MelodyBox>
          </ListItem>
        ))}
      </List>
      <MelodyBox align="center" justify="center">
        <MelodyButton label="Edit" />
      </MelodyBox>
    </MelodyBox>
  );
}

export default ProfileScreen;
