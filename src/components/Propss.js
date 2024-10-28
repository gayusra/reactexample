import React from 'react'

function Propss(props) {  //{propname,propage,propemail}
  return (
    <div>
        
         {/*  <h5>{propname}</h5>*/}
         <p>{props.email}</p>
        <h1>{props.propname}</h1>
        <h2>{props.propage}</h2>
       
       <h5>{props.myname}</h5>
    </div>
  )
}

export default Propss

{/* 
    Props are arguments passed into React components.
    props stands for properties.
    
    Pass Data
Props are also how you pass data from one component to another, as parameters.
    
    
*/}