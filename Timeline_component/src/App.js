import "./App.css";
import React from "react";
import Jobs from "./Jobs";
function App(){
  console.log(Jobs[0])
  return (

<div class="timeline">
  <div class="container right">
    <div class="content">
      <h2>{Jobs[0].Position}</h2>
      <p>{Jobs[0].company}</p>
      <p>{Jobs[0].startDate} - present . 10 months</p>      
      <p>{Jobs[0].location} , {Jobs[0].state} , {Jobs[0].country}</p>
    </div>
  </div>
  
  <div class="container right">
    <div class="content">
      <h2>{Jobs[1].company}</h2>
      <p>{Jobs[1].startDate}, 1 year 6 months</p>  
      
      <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li>{Jobs[1].Position}</li></h4>
      <p>{Jobs[1].startDate} , {Jobs[1].endDate}, 1 year 2 mos</p>  
      <p>{Jobs[2].location} , {Jobs[2].state}</p>
      
      <h4>&nbsp;&nbsp;&nbsp;<li>{Jobs[2].Position}</li></h4>
      <p>{Jobs[2].company}</p>
      <p>{Jobs[2].startDate} - {Jobs[2].endDate} . 5 months</p>      
      <p>{Jobs[2].location} , {Jobs[2].country}</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>{Jobs[3].Position}</h2>
      <p>{Jobs[3].company}</p>
      <p>{Jobs[3].startDate} - {Jobs[3].endDate} . 5 months</p>      
      <p>{Jobs[3].location} , {Jobs[3].state} , {Jobs[3].country}</p>
    </div>
  </div>
</div>
  )
}
export default App