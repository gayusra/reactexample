import React, { useState } from 'react'

function StateDemo() {
    const [num,setNum] = useState(0)
    const [color,setColor] = useState('red')

    const handleAdd=()=>{
        setNum((currValue) =>{
            return currValue +1;
        })
    }
  return (
      <div>
       {/*<h1>{num}</h1>
        <button onClick={handleAdd}>Add</button>*/}
       <h1>My fav color is {color} </h1>

       <button type='button' onClick={() => setColor('blue')}>Blue</button>
       <button type='button' onClick={() => setColor('pink')}>Pink</button>
      </div>
  )
}

export default StateDemo

{/* 
    React Hooks
    The useState hook allows you to add state to your function components. It helps store and update data that might change over time, such as form inputs or user interaction data.
    
    Hooks were added to React in version 16.8.

   Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.    

   You must import Hooks from react.

   Here we are using the useState Hook to keep track of the application state.

   State generally refers to application data or properties that need to be tracked.

   Hook Rules
   There are 3 rules for hooks:

   Hooks can only be called inside React function components.
   Hooks can only be called at the top level of a component.
   Hooks cannot be conditional
    
*/}