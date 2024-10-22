import React, { useContext, useEffect, useState } from "react";
import UsersTableAdminProfile from "./UsersTableAdminProfile";
import axios from "axios";
import { MyContext } from "../MyContext";

function AdminProfileLists() {
  const { seeAllUsers, setSeeAllUsers } = useContext(MyContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsersData();
  }, []);

  const fetchUsersData = async () => {
    const result = await axios.get("http://localhost:8000/admin/allUsers");

    setUsers(result.data.result.result.rows);
  };

  const handleSeeAllUsers = () => {
    setSeeAllUsers((val) => !val);
  };

  return (
    <div className="w-[100%] flex mt-4">
      <div className="w-[100%] bg-[#3B3B41] text-white p-4 rounded-lg">
        <div className="w-[100%] text-xl font-bold flex justify-between items-center">
          <label>Users List</label>
          <button className="rounded-lg bg-white text-[#3B3B41] px-3 text-lg ">
            Add User
          </button>
        </div>

        <div className="w-[100%] flex flex-col">
          <UsersTableAdminProfile usersList={users}></UsersTableAdminProfile>
          <button
            onClick={handleSeeAllUsers}
            className="px-2 text-sm text-orange-700 self-end   "
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProfileLists;
