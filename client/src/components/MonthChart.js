import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function MonthChart({ day, weekday, active, onClick, reminder}) {
  // const reminderNote = reminder.map((e) => {
  //   if ((e.id === id)) {
  //     return (<Typography>{e.reminder}</Typography>)
  //   }
  // })
  // console.log(reminder)
  return (
    <Grid className={active ? 'day-active' : 'day'} onClick={onClick} height={200}>
      <Grid>{weekday}</Grid>
      {typeof day === "number" && day}
      {/* {((day === popupDate) && (weekday === popupWeekday)) && <Typography>{note}</Typography>} */}
      <Typography>

      {reminder}
      </Typography>
    </Grid>
  );
}