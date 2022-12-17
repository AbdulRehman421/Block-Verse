import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CoinData from './CoinData';
const Crypto = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
            )
            .then((res) => {
                setCoins(res.data);
            })
            .catch((error) => console.log(error));
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }
    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className=''>
            <div className=' flex flex-col items-center mt-12 md:mt-24 mb-16'>
                <h1 className=' md:text-5xl text-2xl font-bold mb-5'>Popular Cryptocurrencies</h1>
                <input
                    type="text"
                    placeholder='Search a currency'
                    onChange={handleChange}
                    className=' bg-black md:w-1/3 mt-5 py-2 md:py-4 border border-white rounded-full px-5 focus:outline-none focus:border-cyan-500' />
            </div>
            <div className=' flex flex-col items-center'>
                {filteredCoins.map((coin) => (
                    <CoinData
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                ))
                }
            </div >

        </div>
    )
}

export default Crypto
