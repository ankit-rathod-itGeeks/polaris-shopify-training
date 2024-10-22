import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useContext, useEffect, useState } from "react";
import cookies from "js-cookie";
import { HiUsers } from "react-icons/hi";

import { IoBookSharp } from "react-icons/io5";
import { LuBookOpenCheck } from "react-icons/lu";

function StudentsHome() {
  const curr = jwtDecode(cookies.get("token"));
  const [issuedCount, setIssuedCount] = useState(null);

  const getIssuedBooks = async () => {
    const response = await axios.get(
      `http://localhost:8000/admin/studentIssuedBooks/${curr?.id}`,
    );
    console.log("issued books--", response);
    if (response.data.result.status) {
      setIssuedCount(response.data.result.result.count);
    }
  };

  useEffect(() => {
    getIssuedBooks();
  }, []);
  return (
    <div className="mt-5 w-full flex gap-2 justify-between">
      <div className=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Issued Books{" "}
          </div>
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {issuedCount}
          </div>
        </div>
        <IoBookSharp className="text-5xl text-[#F65867]"></IoBookSharp>
      </div>
      <div className=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Books Returned
          </div>
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            sss
          </div>
        </div>
        <HiUsers className="text-5xl text-[#F65867]"></HiUsers>
      </div>
      <div className=" w-[20%] flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <div className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Penalty
          </div>
          <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rs.- aaa
          </div>
        </div>
        <LuBookOpenCheck className="text-5xl text-[#F65867]"></LuBookOpenCheck>
      </div>
    </div>
  );
}

export default StudentsHome;
