import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import "../style/Phone.css"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/setup";
import axios from 'axios';

function PhoneSignin() {
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState(null);
    const [otp, setOtp] = useState("");

    const sendOTP = async() => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha)
            setUser(confirmation)
        }catch(err) {
            console.error(err)
        }
    }

    const verifyOTP = async() => {
        try{
          const data = await user.confirm(otp);
          axios.post(`http://localhost:4000/verifyUser?phone=${phone}`)
          .then(function (response) {
            console.log(response);
            
          })
          .catch(function (error) {
            console.log(error);
          })
        }catch(err) {
            console.error(err)
        }
    }
  return (
    <div className="phone-signin">
      <div className="phone-content">
      <PhoneInput 
        country={"in"}
        value={phone}
        onChange={(phone)=>setPhone("+" + phone)}
      />
      <button variant='contained' onClick={sendOTP}>Send OTP</button>
      <div id="recaptcha"></div>
      <br/>
      <input onChange={(e)=>setOtp(e.target.value)} type="text" placeholder="Enter OTP"/>
      <button onClick={verifyOTP}>Verify OTP</button>
      </div>
      
    </div>
  )
}

export default PhoneSignin
