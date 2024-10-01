
import React, { useContext } from 'react'
import { MdAdminPanelSettings } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { TiUserAdd } from "react-icons/ti";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { TiUserDeleteOutline } from "react-icons/ti";

import { RxDashboard } from "react-icons/rx";

import sidebarData from '../data/sidebarData.json'
import { MyContext } from '../MyContext';





function Sidebar() {

  const admin={
    icon:"",
    text:"Admin Dashboard "
  }
  const {sidebarItems}=sidebarData
  console.log("================",sidebarItems);
  const {hideSidebar,setHideSidebar}=useContext(MyContext)
  const navigate=useNavigate()
  const handleLogout=()=>{
    console.log("clicked logout");
navigate('/')
  }
  return (
    <div style={hideSidebar? {width:'100%',transitionDuration:'1s'} : null} className='h-[93vh] overflow-scroll rounded-lg bg-[#3B3B41] flex flex-col  m-4'>
       <div  className="cursor-pointer  bg-[#3B3B41] text-white w-[100%] rounded-lg flex flex-col justify-between  items-center">
            <div onClick={()=>{navigate('/dashboard')}} className="p-4 text-lg flex w-[100%] justify-center items-center flex-col gap-4 font-bold">
              {!hideSidebar ? "Admin Dashboard" : <RxDashboard></RxDashboard>}
              <hr className='w-[100%]'></hr>
              </div>
            {
            sidebarItems.map((item, index) => {
       
          const IconComponent = {
            MdAdminPanelSettings: MdAdminPanelSettings,
            SiBookstack: SiBookstack,
            PiStudentFill: PiStudentFill,
            GiTeacher: GiTeacher,
            TiUserAdd:TiUserAdd,
            BiSolidBookAdd:BiSolidBookAdd,
            FaBookOpenReader:FaBookOpenReader,
            TiUserDeleteOutline:TiUserDeleteOutline,
          }[item.icon]; 
          return (
            <div onClick={()=>{navigate(item?.path)}} className='w-[80%] hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center p-2'>
              {IconComponent && <IconComponent className='text-3xl' />}
              {
                <Link 
                to={ item?.path}> 
             {!hideSidebar ?   item.text: null}  
                </Link>
              
              }
             
            </div>
          );
        })}

           
          
           
        </div>
        <div onClick={()=>handleLogout()} className='w-[100%] text-white hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center  p-2'><IoLogOut onClick={()=>handleLogout} className='text-3xl'/>
        {!hideSidebar ? "Logout" : null}
          
          </div>
    </div>
  )
}

export default Sidebar


// import React from 'react'
// import { MdAdminPanelSettings } from "react-icons/md";
// import { SiBookstack } from "react-icons/si";
// import { PiStudentFill } from "react-icons/pi";
// import { GiTeacher } from "react-icons/gi";
// import { IoLogOut } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';




// function Sidebar() {
//   const navigate=useNavigate()
//   const handleLogout=()=>{
//     console.log("clicked logout");
// navigate('/')
//   }
//   return (
//     <div className='h-[95vh]  overflow-scroll rounded-lg bg-[#3B3B41] flex flex-col m-4'>
//        <div  className="cursor-pointer h-[100%] bg-[#3B3B41] text-white w-[100%] rounded-lg flex flex-col justify- items-center">
//             <div onClick={()=>{navigate('/dashboard')}} className="p-4 text-lg flex w-[100%] justify-center items-center flex-col gap-4 font-bold">Admin Dashboard<hr className='w-[100%]'></hr></div>
//             <div className='w-[80%] hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center  p-2'><MdAdminPanelSettings className='text-3xl'/>Admin Profile  </div>
//             <div className='w-[80%] hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center  p-2'><SiBookstack  className='text-3xl'/>Books 
//             </div>
//             <div className='w-[80%] hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center  p-2'><PiStudentFill  className='text-3xl'/>Students </div>
           
          
//             <div className='w-[80%] hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center  p-2'><GiTeacher  className='text-3xl'/>Teachers </div>
           
           
           
//         </div>
//         <div onClick={()=>handleLogout()} className='w-[80%] text-white hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center  p-2'><IoLogOut onClick={()=>handleLogout} className='text-3xl'/>Logout</div>
//     </div>
//   )
// }

// export default Sidebar
