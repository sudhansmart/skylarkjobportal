import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import navlogo from "../assets/Images/sky2.png"
import "../Style/Navbar.css"
import MyVerticallyCenteredModal from './Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
    const[menuOpen, setOpen]=useState(false)
    const [modalShow, setModalShow] = useState(false);

    const postjob=()=>{
      console.log("postjob")
      setModalShow(true)
    }
  return (
    <div className='nav-main p-1'>
         <nav className='P-2'>
    <Link to="/" className='title ms-5'><img src={navlogo}/></Link>
    <div className='menu' onClick={()=> setOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <ul className={menuOpen ?"open":"close"}>

        <li>
        <NavLink to="/logs">
          {/* <i className="bi bi-box-arrow-in-left"></i>  */}
          <FontAwesomeIcon icon={faRightToBracket} className='me-1' />        
             Login </NavLink>
        </li>
        <li>
          
            <NavLink to="/">  <FontAwesomeIcon icon={faHouse} className='me-1'/>Home
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
