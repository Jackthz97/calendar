import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { yellow } from "@mui/material/colors";


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
      className={
        day === dd && month === mm && year === yy
          ? "current-day"
          : active
          ? "day-active"
          : "day"
      }
      onClick={onClick}
      height={200}
    >
      <Grid>{weekday}</Grid>
      {typeof day === "number" && day}
      {reminder && (
        <>
          <Typography mt={1}>
            <NotificationsIcon style={{ color: yellow[500] }}/>
          </Typography>
          <Typography color={"red"} mt={2}>
            {reminder}
          </Typography>
        </>
      )}
    </Grid>
  );
}
