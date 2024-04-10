import React, { useState } from 'react'
import { useSelector } from "react-redux"
import axios from 'axios';

const Register = () => {
    const [lat, setLat] = useState();
    const [log, setLog] = useState();
    const phoneNo = useSelector((state)=>state.phone);
    const successCallback = (position) => {
      setLat(position.coords.latitude)
      setLog(position.coords.longitude)
      };
      
      const errorCallback = (error) => {
        console.log(error);
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

      const registerHandler = () => {
        
          axios.post('http://localhost:4000/createUser',
          {
            "fname": fname,
            "lname": lname,
            "phone": phoneNo[0].phone,
            "lat": lat,
            "log": log
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
      }
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
  return (
    <div className='Register'>
      <input type='text' placeholder='First Name' value={fname} onChange={(e)=>{setFname(e.target.value)}}/>
      <input type='text' placeholder='Last Name' value={lname} onChange={(e)=>{setLname(e.target.value)}}/>
        <button onClick={()=>{registerHandler()}}>Submit</button>
    </div>
  )
}

export default Register
