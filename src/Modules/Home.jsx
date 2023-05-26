import React from 'react'
import Hero from '../Components/Hero/Hero'
import Catalogo from './Catalogo'

function Home() {
  return (
    <div>
      <Hero />
      <div className='text-5xl text-center mt-8 '> Catalogo</div>
      <Catalogo />
    </div>
  )
}

export default Home