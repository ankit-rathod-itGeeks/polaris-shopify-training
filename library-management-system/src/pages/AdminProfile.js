import React, { useContext, useEffect, useState } from 'react'
import { HiUsers } from "react-icons/hi";
import AdminProfileLists from '../components/AdminProfileLists';
import BookListAdminProfile from '../components/BookListAdminProfile';
import TopChoices from '../components/TopChoices';
import axios from 'axios';
import { MyContext } from '../MyContext';
function AdminProfile() {

    const {books, setBooks}=useContext(MyContext)
  
    function formatDate(date) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
    
        const day = String(date.getDate()).padStart(2, '0');
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const seconds=date.getSeconds();
    
        return `${day} ${month}, ${year} ,${seconds}`;
    }
    const date = new Date();
  return (
    <div className='w-[100%] h-[100%] flex flex-col'>
      
    <div className='w-[100%] h-[100%] bg-[#E5E7EB] flex'>
  
   <div className='w-[100%] flex justify-between items-center'>
    <label className='text-3xl font-bold p-2 '>
        <div>Hello , <span className='text-[#F65867]'>Admin !</span></div>
        <label>{formatDate(date)}</label></label>
    <select className=' bg-[#3B3B41] text-lg mr-2 rounded-full p-1 focus:outline-none text-white'>
        <option className='bg-[#3B3B41] text-sm'>This week</option>
        <option className='bg-[#3B3B41] text-sm'>This Month</option>
        <option className='bg-[#3B3B41] text-sm'>This Year</option>
    </select>
  
   </div>
 </div>


 <div className='mt-5 flex gap-2 justify-between'>


 <div class=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<div>
    <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Total Books</div>
<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{books.length}</div>
</div>
<HiUsers className='text-5xl text-[#F65867]'></HiUsers>


</div>
 <div class=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<div>
    <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Total Users</div>
<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">102</div>
</div>
<HiUsers className='text-5xl text-[#F65867]'></HiUsers>


</div>
 <div class=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<div>
    <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Total Users</div>
<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">102</div>
</div>
<HiUsers className='text-5xl text-[#F65867]'></HiUsers>


</div>
 <div class=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<div>
    <div class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Total Users</div>
<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">102</div>
</div>
<HiUsers className='text-5xl text-[#F65867]'></HiUsers>


</div>
 
 
 


 </div>

 <div className='w-[100%] flex gap-4'>
<div className='w-[50%]'>
  <AdminProfileLists></AdminProfileLists>

</div>
<div className='w-[50%]'>
  <BookListAdminProfile></BookListAdminProfile>

</div>

 </div>
 <div className='w-[100%] mt-4'>
<TopChoices></TopChoices>
 </div>

  </div>
  )
}

export default AdminProfile
