import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
   
    <div className='center'  style={{background:'linear-gradient(120deg, #2980b9, #8e44ad)'}} >
      
<h1>Register</h1>
<form method='post' >
 <div className='txt_field'>
  <input type='text' />
  <span></span>
  <label>Username</label>
 </div>

    <div className='txt_field'>
        <input type='email'   />
        <span></span>
            <label style={{left:"25px"}} >Email</label>
    </div>
    <div className='txt_field'>
        <input type='password'    />
        
        <span></span>
        <label>Password</label>
    </div>
   <div className='pass'>Forgot Password</div>

<Link  >  <Button  type='submit' value="login"  variant="primary">login</Button></Link>

<div className='singup_link'>
    Not a Member? 
</div>
</form>
<div>

    </div>
    </div>

  )
}
