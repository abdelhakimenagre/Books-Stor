import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Books from './pages/books page/Books';
import FormBook from './component/booksform/form';
import Navbar from './component/navbar/navbar';


function Navigation() {
  return (
   <Router>
    <Navbar/>
    <Routes>
       
        <Route path='/' element={<Books/>}/>
        <Route path='/Formbook' element={<FormBook/>}></Route>
       
    </Routes>
   </Router>
  )
}

export default Navigation