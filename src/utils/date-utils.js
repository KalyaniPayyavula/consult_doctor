const monthArray = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const dateWithMonth = date => {
  return `${date.getDate()} ${monthArray[date.getMonth()]}`;
};

export { dateWithMonth };
