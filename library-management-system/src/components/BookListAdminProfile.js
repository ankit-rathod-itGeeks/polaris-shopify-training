import React, { useContext, useEffect, useState } from "react";

import BooksTableAdminProfile from "./BooksTableAdminProfile";
import axios from "axios";
import { MyContext } from "../MyContext";

function BookListAdminProfile() {
  const { seeAllBooks, setSeeAllBooks } = useContext(MyContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetchBooksData();
  }, []);

  const fetchBooksData = async () => {
    const result = await axios.get("http://localhost:8000/admin/allBooks");

    setBooks(result.data.result.result.rows);
  };

  const handleSeBooks = () => {
    setSeeAllBooks((val) => !val);
  };

  return (
    <div className="w-[100%] flex mt-4">
      <div className="w-[100%] bg-[#3B3B41] text-white p-4 rounded-lg">
        <div className="w-[100%] text-xl font-bold flex justify-between items-center">
          <label>Books List</label>
          <button className="rounded-lg bg-white text-[#3B3B41] px-3 text-lg ">
            Add Book
          </button>
        </div>

        <div className="w-[100%] flex flex-col">
          <BooksTableAdminProfile booksList={books}></BooksTableAdminProfile>
          <button
            onClick={handleSeBooks}
            className="px-2 text-sm text-orange-700 self-end   "
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookListAdminProfile;
