import React, { useState } from 'react'
import "../style/addMeeting.css"
import axios from "axios"
let nextId = 0;

const AddMeeting = () => {
    const [people, setPeople] = useState('');
    const [list, setList] = useState([]);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [res1, setRes1] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [des, setDes] = useState('');

    const addtolist = () => {
       list.push({key:nextId++, num:people});
       setPeople('');
    };

    const removeItem = (Uid) => {
      const res = list.filter(myFun)
      function myFun(e){
        if(e.key !== Uid) {
          return e
        }
      }
      setList(res);
   };
   const submitHandler = async() => {
      const response = await axios.post("http://localhost:4000/createMeet",{
        
          title: title,
          description: des,
          lat: "",
          log: "",
          date: date,
          time: time,
          duration: duration
      
      });
      setRes1(response);  
   }
   console.log(res1)
  return (
    <div className='add-meeting'>
      <form>
        <input className='Enter' placeholder='Name of the Meeting' type='text' onChange={(e)=>{setTitle(e.target.value)}} />
        <input className='Enter' placeholder='Date' type='date' onChange={(e)=>{setDate(e.target.value)}} />
        <input className='Enter' type='time' placeholder='Time' onChange={(e)=>{setTime(e.target.value)}} />
        <input className='Enter' type='text' placeholder='Duration' onChange={(e)=>{setDuration(e.target.value)}} />
        <input className='Enter' type='textbox' placeholder='Short Description(Optional)' onChange={(e)=>{setDes(e.target.value)}} />
        <input className='Enter' type='text' placeholder='Enter Phone number of invities' value={people} onChange={e=>{setPeople(e.target.value)}}/>
        <button className='btn btn-primary' type='button' onClick={()=>{addtolist()}}>Add People</button>
       
            <ul>
            { 
              list.map(e => (
                <>
                    <li key={e.key} id={e.key} >{e.num}</li> 
                    <button onClick={()=> {removeItem(e.key)}}>remove</button>
                </>
                )   
                )
            
                
            }
            </ul>

        <button type='submit' className='btn btn-primary' onClick={()=>{submitHandler()}}>Submit</button> 
      </form>
    </div>
    
  )
};

export default AddMeeting
