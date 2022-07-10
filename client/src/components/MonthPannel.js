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

  const handleChange = (e) => {
    setMonth(e.target.value);
  };
  let monthArray = Month(month, year);

  const monthList = monthArray.map((e) => {
    return (
      <Grid item align={'center'} xs={1.714}>
        <MonthPannelList day={e} />
      </Grid>
    );
  });

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="Month"
            onChange={handleChange}
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
      </Box>
      <Grid container spacing={7} >
      <Grid item align={'center'} xs={1.714}>
        
      </Grid>
          {monthList}
      </Grid>
    </>
  );
}
