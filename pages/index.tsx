import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DayField from '../src/components/DayField'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f5f5f5;
  `

const Home: NextPage = () => {
  return (
    <div className='container'>
      <h1>Fitness app</h1>
      
      <DayField day="monday" />
      <DayField day="tuesday" />
      <DayField day="wednesday" />
      <DayField day="thursday" />
      <DayField day="friday" />
      <DayField day="saturday" />
      <DayField day="sunday" />

    </div>
  )
}

export default Home
