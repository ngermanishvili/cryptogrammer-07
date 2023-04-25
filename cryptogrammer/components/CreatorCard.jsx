import React from "react";
import Image from "next/image";
import images from "../assets";

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
  return (
    <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3 bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4">
      <div className="w-8 h-8 minlgh:w-7 minlg:h-10 bg-nft-red-violet flexCenter rounded-full">
        <p className="font-poppins text-white font-semibold minlg-text-lg">
          {rank}
        </p>
      </div>

      <div className="my-2 flex justify-center ">
        <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
          <Image
            src={creatorImage}
            alt="creatorname"
            className="rounded-full"
          />

          <div className="absolute w-4 h-4 minlg:w-7 minlh:h-7 bottom-2 -right-0">
            <Image src={images.tick} alt="tick" />
            
          </div>
        </div>
      </div>


      <div>
        <p>{creatorName}</p>
        <p>{creatorEths.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CreatorCard;