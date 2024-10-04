import axios from 'axios'
import React from 'react'

function ConfirmBox({setToSubmit,bookToSubmit,setToGetUserId}) {
    
    const handleComplete = () => {
       setToSubmit(false)
       setToGetUserId(true)
      }
      const handleSubmit = async()=>{
axios.delete('http://localhost:8000/admin/submitBook',{data:{userId:bookToSubmit.userId,bookId:bookToSubmit.bookId}}).then((res)=>{
// if()
if(res.data.result.status){
    alert("Submitted Successfully")
    setToSubmit(false)
    setToGetUserId(true)
}
})
      }

    return (
        <div className='mt-4 flex justify-center h-[100%] items-center '>
            <div className='bg-[#3B3B41] font-bold  h-[100%] text-white  rounded-lg p-4 text-xl w-[50%] '>
                 <div className=''> <label>User Id</label> : {bookToSubmit.userId}</div>
                <div className=''> <label>BookId</label> : {bookToSubmit.bookId}</div>
                <div className=''> <label>IssueDate</label> : {bookToSubmit.issueDate.substr(0,10)}</div>
                <div className=''> <label>ReturnDate</label> : {bookToSubmit.returnDate.substr(0,10)}</div> 
             <div className=''> <label>BookName</label> : {bookToSubmit.book.bookName}</div> 
                 <div className=''> <label>Author</label> : {bookToSubmit.book.author}</div> 

              <div className='w-full p-2 flex justify-between items-center'>
              <button onClick={handleSubmit} className='p-2 bg-white text-black rounded-lg '>Submit</button>
              <button onClick={handleComplete} className='p-2 bg-white text-black rounded-lg '>Cancel</button>
              </div>
                
                
                
                
                


            </div>
        </div>
    )
}

export default ConfirmBox
