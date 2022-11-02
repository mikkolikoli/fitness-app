import React from "react";
import styled from 'styled-components'

export interface props {
  id?: number
  name?: string
  sets?: number
  reps?: number
  intensity?: number
  rpe?: number
  notes?: string
}

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5px;
  `

const TextField = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid #e0e0e0;
  `

const Exercise = ({id=0, name, sets, reps, intensity, rpe, notes}: props) => {
  return (
    <Stack>
        <TextField />
    </Stack>
  )
}

export default Exercise