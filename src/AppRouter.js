import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import PatientHomeScreen from "./screens/PatientHomeScreen";
import DoctorHomeScreen from "./screens/DoctorHomeScreen";
import BookAppointment from "./screens/BookAppointmentScreen";
import AppointmentDetails from "./screens/AppointmentDetails";
import { Grommet } from "grommet";
import AppTheme from "./css/app_theme";

function AppRouter() {
  return (
    <Grommet theme={AppTheme}>
      <Router>
        <div>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/PatientHomeScreen" component={PatientHomeScreen} />
          <Route path="/DoctorHomeScreen" component={DoctorHomeScreen} />
          <Route
            path="/AppointmentDetails"
            render={props => <AppointmentDetails {...props} />}
          />
          <Route
            path="/BookAppointment/:doctorId"
            component={BookAppointment}
          />
        </div>
      </Router>
    </Grommet>
  );
}

export default AppRouter;
