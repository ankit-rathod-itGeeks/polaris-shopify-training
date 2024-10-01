import React from 'react'
import UsersTableAdminProfile from './UsersTableAdminProfile'

function AdminProfileLists() {
  return (
    <div  className='w-[100%] flex mt-4'>
        <div className='w-[100%] bg-[#3B3B41] text-white p-4 rounded-lg'>
       <div className='w-[100%] text-xl font-bold flex justify-between items-center'>
        <label>Users List</label>
       <button className='rounded-lg bg-white text-[#3B3B41] px-3 text-lg '>Add User</button>
       </div>

       <div className='w-[100%]'>

        <UsersTableAdminProfile></UsersTableAdminProfile>
       </div>

    </div>


    </div>
  )
}

export default AdminProfileLists
