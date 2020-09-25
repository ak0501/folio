import React from "react";

const DayTime = d => {
  let date = String(new window.Date());
  date = date.slice(3, 15);
  console.log(date);
  return date;
};
 export default DayTime;