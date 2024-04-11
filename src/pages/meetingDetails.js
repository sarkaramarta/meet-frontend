import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useSelector } from "react-redux";
import "../style/meetingDetails.css"
const MeetingDetails = () => {

  const { id } = useParams();
  console.log(id)
  const [data, setData] = useState();
  const [meetData, setMeetData] = useState();
  const phoneNo = useSelector((state)=>state.phone);

  const api2 = () => {
    axios
      .post("http://localhost:4000/getSingleMeeting", {
        meetId: id
      })
      .then(function (res1) {
        setMeetData(res1.data.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  useEffect(() => {
    axios
      .post("http://localhost:4000/meetDetails", {
        meetId: {id}
      })
      .then(function (res) {
        
        setData(res.data.data.data)
        api2();
      })
      .catch(function (error) {
        console.log(error);
      });
      
  },[]);
  return (
    <div className='container'>
      <div className='meetingDetails'>
      <h3>{data?.title}</h3>
      <div className='date-time'>
        <div className='date'><i className="bi bi-calendar"></i>{data.date}</div>
        <div className='time'><i className="bi bi-clock"></i>{data.time}</div>
      </div>
      <div className='invited-by'>
            <p>Created by Amarta</p>
        </div>
        <h4>DESCRIPTION</h4>
        <p>{data?.description}</p>
        <h4>YOUR ADDRESS</h4>
        <p>latitude:{data?.lat} </p>
        <p>longitude:{data?.log}</p>
        <h4>People Invited</h4>
        <ul >
          {
           meetData?.acceptedBy?.map((e)=>{
            if(e!==phoneNo){
              return (
              
                <li className='accepted'>{e}<p>accepted</p></li>
              ) 
            }
            
           })
          }
          {
            meetData?.pending?.map((e)=>{
             return (
              <li className='pending'>{e}<p>pending</p></li>
             )
            })
          }
          {
            meetData?.rejectedBy?.map((e)=>{
             return (
              <li className='rejected'>{e}<p>Rejected</p></li>
             )
            })
          }
          
        </ul>
        <h4>SUGGESTED PLACES</h4>
        
    </div>
    </div>
  )
}

export default MeetingDetails
