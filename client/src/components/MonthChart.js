import React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { yellow } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";

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
  mode,
}) {
  const handleClick = () => {};
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
      {/* {reminder && (
        <Grid container justifyContent={"end"}>
          <EditIcon />
        </Grid>
      )} */}
      {reminder && (
        <Grid container justifyContent={"end"}>
          <NotificationsIcon
            className="NotificationsIcon"
            style={{ color: mode === "dark" ? yellow[500] : yellow[900] }}
          />
        </Grid>
      )}
      <Grid
        container
        position={"relative"}
        justifyContent="center"
        top={reminder && -24}
      >
        <Grid>{weekday}</Grid>
        <Grid container direction={"column"}>
          {typeof day === "number" && day}
          {reminder && (
            <div className="reminder-container">
              <Typography className="remindercss" color={"white"}>
                {reminder}
              </Typography>
              <EditIcon className="EditIcon" />
            </div>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
