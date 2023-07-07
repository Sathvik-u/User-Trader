import React from 'react'
import { useForm } from 'react-hook-form';
import './styles.css'
import Dropdown from 'react-bootstrap/Dropdown';
import drive from'../Files/drive.svg'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate=useNavigate();
  let {register,handleSubmit,formState:{errors}}=useForm();
  let setData=(data)=>{
    fetch("http://localhost:4000/transporters",{
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res)=>res.json())
    .then((data)=>{console.log(data);navigate("/transporter/Home")})
    .catch((err)=>console.log("error obj",err)) 
 }
  
  return (
    <div className='d-flex p-5 align-items-center justify-content-around'>
      <div className=''><img src={drive} alt="" width="500px"/></div>
    <div className='row justify-content-center '>
    <h1 className='text-center p-2 '>Register your Vehicle</h1>
    <div className=' border rounded' id='signupbody'>
    <form onSubmit={handleSubmit(setData)} className='w-75 mx-auto'>
      <label>Your Name</label>
      <input type='text' className='form-control'{...register("UserName")}></input>
      
      <label htmlFor="">Email</label>
      <input type="email"  className='form-control'{...register("Email")}/>
      
      <label htmlFor="">Contact Number</label>
      <input type="number" name="" {...register("Number")} className='form-control' />
     
      <label>Vehicle type</label>
      <input type="text" placeholder='4 weeler or 6 wheeler or containers'  className='form-control'{...register("VehicleType")}/>

      <label htmlFor="">Expected wage(per hour)</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." {...register("ExpectedWage")}/>
<datalist id="datalistOptions">
 <option value="1000-5000"/>
  <option value="5000-10000"/>
  <option value="10000-20000"/>
  <option value="20000-40000"/>
  <option value="more than 40000"/>
  
</datalist>
      
      <label htmlFor="">password</label>
      <input type='password' className='form-control' {...register("password")}></input>
     
      <div className='text-center p-3'><button className='btn btn-warning ' type='submit' >Register</button>
      </div>
    </form>
    </div>
  </div>
  </div>
  )
}

export default SignUp;