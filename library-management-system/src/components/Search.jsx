
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';

function Search() {
    const [books, setBooks] = useState([]);
    const [users,setUsers]=useState([])
    const [searchResult, setSearchResult] = useState([]);
    const [data, setData] = useState("");
    const navigate=useNavigate()
    const {render,setRender}=useContext(MyContext)

const handleBlurSearch=(e)=>{
    setData('')
    // e.target.value=""
    setTimeout(()=>setSearchResult([]),300)
}

    useEffect(() => {
        console.log("search --render---changed",render)
        getBooksData();
        getUsersData();
        
    },[render]); 

    const handleSearchedClick=(obj)=>{
       
       navigate('/dashboard/books')

    }

    const getBooksData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/admin/allBooks');
            setBooks(res.data.result.result.rows);
            console.log("books--",books)
        } catch (error) {
            console.log(error);
        }
    };


    const getUsersData = async () => {
        try {
            const res = await axios.get('http://localhost:8000/admin/allUsers');
            // setBooks(...books,...res.data.result.result.rows);
            setUsers(res.data.result.result.rows)
            console.log("users--",users)
            
        } catch (error) {
            console.log(error);
        }
    };

    const filterArray = (value) => {
        if (!value) {
            setSearchResult([]);
            return;
        }
        // console.log("books filter array function",books)
        
        const filteredResults = books.filter((item) => 
            item.bookName.toLowerCase().includes(value.toLowerCase())
        ); 
        
        setSearchResult(filteredResults);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setData(inputValue);
        filterArray(inputValue);
    };

    return (
        <div className='absolute top-5 '>
            <input onBlur={handleBlurSearch} className='border px-2 rounded-lg' type='search' placeholder='Search' onChange={handleInputChange} value={data} />
            <ul className='backdrop-blur-sm bg-white/80 rounded-lg px-3 '>
                {searchResult.map((book, index) => (
                    <li onClick={()=>handleSearchedClick(book)} className='hover:bg-gray-400 cursor-pointer' key={index}>{book.bookName}</li> 
                ))}
            </ul>
        </div>
    );
}

export default Search;

