import React from 'react'
import Footerlogo from "../assets/Images/sky1.png"
import '../Style/Footer.css'
export const Footer = () => {
  return (

    <div maxWidthstyle="lg md  xs" style={{marginTop:"3px", backgroundColor:"#0C2340",color:"white"}}>
    <div class="row">
      <div class="col-sm " style={{marginTop:"20px"}}>
   
        <h4>About Us</h4>
       <img src={Footerlogo}/>
        <ul style={{listStyle:"none"}}>
         <li>About Seeker</li>
           <li>Terms & Conditions</li>
           <li>International Partners</li>
           <li>Privacy Policy</li>
           <li>Feedback</li>
           <li>Contact Us</li>
       
           <i class="bi bi-whatsapp me-2" id='whatsapp'></i>
            <i class="bi bi-facebook me-2" id='face'></i>
             <i class="bi bi-instagram me-2" id='insta'></i>
        
         
        </ul>
      </div>
      <div class="col-sm">
      <div class="row">
  <div class="col-6 col-sm-4">
    <h4 className='mt-4'>Job Seekers</h4>
  <ul style={{listStyle:"none"}}>
        <li>Create Account</li>
        <li>Career Counseling</li>
        <li>My jobs</li>
        <li>FAQ</li>
        <li>Video Guides</li>
       </ul></div>
  <div class="col-6 col-sm-4"><ul style={{marginTop:"20px",listStyle:"none"}}>
    <h4>Employers</h4>
    <li>Create Account</li>
    <li>Products/Service</li>
    <li>Post a Job</li></ul></div>
       </div>
      </div>
      <div class="col-sm">
      <div class="row container">
      <h4 style={{marginTop:"20px"}} >Newsletter</h4>
  <h5>Earum cumque doloribus, incidunt! Tempora voluptatibus</h5>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9857877527907!2d80.19667967381147!3d13.036576513452896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d82d157b91%3A0xf523e9cc8829b378!2sSkylark%20HR%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1707732128380!5m2!1sen!2sin" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<ul style={{listStyle:"none",display:"flex",margin:"25px"}}>
    
       </ul>
      </div>
      
    </div>
    <hr/>
    <p className='text-center '>Copyright © 2024 Skylark HR Solutions Pvt Ltd HR Solutions Pvt Ltd. 
     <i class="bi bi-whatsapp me-2 " id='whatsapp' ></i> <i class="bi bi-facebook me-2" id='face'></i>
      <i class="bi bi-instagram me-2" id='insta'></i>
    
    </p>
   
   <div>
    
   </div>
  </div>
  )
}
