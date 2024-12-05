import React from 'react';
import {Link} from "react-router-dom";
import "./nav.css"
export default function Navbar() {
  return (
    <nav>
        <img src='' alt=''/>
        <ul>
            <li><Link to ="/">All Books</Link></li>
            <li><Link to ="/Formbook">Add Book</Link></li>
            <li><Link to ="/books">Contact Books</Link></li>
        </ul>
    </nav>
  )
}
