import React from 'react'
import { Nfts } from "../contextProvider";
import { FaEthereum } from "react-icons/fa";
const Cards = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {Nfts.map((nft) => (
        <div
          key={nft.id}
          className="p-5 mb-5 rounded-lg border-r-cyan-400 border-b-violet-400 border-t-teal-400 border-l-pink-400 border">
          <div>
            <img src={nft.url} alt="" />
          </div>
          <div className=" p-3">
            <h2 className="my-2 text-xl font-bold">{nft.title}</h2>
            <div className=" flex mt-2 ">
              <img src={nft.profile} alt="" />
              <h3 className=" ml-2">{nft.artist}</h3>
            </div>
            <div className=" flex justify-between my-2 text-lg font-bold">
              <div className=" flex mt-2">
                <FaEthereum className=" text-xl mt-1" />
                <h3 className=" ml-1">{nft.price}</h3>
              </div>
              <button className="  bg-gradient-to-r from-violet-500 to-cyan-500 py-1 px-3 rounded  hover:from-purple-700 hover:to-red-400">
                Place Bid
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
