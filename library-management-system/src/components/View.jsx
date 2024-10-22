import axios from "axios";
import React, { useContext } from "react";
import { MyContext } from "../MyContext";

function View({ setShow, setShowTable, book }) {
  const { render, setRender } = useContext(MyContext);
  const handleClick = () => {
    setShow(false);
    setShowTable(true);
  };
  const handleDelete = async () => {
    console.log(book.id);

    const result = await axios.delete(
      `http://localhost:8000/admin/deleteBook/${book.id}`,
    );
    if (result.data.result.status) {
      setRender((val) => !val);
      setShow(false);
      setShowTable(true);
    }
  };

  return (
    <div className="w-[70%] flex flex-col justify-center items-center  text-white">
      <div className="overflow-x-auto  w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Field
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                ID
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                {book.id}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                Book Name
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                {book.bookName}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                Author
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                {book.author}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                Price
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                {book.price}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                Pages
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                {book.pages}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                Created At
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                {new Date(book.createdAt).toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                Updated At
              </td>
              <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">
                {new Date(book.updatedAt).toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full flex mt-5 justify-around items-center">
        <button onClick={handleDelete} className="p-2 rounded bg-[#3B3B41]">
          Delete
        </button>
        <button onClick={handleClick} className="p-2 rounded bg-[#3B3B41]">
          Close
        </button>
      </div>
    </div>
  );
}

export default View;
