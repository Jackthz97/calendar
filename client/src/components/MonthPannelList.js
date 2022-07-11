import React, {useState} from 'react'
import { Grid } from '@mui/material'

export default function MonthPannelList({day, setDate, active, onClick}) {
  // const [hover, setHover] = useState(false);
  // const handleClick = () => {
  //   setDate(day);
  //   hover ? setHover(false) : setHover(true);
  // }

  return (
    <Grid onClick={onClick} className={active ? 'day-active' : 'days'}>
      {day}
    </Grid>
  )
}
