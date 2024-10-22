import axios from "axios";
import React, { useEffect, useState } from "react";

function RequestedBooks() {
  const [requestedBooks, setRequestedBook] = useState([]);
  // const [books,setBooks]=useState([]);

  const approveBook = async (book) => {
    const toApprove = book.isApproved ? false : true;
    const response = await axios.put(
      `http://localhost:8000/admin/approveBookRequest/${book.id}`,
      { toApprove },
    );
    if (response.status == 200) {
      getRequestedBooks();
    }
  };

  const getRequestedBooks = async () => {
    const response = await axios.get(
      "http://localhost:8000/admin/getRequestedBooks",
    );
    console.log("requested books -- ", response);
    if (response.data.result.status) {
      setRequestedBook(response.data.result.result);
    }
  };

  useEffect(() => {
    getRequestedBooks();
  }, []);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="container mx-auto p-4">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Book Name</th>
              {/* <th className="py-2 px-4 border-b">Author</th> */}
              <th className="py-2 px-4 border-b">Book ID</th>
              {/* <th className="py-2 px-4 border-b">Pages</th>
            <th className="py-2 px-4 border-b">Price</th> */}
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">UserId</th>
              <th className="py-2 px-4 border-b">User Name</th>
              <th className="py-2 px-4 border-b">User Email</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Approved</th>
              <th className="py-2 px-4 border-b">Click To Issue</th>
            </tr>
          </thead>
          <tbody>
            {requestedBooks.map((book, index) => (
              <>
                <tr key={index} className="text-center mt-3">
                  <td className="py-2 px-4 border-b">{book?.book?.bookName}</td>

                  {/* <td className="py-2 px-4 border-b">{book?.book?.author}</td> */}
                  <td className="py-2 px-4 border-b">{book?.book?.id}</td>
                  {/* <td className="py-2 px-4 border-b">{book?.book?.pages}</td> */}
                  {/* <td className="py-2 px-4 border-b">{book?.book?.price}</td> */}
                  <td className="py-2 px-4 border-b">{book?.book?.quantity}</td>
                  <td className="py-2 px-4 border-b">{book.user.id}</td>
                  <td className="py-2 px-4 border-b">{book.user.userName}</td>
                  <td className="py-2 px-4 border-b">{book.user.email}</td>
                  <td
                    style={
                      book.user.status == "activated"
                        ? { color: "green " }
                        : { color: "red" }
                    }
                    className="py-2 px-4 border-b"
                  >
                    {book.user.status.toUpperCase()}
                  </td>
                  <td
                    style={
                      book.isApproved ? { color: "green " } : { color: "red" }
                    }
                    className="py-2 px-4 border-b"
                  >
                    {book.isApproved ? "Yes" : "No"}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => {
                        approveBook(book);
                      }}
                      style={
                        book.isApproved ? { backgroundColor: "#BBDEFB" } : null
                      }
                      className="bg-blue-300 p-2 rounded-full font-medium text-white"
                    >
                      {book.isApproved ? "Approved" : "Approve"}
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestedBooks;
