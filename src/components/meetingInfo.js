import React from 'react'
import "../style/meetingInfo.css"
import logo2 from "../images/Untitled.jpg";
import { Link } from "react-router-dom";

const MeetingInfo = (props) => {
   
  return (
    <div className='container'>
      <Link className="Link-meet" to={"/meetingDetails/"+props._id}>
        <div className='meeting-info-div'>
      <h3 className='meeting-title'>{props.title}</h3>
      <div className='date-time'>
        <div className='date'><i className="bi bi-calendar"></i>  {props.date}</div>
        <div className='time'><i className="bi bi-clock"></i> {props.time}</div>
      </div>
      <p className='duration'>Duration: {props.duration}</p>
        <div className='member-going'>
            <img src={logo2} />
            <img src={logo2} />
            <img src={logo2} />
            <p>0/5 members going</p>
        </div>
        <div className='invited-by'>
            <img src={logo2} />
            <p>invited by Amarta</p>
        </div>
        <div className='status'> 
            <button className='button1'>DECLINE</button>
            
            <button className='button2'>JOIN</button>
        
        </div>

    </div>
    </Link>
    </div>
    
  )
}

export default MeetingInfo
