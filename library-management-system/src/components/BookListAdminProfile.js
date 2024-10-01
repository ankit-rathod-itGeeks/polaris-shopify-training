import React, { useState } from 'react';
import UsersTableAdminProfile from './UsersTableAdminProfile';
import BooksTableAdminProfile from './BooksTableAdminProfile';

const dummyData = [
    {
      userName: 'John Doe',
      userClass: '10th Grade',
      phoneNumber: '123-456-7890',
      address: '123 Main Street',
      email: 'john.doe@example.com',
    },
    {
      userName: 'Jane Smith',
      userClass: '11th Grade',
      phoneNumber: '987-654-3210',
      address: '456 Oak Avenue',
      email: 'jane.smith@example.com',
    },
  ];

function BookListAdminProfile() {
    const [users] = useState(dummyData);
  return (
    <div  className='w-[100%] flex mt-4'>
        <div className='w-[100%] bg-[#3B3B41] text-white p-4 rounded-lg'>
       <div className='w-[100%] text-xl font-bold flex justify-between items-center'>
        <label>Books List</label>
       <button className='rounded-lg bg-white text-[#3B3B41] px-3 text-lg '>Add Book</button>
       </div>

       <div className='w-[100%]'>

        <BooksTableAdminProfile></BooksTableAdminProfile>
       </div>

    </div>


    </div>
   
  )
}

export default BookListAdminProfile




