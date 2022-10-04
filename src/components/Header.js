import Navbar from './navbar/Navbar'
import React from 'react'
import Home from './Home'

const Header = () => {
  return (
    <section className='h-[100vh] flex flex-col'>
        <Navbar/>
        <Home />
    </section>
  )
}

export default Header