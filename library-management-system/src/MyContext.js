import React, { createContext, useEffect, useState } from 'react';
import HeaderDashboard from './components/HeaderDashboard';
import axios from 'axios';

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {



 const [render,setRender]=useState(false)
 const [currUser,setCurrUser]=useState({})

  const [seeAllUsers,setSeeAllUsers]=useState(true)
  const [seeAllBooks,setSeeAllBooks]=useState(true)
  const [hideSidebar, setHideSidebar] = useState(false);
  const [createBook, setCreateBook] = useState(false);
  



 
  
//   const [createUser, setCreateUser] = useState(false);

  return (
    <MyContext.Provider value={{currUser,setCurrUser,render,setRender,seeAllBooks,setSeeAllBooks,hideSidebar,setHideSidebar,createBook, setCreateBook,seeAllUsers,setSeeAllUsers }}>
      {children}
    
    </MyContext.Provider>
  );
};

// Export the context and provider
export { MyContext, MyProvider };
