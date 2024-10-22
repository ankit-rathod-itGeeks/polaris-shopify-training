import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, isAuthenticated, role, ...rest }) => {
  console.log("rest---", JSON.stringify(rest));
  console.log("role is --", role);
  console.log("elenebt is ---", Element);

  // if(role ==='Admin'){
  //   return null;
  // }
  // else
  return isAuthenticated && role == "Admin" ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;

// import React from 'react'

// import { Route, Redirect, Navigate, Routes } from 'react-router-dom';

// function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {

//     return (

// <Route
//           {...rest}
//           render={(props) =>
//             isAuthenticated ? (
//               <Component {...props} />
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />

//       );

//     //     // const {currUser,setCurrUser}=useContext(MyContext)
//     //     const curr=JSON.parse(localStorage.getItem("currUser"))

//     // // console.log(currUser)
//     //     const role = curr?.role ?  <Navigate to={'/'}></Navigate> : null ;
//     //     console.log("Role from the pricvale route ",role)
//     //     return role=="Admin" ? children : <Navigate to={'/studentsHome'}></Navigate>;

// }

// export default PrivateRoute
