import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function Popup({ mode, setNote, popup, setPopup, date, popupDate, setPopupDate, weekday, setPopupWeekday }) {
  const handlePopup = () => {
    setPopup(false)
    setPopupDate(date);
    setPopupWeekday(weekday);
  }
  return (
    <Grid className={mode === "dark" ? "popup-dark" : "popup"}>
      <Grid className="text-box">
      <EventNoteIcon className ="EventNoteIcon"/>
      </Grid>
      <Grid className="text-box">
        <h1>Reminders</h1>
      </Grid>
      <Grid className="text-box" mt={4}>
        <TextField id="standard-basic" label="Reminder" variant="standard" onChange={(e) => {
          setNote(e.target.value)
        }}/>
      </Grid>
      <Grid className="text-box" mt={10}>
        <Button variant="contained" onClick={handlePopup}>Add</Button>
      </Grid>
    </Grid>
  );
}
