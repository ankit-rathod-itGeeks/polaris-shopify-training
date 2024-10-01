
import React from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import AddUser from './pages/AddUser'
import AddBook from './pages/AddBook';
import  IssueBook from './pages/IssueBook'
import SubmitBook from './pages/SubmitBook';
import { MyProvider } from './MyContext';
import DashboardHome from './pages/DashboardHome';
import AdminProfile from './pages/AdminProfile';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
    {
    path:'/dashboard',
    element: <Dashboard />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <DashboardHome />}, 
      { path:'addBook', element: <AddBook />},
      { path:'addUser', element: <AddUser />},
      { path:'issueBook', element: <IssueBook />},
      { path:'submitBook', element: <SubmitBook />},
      { path:'adminProfile', element: <AdminProfile />},
  ],
   },
  
  ]);
const App = () => {
    return ( 
    <MyProvider>

      <RouterProvider router={router} />
    </MyProvider>
    );
};

export default App;










// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/Home';
// import Dashboard from './pages/dashboard';
// import AddUser from './pages/AddUser'
// import AddBook from './pages/AddBook';
// import  IssueBook from './pages/IssueBook'
// import SubmitBook from './pages/SubmitBook';
// import { MyProvider } from './MyContext';


// const router = createBrowserRouter([
//     {
//     path:'/',
//     element: <Home />,
   
//     children: [
//       { index: true, element: <Home />}, 
//       { path:'/admin/dashboard', element: <Dashboard />},
//   ],
//    },
  
//   ]);
  

// const App = () => {
//     return <RouterProvider router={router} />;

    
//     // return (
        
//     // //    <MyProvider>
//     // //      <Router>
//     // //         <Routes>
//     // //             <Route path="/" element={<Home />}  children />
//     // //             <Route path="/admin/dashboard" element={<Dashboard />} />
//     // //             <Route path="/admin/dashboard/addUser" element={<AddUser />} />
//     // //             <Route path="/admin/dashboard/addBook" element={<AddBook />} />
//     // //             <Route path="/admin/dashboard/issueBook" element={<IssueBook />} />
//     // //             <Route path="/admin/dashboard/submitBook" element={<SubmitBook />} />
//     // //         </Routes>
//     // //     </Router>
//     // //    </MyProvider>
//     // );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
// import Dashboard from './pages/dashboard';
// import AddUser from './pages/AddUser'
// import AddBook from './pages/AddBook';
// import  IssueBook from './pages/IssueBook'
// import SubmitBook from './pages/SubmitBook';
// import { MyProvider } from './MyContext';

// const router = createBrowserRouter([
//     {
//     path:'/',
//     element: <Dashboard />,
//     // errorElement: <NotFound />,
//     children: [
//       { index: true, element: <Home />}, 
//     //   { path:'/box1', element: <Box1 />},
//   ],
//    },
  
//   ]);
// const App = () => {
//     return (
//        <MyProvider>
//          <Router>
//             <Routes>
//                 <Route path="/" element={<Home />}  children />
//                 <Route path="/admin/dashboard" element={<Dashboard />} />
//                 <Route path="/admin/dashboard/addUser" element={<AddUser />} />
//                 <Route path="/admin/dashboard/addBook" element={<AddBook />} />
//                 <Route path="/admin/dashboard/issueBook" element={<IssueBook />} />
//                 <Route path="/admin/dashboard/submitBook" element={<SubmitBook />} />
//             </Routes>
//         </Router>
//        </MyProvider>
//     );
// };

// export default App;










// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import Home from './pages/Home';
// // import Dashboard from './pages/dashboard';
// // import AddUser from './pages/AddUser'
// // import AddBook from './pages/AddBook';
// // import  IssueBook from './pages/IssueBook'
// // import SubmitBook from './pages/SubmitBook';
// // import { MyProvider } from './MyContext';


// // const router = createBrowserRouter([
// //     {
// //     path:'/',
// //     element: <Home />,
   
// //     children: [
// //       { index: true, element: <Home />}, 
// //       { path:'/admin/dashboard', element: <Dashboard />},
// //   ],
// //    },
  
// //   ]);
  

// // const App = () => {
// //     return <RouterProvider router={router} />;

    
// //     // return (
        
// //     // //    <MyProvider>
// //     // //      <Router>
// //     // //         <Routes>
// //     // //             <Route path="/" element={<Home />}  children />
// //     // //             <Route path="/admin/dashboard" element={<Dashboard />} />
// //     // //             <Route path="/admin/dashboard/addUser" element={<AddUser />} />
// //     // //             <Route path="/admin/dashboard/addBook" element={<AddBook />} />
// //     // //             <Route path="/admin/dashboard/issueBook" element={<IssueBook />} />
// //     // //             <Route path="/admin/dashboard/submitBook" element={<SubmitBook />} />
// //     // //         </Routes>
// //     // //     </Router>
// //     // //    </MyProvider>
// //     // );
// // };

// // export default App;

