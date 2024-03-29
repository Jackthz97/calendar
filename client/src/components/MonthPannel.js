import React, { useState, useMemo, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import Month from "../hooks/Month";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MonthPannelList from "./MonthPannelList";
import MonthChart from "./MonthChart";
import { Button } from "@mui/material";
import Popup from "./Popup";
import styled from "@emotion/styled";
import { spacing } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router";

const ButtonStyled = styled(Button)(spacing);

export default function MonthPannel({ mode, setMode }) {
  let today = new Date();
  let yy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  const [month, setMonth] = useState(mm);
  const [year, setYear] = useState(yy);
  const [date, setDate] = useState(1);
  const [chosen, setChosen] = useState();
  const [popup, setPopup] = useState(false);
  const [note, setNote] = useState();
  const [username, setUsername] = useState({});
  const [weekday, setWeekday] = useState();
  const [reminder, setReminder] = useState({
    data: [],
  });
  let navigate = useNavigate();
  if (!username.name) {
    navigate("/");
  }
  const handleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setChosen(0);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    setChosen(0);
  };
  const handleNotes = () => {
    popup ? setPopup(false) : setPopup(true);
  };
  const handleToday = () => {
    setYear(yy);
    setMonth(mm);
    setDate(dd);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  useEffect(() => {
    axios
      .put("http://localhost:8080/reminder-get", { user_id: username.id })
      .then((res) => {
        res.data.map((e) => {
          setReminder((prev) => ({
            data: [
              ...prev.data,
              {
                weekday: e.weekday,
                date: Number(e.date),
                year: Number(e.year),
                reminderNote: e.remindernote,
                month: Number(e.month),
              },
            ],
          }));
        });
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [popup]);

  let monthArray = useMemo(() => {
    setUsername(JSON.parse(localStorage.getItem("username")));
    return Month(month, year, reminder);
  }, [reminder, month, year]);

  const monthList = monthArray.map((e) => {
    return (
      <React.Fragment key={`${e.weekday}/${e.date}/${e.month}/${e.year}`}>
        <Grid item align={"center"} xs={1.714}>
          <MonthPannelList
            key={`${e.weekday}/${e.date}/${e.month}/${e.year}`}
            day={e.date}
            month={e.month}
            year={e.year}
            active={e.date === chosen}
            yy={yy}
            mm={mm}
            dd={dd}
            onClick={() => {
              setChosen(e.date);
              setDate(e.date);
            }}
          />
        </Grid>
      </React.Fragment>
    );
  });

  const monthChart = monthArray.map((e) => {
    return (
      <React.Fragment key={`${e.weekday}/${e.date}/${e.month}/${e.year}`}>
        <Grid item align={"center"} xs={1.714}>
          <MonthChart
            key={`${e.weekday}/${e.date}/${e.month}/${e.year}`}
            day={e.date}
            weekday={e.weekday}
            month={month}
            year={year}
            yy={yy}
            mm={mm}
            dd={dd}
            onClick={() => {
              setChosen(e.date);
              setDate(e.date);
              handleNotes();
              setWeekday(e.weekday);
            }}
            mode={mode}
            active={e.date === chosen}
            reminder={e.note}
          />
        </Grid>
      </React.Fragment>
    );
  });

  return (
    <Grid container mt={1.5} direction={"row"}>
      {popup && (
        <Popup
          key={`${weekday}/${date}/${month}${year}`}
          mode={mode}
          setNote={setNote}
          setPopup={setPopup}
          date={date}
          weekday={weekday}
          setReminder={setReminder}
          note={note}
          year={year}
          month={month}
          username={username}
        />
      )}
      <Grid container className="month-pannel">
        <Grid item container xs={2} direction={"row"} height={200} mt={5}>
          <Grid
            container
            spacing={1}
            maxWidth={200}
            ml={6}
            className="month-pannel-small"
          >
            <Grid item align={"center"} xs={1.714}>
              S
            </Grid>
            <Grid item align={"center"} xs={1.714}>
              M
            </Grid>
            <Grid item align={"center"} xs={1.714}>
              T
            </Grid>
            <Grid item align={"center"} xs={1.714}>
              W
            </Grid>
            <Grid item align={"center"} xs={1.714}>
              T
            </Grid>
            <Grid item align={"center"} xs={1.714}>
              F
            </Grid>
            <Grid item align={"center"} xs={1.714}>
              S
            </Grid>
            {monthList}
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ minWidth: 120 }}>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <ButtonStyled onClick={handleToday} mt={1} mr={2}>
                  Today
                </ButtonStyled>

                <FormControl>
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    label="Month"
                    onChange={handleMonthChange}
                  >
                    <MenuItem value={1}>Jan</MenuItem>
                    <MenuItem value={2}>Feb</MenuItem>
                    <MenuItem value={3}>Mar</MenuItem>
                    <MenuItem value={4}>Apr</MenuItem>
                    <MenuItem value={5}>May</MenuItem>
                    <MenuItem value={6}>Jun</MenuItem>
                    <MenuItem value={7}>Jul</MenuItem>
                    <MenuItem value={8}>Aug</MenuItem>
                    <MenuItem value={9}>Sep</MenuItem>
                    <MenuItem value={10}>Oct</MenuItem>
                    <MenuItem value={11}>Nov</MenuItem>
                    <MenuItem value={12}>Dec</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel id="simple-select-label">Year</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={year}
                    label="Year"
                    onChange={handleYearChange}
                  >
                    <MenuItem value={2022}>2022</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                    <MenuItem value={2024}>2024</MenuItem>
                    <MenuItem value={2025}>2025</MenuItem>
                    <MenuItem value={2026}>2026</MenuItem>
                    <MenuItem value={2027}>2027</MenuItem>
                    <MenuItem value={2028}>2028</MenuItem>
                    <MenuItem value={2029}>2029</MenuItem>
                    <MenuItem value={2030}>2030</MenuItem>
                    <MenuItem value={2031}>2031</MenuItem>
                    <MenuItem value={2032}>2032</MenuItem>
                    <MenuItem value={2033}>2033</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                container
                xs={8}
                mt={2}
                direction={"row"}
                justifyContent={"space-around"}
              >
                <Grid>
                  {typeof date === "string"
                    ? month - 1 < 1
                      ? 12
                      : month - 1
                    : month < 10
                    ? "0" + month
                    : month}
                  /{date < 10 && 0}
                  {date}/
                  {typeof date === "string" ? month - 1 < 1 && year - 1 : year}
                  {/* {month === mm && year === yy && (
                    <Typography>Today</Typography>
                  )} */}
                </Grid>
                <Grid>
                <Typography>Welcome {username.name} </Typography>
                </Grid>
                <Grid>
                  <Button onClick={handleMode}>{mode}</Button>
                </Grid>

                  <Button onClick={handleLogout}>Logout</Button>
              </Grid>
            </Grid>
          </Box>
          <Grid container direction={"row"} spacing={0}>
            {monthChart}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
