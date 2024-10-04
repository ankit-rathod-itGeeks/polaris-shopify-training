import axios from 'axios';
import React, { useState } from 'react'
import SuccessCard from '../../components/SuccessCard';

function RegistrationForm() {
    const [success,setSuccess]=useState(false)
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        userClass: '', // Initialize userClass
        address: '',   // Initialize address
        phoneNumber: '',
       
        password: '', // Add confirmPassword
        gender: '',   // Initialize gender
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const response =await axios.post('http://localhost:8000/admin/register',formData)
        console.log(response.data.result.status)
        if(response.data.result.status){
setSuccess(true)
setTimeout(()=>setSuccess(false),4000)
        }
        console.log(response)
        console.log(formData);
    };
  return (
    <div className='h-[100vh] flex justify-center items-center  w-[100%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
     {success ?    <SuccessCard success={success} text={"Student Registered Successfully"} id={""} ></SuccessCard> : null}
     {!success ?   
       <div className='w-[50%]  flex flex-col justify-center items-center bg-white rounded-xl p-3 '>

       
       <h2 className="text-2xl font-bold text-center">Student Registration</h2>

       <div className='flex  justify-center gap-4 mt-4'>

<div className='flex flex-col '>

<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Full Name
 </label>
 <input  value={formData.userName}
         name='userName'
         onChange={handleChange}
          placeholder='Fullname'
           className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
</div>
<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Email
 </label>
 <input
 value={formData.email}  name='email'
         onChange={handleChange}
           placeholder='email' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
</div>
<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Password
 </label>
 <input  placeholder='password' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
</div>
<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Gender
 </label>


<div className='flex gap-3 '>
  
<div className='flex flex-col  justify-center items-center'>
 <input value={'male'} onChange={handleChange} name="gender" placeholder='password' type='radio' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
 <label className='font-serif pl-2'>
  Male
 </label>
 </div>
 <div className='flex flex-col justify-center items-center'>
 <input value={'female'} onChange={handleChange} name="gender" placeholder='password' type='radio' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
 <label className='font-serif pl-2'>
  Female
 </label>
 </div>
</div>
</div>



</div>
<div className='flex flex-col'>

<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Phone Number
 </label>
 <input  value={formData.phoneNumber}  name='phoneNumber'
         onChange={handleChange} placeholder='Phone Number' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
</div>
<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Class
 </label>
 <input value={formData.userClass}  name='userClass'
         onChange={handleChange} placeholder='Class' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
</div>
<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Confirm Password
 </label>
 <input value={formData.password}  name='password'
         onChange={handleChange} placeholder='Confirm Password' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
</div>
<div className='flex flex-col gap-2 p-2'>
 <label className='text-xl font-serif pl-2'>
  Address
 </label>
 <input value={formData.address}  name='address'
         onChange={handleChange} placeholder='Address' className='p-2 border-[2px] border-gray-500 rounded-2xl'></input>
</div>

</div>



       </div>
       <button onClick={handleSubmit} className='text-white p-2 text-xl rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 w-[20%] '>Register</button>
     
     </div>
     :null}


       
      
    </div>
  )
}

export default RegistrationForm



// import React, { useState } from 'react';

// const RegistrationForm = () => {
//     const [formData, setFormData] = useState({
//         userName: '',
//         email: '',
//         class: '',
//         address: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic (e.g., validation, API calls)
//         console.log(formData);
//     };

//     return (
//         <div className="max-w-md mx-auto mt-10">
//             <h2 className="text-2xl font-bold text-center">Student Registration</h2>
//             <form onSubmit={handleSubmit} className="space-y-4 mt-6">
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="userName">User Name</label>
//                     <input
//                         type="text"
//                         name="userName"
//                         value={formData.userName}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="class">Class</label>
//                     <input
//                         type="text"
//                         name="class"
//                         value={formData.class}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
//                     <textarea
//                         name="address"
//                         value={formData.address}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="phoneNumber">Phone Number</label>
//                     <input
//                         type="tel"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
//                     />
//                 </div>
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
//                     <input
//                         type="password"
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 >
//                     Register
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default RegistrationForm;
