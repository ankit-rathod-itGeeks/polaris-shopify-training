

import React, { useContext, useState } from 'react'

import HomeMain from '../components/HomeMain'
import axios from 'axios'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import { MyContext } from '../MyContext'

function Home() {
  
  const {currUser,setCurrUser}=useContext(MyContext)
 const navigate=useNavigate();
  const [user, setUser] = useState({})
  const [message, setMessage] = useState("")
  const [loginSuccess,setLoginSuccess]=useState(false)

const handleLogin=async ()=>{
 const response =await axios.post('http://localhost:8000/admin/login',user)
 console.log(response);
 
if(response.data.result.status==true){
  
console.log(response.data.result.result);
localStorage.setItem("currUser",JSON.stringify(response.data.result.result))
  setCurrUser(response.data.result.result)
  console.log(currUser);
  
  setLoginSuccess(true)
  navigate('/dashboard')
 
}
else{
setMessage("Invalid Credentials")
}

}



  return (
    <div className='  w-[100%]  p-10 box-border flex justify-between overflow-hidden h-[100vh]  items-center bg-gray-200'>

     <div className='flex justify-center items-center'>
     <div className='w-1/2 px-10  box-border '><img className='aspect-1/1' src='https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img></div>


      

<div className='w-[50%] h-[88vh] rounded-xl  bg-[#3B3B41] flex justify-center items-center flex-col'>
  <h1 className='text-white text-[40px]'>Login</h1>
  <label className='text-white'>Welcome back! Please begin to your account </label>
  <div className='flex justify-center items-center'>
    <input type='text' onChange={(e)=>setUser({...user,userName:e.target.value})} placeholder='Username' className='focus:outline-none mt-4 border placeholder:text-[13px] flex items-center justify-center p-2 border-purple-300 border-[2px] rounded-full'></input>
    </div>

  <input type='password' onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='Password' className='focus:outline-none mt-4 border placeholder:text-[13px] flex items-center justify-center p-2 border-purple-300 border-[2px] rounded-full'></input>
  <label className='text-red-600'>{message}</label>



  <button onClick={handleLogin} className='bg-blue-300 p-3 px-5 mt-4 rounded-full'>Login</button>
  <label className='text-gray-500 cursor-pointer'>forget Password?</label>
  <label className='bg-white text-black p-2 rounded-full mt-2' onClick={()=>navigate('/registerStudent')}>Not Registered </label>



</div>
     </div>

    </div>


  )
}

export default Home
