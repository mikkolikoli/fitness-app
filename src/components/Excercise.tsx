import { Stack, TextField } from "@mui/material";
import React from "react";

export interface props {
  id?: number
  name?: string
  sets?: number
  reps?: number
  intensity?: number
  rpe?: number
  notes?: string
}

const Exercise = ({id=0, name, sets, reps, intensity, rpe, notes}: props) => {
  return (
    <Stack>
      <Stack direction="row" spacing="1">
        <TextField label="Excercise" variant="outlined"/>
        <TextField label="Sets" variant="outlined"/>
        <TextField label="Reps" variant="outlined"/>
        <TextField label="Intensity" variant="outlined" />
      </Stack>
    </Stack>
  )
}

export default Exercise