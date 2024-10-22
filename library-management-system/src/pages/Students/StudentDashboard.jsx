import React, { useContext } from "react";
import Sidebar from "../../components/Sidebar";
import HeaderDashboard from "../../components/HeaderDashboard";
import { Outlet } from "react-router-dom";
import { MyContext } from "../../MyContext";

function StudentDashboard() {
  const { hideSidebar, setHideSidebar } = useContext(MyContext);
  return (
    <div className="w-[100%] flex self-end overflow-hidden ">
      <div style={hideSidebar ? { width: "10%" } : null} className="w-[20%]">
        <Sidebar />
      </div>

      <div style={hideSidebar ? { width: "90%" } : null} className="w-[80%] ">
        <div
          style={hideSidebar ? { width: "90%" } : null}
          className="fixed w-[80%] backdrop-blur-3xl rounded-lg "
        >
          <HeaderDashboard />
        </div>

        <div
          style={hideSidebar ? { width: "100%" } : null}
          className="flex z-1  flex-wrap mt-16 gap-10"
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
