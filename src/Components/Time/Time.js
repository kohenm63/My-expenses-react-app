import React,{useState} from "react";
import './style.css';

function Time() {

setInterval(updateTime,1000)
let now = new Date().toLocaleTimeString();


const [time, setTime] = useState(now)

function updateTime(){
const newTime = new Date().toLocaleTimeString();
  setTime(newTime)
}



return (
    <div className="time">
      <h2>{time}</h2>
     
    </div>
  );
}

export default Time;
