import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ApplyIssueBook() {
    const curr = JSON.parse(localStorage.getItem('currUser'))
    const [successMessage,setSuccessMessage]=useState("");
    const [books, setBooks] = useState([]);
    const [disableButton, setDisableButon] = useState(true);
    const [requestBook, setRequestBook] = useState({
        bookId: '',
        duration: ''
    });

    const handleRequest =async () => {
        const response =await axios.post(`http://localhost:8000/admin/requestBook/${curr.id}`, { ...requestBook })
         
        if (response.data.result.status) {
            setRequestBook({
                bookId: '',
                duration: ''
            })
            setSuccessMessage("Requst Sent SuccessFully")
            setTimeout(()=>{
                setSuccessMessage("")
            },1500)
        }
    }

    useEffect(() => {

        async function checkButtonDisable() {

            

            if (requestBook.bookId.length > 0 && requestBook.duration.length > 0) {
                setDisableButon(false)
            }
            else{
                setDisableButon(true)
            }

        }
        checkButtonDisable()
       
    }, [requestBook])

    const handleChange = (e) => {
        const { name, value } = e.target;
         
        setRequestBook({
            ...requestBook,
            [name]: value
        })
        console.log(requestBook)

    }


    useEffect(() => {
        getBooksData()
    }, [])

    const getBooksData = async () => {
        const respose = await axios.get('http://localhost:8000/admin/allbooks')
        if (respose.data.result.status) {

            setBooks(respose.data.result.result.rows)
        }
    }
    return (
        <div className='w-full flex  justify-center items-center'>

            <div className='mt-3 flex flex-col justify-center items-center'>
                <label className='text-3xl font-medium'> Select book from the given list </label>


                <select name='bookId' onChange={handleChange} className='p-2 w-[50%]  mt-4  bg-[#3B3B41] text-xl text-white rounded-lg  '>

                    {books.map((item, index) =>

                        <option value={item.id} key={item.id} className='text-sm'>{item.bookName}</option>
                    )}
                </select>

                <label className='mt-4 font-medium text-xl  '>No. of Days</label>
                <select className='mt-4' name='duration' onChange={handleChange}>
                    {
                        Array(7).fill().map((item, index) => (
                            <option key={index}>{index + 1}</option>
                        ))}
                </select>

                <button onClick={handleRequest} disabled={disableButton} style={disableButton ? { backgroundColor: 'gray' } : null} className='bg-[#3B3B41]  text-white text-xl rounded-full p-2 hover:bg-[#464242]  mt-4 px-3'>Request</button>

                 
              <label className='text-green-400 text-lg font-medium'>{successMessage}</label>  

                {/* <div className='flex mt-4 gap-4'>
            <div className='flex flex-col gap-3 border   p-4'>
            <label className='text-lg font-medium'>Select Issue Date</label>
            <input name='issueDate' onChange={handleChange}  type='date'></input> 
            </div>
            <div className='flex flex-col gap-3 border p-4'>
            <label className='text-lg font-medium'>Select Return Date</label>
            <input name='returnDate' onChange={handleChange}  type='date'></input> 
            </div>
            
            
            </div> */}
            </div>


        </div>
    )
}

export default ApplyIssueBook
