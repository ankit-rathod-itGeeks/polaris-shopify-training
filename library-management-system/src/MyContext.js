import React, { createContext, useState } from 'react';
import HeaderDashboard from './components/HeaderDashboard';

// Create the context
const MyContext = createContext();

// Create a provider component
const MyProvider = ({ children }) => {
  const [hideSidebar, setHideSidebar] = useState(false);
  const [createBook, setCreateBook] = useState(false);
  const [books, setBooks] = useState([]);
//   const [createUser, setCreateUser] = useState(false);

  return (
    <MyContext.Provider value={{books, setBooks,hideSidebar,setHideSidebar,createBook, setCreateBook }}>
      {children}
    
    </MyContext.Provider>
  );
};

// Export the context and provider
export { MyContext, MyProvider };
