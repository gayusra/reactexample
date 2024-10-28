import React from 'react'

function Events() {

    function handleClick(greet){
        console.log(`thanks for clicking ${greet}`)
    }

   const handledobclk = (e) =>{
    console.log(e.target.innerText)
   }

  return (
     <>
       
       <button onClick={() => handleClick('Guys')}>Click me</button><br/>
       <button onClick={(e)=> handledobclk(e)}>Double click</button>
     </>
  )
}

export default Events

/* 
In React, click events are used to handle user interactions like button clicks or any other clickable elements. React provides an efficient way to handle these events using synthetic events, which are wrappers around native browser events to ensure cross-browser compatibility.

React click events are written as onClick and can be attached to any JSX element. When the element is clicked, the specified function is triggered. This function can be either an inline function or a named function. */