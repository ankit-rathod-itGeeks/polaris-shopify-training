import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../MyContext";
import axios from "axios";

function AllUsersPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    getUsersdata();
  }, []);

  const [users, setUsers] = useState([]);

  const handleChangeStatus = async (user) => {
    const newStatus =
      user.status === "deActivated" ? "activated" : "deActivated";
    const updatedData = { status: newStatus, userId: user.id };

    setData(updatedData);
    console.log(updatedData);

    try {
      const response = await axios.put(
        "http://localhost:8000/admin/updateStatus",
        updatedData,
      );
      if (response.data.result.status) {
        getUsersdata();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const getUsersdata = () => {
    axios
      .get("http://localhost:8000/admin/allUsers")
      .then((res) => {
        setUsers(res.data.result.result.rows);
        console.log("users from all users file ", users);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="overflow-x-auto mt-3 w-[100%]">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Click to Activate
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.userName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.userClass}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.phoneNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <button
                  className="p-2 w-[100px]  text-white font-bold "
                  style={
                    user.status == "activated"
                      ? { backgroundColor: "red" }
                      : { backgroundColor: "green" }
                  }
                  onClick={() => handleChangeStatus(user)}
                >
                  {user.status == "activated" ? "Deactive" : "Active"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsersPage;

// import React, { useContext, useEffect, useState } from 'react'
// import { MyContext } from '../MyContext'
// import axios from 'axios'

// function AllUsersPage() {
//   const [data,setData]=useState({})

//     useEffect(()=>{
//         getUsersdata()
//       },[])

//    const [users,setUsers]=useState([])
// const handleChangeStatus=async (user)=>{

// if(user.status=='deActivated'){
//   setData({status:'activated',userId:user.id})
// }
// else{
//   setData({status:'deActivated',userId:user.id})
// }
// console.log(data);
// const response=await axios.put('http://localhost:8000/admin/updateStatus',data)
// console.log(response);
// }

//    const getUsersdata =()=>{
//     axios.get('http://localhost:8000/admin/allUsers').then((res)=>{

//       setUsers(res.data.result.result.rows)
//       console.log( "users from the allusers page from the context file",users);
//     }).catch((error)=>{
//       console.log(error);
//     })
//   }
//   return (

//             <div className="overflow-x-auto w-[100%]">
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Name</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                             {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> */}
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click to Activate</th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {users.map((user, index) => (
//                             <tr key={index}>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.userName}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.userClass}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.phoneNumber}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.address}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><button onClick={()=>handleChangeStatus(user)}>{user.status}</button></td>

//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>

//                       )
// }

// export default AllUsersPage
