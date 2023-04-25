import { useState, useEffect, useRef } from 'react'
import Banner from '../components/Banner'
import CreatorCard from '../components/CreatorCard'
import images from '../assets'
import { makeId } from '@/utils/makeId'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { NFTCard } from '@/components'

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false)
  const { theme } = useTheme();
  const parentRef = useRef(null)
  const scrollRef = useRef(null)

  const handleScroll = (direction) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;

    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };

  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);
    return () => {
      window.removeEventListener('resize', isScrollable);
    };
  }, []);

  return (
    <div className='flex justify-center sm:px-4 p-12'>
      <div className='w-full minmd:w-4/5'>
        <Banner
          name='Discoverm collect, and sell extraordinaty NFTs.'
          childStyles='md:text-4xl sm:text-2xl xs:text-xl text-left'
          parentStyles='justifyStart mb-6 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl mt-12'
        />
        <div>
          <h1 className='font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0'>Best Creators</h1>
          <div className='relative flex-1 max-w-full flex mt-3'
            ref={parentRef}
          >
            {/* //? In this section, we are using the map function to iterate through the array of numbers and create a CreatorCard component for each number in the array. inside the creatorCard i'm using the makeId function to generate a random string of characters of a given length. */}
            <div className='flex flex-row w-max overflow-x-scroll no-scrollbar select-none' ref={scrollRef}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <CreatorCard key={`creator-${i}`} rank={i} creatorImage={images[`creator${i}`]}
                  creatorName={`0x${makeId(3)}...${makeId(4)}`}
                  creatorEths={10 - i * 0.5}
                />
              ))}
              {!hideButtons && (
                <>
                  <div onClick={() => handleScroll('left')} className='absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0'>
                    <Image src={images.left} alt='left_arrow' className={theme === 'light' ? 'filter invert' : undefined} />
                  </div>
                  <div onClick={() => handleScroll('right')} className='absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0'>
                    <Image src={images.right} alt='right-arrow' className={theme === 'light' ? 'filter invert' : undefined} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flexBetween mx-4 sm:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <h1 className="flex-1 font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold sm:mb-4">Hot NFTs</h1>
            <div className='flex flex-end'>SearchBar</div>
          </div>
          <div className="flex flex-wrap justify-center mt-3 w-full" style={{ padding: "0 20px" }}>
            {[ 2, 3, 4, 5, 6, 7, 8, 9,].map((i) => (
              <NFTCard
                key={`nft-${i}`}
                nft={{
                  i,
                  name: `Nifty Nft ${i}`,
                  price: (10 - i * 0.5).toFixed(2),
                  seller: `0x${makeId(3)}...${makeId(4)}`,
                  owner: `0x${makeId(3)}...${makeId(4)}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;

// But in this second code in the way I want to edit, don't add anything new to my code, just what is in my code, and in this second code, redo everything exactly the same, and what I don't use, just ignore it and don't use it. so now write me 