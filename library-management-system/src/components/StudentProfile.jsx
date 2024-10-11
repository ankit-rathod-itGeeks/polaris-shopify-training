import React from 'react';

const StudentProfile = (student) => {
    console.log("student form stude profile component",student)
  return (
    <div className="p-4 ">
      <div className="container mx-auto">
        <div className="flex  gap-4">
          <div className="lg:w-1/3">
            <div className="shadow-sm rounded-lg">
              <div className="bg-transparent text-center p-4">
                <img
                  className="w-36 h-36 object-cover mx-auto border-10 border-gray-300 rounded-full"
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230624/pngtree-3d-rendering-of-a-student-listening-to-music-with-headphones-image_3671188.jpg"
                  alt="student dp"
                />
                <h3 className="text-2xl font-bold">{student.student.userName}</h3>
              </div>
              <div className="p-4">
                <p className="mb-0">
                  <strong className="pr-1">Student ID:</strong>{student.student.id}
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Class:</strong> {student.student.userClass}
                </p>
                <p className="mb-0">
                  <strong className="pr-1">Section:</strong> A
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="shadow-sm rounded-lg">
              <div className="bg-transparent border-0 p-4">
                <h3 className="mb-0 text-lg font-bold">
                  <i className="far fa-clone pr-1"></i>General Information
                </h3>
              </div>
              <div className="pt-0">
                <table className="table-auto w-full border border-gray-300">
                  <tbody>
                    <tr>
                      <th className="w-1/3 border p-2">Roll</th>
                      <td className="w-1/12 border p-2">:</td>
                      <td className="border p-2">{student.student.id}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Academic Year</th>
                      <td className="border p-2">:</td>
                      <td className="border p-2">2024</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Phone</th>
                      <td className="border p-2">:</td>
                      <td className="border p-2">{student.student.phoneNumber}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Address</th>
                      <td className="border p-2">:</td>
                      <td className="border p-2">{student.student.address}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Email</th>
                      <td className="border p-2">:</td>
                      <td className="border p-2">{student.student.email}</td>
                    </tr>
                    <tr>
                      <th className="border p-2">Status</th>
                      <td className="border p-2">:</td>
                      <td style={(student.student.status)=='activated'  ? {color:'green' } : {color:'red'}} className="border p-2">{(student.student.status).toUpperCase()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="my-6"></div>
            <div className="shadow-lg rounded-lg">
              <div className="bg-transparent border-0 p-4">
                <h3 className="mb-0 text-lg font-bold">
                  <i className="far fa-clone pr-1"></i>Other Information
                </h3>
              </div>
              <div className="pt-0 p-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
