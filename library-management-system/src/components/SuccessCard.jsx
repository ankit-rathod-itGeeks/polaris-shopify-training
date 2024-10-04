import React from 'react'
import { BiCheck } from "react-icons/bi";

function SuccessCard({success,text,id}) {
   
  return (
    <div  className={`hidden border-green-400 p-3 border-[2px] absolute top-16 bg-white justify-center items-center flex-col w-[20%] ${success ? 'successbox' : null}`}>
     <BiCheck className=' text-green-400 text-[100px]'></BiCheck>
     <label className='font-bold '>{text}</label>
     <label className='font-bold '>{id}</label>
    </div>
  )
}

export default SuccessCard
