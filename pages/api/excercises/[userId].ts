import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'

type Data = {
  userId: String,
  excercises: [Excercise]
}

type Excercise = {
  id: Number,
  day: String,
  week: Number,
  name: String,
  sets: Number,
  reps: Number,
  weight: Number,
  rpe: Number,
  notes: String
}

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
}

const excerciseListSchema = new mongoose.Schema({
  userId: String,
  excercises: [{
    id: Number,
    day: String,
    week: Number,
    name: String,
    sets: Number,
    reps: Number,
    weight: Number,
    rpe: Number,
    notes: String
  }]
})
const ExcerciseList = mongoose.model('ExcerciseList', excerciseListSchema)

const getExcercises = (userId:string, week: Number) => {

}

async function addExcercise(userId: string, excercise: Excercise) {
  const excerciseList = await ExcerciseList.findOne({ userId: userId })

  if (excerciseList)
  {
    excerciseList.excercises.push({
      id: excercise.id,
      day: excercise.day,
      week: excercise.week,
      name: excercise.name,
      sets: excercise.sets,
      reps: excercise.reps,
      weight: excercise.weight,
      rpe: excercise.rpe,
      notes: excercise.notes
    })
    ExcerciseList.save()
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Get the user id from the query as a string
  const userId = req.query.userId as string

  // if the request is a GET request
  if (req.method === 'GET') {
    const { week } = req.body
    const excercises = getExcercises(userId, week)

    res.status(200).json(excercises)
  }
  else if (req.method === 'POST') {
    const excercise = req.body
    addExcercise(userId, excercise)
    
    res.status(201).json(excercise)
  }
}