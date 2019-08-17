import React, { useState } from "react";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import {
  MelodyBox,
  MelodyButton,
  MelodyHeading,
  MelodyDataTable,
  MelodyText
} from "../../basic_components";
import { dateWithMonth } from "../../utils/date-utils";
import { Next, Previous } from "grommet-icons";
import { AppNotification } from "../../app_components";
import { ConfirmationDialog } from "../../app_components";
import * as types from "../../actions/action_types";

const slot1 = [
  { slot: "1:00 to 1:15PM", booked: false },
  { slot: "1:15 to 1:30PM", booked: false },
  { slot: "1:30 to 1:45PM", booked: true },
  { slot: "1:45 to 2:00PM", booked: false }
];

const slot2 = [
  { slot: "2:00 to 2:15PM", booked: true },
  { slot: "2:15 to 2:30PM", booked: false },
  { slot: "2:30 to 2:45PM", booked: true },
  { slot: "2:45 to 3:00PM", booked: false }
];

const slot3 = [
  { slot: "3:00 to 3:15PM", booked: false },
  { slot: "3:15 to 3:30PM", booked: true },
  { slot: "3:30 to 3:45PM", booked: true },
  { slot: "3:45 to 4:00PM", booked: false }
];

const timeNow = new Date().getTime();
let dayInMS = 24 * 60 * 60 * 1000;
const dateAddition = days => dateWithMonth(new Date(timeNow + days * dayInMS));
let datesArray = [dateAddition(1), dateAddition(2), dateAddition(3)];

const SlotColumn = ({ slots, bookSlot, date }) => {
  return (
    <MelodyBox gap="xsmall">
      {slots.map(timeSlot => (
        <MelodyBox
          elevation="small"
          background={timeSlot.booked ? "#d1215c" : undefined}
          round="xsmall"
          as="button"
          onClick={() => bookSlot(timeSlot, date)}
        >
          <MelodyText>{timeSlot.slot}</MelodyText>
        </MelodyBox>
      ))}
    </MelodyBox>
  );
};

const AppointmentGrid = props => {
  let [dateAt, setDateAt] = useState(3);
  let [showMsg, setShowMsg] = useState(false);
  let [notifMsg, setNotifMsg] = useState("");
  let [getConfirmation, setConfirmation] = useState(false);
  let [confirmationMsg, setConfirmationMsg] = useState("");

  const dispatch = useDispatch();

  const handleNextDate = () => {
    datesArray = datesArray.map((elem, index) => {
      return dateAddition(index + dateAt + 1);
    });
    setDateAt(dateAt + 3);
  };

  const handlePrevDate = () => {
    datesArray = datesArray
      .map((elem, index) => {
        return dateAddition(dateAt - index);
      })
      .reverse();
    setDateAt(dateAt - 3);
  };

  const onClose = () => {
    setShowMsg(false);
  };

  const closeConfiramtion = () => {
    setConfirmation(false);
  };

  const proceedToBooking = () => {
    props.history.push("/AppointmentDetails");
  };

  const bookSlot = (timeSlot, date) => {
    if (timeSlot.booked) {
      //Inform user that slot is already booked
      setNotifMsg("Slot is already booked!");
      setShowMsg(true);
    } else {
      dispatch({
        type: types.SET_APPOINTMENT_DETAILS,
        appointmentDetails: { selDate: date, selTime: timeSlot.slot }
      });
      setConfirmationMsg(
        `Are you sure you want to book ${timeSlot.slot} slot on ${date}?`
      );
      setConfirmation(true);
    }
  };

  return (
    <MelodyBox>
      <MelodyBox align="center" justify="center">
        <MelodyHeading size="small">Available Slots</MelodyHeading>
      </MelodyBox>
      <MelodyBox direction="row" justify="between" align="center">
        <MelodyButton
          label="Prev 3 days"
          onClick={handlePrevDate}
          icon={<Previous />}
        />
        <MelodyButton
          label="Next 3 days"
          onClick={handleNextDate}
          icon={<Next />}
          reverse="true"
        />
      </MelodyBox>
      <MelodyDataTable
        columns={[
          {
            property: "date",
            render: data => (
              <MelodyBox
                align="center"
                elevation="medium"
                round="medium"
                justify="center"
                background="#d1215c"
                fill="true"
              >
                <MelodyHeading>{data.date}</MelodyHeading>
              </MelodyBox>
            )
          },
          {
            property: "slot1",
            render: data => (
              <SlotColumn
                slots={data.slot1}
                bookSlot={bookSlot}
                date={data.date}
              />
            )
          },
          {
            property: "slot2",
            render: data => (
              <SlotColumn
                slots={data.slot2}
                bookSlot={bookSlot}
                date={data.date}
              />
            )
          },
          {
            property: "slot3",
            render: data => (
              <SlotColumn
                slots={data.slot3}
                bookSlot={bookSlot}
                date={data.date}
              />
            )
          }
        ]}
        data={[
          {
            date: datesArray[0],
            slot1: slot1,
            slot2: slot2,
            slot3: slot3
          },
          {
            date: datesArray[1],
            slot1: slot1,
            slot2: slot2,
            slot3: slot3
          },
          {
            date: datesArray[2],
            slot1: slot1,
            slot2: slot2,
            slot3: slot3
          }
        ]}
      />
      {showMsg && <AppNotification text={notifMsg} onClose={onClose} />}
      {getConfirmation && (
        <ConfirmationDialog
          heading="Confirm"
          text={confirmationMsg}
          primaryButton="Proceed"
          secondaryButton="Cancel"
          onClose={closeConfiramtion}
          primaryButtonAction={proceedToBooking}
        />
      )}
    </MelodyBox>
  );
};

export default withRouter(AppointmentGrid);
