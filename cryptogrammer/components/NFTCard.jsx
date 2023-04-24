import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../assets";

const NFTCard = ({ nft }) => {
  return (
    <Link href={{ pathname: "/nft-details", query: { nft } }}>
      <div className="flex-1 min-w-215 max-w-max xs:max-w-none sm:w-full sm:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2">
        {nft.name}
      </div>
    </Link>
  );
};

export default NFTCard;

{
  /* <div className='mt-10 '>
<div className='flexBetween mx-4 xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start'>
  <h1 className='flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-'>
    Hot bids
  </h1>
  <div>
    Searchbar
  </div>
  <div className='mt-3 w-full flex flex-wrap justify-start md:justify-center'>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
      <NFTCard
        key={`nft-${i}`}
        nft={{
          i,
          name: `Nifty Nft ${i}`,
          seller: `0x${makeId(3)}...${makeId(4)}`,
          owner: `0x${makeId(3)}...${makeId(4)}`,
          description 
        }}
      />
    ))} */
}
