import React from "react"
import Exercise from "./Excercise"
import styled from 'styled-components'
import styles from "../../styles/DayField.module.css"

interface excercise {
  id: number
  name: string
  sets: number
  reps: number
  intensity?: number
  rpe?: number
  notes?: string
}

interface props {
  day: string
  excercises?: [excercise]
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #e0e0e0;
    `

const DayField = ({day, excercises}: props) => {

  return (
    <Container>
      <h2>{day}</h2>

      {excercises? excercises.map(excercise => <Exercise key={excercise.id}
                                                        id={excercise.id} 
                                                        name={excercise.name}
                                                        sets={excercise.sets}
                                                        reps={excercise.reps}
                                                        intensity={excercise.intensity}
                                                        rpe={excercise.rpe}
                                                        notes={excercise.notes} />) :
      <Exercise />}
    </Container>
  )
}

export default DayField