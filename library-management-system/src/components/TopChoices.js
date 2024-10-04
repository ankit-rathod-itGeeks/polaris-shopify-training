import React, { useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import images from '../data/imagesData.json'


function TopChoices() {
    console.log(images.images);
    const scrollRef = useRef(null);
    const handleScrollRight = () => {
        let scrollAmountRight = scrollRef.current.clientWidth;
        if (scrollRef.current ) {
            scrollRef.current.scrollBy({
                top: 0,
                left: scrollAmountRight, // Adjust this value to control scroll amount
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    };
    const handleScrollLeft = () => {
        let scrollAmountRight = scrollRef.current.clientWidth;
        if (scrollRef.current ) {
            scrollRef.current.scrollBy({
                top: 0,
                left:-scrollAmountRight, // Adjust this value to control scroll amount
                behavior: 'smooth' // Smooth scroll effect
            });
        }
    };
  return (
    <div className='w-[full] relative'>
   <div onClick={handleScrollLeft} className='cursor-pointer    z-1 absolute h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-gray-300 top-[40%] left-[0%] '>
<FaArrowLeft></FaArrowLeft>
    </div>
   <div onClick={handleScrollRight} className='cursor-pointer    z-1 absolute h-10 w-10 flex justify-center items-center text-3xl rounded-full bg-gray-300 top-[40%] right-[0%] '>
<FaArrowRight></FaArrowRight>
    </div>
<div ref={scrollRef} className='border w-full gap-4 rounded-lg flex overflow-scroll  relative' >
 

 {
 images.images.map((item)=>(
    
    
        <div className='flex-shrink-0  w-40  h-52'>
        <img src={item.url} alt='image' className='w-full h-full object-cover rounded-lg' />
        </div>
 )
 )}

</div>


       
      
    </div>
  )
}

export default TopChoices
