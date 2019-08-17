import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MelodyText, MelodyBox, MelodyButton } from "../basic_components";
import {
  MenuLayout,
  AppFooter,
  DoctorList,
  AvailableSlots
} from "../app_components";
import ProfileScreen from "./ProfileScreen";
import HistoryScreen from "./HistoryScreen";

import { AppHeader } from "../app_components";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";

//sidebar
const Sidebar = withRouter(props => {
  const [menuSelected, setMenuSelected] = useState(0);

  useEffect(() => {
    props.history.push(`/PatientHomeScreen/BookAppointment`);
  }, [props.history]);

  const menuItemHandler = name => {
    let route = "/";
    switch (name) {
      case "Book Appointment":
        route = "BookAppointment";
        setMenuSelected(0);
        break;
      case "Check History":
        route = "CheckHistory";
        setMenuSelected(1);
        break;
      case "Edit Profile":
        route = "EditProfile";
        setMenuSelected(2);
        break;
      default:
        route = "/";
    }
    props.history.push(`/PatientHomeScreen/${route}`);
  };

  return (
    <React.Fragment>
      {["Book Appointment", "Check History", "Edit Profile"].map(
        (name, index) => (
          <MelodyButton
            key={name}
            hoverIndicator
            onClick={() => menuItemHandler(name)}
          >
            <MelodyBox
              elevation="medium"
              pad={{ horizontal: "medium", vertical: "small" }}
              background={index === menuSelected ? "#d1215c" : undefined}
            >
              <MelodyText>{name}</MelodyText>
            </MelodyBox>
          </MelodyButton>
        )
      )}
    </React.Fragment>
  );
});

//content
const Content = withRouter(props => {
  const bookAppointment = doctorId => {
    props.history.push(`/PatientHomeScreen/AvailableSlots/${doctorId}`);
  };
  return (
    <React.Fragment>
      <Route
        path={`/PatientHomeScreen/BookAppointment`}
        component={() => (
          <DoctorList
            doctorList={props.doctorList}
            bookAppointment={bookAppointment}
          />
        )}
      />
      <Route
        path={`/PatientHomeScreen/AvailableSlots/:doctorId`}
        component={() => <AvailableSlots />}
      />
      <Route
        path={`/PatientHomeScreen/CheckHistory`}
        component={HistoryScreen}
      />
      <Route
        path={`/PatientHomeScreen/EditProfile`}
        component={ProfileScreen}
      />
    </React.Fragment>
  );
});

function PatientHomeScreen(props) {
  const doctorList = useSelector(state => state["doctorReducer"].doctorList);
  const logoutHandler = () => {
    props.history.push("/");
  };
  return (
    <MenuLayout
      header={
        <AppHeader
          title="Welcome John!!"
          actionTitle="Logout"
          isActionRequired="true"
          actionHandler={logoutHandler}
        />
      }
      sidebar={<Sidebar />}
      content={<Content doctorList={doctorList} />}
      footer={<AppFooter />}
    />
  );
}

export default PatientHomeScreen;
