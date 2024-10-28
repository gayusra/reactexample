import React, { useRef, useState } from 'react'

function Userefdemo() {
    const [inputValue,setInputValue] = useState("")
    const inputRef = useRef()

    //console.log('getting rendered')
    const display = () =>{
      console.log(inputRef.current.value)
    }
  return (
    <>
     <input type='text' ref={inputRef} value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
     <button onClick={display}>show Input</button>
     {/* <p>my name is {inputValue}</p>  */}



    </>
  )
}
 
export default Userefdemo  

{/*
    UseRef is a built-in React hook that allows you to reference values that aren't needed for rendering. It's a unique hook because changes to a useRef don't cause the component to re-render.    


    The useRef Hook allows you to persist values between renders.

    It can be used to store a mutable value that does not cause a re-render when updated.

    It can be used to access a DOM element directly.
*/}