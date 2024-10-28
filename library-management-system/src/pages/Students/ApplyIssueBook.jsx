import axios from "axios";
import React, { useEffect, useState } from "react";

function ApplyIssueBook() {
  const curr = JSON.parse(localStorage.getItem("currUser"));
  const [successMessage, setSuccessMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [disableButton, setDisableButon] = useState(true);
  const [requestBook, setRequestBook] = useState({
    bookId: "",
    duration: "",
  });


  useEffect(()=>{
    console.log("requestBook----",requestBook)
  },[requestBook])
  const [requestedBooks, setRequestedBook] = useState([]);

  useEffect(() => {
    const result = fetch(
      `http://localhost:8000/student/getAllrequestedBooks/${curr?.id}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRequestedBook(data.result);
      });
  }, [requestBook]);

  const handleDeleteRequest = () => {
    console.log("hanndle delete reqest claled");
  };

  const handleRequest = async () => {
    const response = await axios.post(
      `http://localhost:8000/admin/requestBook/${curr?.id}`,
      { ...requestBook },
    );

    if (response.data.result.status) {
      setRequestBook({
        bookId: "",
        duration: "",
      });
      setSuccessMessage("Requst Sent SuccessFully");
      setTimeout(() => {
        setSuccessMessage("");
      }, 1500);
    }
  };

  useEffect(() => {
    async function checkButtonDisable() {
      if (requestBook?.bookId?.length > 0 && requestBook.duration.length > 0) {
        setDisableButon(false);
      } else {
        setDisableButon(true);
      }
    }
    checkButtonDisable();
  }, [requestBook]);

  const handleChange = (e) => {

   
    const { name, value } = e.target;
    console.log("name-value---",name,value)
    setRequestBook({
      ...requestBook,
      [name]: value,
    });
    console.log(requestBook);
  };

  useEffect(() => {
    getBooksData();
  }, []);

  const getBooksData = async () => {
    const respose = await axios.get("http://localhost:8000/admin/allbooks");
    if (respose.data.result.status) {
      setBooks(respose.data.result.result.rows);
    }
  };
  return (
    <div className="w-full flex  justify-center items-center">
      <div className="mt-3 flex flex-col justify-center items-center">
        <label className="text-3xl font-medium">
          {" "}
          Select book from the given list{" "}
        </label>

        <select
          name="bookId"
          onChange={handleChange}
          className="p-2 w-[50%]  mt-4  bg-[#3B3B41] text-xl text-white rounded-lg  "
        >
          {books?.map((item, index) => (
            <option value={item.id} key={item.id} className="text-sm">
           {   console.log("itemsss",item.id)}
              {item.bookName}
            </option>
          ))}
        </select>

        <label className="mt-4 font-medium text-xl  ">No. of Days</label>
        <select className="mt-4" name="duration" onChange={handleChange}>
          {Array(7)
            .fill()
            .map((item, index) => (
              <option key={index}>{index + 1}</option>
            ))}
        </select>

        <button
          onClick={handleRequest}
          disabled={disableButton}
          style={disableButton ? { backgroundColor: "gray" } : null}
          className="bg-[#3B3B41]  text-white text-xl rounded-full p-2 hover:bg-[#464242]  mt-4 px-3"
        >
          Request
        </button>

        <label className="text-green-400 text-lg font-medium">
          {successMessage}
        </label>

        <div className="w-[100%] mt-4">
          <table className="w-full">
            <thead className="border">
              <th className="p-2 ">S.No</th>
              <th className="p-2 ">Book Name</th>
              <th className="p-2 ">Duration</th>
              <th className="p-2 ">Status</th>
              <th className="p-2 ">Delete Request</th>
            </thead>
            <tbody>
              {requestedBooks.map((book, index) => (
                <tr className={`${index % 2 == 0 ? "bg-gray-400" : null}`}>
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{book.book.bookName}</td>
                  <td className="p-2">{book.duration}</td>
                  <td className="p-2">{book.isApproved ? "Yes" : "No"} </td>
                  <td className="  p-2 text-red-400   flex items-center justify-center  ">
                    {" "}
                    <button onClick={handleDeleteRequest}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApplyIssueBook;
