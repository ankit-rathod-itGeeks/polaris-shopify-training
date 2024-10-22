import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";

function UsersTableAdminProfile(props) {
  const { usersList } = props;
  const { seeAllUsers, setSeeAllUsers } = useContext(MyContext);

  return (
    <table className="p-3 w-full mt-4">
      <thead className="w-full ">
        <tr className="w-full  text-[10px] uppercase ">
          <th className="text-center  py-2">User Name</th>
          <th className="text-center  py-2">User Class</th>
          <th className="text-center  py-2">Phone Number</th>
          <th className="text-center  py-2">Address</th>
          <th className="text-center  py-2">Email</th>
        </tr>
      </thead>
      <tbody className="text-white text-sm w-full font-light">
        {usersList.map((user, index) =>
          seeAllUsers ? (
            index < 3 ? (
              <tr key={index} className="border border-gray-500 w-full">
                <td className=" p-2 text-[10px]  text-left">{user.userName}</td>
                <td className=" p-2 text-[10px]  text-left">
                  {user.userClass}
                </td>
                <td className=" p-2 text-[10px]  text-left">
                  {user.phoneNumber}
                </td>
                <td className=" p-2 text-[10px]  text-left">{user.address}</td>
                <td className=" p-2 text-[10px]  text-left">{user.email}</td>
              </tr>
            ) : null
          ) : (
            <tr key={index} className="border border-gray-500 w-full">
              <td className=" p-2 text-[10px]  text-left">{user.userName}</td>
              <td className=" p-2 text-[10px]  text-left">{user.userClass}</td>
              <td className=" p-2 text-[10px]  text-left">
                {user.phoneNumber}
              </td>
              <td className=" p-2 text-[10px]  text-left">{user.address}</td>
              <td className=" p-2 text-[10px]  text-left">{user.email}</td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default UsersTableAdminProfile;
