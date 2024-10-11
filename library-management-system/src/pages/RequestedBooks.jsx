import axios from 'axios'
import React, { useEffect, useState } from 'react'

function RequestedBooks() {
    const [requestedBooks,setRequestedBook]=useState([])
    // const [books,setBooks]=useState([]);


    const getRequestedBooks=async ()=>{
        const response=await axios.get('http://localhost:8000/admin/getRequestedBooks')
        console.log("requested books -- ",response)
        if(response.data.result.status){
            setRequestedBook(response.data.result.result)
        }
    }

      useEffect(()=>{
        getRequestedBooks()
    },[])


  return (
    <div className='w-full flex justify-center items-center'>

<div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Book Name</th>
            <th className="py-2 px-4 border-b">Author</th>
            <th className="py-2 px-4 border-b">Book ID</th>
            <th className="py-2 px-4 border-b">Pages</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            {/* <th className="py-2 px-4 border-b">User Name</th>
            <th className="py-2 px-4 border-b">User Email</th>
            <th className="py-2 px-4 border-b">Status</th> */}
            <th className="py-2 px-4 border-b">Approved</th>
          </tr>
        </thead>
        <tbody>
          {requestedBooks.map((book, index) => (

            
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border-b">{book?.book?.bookName}
                <tr>
                <td>d</td>
              </tr>
              </td>
              <td className="py-2 px-4 border-b">{book?.book?.author}</td>
              <td className="py-2 px-4 border-b">{book?.book?.bookId}</td>
              <td className="py-2 px-4 border-b">{book?.book?.pages}</td>
              <td className="py-2 px-4 border-b">{book?.book?.price}</td>
              <td className="py-2 px-4 border-b">{book?.book?.quantity}</td>
              {/* <td className="py-2 px-4 border-b">{book.user.userName}</td>
              <td className="py-2 px-4 border-b">{book.user.email}</td>
              <td className="py-2 px-4 border-b">{book.user.status}</td> */}
              <td className="py-2 px-4 border-b">{book.isApproved ? 'Yes' : 'No'}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>

     
    </div>
  )
}

export default RequestedBooks
