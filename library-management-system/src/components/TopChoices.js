import React, { useRef } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function TopChoices() {
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
 
<div className='flex-shrink-0  w-40  h-52'>
        <img src='https://cdn.kobo.com/book-images/b0870569-2c21-49f5-b33f-15acacdd3562/1200/1200/False/india-s-epic-ramayana-for-the-youth-and-kids.jpg' className='w-full h-full object-cover rounded-lg' />
    </div>
    <div className='flex-shrink-0 w-40 h-52 '>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KuFBHfsxQZK3XSsXtiRqaXOWcRn2MId1Tw&s' className='w-full h-full object-contain rounded-lg' />
    </div>
    <div className='flex-shrink-0  w-40  h-52'>
        <img src='https://i.pinimg.com/736x/6b/9c/26/6b9c2669f522fef954c8bffbc3ce342b.jpg' className='w-full h-full object-cover rounded-lg' />
    </div>
    <div className='flex-shrink-0  w-40  h-52'>
        <img src='https://cdn.kobo.com/book-images/b0870569-2c21-49f5-b33f-15acacdd3562/1200/1200/False/india-s-epic-ramayana-for-the-youth-and-kids.jpg' className='w-full h-full object-cover rounded-lg' />
    </div>
    <div className='flex-shrink-0  w-40  h-52'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTpuqjnFH6f_THMKuv0QKhQiFbhWVxrzdOA&s' className='w-full h-full object-cover rounded-lg' />
    </div>
    <div className='flex-shrink-0  w-40  h-52'>
        <img src='https://rocketexpansion.com/wp-content/uploads/2021/11/Haven-fall.jpg' className='w-full h-full object-cover rounded-lg' />
    </div>
    <div className='flex-shrink-0  w-40  h-52'>
        <img src='https://cdn.kobo.com/book-images/b0870569-2c21-49f5-b33f-15acacdd3562/1200/1200/False/india-s-epic-ramayana-for-the-youth-and-kids.jpg' className='w-full h-full object-cover rounded-lg' />
    </div>
</div>


        {/* <div className='border w-full  gap-4 rounded-lg flex'>

            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KuFBHfsxQZK3XSsXtiRqaXOWcRn2MId1Tw&s'></img>
            <img src='https://i.pinimg.com/736x/6b/9c/26/6b9c2669f522fef954c8bffbc3ce342b.jpg'></img>
            <img src='https://cdn.kobo.com/book-images/b0870569-2c21-49f5-b33f-15acacdd3562/1200/1200/False/india-s-epic-ramayana-for-the-youth-and-kids.jpg'></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTpuqjnFH6f_THMKuv0QKhQiFbhWVxrzdOA&s'></img>
            <img src='https://rocketexpansion.com/wp-content/uploads/2021/11/Haven-fall.jpg'></img>
        </div> */}
      
    </div>
  )
}

export default TopChoices
