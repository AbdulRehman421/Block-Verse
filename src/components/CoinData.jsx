import React from 'react'

const CoinData = ({
    name,
    price,
    symbol,
    marketcap,
    id,
    image,
    priceChange,
}) => {
    return (
        <div key={id} className=' w-11/12 md:w-2/3 flex justify-between mb-5 border p-5 rounded-2xl  border-r-cyan-400 border-l-violet-400 border-t-teal-400 border-b-pink-400'>
            <div className=' flex '>
                <div className=' mr-5'>
                    <img src={image} alt="" className=' w-14' />
                </div>
                <div>
                    <div className=' text-sm md:text-xl font-bold'>{name} <span className=' md:text-base'> ({(symbol).toUpperCase()})</span></div>
                    <div className=' font-medium'>${marketcap}</div>
                </div>


            </div>
            <div className=' text-end'>
                <div className=' text-sm md:text-xl font-extrabold'>${(price).toFixed(2)}</div>
                {
                    priceChange > 0 ? <div className=' text-green-600'>{(priceChange).toFixed(2)}%
                    </div> : <div className=' text-red-600 '>{(priceChange).toFixed(2)}%</div>
                }

            </div>
        </div>
    )
}

export default CoinData
