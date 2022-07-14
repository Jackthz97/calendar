import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function Popup({ mode, setNote, setPopup, date, weekday, setReminder, note, year, month }) {
  const handlePopup = () => {
    setPopup(false)
    setReminder(prev => ({data: [...prev.data, {weekday: weekday, date: date, year: year, reminder: note, month: month}]}))
    // ({...prev, weekday: prev.weekday.concat(weekday), date: prev.date.concat(date), year: prev.year.concat(year), reminder: prev.reminder.concat(note), month: prev.month.concat(month)})
    // console.log("yoooooo8ooooooooooo",reminder)
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
