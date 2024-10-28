import React, { useEffect, useState } from 'react'

function EffectDemo() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(()=> count + 1)
        },1000)
    },[]) //<- add empty brackets here
  return (
    <div>
        <h1>i am rendered {count} times</h1>
    </div>
  )
}

export default EffectDemo

{/* 
   In React, useEffect is a hook that allows developers to perform actions that are synchronized with the browser's lifecycle events. It's used to modify the appearance or behavior of a component, such as fetching data, setting up event listeners, or performing cleanups
      
*/}