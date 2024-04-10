import React, { useState } from 'react'
import "../style/addMeeting.css"
let nextId = 0;

const AddMeeting = () => {
    const [people, setPeople] = useState('');
    const [list, setList] = useState([]);
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
   const submitHandler = () => {

   }
    
  return (
    <div className='add-meeting'>
      <form>
        <input className='Enter' placeholder='Name of the Meeting' type='text' />
        <input className='Enter' placeholder='Date' type='date' />
        <input className='Enter' type='time' placeholder='Time' />
        <input className='Enter' type='text' placeholder='Duration' />
        <input className='Enter' type='textbox' placeholder='Short Description(Optional)' />
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
