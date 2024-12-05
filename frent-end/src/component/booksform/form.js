import React from 'react';
import axios from "axios";
import { useState } from 'react';
import Swal from 'sweetalert2';
import "./form.css"

function FormBook() {
    const [formData, setFormData] = useState({
        _id: "",
        title: "",
        author: "",
        description: "",
        image: "",
        available: false,
        createdAt: "",
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/add",formData).then(res=>{const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: res.data
          });})
        setFormData({
         
          title: "",
          author: "",
          description: "",
          image: "",
          available: false,
          createdAt: "",
        }); // Reset form
      };
    
      return (
        <form onSubmit={handleSubmit}>
          
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Image URL:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Available:
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Created At:
            <input
              type="date"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Add Book</button>
        </form>
      );
}

export default FormBook;