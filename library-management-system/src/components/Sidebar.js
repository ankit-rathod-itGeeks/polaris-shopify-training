import React, { useContext, useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { IoLogOut } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TiUserAdd } from "react-icons/ti";
import { BiSolidBookAdd } from "react-icons/bi";
import { FaBookOpenReader } from "react-icons/fa6";
import { TiUserDeleteOutline } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import sidebarData from "../data/sidebarData.json";
import { MyContext } from "../MyContext";
import { jwtDecode } from "jwt-decode";

function Sidebar() {
  const { currUser, setCurrUser } = useContext(MyContext);
  const [sidebarItems, setSidebarItems] = useState([]);

  // const curr = JSON.parse(localStorage.getItem("currUser"));
  const cookies = require("js-cookie");

  const token = cookies.get("token");

  const { hideSidebar, setHideSidebar } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const curr = jwtDecode(token);

  useEffect(() => {
    if (curr.role === "Admin") {
      setSidebarItems(sidebarData.sidebarItems);
    } else {
      setSidebarItems(sidebarData.studentsSidebar);
    }
  }, [curr.role]);

  const handleLogout = () => {
    setCurrUser({});
    navigate("/");
    localStorage.clear();
    cookies.remove("token");
  };

  return (
    <div className="fixed h-[93vh] overflow-scroll rounded-lg bg-[#3B3B41] flex flex-col m-4">
      <div className="cursor-pointer bg-[#3B3B41] text-white w-[100%] rounded-lg flex flex-col justify-between items-center">
        <div
          onClick={() => navigate("/dashboard")}
          className="p-4 text-lg flex w-[100%] justify-center items-center flex-col gap-4 font-bold"
        >
          {!hideSidebar ? `${curr.role} Dashboard` : <RxDashboard />}
          <hr className="w-[100%]"></hr>
        </div>

        {sidebarItems.map((item, index) => {
          const IconComponent = {
            MdAdminPanelSettings: MdAdminPanelSettings,
            SiBookstack: SiBookstack,
            PiStudentFill: PiStudentFill,
            GiTeacher: GiTeacher,
            TiUserAdd: TiUserAdd,
            BiSolidBookAdd: BiSolidBookAdd,
            FaBookOpenReader: FaBookOpenReader,
            TiUserDeleteOutline: TiUserDeleteOutline,
          }[item.icon];

          // Check if the current path matches the item's path
          const isActive = location.pathname === `/dashboard/${item.path}`;

          return (
            <div
              key={item.text}
              onClick={() => navigate(item?.path)}
              className={`w-[80%] ${isActive ? "bg-red-500" : "hover:bg-[#464242]"} rounded-lg ml-3 mt-4 flex gap-2 items-center p-2`}
            >
              {IconComponent && <IconComponent className="text-3xl" />}
              {<Link to={item?.path}>{!hideSidebar ? item.text : null}</Link>}
            </div>
          );
        })}

        <div
          onClick={handleLogout}
          className="w-[100%] text-white hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center p-2"
        >
          <IoLogOut className="text-3xl" />
          {!hideSidebar ? "Logout" : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

// import React, { useContext, useEffect, useState } from 'react'
// import { MdAdminPanelSettings } from "react-icons/md";
// import { SiBookstack } from "react-icons/si";
// import { PiStudentFill } from "react-icons/pi";
// import { GiTeacher } from "react-icons/gi";
// import { IoLogOut } from "react-icons/io5";
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { TiUserAdd } from "react-icons/ti";
// import { BiSolidBookAdd } from "react-icons/bi";
// import { FaBookOpenReader } from "react-icons/fa6";
// import { TiUserDeleteOutline } from "react-icons/ti";

// import { RxDashboard } from "react-icons/rx";

// import sidebarData from '../data/sidebarData.json'
// import { MyContext } from '../MyContext';

// function Sidebar() {
//   const {currUser,setCurrUser}=useContext(MyContext)
//   const [buttonBG,setButtonBG]=useState('')
//   const [sidebarItems,setSidebarItems]=useState([])
//   const curr=JSON.parse(localStorage.getItem("currUser"))
//   // let sidebarData=[]

//   const changeButtonColor =(path)=>{
//     // const location=useLocation();
//     console.log('cahnge button color function called');
//     console.log("location is ",window.location.pathname);
//     console.log("path is ",path);
//    if(window.location.pathname==path){
//     console.log("equal paths");
//     setButtonBG('red')
//    }

//   }

//   console.log(sidebarData);

//   useEffect(() => {
//     if (curr.role === 'Admin') {
//         setSidebarItems(sidebarData.sidebarItems);
//     } else {
//         setSidebarItems(sidebarData.studentsSidebar);
//     }
// }, [curr.role]);

// console.log("current user -- ",curr);

//   const admin={
//     icon:"",
//     text:"Admin Dashboard "
//   }

//   const {hideSidebar,setHideSidebar}=useContext(MyContext)
//   const navigate=useNavigate()
//   const handleLogout=()=>{
//     setCurrUser({})
// navigate('/')
//   }
//   return (
//     <div  className=' fixed h-[93vh] overflow-scroll rounded-lg bg-[#3B3B41] flex flex-col  m-4'>
//        <div  className="cursor-pointer  bg-[#3B3B41] text-white w-[100%] rounded-lg flex flex-col justify-between  items-center">
//             <div onClick={()=>{navigate('/dashboard')}} className="p-4 text-lg flex w-[100%] justify-center items-center flex-col gap-4 font-bold">
//               {!hideSidebar ? `${curr.role} Dashboard`: <RxDashboard></RxDashboard>}
//               <hr className='w-[100%]'></hr>
//               </div>
//             {
//             sidebarItems.map((item, index) => {

//           const IconComponent = {
//             MdAdminPanelSettings: MdAdminPanelSettings,
//             SiBookstack: SiBookstack,
//             PiStudentFill: PiStudentFill,
//             GiTeacher: GiTeacher,
//             TiUserAdd:TiUserAdd,
//             BiSolidBookAdd:BiSolidBookAdd,
//             FaBookOpenReader:FaBookOpenReader,
//             TiUserDeleteOutline:TiUserDeleteOutline,
//           }[item.icon];
//           return (
//             <div  style={{backgroundColor:`${buttonBG}`}} key={item.text}  onClick={()=>{navigate(item?.path);changeButtonColor("/dashboard/"+item?.path)}} className='w-[80%] hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center p-2'>
//               {IconComponent && <IconComponent className='text-3xl' />}
//               {
//                 <Link
//                 to={ item?.path}>
//              {!hideSidebar ?   item.text: null}
//                 </Link>

//               }

//             </div>
//           );
//         })}

//         </div>
//         <div onClick={()=>handleLogout()} className='w-[100%] text-white hover:bg-[#464242] rounded-lg ml-3 mt-4 flex gap-2 items-center  p-2'><IoLogOut onClick={()=>handleLogout} className='text-3xl'/>
//         {!hideSidebar ? "Logout" : null}

//           </div>
//     </div>
//   )
// }

// export default Sidebar

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
