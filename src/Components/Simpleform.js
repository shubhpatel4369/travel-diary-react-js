import React, { useState } from 'react'

export const Simpleform = () => {

    const[email, setemail]=useState('')
    const[password,setpassword]=useState('')

    const emailHandler = (e) => {
        console.log(e.target.value)
        setemail(e.target.value)
    }

    const passwordHandler = (e) => {
        console.log(e.target.value)
        
    }

    const submit = (e) =>{
        e.preventDefault()
        alert("email and password enter Successfully: "+email+" "+password)
        console.log("submit called....")
    }
    return (
    <form onSubmit={submit}>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>

    <div class="form-group">
    <label for="exampleFormControlTextarea1">Feedback</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    
    <button type="submit " class="btn btn-primary my-4">Submit</button>
  </form>
  )
}
