import React, { useState } from 'react';

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

function UsersTableAdminProfile() {
    const [users] = useState(dummyData);
  return (
   
      <table className="p-4 w-full mt-4">
        <thead className='w-full '>
          <tr className="w-full  text-[10px] uppercase ">
            <th className="text-center  py-2">User Name</th>
            <th className="text-center  py-2">User Class</th>
            <th className="text-center  py-2">Phone Number</th>
            <th className="text-center  py-2">Address</th>
            <th className="text-center  py-2">Email</th>
          </tr>
        </thead>
        <tbody className="text-white text-sm w-full font-light">
          {users.map((user, index) => (
            <tr
              key={index}
              className='border border-gray-500 w-full'
              
            >
              <td className=" p-2 text-[10px]  text-left">{user.userName}</td>
              <td className=" p-2 text-[10px]  text-left">{user.userClass}</td>
              <td className=" p-2 text-[10px]  text-left">{user.phoneNumber}</td>
              <td className=" p-2 text-[10px]  text-left">{user.address}</td>
              <td className=" p-2 text-[10px]  text-left">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
  )
}

export default UsersTableAdminProfile




