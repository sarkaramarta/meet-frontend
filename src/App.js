import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import PhoneSignin from "./components/PhoneSignin";
import AllMeeting from "./pages/allMeeting";
import AddMeeting from "./pages/addMeeting";
import MeetingDetails from "./pages/meetingDetails";
import Register from "./pages/register";
import { Provider } from "react-redux";
import store from './store.js';

const App = () => {
  return (
    <div>

    <Router>
    <Provider store={store}>
      <Routes>
      
        <Route path="/" element={<PhoneSignin />} />
        <Route path="/allMeeting" element={<AllMeeting />} />
        <Route path="/addMeeting" element={<AddMeeting />} />
        <Route path="/register" element={<Register />} />
        <Route path="/meetingDetails/:id" element={<MeetingDetails />} />
      
      </Routes>
      </Provider>
      <ToastContainer />
    </Router>
    </div>
  )
}

export default App

