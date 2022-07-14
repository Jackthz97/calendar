import React from "react";
import { Grid } from "@mui/material";

export default function MonthPannelList({ day, month, year, active, onClick, yy, mm, dd }) {

  return (
    <Grid onClick={onClick} className={((day === dd) && (month === mm) && (year === yy)) ? "current-day" : (active ? "days-active" : "days")}>
      {day}
    </Grid>
  );
}
