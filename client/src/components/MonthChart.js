import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function MonthChart({
  day,
  month,
  year,
  dd,
  mm,
  yy,
  weekday,
  active,
  onClick,
  reminder,
}) {
  return (
    <Grid
      className={((day === dd) && (month === mm) && (year === yy)) ? "current-day" : (active ? "day-active" : "day")}
      onClick={onClick}
      height={200}
    >
      <Grid>{weekday}</Grid>
      {typeof day === "number" && day}
      <Typography>{reminder}</Typography>
    </Grid>
  );
}
