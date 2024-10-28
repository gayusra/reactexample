import React, { useState } from 'react'
import '../App.css'
import { MdDeleteForever } from "react-icons/md";

function Todo() {
    const [todos,setTodo] = useState([
        {
            id:1,
            checked:false,
            todo:'Practice Coding'

        },
        {
            id:2,
            checked:true,
            todo:'Eating'
        },

    ])

   

    const handleCheck = (id) =>{
       const listcheck = todos.map((item)=>
        item.id === id ? {...item,checked:!item.checked}:item

    )
    setTodo(listcheck)

    }
    const handleDelete = (id) =>{
        const listItems = todos.filter((item)=>item.id!==id)
        setTodo(listItems)
    }
  return (
     <>
     <div className='main_todo'>
      <ul>
        {todos.map((item)=>(
            <li key={item.id}>
                <input type='checkbox' checked={item.checked}  onChange={(id)=> handleCheck(item.id)}/>
                <label>{item.todo}</label>
                <MdDeleteForever className='icon' role='button' onClick={() => handleDelete(item.id)} />
            
            </li>
        ))}
      </ul>
      </div>
       
     </>
  )
}

export default Todo

/* what is map & filter 
   const numbers = [-2,-1,0,1,2,3]
   //map eg
   const items = numbers.map(n => ({number:n}))
   console.log(items)

   //filter eg
   const items = numbers.filter(n => n>=0)
   console.log(items)
 
*/