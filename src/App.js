import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

const Home = ({ setPhoneNumber, HandleSendOTP }) => {
  return (
    <div className="App">
     <h1>Twilio OTP verification</h1>
     <label>Phone Number</label>
      <input type="text" onChange={e => setPhoneNumber(e.target.value) } />
      <Link to ="/verify-otp">
        <button onClick={HandleSendOTP}>Send OTP</button>
      </Link>
    </div>
  );
}

const VerifyOTP = ({phoneNumber}) => {
  const [otp, setOtp] = useState("");

  const handleVerifyOTP = () => {
    axios.post("http://localhost:5000/verify-otp", {phoneNumber, userOTP: otp})
    .then(res => {
      if(res.data.success) {
        toast.success("OTP verified successfully");
      }
      else {
        toast.error("Invalid OTP");
      }
    })
    .catch(error => {
      console.error(error);
      toast.error("Error verifying OTP");
    });
  }

  return (
    <div>
      <h1>Verify otp</h1>
      <label>
        OTP: 
      </label>
      <input type="text" value={otp} onChange={e=>setOtp(e.target.value)}/>
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  )
}

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendOTP = () => {
    axios.post("http://localhost:5000/send-otp", { phoneNumber })
    .then(res => {
      if(res.data.success) {
        toast.success("OTP send Successfully");
      }
      else {
        toast.error("Failed to send OTP");
      }
    }).catch(err => {
      console.error(err);
      toast.error("Failed to send OTP");
    })
  }

  return (
    <Router>
      <Routes>
        <Route path="/verify-otp" element={<VerifyOTP phoneNumber={phoneNumber} />} />
        <Route path="/" element={<Home setPhoneNumber={setPhoneNumber} handleSendOTP={handleSendOTP} />} />
      </Routes>
      <ToastContainer />
    </Router>
  )
}

export default App;

