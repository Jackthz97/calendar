import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function Popup({ mode }) {
  return (
    <Grid className={mode === "dark" ? "popup-dark" : "popup"}>
      <Grid className="text-box">
      <EventNoteIcon className ="EventNoteIcon"/>
      </Grid>
      <Grid className="text-box">
        <h1>Reminders</h1>
      </Grid>
      <Grid className="text-box" mt={4}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Grid>
      <Grid className="text-box" mt={11}>
        <Button variant="contained">Contained</Button>
      </Grid>
    </Grid>
  );
}
