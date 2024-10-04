import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { MyContext } from '../MyContext';
import Search from './Search';

function HeaderDashboard() {

    const { hideSidebar, setHideSidebar } = useContext(MyContext)
    const navigate = useNavigate()
    const handleSidebar = () => {
        setHideSidebar((val) => !val)
    }
    const handleActionClick = (path) => {
        // setUserActive(count)
        setTimeout(() => { navigate(path) })

    }
    const [userActve, setUserActive] = useState(1)
    return (
        <div className=' w-full flex justify-between p-2 items-center '>
            <div className='flex gap-2 justify-center items-center  text-base text-[#3B3B41] cursor-pointer'>
                <IoMenu className='text-3xl text-[#3B3B41]   ' onClick={handleSidebar} />

            </div>
            <div className='flex justify-center items-center  gap-4 border p-2 rounded-full bg-[#3B3B41]'>

                <label className='text-white px-4 font-semibold'> Library Management System</label>


            </div>
            <div className='flex justify-center items-center   '>
                <Search className=' rounded-full h-[5vh] p-2'></Search>
              
            </div>

            <div className='flex justify-center items-center  gap-2 '>
                <IoIosSettings className='text-3xl' />
                <div className='flex justify-center h-[50px] w-[50px] rounded-full  items-center'>
                    <img className='object-cover rounded-full' src='https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-418179856.jpg'></img>
                </div >
                <label className='text-xl'>ADMIN</label>
            </div>
        </div>
    )
}

export default HeaderDashboard



// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function HeaderDashboard() {


//     const navigate = useNavigate()
//     const handleActionClick = (path, count) => {
//         setUserActive(count)
//         setTimeout(()=>{navigate(path)},100)

//     }
//     const [userActve, setUserActive] = useState(1)
//     return (
//         <div className='w-full'>
//             <header className=" w-full  flex items-center justify-between p-4">
//                 <div className="text-[20px] font-bold">
//                     Library Management System
//                 </div>
//                 <nav className="flex space-x-4">
//                     <div style={userActve == 1 ? { backgroundColor: 'red' } : null} onClick={() => { handleActionClick('/admin/dashboard/addUser', 1) }} className="hover:bg-gray-100 cursor-pointer rounded-full px-4 py-2 ">Add User</div>
//                     <div style={userActve == 2 ? { backgroundColor: 'red' } : null} onClick={() => { handleActionClick('/admin/dashboard/addBook', 2) }} className="hover:bg-gray-100 cursor-pointer rounded-full px-4 py-2 ">Add Book</div>
//                     <div style={userActve == 3 ? { backgroundColor: 'red' } : null} onClick={() => { handleActionClick('/admin/dashboard/issueBook', 3) }} className="hover:bg-gray-100 cursor-pointer rounded-full px-4 py-2 ">Issue Book</div>
//                     <div style={userActve == 4 ? { backgroundColor: 'red' } : null} onClick={() => { handleActionClick('/admin/dashboard/submitBook', 4) }} className="hover:bg-gray-100 cursor-pointer rounded-full px-4 py-2 ">Submit Book</div>
//                 </nav>
//                 <div className="flex items-center space-x-2">
//                     <span>Admin</span>
//                     <img
//                         src="https://via.placeholder.com/40" // Replace with user profile image URL
//                         alt="Profile"
//                         className="w-10 h-10 rounded-full"
//                     />
//                 </div>
//             </header>
//         </div>
//     )
// }

// export default HeaderDashboard
