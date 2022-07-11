import React from "react";
import { Grid } from "@mui/material";

export default function MonthChart({ day, weekday, active }) {
  return (
    <Grid className={active ? 'day-active' : 'day'}>
      <Grid>{weekday}</Grid>
      {typeof day === "number" && day}
    </Grid>
  );
}
