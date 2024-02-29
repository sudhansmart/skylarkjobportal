import React from 'react'

import "../Style/Contact.css"
import { Footer } from './Footer'

export const Contact = () => {
  return (
  <div>
    <div className='imag'>
      <div className='imag-overlay'>
<h1 className='text-center ' style={{color:"white"}}>Contact/Home</h1>
      </div>
    </div>
    <div className="container">
  <div className="row">
    <div className="col-sm-8"><div className="card mt-5">
  <div className="card-header">
  Contact Info
  </div>
  <div className="card-body ">
    <h5 className="card-title">Contact</h5>
    <p className="card-text"><div className="mb-3">
    <label for="exampleInputEmail1">Enter Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     placeholder="Enter name" required/>
   
   
    
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message'></textarea>
</div></p>
    <a href="#" className="btn btn-primary text-end">Sumbit</a>
  </div>
</div></div>
    <div className="col-sm-4"><div className="card mt-5" >
  <div className="card-body">
    <h5 className="card-title">Contact Infor</h5>
    
    <p className="card-text"><i className="bi bi-telephone-fill"></i>  +916369227006</p>
    <p className="card-text">    <i className="bi bi-envelope-check"></i> skylarkhr@gmail.com</p>
    <h5 className="card-title">Social Network</h5>
    <a href="#" className="card-link"><i className="bi bi-whatsapp"></i></a>
    <a href="#" className="card-link"><i className="bi bi-facebook"></i></a>
    <a href="#" className="card-link"><i className="bi bi-instagram"></i></a>
  </div>
</div></div>
  </div>
  </div>
  <Footer/>
</div>
  )
}
