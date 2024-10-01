import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import HeaderDashboard from '../components/HeaderDashboard'
import axios from 'axios';

function AddUser() {

    const [formData, setFormData] = useState({
        userName: '',
        userClass: '',
        phoneNumber: '',
        address: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)

        const response=await axios.post('http://localhost:8000/admin/register', formData);
        console.log(response);
        if(response.data.result.status){
           setFormData({
            userName: '',
            userClass: '',
            phoneNumber: '',
            address: '',
            email: '',
            password: '',
           })
        }
       
    };
  return (
    <div className='w-[100%] h-[100%] bg-[#E5E7EB] flex '>
    
   
   <div className='w-[100%]'>
      
       <div>

       <form onSubmit={handleSubmit} className="bg-white py-[110px] w-[100%] rounded shadow-md">
         

         <div className='flex w-full  justify-around items-center '>
         <div>
           <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="userName">
                    User Name
                </label>
                <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="userClass">
                    User Class
                </label>
                <input
                    type="text"
                    name="userClass"
                    id="userClass"
                    value={formData.userClass}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="phoneNumber">
                    Phone Number
                </label>
                <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
           </div>

          <div>
          <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="address">
                    Address
                </label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

          </div>
         </div>
           <div className='flex justify-center items-center'>
           <button
                type="submit"
                className="w-[20%] bg-[#081029] text-white font-bold py-2 rounded hover:bg-blue-500"
            >
                Add User
            </button>
           </div>
        </form>


       </div>
      
   </div>


   </div>
  )
}

export default AddUser
