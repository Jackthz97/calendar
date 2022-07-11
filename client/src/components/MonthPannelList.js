import React, { useState } from 'react'
import { Grid } from '@mui/material'

export default function MonthPannelList({day, setDate, active, onClick}) {

  return (
    <Grid onClick={onClick} className={active ? 'days-active' : 'days'}>
      {day}
    </Grid>
  )
}
