import axios from 'axios';
import React, { useEffect, useState } from 'react'

function History() {
    const curr = JSON.parse(localStorage.getItem("currUser"));

    const [history,setHistory]=useState([])

    useEffect(()=>{
       async function getHistory(){
        const response = await axios.get(`http://localhost:8000/admin/studentBooksHistory/${curr.id}`);
        console.log(response)
        setHistory(response.data.result.result.rows  )
       }
       getHistory()
    },[])
  return (
    <div className='w-full px-3'>
       <div className="w-full overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-2 border-b">ID</th>
            <th className="px-2 py-2 border-b">Book Name</th>
            <th className="px-2 py-2 border-b">Author</th>
            <th className="px-2 py-2 border-b">Pages</th>
            <th className="px-2 py-2 border-b">Issue Date</th>
            <th className="px-2 py-2 border-b">Return Date</th>
            <th className="px-2 py-2 border-b">Penalty</th>
            <th className="px-2 py-2 border-b">Submitted</th>
            <th className="px-2 py-2 border-b">Returned Date</th>
            {/* <th className="px-2 py-2 border-b">Created At</th>
            <th className="px-2 py-2 border-b">Updated At</th> */}
          </tr>
        </thead>
        <tbody>
          {history.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-2 py-2 border-b">{row.id}</td>
              <td className="px-2 py-2 border-b">{row.book.bookName}</td>
              <td className="px-2 py-2 border-b">{row.book.author}</td>
              <td className="px-2 py-2 border-b">{row.book.pages}</td>
              <td className="px-2 py-2 border-b">{new Date(row.issueDate).toLocaleDateString()}</td>
              <td className="px-2 py-2 border-b">{new Date(row.returnDate).toLocaleDateString()}</td>
              <td className="px-2 py-2 border-b">{row.penalty}</td>
              <td className="px-2 py-2 border-b">{row.submitted}</td>
              <td className="px-2 py-2 border-b">{row.actualReturnedDate}</td>
              {/* <td className="px-2 py-2 border-b">{new Date(row.createdAt).toLocaleString()}</td>
              <td className="px-2 py-2 border-b">{new Date(row.updatedAt).toLocaleString()}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default History
