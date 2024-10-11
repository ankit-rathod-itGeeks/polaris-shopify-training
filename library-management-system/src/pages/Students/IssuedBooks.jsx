import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../MyContext';
import Color from '../../components/Color';

function IssuedBooks() {
    const curr = JSON.parse(localStorage.getItem("currUser"));
    const { render, setRender } = useContext(MyContext);
    const [issuedBooks, setIssuedBooks] = useState([]); 

    const [penalty, setPenalty] = useState(0)

  
      

    const getPenalty = (returnedDate, todayDate) => {
        let date1 = new Date(returnedDate);
        let date2 = new Date(todayDate);


        let Difference_In_Time =
            date2.getTime() - date1.getTime();



        let Difference_In_Days =
            Math.round
                (Difference_In_Time / (1000 * 3600 * 24));

        console.log
            ("Total number of days between dates:\n" +
                date1.toDateString() + " and " +
                date2.toDateString() +
                " is: " + Difference_In_Days + " days");
        const Penalty = +Difference_In_Days * 5 > 0 ? (Difference_In_Days * 5) : '0'
        console.log(Penalty)
        // setPenalty(Penalty)
        return Penalty
    }
    const getTodayDate = () => {
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${year}-${month}-${day}`;
        console.log(currentDate); // "17-6-2022"
        return currentDate
    }

    const getIssuedBooks = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/admin/studentIssuedBooks/${curr.id}`);
            console.log("Issued books response:", response);
            if (response.data.result.status) {
                setIssuedBooks(response.data.result.result.rows);
            } else {
                console.log("No issued books found");
                setIssuedBooks([]); 
            }
        } catch (error) {
            console.error("Error fetching issued books:", error);
            setIssuedBooks([]); 
        }
    };

    useEffect(() => {
        getIssuedBooks();
    }, []); 

    return (
        <div className='w-full '>
            <div className="overflow-x-auto mt-10 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Issued Books</h2>
                <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book id</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issued Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return  Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penalty</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {issuedBooks.length > 0 ? (
                            issuedBooks.map((record, index) => (
                                
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.book.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.book.bookName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.issueDate.substr(0,10)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.returnDate.substr(0,10)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ getPenalty(record.returnDate.substr(0,10),getTodayDate())}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-4 text-sm text-gray-900 text-center">No issued books found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            
        </div>
    );
}

export default IssuedBooks;


// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'
// import { MyContext } from '../../MyContext';


// function IssuedBooks() {
//     const curr = JSON.parse(localStorage.getItem("currUser"))
//     const { render, setRender } = useContext(MyContext)
//     //   let books=[]
//     const [issuedBooks, setIssuedBooks] = useState([])

//     const getIssuedBooks = async () => {
//         const response = await axios.get(`http://localhost:8000/admin/studentIssuedBooks/${curr.id}`)
//         console.log("issued books--", response)
//         if (response.data.result.status) {
               
//             setIssuedBooks(response.data.result.result.rows)
//             console.log("issued books fbbbb------- ", issuedBooks)
//             return response.data.result.result.rows


//         }
//     }

//     useEffect(() => {
//     async function data(){
//         const result=await getIssuedBooks()
//         setIssuedBooks(result)
//         console.log("--------",issuedBooks)
//     }
//     data()
//     }, [])
//     return (
//         <div>
//             <div className="overflow-x-auto mt-10 max-w-6xl mx-auto">
//                 <h2 className="text-2xl font-bold mb-6">Issued Books</h2>
//                 <table className="min-w-full divide-y divide-gray-200 bg-white shadow-lg rounded-lg">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Title</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issued Date</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
//                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                         </tr>
//                     </thead>
//                     {/* <tbody className="bg-white divide-y divide-gray-200">
//           {issuedBooks.map((record, index) => (
//             <tr key={index}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.book.id}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.book.bookName}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(record.issuedDate).toLocaleDateString()}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(record.dueDate).toLocaleDateString()}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{record.status}</td>
//             </tr>
//           ))}
//         </tbody> */}
//                 </table>
//             </div>
//         </div>
//     )
// }

// export default IssuedBooks

