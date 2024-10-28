import React, { useState } from 'react'

function Forms() {
    //step 1: set up state to hold form data
    const [formData,setFormData] = useState({
        name:'',
        email:'',
    })

    //step 2: update state when input changes
    const handlechange = (e) =>{
        const {name,value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value
        }))
    }

    //step 3 : handle form submission
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form data submitted',formData)
    }

    
  return (
    <>
      <div>
         <h2>Simple form data</h2>
         <form onSubmit={handleSubmit}>
            <label>Name:
            <input type='text' name='name' value={formData.name} onChange={handlechange}/>
            </label>

            <br/>
            <label>Email:
                <input type='email' name='email' value={formData.email} onChange={handlechange}/>

            </label>
            
            


         </form>

         <div>
            <h3>Form Data</h3>
            <p>Name:{formData.name}</p>
            <p>Email:{formData.email}</p>
         </div>
      </div>
    </>
    
   
   
  )
}

export default Forms