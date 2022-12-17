import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className=' flex flex-col-reverse md:flex-row'>

            <div className='md:w-1/2 flex flex-col justify-center'>
                <h1 className=' text-3xl md:text-6xl font-extrabold leading-loose mx-5 mt-5 px-5 pt-5'>
                    Discover, Collect
                    & Mint Rare NFTs
                </h1>
                <p className=' mx-5 mt-5 px-5 pt-5 text-slate-200'>
                    Empowers traders, liquidity providers & developers to participate in an open financial marketplace with no barriers to entry.
                </p>
                <div className='mx-5 mt-5 px-5 pt-5 flex justify-evenly'>
                    <Link to='/marketplace'>
                        <button className=' bg-gradient-to-r from-violet-500 to-cyan-500 py-2 px-7 rounded hover:from-transparent hover:to-transparent border border-black hover:border-t-violet-400 hover:border-l-violet-300 hover:border-b-teal-400 hover:border-r-teal-200  '>
                            Explore
                        </button></Link>
                    <Link to='/cryptocurrency'>
                        <button className=' border-b-violet-400 border-r-violet-300 border-t-teal-400 border-l-teal-200 py-2 px-7 rounded border hover:bg-gradient-to-r hover: from-cyan-500 hover: to-violet-500 '>
                            Track Bitcoin
                        </button></Link>
                </div>
            </div>

            <div className=' mt-5 md:w-1/2 md:mt-0'>
                <img src='/images/hero.svg' alt='' className=' ' />
            </div>
        </div>

    )
}

export default Hero
