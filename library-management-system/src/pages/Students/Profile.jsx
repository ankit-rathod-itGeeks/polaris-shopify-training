import React from 'react'
import StudentProfile from '../../components/StudentProfile'

function Profile() {
    const curr=JSON.parse(localStorage.getItem("currUser"))

  return (
    <div className='w-full '>



      <StudentProfile student={curr}></StudentProfile>
        
       
       </div>
  )
}

export default Profile
