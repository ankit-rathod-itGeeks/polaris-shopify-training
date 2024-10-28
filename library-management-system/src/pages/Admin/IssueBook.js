import React, { useState } from "react";
import Sidebar from "../../components/commonComponents/Sidebar";
import HeaderDashboard from "../../components/commonComponents/HeaderDashboard";
import axios from "axios";

function IssueBook() {
  const [formData, setFormData] = useState({
    userId: "",
    bookId: "",
    issueDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
    const response = await axios.post(
      "http://localhost:8000/admin/issueBook",
      formData,
    );
    console.log(response);
    if (response.data.result.status) {
      setFormData({
        userId: "",
        bookId: "",
        issueDate: "",
        returnDate: "",
      });
    }
  };
  return (
    <div className="w-[100%] h-[100%] bg-[#E5E7EB] flex ">
      <div className="w-[100%]">
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white py-[110px] w-[100%] rounded shadow-md"
          >
            <div className="flex w-full  justify-around items-center ">
              <div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 mb-1" htmlFor="bookId">
                    Book ID
                  </label>
                  <input
                    type="text"
                    name="bookId"
                    id="bookId"
                    value={formData.bookId}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="userId">
                    User ID
                  </label>
                  <input
                    type="text"
                    name="userId"
                    id="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-1"
                    htmlFor="issueDate"
                  >
                    Issue Date
                  </label>
                  <input
                    type="date"
                    name="issueDate"
                    id="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 mb-1"
                    htmlFor="returnDate"
                  >
                    Retrun Date
                  </label>
                  <input
                    type="date"
                    name="returnDate"
                    id="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="w-[20%] bg-[#081029] text-white font-bold py-2 rounded hover:bg-blue-500"
              >
                Issue Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default IssueBook;
