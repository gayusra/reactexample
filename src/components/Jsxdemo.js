import React from 'react'

function Jsxdemo() {
    const name = "Aksara";
    const isLogged = false;
    
    function handleChange(){
        const fruitName = ["Mango","Apple","Banana"]
        const int  = Math.floor(Math.random()*3)
        return fruitName[int]
    }

  return (
    <>
     <h3> welcome {name}!</h3>
      <h5>{isLogged ? <p>welcome back {name}</p> : <p>welcome User</p>}</h5>
      <h2>I Like {handleChange()} Fruit</h2>
    </>
  )
}

export default Jsxdemo

/* JSX (JavaScript XML) is a syntax extension for JavaScript that is commonly used with React to describe what the UI should look like. It allows you to write HTML-like code inside JavaScript, making it easier to create and structure the user interface.

 HTML-like Syntax: JSX looks similar to HTML but can include JavaScript expressions.
 Embedding Expressions: You can embed JavaScript expressions inside curly braces {} in JSX.

*/