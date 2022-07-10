import React, {useState} from 'react'
import { Grid } from '@mui/material'

export default function MonthPannelList({day, setDate, active, onClick}) {
  // const [hover, setHover] = useState(false);
  // const handleClick = () => {
  //   setDate(day);
  //   hover ? setHover(false) : setHover(true);
  // }

  return (
    <Grid className={active ? 'hover' : false}>
      <a onClick={onClick}>
        {day}
      </a>
    </Grid>
  )
}
