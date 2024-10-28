import React, { useContext, useState } from "react";
import { MyContext } from "../../MyContext";

function BooksTableAdminProfile(props) {
  const { seeAllBooks, setSeeAllBooks } = useContext(MyContext);

  return (
    <table className="p-4 w-full mt-4">
      <thead className="w-full ">
        <tr className="w-full  text-[10px] uppercase ">
          <th className="text-center  py-2">Books Name</th>
          <th className="text-center  py-2">Author</th>
          <th className="text-center  py-2">Pages</th>
          <th className="text-center  py-2">Price</th>
          {/* <th className="text-center  py-2">Email</th> */}
        </tr>
      </thead>
      <tbody className="text-white text-sm w-full font-light">
        {props.booksList.map((book, index) =>
          seeAllBooks ? (
            index < 3 ? (
              <tr key={index} className="border border-gray-500 w-full">
                <td className=" p-2 text-[10px]  text-left">{book.bookName}</td>
                <td className=" p-2 text-[10px]  text-left">{book.author}</td>
                <td className=" p-2 text-[10px]  text-left">{book.pages}</td>
                <td className=" p-2 text-[10px]  text-left">{book.price}</td>
                {/* <td className=" p-2 text-[10px]  text-left">{user.email}</td> */}
              </tr>
            ) : null
          ) : (
            <tr key={index} className="border border-gray-500 w-full">
              <td className=" p-2 text-[10px]  text-left">{book.bookName}</td>
              <td className=" p-2 text-[10px]  text-left">{book.author}</td>
              <td className=" p-2 text-[10px]  text-left">{book.pages}</td>
              <td className=" p-2 text-[10px]  text-left">{book.price}</td>
              {/* <td className=" p-2 text-[10px]  text-left">{user.email}</td> */}
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default BooksTableAdminProfile;
