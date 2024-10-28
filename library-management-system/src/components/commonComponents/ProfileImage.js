import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { change, setProfileImage } from '../../Redux/Features/ProfiePopUp/profilePopUpSlice';
import axios from 'axios';
import { IoClose } from "react-icons/io5";

function ProfileImage() {
const currUser=JSON.parse(localStorage.getItem('currUser'))
    const [image,setImage]=useState("")
    // const [profileImage,setProfileImage]=useState('')

    const profileImage=useSelector(state=>state.profilePopUp.profileImage)
    console.log("profileImage from redux---",profileImage);
    const dispatch=useDispatch()
 const  handleFileChange = (event) => {
  const file=event?.target?.files[0]
  
  setImage(file)
    
  };

const getProfileImage=async ()=>{
  const response=await axios.get(`http://localhost:8000/student/getProfileImage/${currUser.id}`)
  console.log("pImage---",response);
  if(response.data.status){

dispatch(setProfileImage(response.data?.result?.imageURL))
// setProfileImage(response.data?.result?.imageURL)
  }
}

 const  handleUpload = (event) => {
console.log("currUser id is --",currUser.id);

    event.preventDefault()
    const url = `http://localhost:8000/student/uploadProfileImage/${currUser.id}`;
    const formData = new FormData();
    formData.append('image', image);
    formData.append('imageName', image?.name);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      if(response.data.status){
        handleclick()
        getProfileImage()
      }
    });
     
  };

  const isPopupOpen=useSelector(state=>state.profilePopUp.value)
 
  const handleclick=()=>{
 
    dispatch(change())
    
  }
  return (
    <div className="flex justify-center items-center">
    <div style={{ backdropFilter: "blur(10px)" }}  className="absolute  inset-0">
    
    </div> 
    <div   className="absolute top-[20%] flex-col h-[70vh] w-[50%] justify-center gap-10 items-center flex bg-gray-200">
    <div className="absolute top-2 right-2">
    <button onClick={handleclick}><IoClose/></button>
  </div>
  <label>Update Profile Image</label>
  <div className="  justify-center  items-center flex">

    {image ? <img  className="w-[30%] aspect-square" src={URL.createObjectURL(image)} ></img> : <img  className="w-[40%] aspect-square" src={profileImage ? `${profileImage}` : 'https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic.jpg'}></img>}
  </div>

  <div>

  <form className="App" onSubmit={handleUpload}>
        <input type="file" name="file" onChange={handleFileChange} />
       
      </form>
  </div>
  <button onClick={handleUpload}>Upload</button>
     <label>Add Profile Image</label>
    </div>
    </div>
  )
}

export default ProfileImage
