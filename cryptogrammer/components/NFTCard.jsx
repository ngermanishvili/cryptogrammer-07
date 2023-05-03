import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../assets";
import { useContext } from "react";
import { NFTContext } from "@/context/NFTContext";

const NFTCard = ({ nft }) => {
  const { nftCurrency } = useContext(NFTContext);

  return (
    <Link href={{ pathname: "/nft-details", query: nft }}>
      <div
        key={nft.seller}
        className="flex-1 min-w-215  max-w-max md:flex-1 md:min-w-155 minmd:min-w-256 minlg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4 minlg:m-8 sm:my-2 sm:mx-2 cursor-pointer shadow-md flex-col  md:flex-row md:flex-wrap xs:w-4 xs:h-"
      >
        <div className="relative w-full h-52 sm:h-36  minmd:h-60 minlg:h-300 rounded-2xl overflow-hidden">
          <Image
            src={nft.image || images[`nft${nft.i}`]}
            layout="fill"
            objectFit="cover"
            alt={`nft${nft.i}`}
          />
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
            {nft.name}
          </p>
          <div className="flexBetween mt- minlg:mt-3 flex-row md:flex-col md:items-start md:mt-3 ">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-4">
              {nft.price}
              <span key={nft.id} className="normal font-poppins">
                {nftCurrency}
              </span>
            </p>
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-lg">{`Jane Doe`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
