import React, { useState } from "react";
import {
  MelodyHeading,
  MelodyBox,
  MelodyDataTable,
  MelodyText,
  MelodyButton
} from "../basic_components";
import { dateWithMonth } from "../utils/date-utils";
import { ConfirmationDialog } from "../app_components";

const timeNow = new Date().getTime();
let dayInMS = 24 * 60 * 60 * 1000;
const dateAddition = days => dateWithMonth(new Date(timeNow + days * dayInMS));
let futureDates = [dateAddition(1), dateAddition(2), dateAddition(3)];
let pastDates = [dateAddition(-3), dateAddition(-2), dateAddition(-1)];

const futureAppointmentHeadings = [
  "Docotor Name",
  "Time Slot",
  "Cancel Appointment"
];
const pastAppointmentHeadings = ["Docotor Name", "Time Slot", "Status"];
const futureData = [
  {
    doctorName: "Krishna Prasad",
    timeSlot: `${futureDates[0]} 1:30 to 1:45PM`,
    cancel: { label: "Cancel", handler: () => {} }
  },
  {
    doctorName: "Aruna",
    timeSlot: `${futureDates[1]} 2:00 to 2:15PM`,
    cancel: { label: "Cancel", handler: () => {} }
  },
  {
    doctorName: "Krishna Prasad",
    timeSlot: `${futureDates[2]} 2:30 to 2:45PM`,
    cancel: { label: "Cancel", handler: () => {} }
  },
  {
    doctorName: "Aruna",
    timeSlot: `${futureDates[2]} 2:45 to 3:00PM`,
    cancel: { label: "Cancel", handler: () => {} }
  }
];
const pastData = [
  {
    doctorName: "Krishna Prasad",
    timeSlot: `${pastDates[0]} 2:30 to 2:45PM`,
    cancel: { label: "Attended", isPast: true }
  },
  {
    doctorName: "Aruna",
    timeSlot: `${pastDates[1]} 2:45 to 3:00PM`,
    cancel: { label: "Attended", isPast: true }
  },
  {
    doctorName: "Krishna Prasad",
    timeSlot: `${pastDates[2]} 1:30 to 1:45PM`,
    cancel: { label: "Attended", isPast: true }
  },
  {
    doctorName: "Aruna",
    timeSlot: `${pastDates[2]} 1:45 to 2:00PM`,
    cancel: { label: "Cancelled", isPast: true }
  },
  {
    doctorName: "Aruna",
    timeSlot: `${pastDates[1]} 2:45 to 3:00PM`,
    cancel: { label: "Attended", isPast: true }
  },
  {
    doctorName: "Krishna Prasad",
    timeSlot: `${pastDates[2]} 1:30 to 1:45PM`,
    cancel: { label: "Attended", isPast: true }
  }
];

const AppointmentTable = ({ headings, data, showCancelConfirmation }) => {
  return (
    <MelodyDataTable
      columns={[
        {
          property: "doctorName",
          header: <MelodyText>{headings[0]}</MelodyText>,
          render: data => <MelodyText>{data.doctorName}</MelodyText>
        },
        {
          property: "timeSlot",
          header: <MelodyText>{headings[1]}</MelodyText>,
          render: data => <MelodyText>{data.timeSlot}</MelodyText>
        },
        {
          property: "cancel",
          header: <MelodyText>{headings[2]}</MelodyText>,
          render: data => {
            if (data.cancel.isPast) {
              return <MelodyText>{data.cancel.label}</MelodyText>;
            } else {
              return (
                <MelodyButton
                  label={data.cancel.label}
                  onClick={showCancelConfirmation}
                />
              );
            }
          }
        }
      ]}
      data={data}
    />
  );
};

function HistoryScreen() {
  let [askConfirmation, setConfirmation] = useState(false);

  const closeConfiramtion = () => {
    setConfirmation(false);
  };

  const showCancelConfirmation = () => {
    setConfirmation(true);
  };

  return (
    <MelodyBox>
      <MelodyHeading size="small">Future Appointments:</MelodyHeading>
      <MelodyBox border={{ color: "gray" }} elevation="small" round="medium">
        <AppointmentTable
          headings={futureAppointmentHeadings}
          data={futureData}
          showCancelConfirmation={showCancelConfirmation}
        />
      </MelodyBox>
      <MelodyHeading size="small">Past Appointments:</MelodyHeading>
      <MelodyBox border={{ color: "gray" }} elevation="small" round="medium">
        <AppointmentTable headings={pastAppointmentHeadings} data={pastData} />
      </MelodyBox>
      {askConfirmation && (
        <ConfirmationDialog
          heading="Confirm"
          text="Are you sure you want to cancel the appointment?"
          primaryButton="Proceed"
          secondaryButton="Cancel"
          onClose={closeConfiramtion}
          primaryButtonAction={closeConfiramtion}
        />
      )}
    </MelodyBox>
  );
}

export default HistoryScreen;
