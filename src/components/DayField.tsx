import React from "react"
import Exercise from "./Excercise"
import styles from "../../styles/DayField.module.css"

export interface excercise {
  id: number
  name: string
  sets: number
  reps: number
  intensity?: number
  rpe?: number
  notes?: string
}

export interface props {
  day: string
  excercises?: [excercise]
}

const DayField = ({day, excercises}: props) => {
  return (
    <div className="container">
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
    </div>
  )
}

export default DayField