import type { NextApiRequest, NextApiResponse } from 'next'

type Data = [{
  id: number,
  name: string,
  sets: number,
  reps: number,
  weight: number,
  rpe?: number,
  notes?: string
}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
}