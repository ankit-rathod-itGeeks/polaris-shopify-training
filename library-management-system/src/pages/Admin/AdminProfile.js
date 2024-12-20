import React, { useContext, useEffect, useState } from "react";
import { HiUsers } from "react-icons/hi";
import AdminProfileLists from "../../components/Admin/AdminProfileLists";
import BookListAdminProfile from "../../components/Admin/BookListAdminProfile";
import TopChoices from "../../components/Admin/TopChoices";
import axios from "axios";
import { MyContext } from "../../MyContext";
import { IoBookSharp } from "react-icons/io5";
import { LuBookOpenCheck } from "react-icons/lu";
function AdminProfile() {
  useEffect(() => {
    getBooksdata();
  }, []);
  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    getAllIssuedBooks();
  }, []);
  useEffect(() => {
    getPenalty();
  }, []);

  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [penalty, setPenalty] = useState(0);
  const [issuedBooks, setIssuedBooks] = useState([]);

  const getPenalty = () => {
    axios
      .get("http://localhost:8000/admin/penaltyCollected")
      .then((res) => {
        setPenalty(res.data.result.result[0].total_amount);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getBooksdata = () => {
    axios
      .get("http://localhost:8000/admin/allBooks")
      .then((res) => {
        setBooks(res.data.result.result.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllIssuedBooks = () => {
    axios
      .get("http://localhost:8000/admin/allIssuedBooks")
      .then((res) => {
        setIssuedBooks(res.data.result.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAllUsers = () => {
    axios
      .get("http://localhost:8000/admin/allUsers")
      .then((res) => {
        setUsers(res.data.result.result.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function formatDate(date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = String(date.getDate()).padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const seconds = date.getSeconds();

    return `${day} ${month}, ${year} `;
  }
  const date = new Date();
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      <div className="w-[100%] h-[100%]  flex">
        <div className="w-[100%] flex justify-between items-center">
          <label className="text-3xl font-bold p-2 ">
            <div>
              Hello , <span className="text-[#F65867]">Admin !</span>
            </div>
            <label>{formatDate(date)}</label>
          </label>
          <select className=" text-lg mr-2 rounded-full p-1 focus:outline-none ">
            <option className=" text-sm">This week</option>
            <option className=" text-sm">This Month</option>
            <option className=" text-sm">This Year</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex gap-2 justify-between">
        <div className=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Books
            </div>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {books.length}
            </div>
          </div>
          <IoBookSharp className="text-5xl text-[#F65867]"></IoBookSharp>
        </div>
        <div className=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Users
            </div>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {users.length}
            </div>
          </div>
          <HiUsers className="text-5xl text-[#F65867]"></HiUsers>
        </div>
        <div className=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Issued Books
            </div>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {issuedBooks.count}
            </div>
          </div>
          <LuBookOpenCheck className="text-5xl text-[#F65867]"></LuBookOpenCheck>
        </div>
        <div className=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div>
            <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Penalty Collected
            </div>
            <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rs. {penalty}
            </div>
          </div>
          <HiUsers className="text-5xl text-[#F65867]"></HiUsers>
        </div>
      </div>

      <div className="w-[100%] flex gap-4">
        {/* <div className='w-[50%]'>
  <AdminProfileLists></AdminProfileLists>

</div>
<div className='w-[50%]'>
  <BookListAdminProfile></BookListAdminProfile>

</div> */}
      </div>
      {/* <div className='w-[100%] mt-4'>
<TopChoices></TopChoices>
 </div> */}
    </div>
  );
}

export default AdminProfile;
