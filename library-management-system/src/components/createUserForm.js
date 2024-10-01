// import { Button, FormLayout, TextField } from '@shopify/polaris';
// import React, { useState } from 'react';
// import axios from 'axios'
// function CreateUserForm() {
//     const [user, setUser] = useState({
//         userName: '',
//         userClass: '',
//         phoneNumber: '',
//         address: '',
//         email: ''
//     });
//     const [successRegister, setSuccessRegister] = useState(false)



//     // Generic change handler
//     const handleChange = (field) => (value) => {
//         setUser((prevUser) => ({
//             ...prevUser,
//             [field]: value, // Update specific field with the input value
//         }));
//     };
//     const submitting = async () => {
//         try {
//             const response = await axios.post('http://localhost:8000/admin/register', user);
//             if (response.status) {
//                 setSuccessRegister(true)
//                 setUser({
//                     userName: '',
//                     userClass: '',
//                     phoneNumber: '',
//                     address: '',
//                     email: ''
//                 })
//                 setTimeout(()=>{setSuccessRegister(false)},1000)
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     return (
//         <FormLayout>
//             <FormLayout.Group condensed>
//                 <TextField
//                     label="User Name"
//                     value={user.userName} // Bind the value to userName
//                     onChange={(value) => handleChange('userName')(value)} // Call the handler correctly
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="User Class"
//                     value={user.userClass} // Bind the value to userClass
//                     onChange={(value) => handleChange('userClass')(value)} // Call the handler correctly
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="Phone Number"
//                     value={user.phoneNumber} // Bind the value to phoneNumber
//                     onChange={(value) => handleChange('phoneNumber')(value)} // Call the handler correctly
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="Address"
//                     value={user.address} // Bind the value to address
//                     onChange={(value) => handleChange('address')(value)} // Call the handler correctly
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="E-mail address"
//                     value={user.email} // Bind the value to email
//                     onChange={(value) => handleChange('email')(value)} // Call the handler correctly
//                     autoComplete="off"
//                 />
//             </FormLayout.Group>
//             <Button size='large' onClick={submitting}>submit</Button>
            
//             {successRegister ? <div className='bg-green-300 rounded-md p-2 text-[20px]'>Register Successfull</div> : null}
//         </FormLayout >
//     );
// }

// export default CreateUserForm;
