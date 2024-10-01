import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from '../components/HeaderDashboard';
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import { MyContext } from '../MyContext';

function  Dashboard() {
  const {hideSidebar,setHideSidebar}=useContext(MyContext)
  const [books, setBooks] = useState([]); // Use state to hold the books array

  const getBookData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/admin/allBooks');
      
      setBooks(response.data.result.result); // Set the fetched book data to state
      console.log(response.data.result.result);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };
 

  useEffect(() => {
    getBookData();
  }, []);

  return (
    <div className='w-[100%]  bg-[#E5E7EB] flex justify-between overflow-hidden'>
      <div style={hideSidebar ? {width:'5%',transitionDuration:'.6s'} : {transitionDuration:'.7s'}} className='w-[20%] h-[100%] '>
        <Sidebar />
      </div>
      <div style={hideSidebar ? {width:'90%',transitionDuration:'0.8s'} : {transitionDuration:'0.8s'}} className='w-[80%] '>
        <div className='w-[100%]'>
          <HeaderDashboard />
        </div>

        <div className='flex flex-wrap gap-10'>
          <Outlet></Outlet>
         
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import HeaderDashboard from '../components/HeaderDashboard';
// import axios from 'axios';

// function Dashboard() {
//   const [books, setBooks] = useState([]); // Use state to hold the books array

//   const getBookData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/admin/allBooks');
//       setBooks(response.data.result.result); // Set the fetched book data to state
//       console.log(response.data.result.result);
//     } catch (error) {
//       console.error('Error fetching book data:', error);
//     }
//   };

//   useEffect(() => {
//     getBookData();
//   }, []);

//   return (
//     <div className='w-[100%] h-[100%] bg-[#E5E7EB] flex'>
//      
//       <div className='w-[100%]'>
//         <div className='w-[100%]'>
//          
//         </div>

//         <div className='mt-10 flex flex-wrap gap-10'>
//           {books.map((item) => (
//             <div key={item.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.bookName}</h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.author} - {item.price}</p>
//               <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 Read more
//                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                 </svg>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
