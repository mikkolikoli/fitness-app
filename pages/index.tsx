import { Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DayField from '../src/components/DayField'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <h1>Fitness app</h1>

      <Stack direction="row" spacing="5">
        <DayField day="monday" />
        <DayField day="tuesday" />
        <DayField day="wednesday" />
        <DayField day="thursday" />
        <DayField day="friday" />
        <DayField day="saturday" />
        <DayField day="sunday" />
      </Stack>
    </div>
  )
}

export default Home
