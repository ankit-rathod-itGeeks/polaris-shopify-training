import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import HeaderDashboard from "../components/HeaderDashboard";
import axios from "axios";
import { ImCross } from "react-icons/im";
import ConfirmBox from "../components/ConfirmBox";

function SubmitBook() {
  const bookToSubmit = JSON.parse(localStorage.getItem("book"));
  const [book, setLocalBook] = useState({});
  //    setBooksList(JSON.parse(localStorage.getItem('book')))
  const [toSubmit, setToSubmit] = useState(false);
  const [selectSubmit, setSelelectSubmit] = useState(false);
  const [userId, setUserId] = useState("");
  const [toGetUserId, setToGetUserId] = useState(true);
  const [booksList, setBooksList] = useState([]);

  const handleCross = () => {
    setSelelectSubmit(false);
    setToGetUserId(true);
  };
  const handleToSubmit = () => {
    setSelelectSubmit(false);
    setToSubmit((val) => !val);
    setToGetUserId(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8000/admin/assignedBooks/${userId}`,
      );
      if (response.data.result && response.data.result.status) {
        setToGetUserId(false);
        setSelelectSubmit(true);
        setBooksList(response.data.result.result);
      } else {
        console.error(
          "Failed to assign books:",
          response.data.result.message || "Unknown error",
        );
      }
    } catch (error) {
      console.error("Error occurred while assigning books:", error);
    }
  };

  return (
    <div className="w-[100%]  h-[100%]   flex ">
      <div className="w-[100%]  h-[100%] p-10">
        {toSubmit ? (
          <ConfirmBox
            setToSubmit={setToSubmit}
            setSelectSubmit={setSelelectSubmit}
            setToGetUserId={setToGetUserId}
            bookToSubmit={bookToSubmit}
          ></ConfirmBox>
        ) : null}

        <div>
          {toGetUserId && !selectSubmit ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white py-[110px] flex justify-center gap-10 items-center flex-col w-[100%] h-[85vh] rounded shadow-md"
            >
              <label className="text-3xl">User ID</label>
              <input
                type="text"
                name="userId"
                id="userId"
                placeholder="user id"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                className="w-[25%] p-2 border border-gray-300 rounded"
                required
              />
              <div className="flex w-[50%] justify-center items-center">
                <button
                  type="submit"
                  className="w-[50%] bg-[#081029] text-white font-bold py-2 rounded hover:bg-blue-500"
                >
                  Issued Books
                </button>
              </div>
            </form>
          ) : null}
          {selectSubmit ? (
            <div className="container mx-auto mt-5">
              <div className="flex-col w-[100%] flex items-end">
                <label onClick={handleCross}>
                  <ImCross></ImCross>
                </label>
              </div>
              <table className="min-w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2">
                      Book Id
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Book Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Author</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Total Pages
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Submit</th>
                  </tr>
                </thead>
                <tbody>
                  {booksList.map((book, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {book.book.bookId}
                      </td>{" "}
                      {/* Access the book property */}
                      <td className="border border-gray-300 px-4 py-2">
                        {book.book.bookName}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {book.book.author}{" "}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {book.book.pages}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => {
                            handleToSubmit();
                            localStorage.setItem("book", JSON.stringify(book));
                          }}
                          className="bg-green-300 px-3 p-1 text-white rounded-2xl"
                        >
                          Submit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SubmitBook;
