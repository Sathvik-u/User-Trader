import React from 'react'
import { useForm } from 'react-hook-form'
import deal from '../Files/deal.svg'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate=useNavigate();

  let {register,handleSubmit,formState:{errors}}=useForm();
  let setData=(data)=>{
    fetch("http://localhost:4000/manufacturers",{
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res)=>res.json())
    .then((data)=>{console.log(data); navigate("/Manufacturer/Home")})
    .catch((err)=>console.log("error obj",err))
 }

  return (
    <div className='d-flex p-5 justify-content-around align-items-center'>
      <div className=''>
        <img src={deal} alt="" width="400px"/>
      </div>
    <div className='row justify-content-center '>
      <h1 className='text-center p-2'>Register your company!</h1>
      <div className=' border rounded' id='signupbody'>
      <form onSubmit={handleSubmit(setData)} className='w-75 mx-auto'>
        <label>Company Name</label>
        <input type='text' className='form-control'{...register("CompanyName")}></input>
        
        <label htmlFor="">Email</label>
        <input type="email"  className='form-control'{...register("Email")}/>
        
        <label htmlFor="">Contact Number</label>
        <input type="number" name="" {...register("Number")} className='form-control' />
       
        <label>Company Address</label>
        <textarea name="" cols="30" rows="5" className='form-control' {...register("Address")}></textarea>
        
        <label htmlFor="">password</label>
        <input type='password' className='form-control' {...register("password")}></input>
       
        <div className='text-center p-3'><button className='btn btn-warning ' type='submit'>Register</button>
        </div>
      </form>
      </div>
    </div>
    </div>
  )
}


export default SignUp