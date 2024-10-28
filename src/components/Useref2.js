import React, { useEffect, useRef, useState } from 'react'

function Useref2() {
    const [inputValue,setInputValue] = useState('')
    const previousVal = useRef('')

    useEffect(()=>{
        previousVal.current = inputValue
    },[inputValue])
  return (
    <>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> 
      <h2>Current value:{inputValue}</h2>
      <h2>Previousvalue:{previousVal.current}</h2>
    </>
  )
}



    {/* Tracking State Changes
     The useRef Hook can also be used to keep track of previous state values.

    This is because we are able to persist useRef values between renders. */}

export default Useref2

