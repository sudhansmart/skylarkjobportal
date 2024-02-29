import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import navlogo from "../assets/Images/sky2.png"
import "../Style/Navbar.css"
import MyVerticallyCenteredModal from './Modal'

export const Navbar = () => {
    const[menuOpen, setOpen]=useState(false)
    const [modalShow, setModalShow] = useState(false);

    const postjob=()=>{
      console.log("postjob")
      setModalShow(true)
    }
  return (
    <div>
         <nav>
    <Link to="/" className='title'><img src={navlogo}/></Link>
    <div className='menu' onClick={()=> setOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <ul className={menuOpen ? "open":""}>

        <li>
        <NavLink to="/logs"><i className="bi bi-box-arrow-in-left"></i> Login </NavLink>
        </li>
        <li>
          
            <NavLink to="/"><i className="bi bi-house-door-fill"></i>Home
           </NavLink>
            </li>
        <li>
        <NavLink to="/jobs"><i className="bi bi-pc-display-horizontal"></i>Jobs</NavLink></li>
        <li>
        <NavLink to="/contact"><i className="bi bi-person-lines-fill"></i>Contact</NavLink></li>
        <li>
        <NavLink to="/notification"> <i className="bi bi-bell"></i>Notification</NavLink></li>
        <li>
        <NavLink to="/" className="btn btn-outline-primary" style={{borderRadius:'20px'}} onClick={postjob}> Post Job</NavLink></li>
    </ul>
   
   
   </nav>
   <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}
