import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/commonComponents/Sidebar";
import HeaderDashboard from "../../components/commonComponents/HeaderDashboard";
import axios from "axios";
import SuccessCard from "../../components/commonComponents/SuccessCard";
import { MyContext } from "../../MyContext";
 

function AddUser() {
  const [success, setSuccess] = useState(false);
  const { render, setRender } = useContext(MyContext);
  const [userId, setUserId] = useState();
  const text = "User Added Successfully";

  const [formData, setFormData] = useState({
    userName: "",
    userClass: "",
    phoneNumber: "",
    address: "",
    email: "",
    password: "",
  });
  useEffect(()=>{
console.log("formData---",formData);
  },[formData])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:8000/admin/register",
      formData,
    );
    console.log(response);
    if (response.data.result.status) {
      setFormData({
        userName: "",
        userClass: "",
        phoneNumber: "",
        address: "",
        email: "",
        password: "",
      });
    }
    console.log("id from response=---", response.data.result.result.id);
    setRender((val) => !val);
    setSuccess(true);
    setUserId(response.data.result.result.id);

    setTimeout(() => setSuccess(false), 4000);
  };
  return (
    <div className="w-[100%] h-[100%] bg-[#E5E7EB] flex ">
      {/* <RegistrationForm></RegistrationForm> */}

      <div className="w-[100%]">
        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-white flex flex-col justify-center items-center py-[110px] w-[100%] rounded shadow-md"
          >
            <SuccessCard
              id={"User Id :" + userId}
              text={text}
              success={success}
            ></SuccessCard>

            {!success ? (
              <div className="flex w-full  justify-around items-center ">
                <div>
                  <div className="mb-4 w-full">
                    <label
                      className="block text-gray-700 mb-1"
                      htmlFor="userName"
                    >
                      User Name
                    </label>
                    <input
                      type="text"
                      name="userName"
                      id="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-1"
                      htmlFor="userClass"
                    >
                      User Class
                    </label>

                    <select
name="userClass"
                      id="userClass"
value={formData.userClass}
                  onChange={handleChange}
                  className="p-2 border-[2px] border-gray-500 rounded-2xl"
                >
                  <option name="userClass" value="10">
                    Class 10
                  </option>
                  <option name="userClass" value="11">
                    Class 11
                  </option>
                  <option name="userClass" value="12">
                    Class 12
                  </option>
                  <option name="userClass" value="bca-1">
                    BCA 1 Year
                  </option>
                  <option name="userClass" value="bca-2">
                    BCA 2 Year
                  </option>
                  <option name="userClass" value="bca-3">
                    BCA 3 Year
                  </option>
                  <option name="userClass" value="mca-1">
                    MCA 1 Year
                  </option>
                  <option name="userClass" value="mca-2">
                    MCA 2 Year
                  </option>
                  {/* <option value='bca-1'>BCA 1 Year</option> */}
                </select>
                    {/* <input
                      type="text"
                      name="userClass"
                      id="userClass"
                      value={formData.userClass}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    /> */}
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-1"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
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
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      className="block text-gray-700 mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                </div>
              </div>
            ) : null}

            {!success ? (
              <div className="flex w-[100%] justify-center items-center">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-[20%] bg-[#081029] text-white font-bold py-2 rounded hover:bg-blue-500"
                >
                  Add User
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
