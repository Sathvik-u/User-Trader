import React from 'react'
import Question from './Files/question.svg'
import Factory from './Files/factory.svg'
import Transport from './Files/transport.svg';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate=useNavigate();


  return (
    <div className='container-fluid w-100'>
      <div className='text-center w-100 bg-dark text-white'>
        <img src={Question} width="50%"/>
      <h2> Want to Find Your transporter ?</h2>
      <h2> Want to Transport ?</h2>
      </div>
      <div className='d-flex text-center'>
      <div className='w-50 border border-warning rounded-start border-5 m-3 p-3' id='one'>
        <h2>Manufacturer ..?</h2>
        <img src={Factory} width="50%"/>
        <h4>Not yet registered</h4>
        <p>Register <span><a href="/Manufacturer/SignUp">Hear...</a></span></p>
        <h4>Arelady have an account ?</h4>
        <p>Login <span><a href="/Manufacturer/Login">Hear...</a></span></p>
      </div>
      <div className='w-50 border border-success rounded-end border-5 m-3 p-3' id='two'>
      <h2>Transporter ..?</h2>
      <img src={Transport} width="50%"/>
      <h4>Not yet registered</h4>
      <p>Register <span><a href="/Transporter/SignUp">Hear...</a></span></p>
      <h4>Arelady have an account ?</h4>
        <p>Login <span><a href="/Transporter/Login">Hear...</a></span></p>
      </div>
      </div>
    </div>
  )
}

export default Home