import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";

export default function Popup({
  mode,
  setNote,
  setPopup,
  date,
  weekday,
  setReminder,
  note,
  year,
  month,
}) {

  const handleClose = () => {
    setPopup(false);
  }
  const handlePopup = () => {
    setPopup(false);
    setReminder((prev) => ({
      data: [
        ...prev.data,
        {
          weekday: weekday,
          date: date,
          year: year,
          reminder: note,
          month: month,
        },
      ],
    }));
  };
  return (
    <Grid className={mode === "dark" ? "popup-dark" : "popup"}>
      <Grid className="text-box">
        <EventNoteIcon className="EventNoteIcon" />
      </Grid>
      <Grid align={'end'}>
      <Button onClick={handleClose}>X</Button>
      </Grid>
      <Grid className="text-box">
        <h1>Reminders</h1>
      </Grid>
      <Grid className="text-box" mt={2}>
        <TextField
          id="standard-basic"
          label="Reminder"
          variant="standard"
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </Grid>
      <Grid className="text-box" mt={6}>
        <Button variant="contained" onClick={handlePopup}>
          Add
        </Button>
      </Grid>
    </Grid>
  );
}
