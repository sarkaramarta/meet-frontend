import React, { useEffect, useState } from "react";
import NavMeeting from "../components/navMeeting";
import MeetingInfo from "../components/meetingInfo";
import { useSelector } from "react-redux";
import axios from "axios";

const AllMeeting = () => {
  const [data, setData] = useState();
  const [meetData, setMeetData] = useState([]);
  const [phone, setPhone] = useState("+916290753490");
  // const phoneNo = useSelector((state)=>state.phone);
  // setPhone(phoneNo);

  const apiCall = () => {
    if(data){
      data.map((e) => {
        axios
          .post("http://localhost:4000/meetDetails", {
            meetId: e.meetId,
          })
          .then(function (res) {
            meetData.push({
              data: res.data.data.data
            });
          });
      });
    }
  };
  useEffect(() => {
    axios
      .post("http://localhost:4000/getAllMeet", {
        invites: "+916290753490"
      })
      .then(function (res) {
        setData(res.data.data.data);
        apiCall();
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);
  return (
    <div className="meeting-div">
      <NavMeeting />
      {
        meetData.map((e)=> { 
          console.log(e);
          return (
            <MeetingInfo 
            key = {e.data._id}
          _id= {e.data._id}
          title= {e.data.title}
          date= {e.data.date}
          time= {e.data.time}
          duration={e.data.duration}/>
          )
        })
      }
    </div>
  )
}

export default AllMeeting;
