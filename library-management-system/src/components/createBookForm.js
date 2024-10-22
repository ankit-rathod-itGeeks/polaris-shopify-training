// import { Button, FormLayout, TextField } from '@shopify/polaris';
// import React, { useState } from 'react';

// function CreateBookForm() {
//     const [book, setBook] = useState({
//         author: '',
//         totalPages: '',
//         bookId: '',
//         price: '',
//         bookName: ''
//     });

//     // Generic change handler
//     const handleChange = (field) => (value) => {
//         setBook((prevUser) => ({
//             ...prevUser,
//             [field]: value, // Update specific field with the input value
//         }));
//     };

//     const submitting = () => {
//         alert(JSON.stringify(book)); // Show book data on submit
//     };

//     return (
//         <FormLayout>
//             <FormLayout.Group condensed>
//                 <TextField
//                     label="Author"
//                     value={book.author} // Bind the value
//                     onChange={handleChange('author')}
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="Total Pages"
//                     value={book.totalPages} // Bind the value
//                     onChange={handleChange('totalPages')}
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="Book Id"
//                     value={book.bookId} // Bind the value
//                     onChange={handleChange('bookId')}
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="Price"
//                     value={book.price} // Bind the value
//                     onChange={handleChange('price')}
//                     autoComplete="off"
//                 />
//                 <TextField
//                     label="Book Name"
//                     value={book.bookName} // Bind the value
//                     onChange={handleChange('bookName')}
//                     autoComplete="off"
//                 />
//             </FormLayout.Group>
//             <Button size='large' onClick={submitting}>Submit</Button>
//         </FormLayout>
//     );
// }

// export default CreateBookForm;
