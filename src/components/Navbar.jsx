import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    let Links = [
        { name: "Home", link: "/" },
        { name: "Marketplace", link: "/marketplace" },
        { name: "Cryptocurrency", link: "/cryptocurrency" },
    ];
    const toggleNav = () => {
        setShowNav((prev) => !prev)

    }



    return (
        <nav className={`{w-full left-0  sticky top-0 flex justify-between md:flex-row  p-3 bg-black ${showNav ? 'flex-col ' : 'flex-row'}`}>
            <h3 className='text-3xl font-extrabold md:w-1/3'>Block<span className=' text-violet-500'>Verse</span></h3>
            <div className=' md:hidden absolute right-3 top-0' onClick={toggleNav}>
                {
                    showNav ? <i className="fa-solid fa-xmark m-5 text-2xl  text-violet-500"></i> : <i className="fa-solid fa-bars m-5 text-2xl"></i>
                }

            </div>

            <ul className={`{ md:flex text-lg justify-end md:w-2/3 md:flex-row  ${showNav ? ' flex-col text-center mt-5' : 'hidden'}`} >

                {
                    Links.map((link) => (
                        <Link key={link.name} to={link.link}  >
                            <li
                                className={`{ ml-5 font-semibold mr-5 hover:text-gray-300 md:py-0  ${showNav ? 'py-2' : ''}`}
                                onClick={toggleNav}
                            >{link.name}</li>
                        </Link>
                    ))

                }
            </ul>




        </nav>
    )
}

export default Navbar
