import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import HeaderDashboard from '../components/HeaderDashboard'
import axios from 'axios';
import { MyContext } from '../MyContext';


function AddBook() {
    // const {hideSidebar, setHideSidebar}=useContext(MyContext)
    const [formData, setFormData] = useState({
        bookName: '',
        bookId: '',
        author: '',
        pages: '',
        price: '',  
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to the server)
        const response=await axios.post('http://localhost:8000/admin/addBook', formData);
        console.log(response);
        if(response.data.result.status){
            setFormData({
                bookName: '',
                bookId: '',
                author: '',
                pages: '',
                price: '',
            })
         }
       
    };
  return (
    <div className='w-[100%] h-[100%] bg-[#E5E7EB] flex '>
    
   
   <div  className='w-[100%]'>
      
       <div>

       <form onSubmit={handleSubmit} className="bg-white py-[110px] w-[100%] rounded shadow-md">
         

         <div className='flex w-full  justify-around items-center '>
         <div>
           <div className="mb-4 w-full">
                <label className="block text-gray-700 mb-1" htmlFor="userName">
                  Book Name
                </label>
                <input
                    type="text"
                    name="bookName"
                    id="bookName"
                    value={formData.bookName}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="author">
                   Author
                </label>
                <input
                    type="text"
                    name="author"
                    id="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor="pages">
                   Pages
                </label>
                <input
                    type="tel"
                    name="pages"
                    id="pages"
                    value={formData.pages}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>
           </div>

          <div>
          <div className="mb-4">
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
                <label className="block text-gray-700 mb-1" htmlFor="price">
                    Price
                </label>
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
            </div>

           

          </div>
         </div>
           <div className='flex justify-center items-center'>
           <button
                type="submit"
                className="w-[20%] bg-[#081029] text-white font-bold py-2 rounded hover:bg-blue-500"
            >
                Add Book
            </button>
           </div>
        </form>


       </div>
      
   </div>


   </div>
  )
}

export default AddBook