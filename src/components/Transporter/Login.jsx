import React from 'react'
import {useForm} from 'react-hook-form'
import './styles.css'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate=useNavigate()
  let {register,handleSubmit,formState:{errors}}=useForm()

  let pushData=(data)=>{
    console.log(data)
    navigate("/transporter/Home")
  }
  return (
    <div>
      <h1 className='text-center text-success'>Transporter Login</h1>
    <div className='container p-5 border rounded' id='formArea'>
      
    <form onSubmit={handleSubmit(pushData)} className=''>
      <div className='d-flex justify-content-center border rounded border-0' id='formBody'>
        <div className=''>
        <div className='p-2'>
      <label>User Name</label>
  <input type='text' className='form-control' placeholder='username' {...register("UserName")}/>
  </div>
  <div className='p-2'>
  <label htmlFor="">Password</label>
    <input type="password" className='form-control' placeholder='Password' {...register("Password")}/>
    </div>
    < div className="p-4"> <button className='btn btn-primary' type='submit'>Login</button></div>
    </div>
    
    </div>
  
    </form>
  </div>
  </div>
  )
}

export default Login