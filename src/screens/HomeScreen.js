import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../actions/action_types";
import {
  AppHeader,
  AppFooter,
  PageLayout,
  DoctorList
} from "../app_components";

import LoginLayer from "./LoginLayer";

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

  const bookAppointment = doctorId => {
    props.history.push(`/BookAppointment/${doctorId}`);
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
        content={
          <DoctorList
            doctorList={doctorList}
            bookAppointment={bookAppointment}
          />
        }
        footer={<AppFooter />}
      />
      {showLogin && <LoginLayer onClose={onClose} onSubmit={onSubmit} />}
    </React.Fragment>
  );
};

export default HomeScreen;
