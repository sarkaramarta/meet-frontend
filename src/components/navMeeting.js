import React from 'react'
import logo1 from '../images/a1.webp';
import "../style/navMeeting.css"
import { Link } from 'react-router-dom';

const NavMeeting = () => {
  return (
    <div className='Navbar'>
        <div className='container'>
        <img className='nav-logo' src={logo1} />
        <h3 className='nav-heading'>YOUR MEETING</h3>
        <Link to={"/addMeeting"} className='add-meeting-btn'><i className="bi bi-plus-circle-fill"></i></Link>
        </div>
    </div>
  )
}

export default NavMeeting
