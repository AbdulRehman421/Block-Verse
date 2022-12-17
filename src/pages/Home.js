import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Brand from '../components/Brand'

const Home = () => {
    return (
        <div className=' bg-black text-white min-h-screen '>
            <Navbar />
            <Hero />
            <Brand />
        </div>
    )
}

export default Home
