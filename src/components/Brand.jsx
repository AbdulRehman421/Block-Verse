import React from 'react'
import { Brands } from '../contextProvider'

const Brand = () => {
    return (
        <div className=' flex flex-col items-center md:justify-evenly md:mt-16 pb-5 md:flex-row '>
            {
                Brands.map(brand => (
                    <div key={brand.id} className='mt-10'  >
                        <img src={brand.url} className={brand.class} alt='' />
                    </div>



                ))
            }
        </div>
    )
}

export default Brand