import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Layout/dashboard";
import RegistrationForm from "./pages/Students/RegistrationForm";
 
import { MyProvider } from "./MyContext";
import AdminProfile from "./pages/Admin/AdminProfile";
import AllUsersPage from "./pages/Admin/AllUsersPage";
import RequestedBooks from "./pages/Admin/RequestedBooks";
import AddUser from "./pages/Admin/AddUser";
import AddBook from "./pages/Admin/AddBook";
import IssueBook from "./pages/Admin/IssueBook";
import SubmitBook from "./pages/Admin/SubmitBook";

import DashboardHome from "./pages/Admin/DashboardHome";
import { jwtDecode } from "jwt-decode";
import StudentRoutes from "./Routes/StudentRoutes";
import StudentsHome from "./pages/Students/StudentsHome";

import IssuedBooks from "./pages/Students/IssuedBooks";
import History from "./pages/Students/History";
import ApplyIssueBook from "./pages/Students/ApplyIssueBook";
import Profile from "./pages/Students/Profile";
// import RequestedBooks from './pages/RequestedBooks';

const cookies = require("js-cookie");

const App = () => {
  const token = cookies.get("token");
  const [role, setRole] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      setAuthenticated(true);
      console.log("in the useEffect 1 ---", authenticated);
    }
  }, [token]);
  useEffect(() => {
    if (token?.length > 1) {
      const decodingToken = jwtDecode(token);
      setRole(decodingToken?.role);
      console.log("in the useEffect 2---", role);
    }
  }, [token, authenticated]);

  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route
            path=""
            element={
              <Home setAuthenticated={setAuthenticated} setRole={setRole} />
            }
          />
          <Route path="/login" element={<Home />} />
          <Route path="/registerStudent" element={<RegistrationForm />} />

          {
          authenticated && role == "Admin" 
          ? 
          (
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              <Route index element={<AdminProfile />} />
              <Route path="addBook" element={<AddBook />} />
              <Route path="addUser" element={<AddUser />} />
              <Route path="issueBook" element={<IssueBook />} />
              <Route path="submitBook" element={<SubmitBook />} />
              <Route path="books" element={<DashboardHome />} />
              <Route path="profile" element={<AllUsersPage />} />
              <Route path="users" element={<AllUsersPage />} />
              <Route path="requestedBooks" element={<RequestedBooks />} />
            </Route>
          ) : authenticated && role == "Student" ? (
            <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              <Route index element={<StudentsHome />} />

              <Route path="profile" element={<Profile />}></Route>
              <Route path="issuedBooks" element={<IssuedBooks />}></Route>
              <Route path="history" element={<History />}></Route>
              <Route path="applyIssueBook" element={<ApplyIssueBook />}></Route>
            </Route>
          ) : (
            //  <Navigate to={'/'}></Navigate>
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </Router>
    </MyProvider>
  );
};

export default App;

// import React, { useContext } from 'react';
// import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider, Navigate ,Redirect} from 'react-router-dom';
// import Home from './pages/Home';
// import Dashboard from './pages/dashboard';
// import AddUser from './pages/AddUser'
// import AddBook from './pages/AddBook';
// import  IssueBook from './pages/IssueBook'
// import SubmitBook from './pages/SubmitBook';
// import { MyContext, MyProvider } from './MyContext';
// import DashboardHome from './pages/DashboardHome';
// import AdminProfile from './pages/AdminProfile';
// import AllUsersPage from './pages/AllUsersPage';
// import StudentsHome from './pages/Students/StudentsHome';
// import StudentDashboard from './pages/Students/StudentDashboard';
// import RegistrationForm from './pages/Students/RegistrationForm';
// import Profile from './pages/Students/Profile';
// import IssuedBooks from './pages/Students/IssuedBooks';
// import History from './pages/Students/History';
// import ApplyIssueBook from './pages/Students/ApplyIssueBook';
// import RequestedBooks from './pages/RequestedBooks';
// import PrivateRoute from './Routes/PrivateRoute';

// const isAuthenticated = true;

// // const router = createBrowserRouter([
// //   {
// //     path:'/',
// //     element:<Home></Home>
// //   },
// //   {
// //     path:'/registerStudent',
// //     element:<RegistrationForm></RegistrationForm>
// //   },
// //     {
// //     path:'/dashboard',
// //     element:(
// //     <PrivateRoute>

// //       <Dashboard />

// //     </PrivateRoute>

// //   ),
// //     // errorElement: <NotFound />,
// //     children: [
// //       { index: true, element: < AdminProfile/>},
// //       { path:'addBook', element: <AddBook />},
// //       { path:'addUser', element: <AddUser />},
// //       { path:'issueBook', element: <IssueBook />},
// //       { path:'submitBook', element: <SubmitBook />},
// //       { path:'books', element: < DashboardHome/>},
// //       { path:'profile', element: < AdminProfile/>},
// //       { path:'users', element: < AllUsersPage/>},
// //       { path:'requestedBooks', element: < RequestedBooks/>},
// //   ],
// //    },
// //    {
// //     path:'/studentsHome',
// //     element:<StudentDashboard></StudentDashboard>,

// //     children:[
// //       {},
// //       {index:true,element:<StudentsHome></StudentsHome>},
// //       { path:'profile', element: < Profile/>},
// //       { path:'issuedBooks', element: < IssuedBooks/>},
// //       { path:'history', element: < History/>},
// //       { path:'applyIssueBook', element: < ApplyIssueBook/>},
// //     ]
// //    }

// //   ]);

// const App = () => {

//     return (
//     <MyProvider>

// <Router>

//       <Routes>

//       <Route exact path="/" component={Home} />
//         <PrivateRoute
//           path="/dashboard"
//           component={Dashboard}
//           isAuthenticated={isAuthenticated}
//         />
//         <Route
//           path="/login"
//           render={() =>
//             isAuthenticated ? <Navigate to="/dashboard" /> : <Home />
//           }
//         />
//         </Routes>

//     </Router>

//       {/* <RouterProvider router={router} /> */}

//     </MyProvider>
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
// // import DashboardHome from './pages/DashboardHome';
// // import AdminProfile from './pages/AdminProfile';
// // import AllUsersPage from './pages/AllUsersPage';

// // const router = createBrowserRouter([
// //   {
// //     path:'/',
// //     element:<Home></Home>
// //   },
// //     {
// //     path:'/dashboard',
// //     element: <Dashboard />,
// //     // errorElement: <NotFound />,
// //     children: [
// //       { index: true, element: < AdminProfile/>},
// //       { path:'addBook', element: <AddBook />},
// //       { path:'addUser', element: <AddUser />},
// //       { path:'issueBook', element: <IssueBook />},
// //       { path:'submitBook', element: <SubmitBook />},
// //       { path:'books', element: < DashboardHome/>},
// //       { path:'profile', element: < AdminProfile/>},
// //       { path:'users', element: < AllUsersPage/>},
// //   ],
// //    },

// //   ]);
// // const App = () => {
// //     return (
// //     <MyProvider>

// //       <RouterProvider router={router} />

// //     </MyProvider>
// //     );
// // };

// // export default App;
