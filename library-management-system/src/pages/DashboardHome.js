import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import View from "../components/View";
import { MyContext } from "../MyContext";

function DashboardHome() {
  const { render, setRender } = useContext(MyContext);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showTable, setShowTable] = useState(true);
  const [show, setShow] = useState(false);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const getBookData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/admin/allBooks");
      console.log("API Response:", response.data);
      setBooks(response.data.result.result.rows);
    } catch (error) {
      console.error("Error fetching book data:", error);
      setError("Failed to fetch book data. Please try again later.");
    }
  };

  const handleViewBook = (book) => {
    console.log("Book Selected:", book);
    setSelectedBook(book);
    // localStorage.setItem("viewBook", JSON.stringify(book));
    setShow(true);
    setShowTable(false);
  };

  useEffect(() => {
    getBookData();
  }, [render]);

  useEffect(() => {
    console.log("Selected Book:", selectedBook);
  }, [selectedBook]);

  // useEffect(() => {
  //   console.log("Show:", show);
  //   console.log("Show Table:", showTable);
  // }, [show, showTable]);

  return (
    <div className="flex flex-col justify-center items-center overflow-x-auto mt-3 w-full">
      {/* {error && <div className="text-red-500">{error}</div>} */}

      {showTable ? (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Book Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Pages
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Click to View
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map((book, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.bookName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.author}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.pages}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {book.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button
                    onClick={() => handleViewBook(book)}
                    className="bg-green-400 rounded-lg text-white px-4 text-xl"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {show ? (
        <div className="w-[100%] flex flex-col justify-center items-center">
          <View
            setShowTable={setShowTable}
            setShow={setShow}
            book={selectedBook}
          />
        </div>
      ) : null}
    </div>
  );
}

export default DashboardHome;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import View from '../components/View';

// function DashboardHome() {
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [showTable,setShowTable]=useState(true)
//   const [show, setShow] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);
//   const getBookData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/admin/allBooks');
//       console.log("API Response:", response.data);
//       setBooks(response.data.result.result.rows);
//     } catch (error) {
//       console.error('Error fetching book data:', error);
//       setError('Failed to fetch book data. Please try again later.');
//     }
//   };

//   const handleViewBook = (book) => {
//     console.log("Book Selected:", book);
//     setSelectedBook(book);
//     localStorage.setItem("viewBook", JSON.stringify(book));
//     // setShow(true);
//   };

//   useEffect(() => {
//     getBookData();
//   }, []);

//   useEffect(() => {
//     console.log("Selected Book:", selectedBook);
//     if (selectedBook) {
//       setShow(true);
//       setShowTable(false)
//       console.log("show from dh,",show);
//       console.log("tanle from dh,",showTable);

//     }
//   }, [selectedBook]);

//   return (
//     <div className="overflow-x-auto mt-3 w-full">

//       {/* {error && <div className="text-red-500">{error}</div>} */}

//       { showTable ? (
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pages</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click to View</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {books.map((book, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.id}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.bookName}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.author}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.price}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.pages}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   <button onClick={() => handleViewBook(book)} className="bg-green-400 rounded-lg text-white px-4 text-xl">View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//      ) : null }
//       {JSON.stringify(show)  }
//       {JSON.stringify(showTable)  }

//     { show ?

//     <div>
//     <View show={show} setShow={setShow} selectedBook={selectedBook}  />
//     </div>
//      : null}
//     </div>
//   );
// }

// export default DashboardHome;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { MyContext } from '../MyContext'; // If you need context, make sure to utilize it
// import View from '../components/View';

// function DashboardHome() {
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [show, setShow] = useState(false);
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null); // Added for error handling

//   const getBookData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/admin/allBooks');
//       setBooks(response.data.result.result.rows);
//       console.log(response.data.result.result);
//     } catch (error) {
//       console.error('Error fetching book data:', error);
//       setError('Failed to fetch book data. Please try again later.'); // User feedback on error
//     }
//   };

//   const handleViewBook = (book) => {
//     setSelectedBook(book);
//     localStorage.setItem("viewBook", JSON.stringify(book));
//     setShow(true);
//   };

//   useEffect(() => {
//     getBookData();
//   }, []);

//   useEffect(() => {
//     if (selectedBook) {
//       setShow(true);
//     }
//   }, [selectedBook]);

//   return (
//     <div className="overflow-x-auto mt-3 w-full">
//       {error && <div className="text-red-500">{error}</div>} {/* Error message */}
//       {!show ? (
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pages</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click to View</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {books.map((book, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.id}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.bookName}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.author}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.price}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.pages}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   <button onClick={() => handleViewBook(book)} className="bg-green-400 rounded-lg text-white px-4 text-xl">View</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : null}

//       <View show={show} setShow={setShow} />
//     </div>
//   );
// }

// export default DashboardHome;

// import axios from 'axios';
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { MyContext } from '../MyContext';
// import View from '../components/View';

// function DashboardHome() {
//   const [selectedBook, setSelectedBook] = useState(null);
//     const [show,setShow]=useState(false)

//     const [books, setBooks]=useState([])

//       const getBookData = async () => {
//         try {
//           const response = await axios.get('http://localhost:8000/admin/allBooks');
//           setBooks(response.data.result.result.rows);
//           console.log(response.data.result.result);
//         } catch (error) {
//           console.error('Error fetching book data:', error);
//         }
//       };

//       const handleViewBook =(book)=>{
//         setSelectedBook(book)
//         console.log(selectedBook);
//         localStorage.setItem("viewBook",JSON.stringify(book))
//         setShow(true)
//         console.log( "show-", show);

//       }

//       useEffect(()=>{
//         setShow(true)
//         console.log("Show from t he effect",show);
//       },[selectedBook])
//       useEffect(() => {
//         getBookData();
//       }, []);
//   return (

//     <div className="overflow-x-auto mt-3 w-[100%]">
//       {!show ?

//     <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//             <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">price</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">pages</th>
//                 {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th> */}

//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click to View</th>
//             </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//             {books.map((book, index) => (
//                 <tr key={index}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.id}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.bookName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.author}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.price}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.pages}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><button onClick={()=>handleViewBook(book)} className='bg-green-400 rounded-lg text-white  px-4 text-xl'>View </button></td>

//                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"><button className='p-2 w-[100px]  text-white font-bold ' style={user.status=='activated' ? {backgroundColor:'red'}:{backgroundColor:'green'}} onClick={()=>handleChangeStatus(user)}>{user.status=='activated' ? 'Deactive':"Active"}</button></td> */}

//                 </tr>
//             ))}
//         </tbody>
//     </table>

//     :null}

//     <View show={show} setShow={setShow}></View>
// </div>

//   )
// }

// export default DashboardHome

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import View from '../components/View';

// function DashboardHome() {
//     const [show, setShow] = useState(false);
//     const [books, setBooks] = useState([]);
//     const [selectedBook, setSelectedBook] = useState(null); // State to hold the selected book

//     const getBookData = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/admin/allBooks');
//             setBooks(response.data.result.result.rows);
//             console.log(response.data.result.result);
//         } catch (error) {
//             console.error('Error fetching book data:', error);
//         }
//     };

//     const handleViewBook = (book) => {
//         setSelectedBook(book); // Set the selected book
//         setShow(true); // Show the View component

//     };

//     useEffect(() => {
//         getBookData();
//     }, []);

//     return (
//         <div className="overflow-x-auto mt-3 w-[100%]">
//             {!show ? (
//                 <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pages</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Click to View</th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {books.map((book, index) => (
//                             <tr key={index}>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.id}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.bookName}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.author}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.price}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.pages}</td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                                     <button onClick={() => handleViewBook(book)} className='bg-green-400 rounded-lg text-white px-4 text-xl'>View</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 <View book={selectedBook} setShow={setShow} />
//             )}
//         </div>
//     );
// }

// export default DashboardHome;

// import axios from 'axios';
// import React, { useContext, useEffect, useRef, useState } from 'react'
// import { MyContext } from '../MyContext';

// function DashboardHome() {

//     const [books, setBooks]=useState([])
//     const divref=useRef(null)
//   // divref.style.backgroundColor = "blue"
//       const getBookData = async () => {
//         try {
//           const response = await axios.get('http://localhost:8000/admin/allBooks');
//           setBooks(response.data.result.result.rows);
//           console.log(response.data.result.result);
//         } catch (error) {
//           console.error('Error fetching book data:', error);
//         }
//       };

//       useEffect(() => {
//         getBookData();
//       }, []);
//   return (

//       <div className='w-[100%] h-[100%] flex'>

//        <div className='mt-10 flex flex-wrap gap-8'>
//          {

//          books.map((item) => (
//            <div   key={item.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//              <a href="#">
//                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.bookName}</h5>
//              </a>
//              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.author} - {item.price}</p>
//              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                Read more
//                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
//                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
//                </svg>
//              </a>
//            </div>
//          ))}
//        </div>

//    </div>

//   )
// }

// export default DashboardHome
