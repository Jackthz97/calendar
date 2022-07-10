import React, {useState} from 'react'
import { Grid } from '@mui/material'

export default function MonthPannelList({day, hoverAll, setHoverAll, setDate}) {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    setDate(day);
    hover ? setHover(false) : setHover(true);
  }

  return (
    <Grid className={hover ? 'hover' : false}>
      <a onClick={handleClick}>
        {day}
      </a>
    </Grid>
  )
}
