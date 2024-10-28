import React, { useState } from 'react'

function Content() {
    const [name,setName] = useState('Sleeping')

    function handleChange(){
        const todo = ["Eating","Sleeping","Playing"]
        const int = Math.floor(Math.random()*3)
        setName(todo[int])
    }
  return (

    <>
      <p>I am {name} </p>
      <button onClick={handleChange}>click to change</button>
         {/*<h3 className='main'>I am {handleChange()}</h3>  */}
    </>
   
     
  )
}

export default Content