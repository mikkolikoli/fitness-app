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

const TextField = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  border: 1px solid #e0e0e0;
  `

const Exercise = ({id=0, name, sets, reps, intensity, rpe, notes}: props) => {
  if (id === 0) {
    return (
      <div>
        <TextField type="text" placeholder="Excercise" />
      </div>
    )
  }
  return (
    <div>
      <p>{name} <br />
      {sets}x{reps} @ {rpe? rpe: intensity} <br />
      {notes} </p>
    </div>
  )
}

export default Exercise