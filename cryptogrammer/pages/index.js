import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Banner from '../components/Banner'
import CreatorCard from '../components/CreatorCard'
import images from '../assets'
import { makeId } from '@/utils/makeId'

const Home = () => {
  const parentRef = useRef(null)
  const scrollRef = useRef(null)
  console.log(makeId(3));

  return (
    <div className='flex justify-center sm:px-4 p-12'>
      <div className='w-full minmd:w-4/5'>
        <Banner
          name='Discoverm collect, and sell extraordinaty NFTs.'
          childStyles='md:text-4xl sm:text-2xl xs=text-xl text-left'
          parentStyles='justify-start mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-4 4 rounded-3xl'
        />
        <div>
          <h1 className='font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0'>Best Creators</h1>
          <div className='relative flex-1 max-w-full flex mt-3 '
            ref={parentRef}
          >
            {/* //? In this section, we are using the map function to iterate through the array of numbers and create a CreatorCard component for each number in the array. inside the creatorCard i'm using the makeId function to generate a random string of characters of a given length. */}
            <div className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none' ref={scrollRef}>
              {[6, 7, 8, 9, 10,].map((i) => (
                <CreatorCard key={`creator-${i}`} rank={i} creatorImage={images[`creator${i}`]}
                creatorName={`0x${makeId(3)}...${makeId(4)}`}
                creatorEths={10 - i * 0.5} 
                />

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;