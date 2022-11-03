import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'

type Data = {
  userId: string,
  excercises: [Excercise]
}

type Excercise = {
  id: number,
  day: string,
  week: number,
  name: string,
  sets: number,
  reps: number,
  weight: number,
  rpe: number,
  notes: string
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

const getExcercises = (userId:string, week: number) => {
  const excerciseList = ExcerciseList.find({ userId: userId, excercises: { $elemMatch: { week: week } } })

  if (excerciseList)
  {
    return {...excerciseList}
  }
  else
  {
    return undefined
  }
}

const validateExcercise = (excerciseList: mongoose.Model<Excercise>) => {}

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
    excerciseList.save()

    return {...excerciseList}
  }
  else 
  {
    return undefined
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

    if (excercises)
    {
      res.status(200).json(excercises)
    }
  }
  else if (req.method === 'POST') {
    const excercise = req.body
    const addedExcercises = addExcercise(userId, excercise)
    
    res.status(201).json(addedExcercises)
  }
}
