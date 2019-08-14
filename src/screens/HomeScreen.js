import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../actions/action_types";
import {
  AppHeader,
  AppFooter,
  PageLayout,
  TwoColumnLayout,
  DoctorPhoto,
  DoctorProfile
} from "../app_components";

import LoginLayer from "./LoginLayer";

const HomeScreenContent = withRouter(props => {
  const { history, doctorList } = props;
  const bookAppointment = doctorId => {
    history.push(`/BookAppointment/${doctorId}`);
  };

  return (
    <React.Fragment>
      {doctorList.map(doctorData => (
        <TwoColumnLayout
          dataTestId="doctor-homescreen"
          key={doctorData.id}
          leftColumn={
            <DoctorPhoto
              doctorData={doctorData}
              bookAppointment={bookAppointment}
              isButtonRequired={true}
            />
          }
          rightColumn={<DoctorProfile doctorData={doctorData} />}
        />
      ))}
    </React.Fragment>
  );
});

const HomeScreen = props => {
  const doctorList = useSelector(state => state["doctorReducer"].doctorList);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    fetch("/api/app")
      .then(resp => resp.json())
      .then(resp => {
        dispatch({ type: types.SET_DOCTOR_DETAILS, doctorList: resp.data });
      });
  }, [dispatch]);

  const loginHandler = () => {
    setShowLogin(true);
  };

  const onClose = () => {
    setShowLogin(false);
  };

  const onSubmit = () => {
    props.history.push("/PatientHomeScreen");
  };

  return (
    <React.Fragment>
      <PageLayout
        header={
          <AppHeader
            actionTitle="Login"
            isActionRequired={true}
            actionHandler={loginHandler}
            title="Consult Doctor Online"
          />
        }
        content={<HomeScreenContent doctorList={doctorList} />}
        footer={<AppFooter />}
      />
      {showLogin && <LoginLayer onClose={onClose} onSubmit={onSubmit} />}
    </React.Fragment>
  );
};

export default HomeScreen;
