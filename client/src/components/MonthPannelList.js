import React from 'react'
import { Grid } from '@mui/material'

export default function MonthPannelList({day, active, onClick}) {

  return (
    <Grid onClick={onClick} className={active ? 'days-active' : 'days'}>
      {day}
    </Grid>
  )
}
