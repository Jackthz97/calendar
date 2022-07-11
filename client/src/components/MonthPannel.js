import React, { useState } from "react";
import { Grid } from "@mui/material";
import Month from "../hooks/Month";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MonthPannelList from "./MonthPannelList";

export default function MonthPannel() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2022);
  const [date, setDate] = useState(1);
  const [chosen, setChosen] = useState();

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setChosen(0);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
    setChosen(0);
  };
  let monthArray = Month(month, year);

  const monthList = monthArray.map((e) => {
    return (
      <Grid item align={"center"} xs={1.714}>
        <MonthPannelList
          
          day={e}
          setDate={setDate}
          active={e === chosen}
          onClick={() => {
            setChosen(e);
            setDate(e);
          }}
        />
      </Grid>
    );
  });

  return (
    <Grid container>
      <Grid
        item
        container
        xs={2}
        direction={"row"}
        // alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container spacing={1} mt={5} maxWidth={200}>
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
          <Grid container spacing={20}>
            <Grid item xs={2}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={month}
                  label="Month"
                  onChange={handleMonthChange}
                >
                  <MenuItem value={1} >Jan</MenuItem>
                  <MenuItem value={2} >Feb</MenuItem>
                  <MenuItem value={3} >Mar</MenuItem>
                  <MenuItem value={4} >Apr</MenuItem>
                  <MenuItem value={5} >May</MenuItem>
                  <MenuItem value={6} >Jun</MenuItem>
                  <MenuItem value={7} >Jul</MenuItem>
                  <MenuItem value={8} >Aug</MenuItem>
                  <MenuItem value={9} >Sep</MenuItem>
                  <MenuItem value={10} >Oct</MenuItem>
                  <MenuItem value={11} >Nov</MenuItem>
                  <MenuItem value={12} >Dec</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  label="Year"
                  onChange={handleYearChange}
                >
                  <MenuItem value={2022} >2022</MenuItem>
                  <MenuItem value={2023} >2023</MenuItem>
                  <MenuItem value={2024} >2024</MenuItem>
                  <MenuItem value={2025} >2025</MenuItem>
                  <MenuItem value={2026} >2026</MenuItem>
                  <MenuItem value={2027} >2027</MenuItem>
                  <MenuItem value={2028} >2028</MenuItem>
                  <MenuItem value={2029} >2029</MenuItem>
                  <MenuItem value={2030} >2030</MenuItem>
                  <MenuItem value={2031} >2031</MenuItem>
                  <MenuItem value={2032} >2032</MenuItem>
                  <MenuItem value={2033} >2033</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8} mt={2}>
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
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
