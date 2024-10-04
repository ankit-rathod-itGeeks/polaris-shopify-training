
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import AddUser from './pages/AddUser'
import AddBook from './pages/AddBook';
import  IssueBook from './pages/IssueBook'
import SubmitBook from './pages/SubmitBook';
import { MyContext, MyProvider } from './MyContext';
import DashboardHome from './pages/DashboardHome';
import AdminProfile from './pages/AdminProfile';
import AllUsersPage from './pages/AllUsersPage';
import StudentsHome from './pages/Students/StudentsHome';
import StudentDashboard from './pages/Students/StudentDashboard';
import RegistrationForm from './pages/Students/RegistrationForm';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>
  },
  {
    path:'/registerStudent',
    element:<RegistrationForm></RegistrationForm>
  },
    {
    path:'/dashboard',
    element:( 
    <PrivateRoute>

      <Dashboard />

    </PrivateRoute>
  
  ),
    // errorElement: <NotFound />,
    children: [
      { index: true, element: < AdminProfile/>}, 
      { path:'addBook', element: <AddBook />},
      { path:'addUser', element: <AddUser />},
      { path:'issueBook', element: <IssueBook />},
      { path:'submitBook', element: <SubmitBook />},
      { path:'books', element: < DashboardHome/>},
      { path:'profile', element: < AdminProfile/>},
      { path:'users', element: < AllUsersPage/>},
  ],
   },
   {
    path:'/studentsHome',
    element:<StudentDashboard></StudentDashboard>,

    
    children:[
      {
        index:true,element:<StudentsHome></StudentsHome>
      }
    ]
   }
  
  ]);

  function PrivateRoute({ children }) {

    const {currUser,setCurrUser}=useContext(MyContext)

console.log(currUser)
    const role = currUser.role;
    console.log("Role from the pricvale route ",role)
    return role=="Admin" ? children : <Navigate to="/studentsHome" />;
  }


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
// import DashboardHome from './pages/DashboardHome';
// import AdminProfile from './pages/AdminProfile';
// import AllUsersPage from './pages/AllUsersPage';


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Home></Home>
//   },
//     {
//     path:'/dashboard',
//     element: <Dashboard />,
//     // errorElement: <NotFound />,
//     children: [
//       { index: true, element: < AdminProfile/>}, 
//       { path:'addBook', element: <AddBook />},
//       { path:'addUser', element: <AddUser />},
//       { path:'issueBook', element: <IssueBook />},
//       { path:'submitBook', element: <SubmitBook />},
//       { path:'books', element: < DashboardHome/>},
//       { path:'profile', element: < AdminProfile/>},
//       { path:'users', element: < AllUsersPage/>},
//   ],
//    },
  
//   ]);
// const App = () => {
//     return ( 
//     <MyProvider>

//       <RouterProvider router={router} />

//     </MyProvider>
//     );
// };

// export default App;








