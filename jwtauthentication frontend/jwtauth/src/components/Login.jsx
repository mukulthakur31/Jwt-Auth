import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')

    const submithandler =async (e)=>{
        e.preventDefault()
       try {
         axios.post('http://localhost:3000/login',{
            name,
            password
        },
       )

       console.log('successs');
       } catch (error) {
        console.log(error);
       }
    }

  return (
      <>
      <h1>Signup Form </h1>
      <form onSubmit={submithandler}>
        <input type="text" 
        placeholder='enter name'
        value={name}
        onChange={(e)=>{
            setname(e.target.value)
        }}
        />
                <input type="password" 
        placeholder='enter password'
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value)
        }}
        />
        <button type='submit'>Submit</button>
      </form>
      </>
  )
}

export default Login