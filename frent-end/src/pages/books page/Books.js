import axios from 'axios'
import React, { useEffect, useState } from 'react';
import "./books.css"

function Books() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetch=async()=>{await axios.get("http://localhost:3001/").then(res=>setData (res.data)).catch((err)=>console.error(err))}
        fetch();
    },[data])
  return (
    <div className='books'>
        {data?.map(book=>(
            <div className="book-card">
            <div className="book-card__cover">
              <div className="book-card__book">
                <div className="book-card__book-front">
                  <img className="book-card__img" src={book.image}/>
                </div>
                <div className="book-card__book-back"></div>
                <div className="book-card__book-side"></div>
              </div>
            </div>
            <div>
              <div className="book-card__title">
                {book.title}
              </div>
              <div className="book-card__author">
                {book.author}
              </div>
              <p>{book.description}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Books