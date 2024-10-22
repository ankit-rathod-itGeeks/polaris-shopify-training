import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderDashboard from "../components/HeaderDashboard";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { MyContext } from "../MyContext";

function Dashboard() {
  const { hideSidebar, setHideSidebar } = useContext(MyContext);
  const [books, setBooks] = useState([]);

  const getBookData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/allBooks");

      setBooks(response.data.result.result);
      console.log(response.data.result.result);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <div className="w-[100%] flex self-end overflow-hidden ">
      <div
        style={hideSidebar ? { width: "10%" } : null}
        className="duration-1000   transition-transform w-[20%]"
      >
        <Sidebar />
      </div>

      <div style={hideSidebar ? { width: "90%" } : null} className="w-[80%] ">
        <div
          style={hideSidebar ? { width: "90%" } : null}
          className="fixed w-[80%] backdrop-blur-3xl rounded-lg "
        >
          <HeaderDashboard />
        </div>

        <div
          style={hideSidebar ? { width: "100%" } : null}
          className="flex z-1  flex-wrap mt-16 gap-10"
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// import React, { useContext, useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import HeaderDashboard from '../components/HeaderDashboard';
// import axios from 'axios';
// import { Outlet } from 'react-router-dom';
// import { MyContext } from '../MyContext';

// function Dashboard() {
//   const { hideSidebar, setHideSidebar } = useContext(MyContext);
//   const [books, setBooks] = useState([]);

//   const getBookData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/admin/allBooks');
//       setBooks(response.data.result.result);
//       console.log(response.data.result.result);
//     } catch (error) {
//       console.error('Error fetching book data:', error);
//     }
//   };

//   useEffect(() => {
//     getBookData();
//   }, []);

//   return (
//     <div className='w-full flex overflow-hidden'>
//       <div
//         style={{ width: hideSidebar ? '10%' : '20%' }}
//         className={`transition-all duration-3000 ease-in-out`}
//       >
//         <Sidebar />
//       </div>

//       <div
//         style={{ width: hideSidebar ? '90%' : '80%' }}
//         className={`transition-all duration-3000 ease-in-out`}
//       >
//         <div
//           style={{ width: hideSidebar ? '90%' : '80%' }}
//           className='fixed  backdrop-blur-3xl rounded-lg'
//         >
//           <HeaderDashboard />
//         </div>

//         <div
//           style={{ width: hideSidebar ? '100%' : '100%' }}
//           className='flex z-1 flex-wrap mt-16 gap-10'
//         >
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
