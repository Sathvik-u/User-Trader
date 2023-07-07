import React from 'react'
import { useState ,useEffect } from 'react'
import './styles.css'
function LandingPage() {

  let [manufacturers,setThem]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:4000/manufacturers")
    .then(res=>res.json())
    .then((data)=>setThem(data))
  },[])


  return (
    <div> <div className='container '>
    <div className='p-3'><h2 className='text-center text-warning'>Available Manufacturers</h2></div>
  <div className='row row-cols-sm-1 row-cols-md-2 row-cols-1 row-cols-lg-4 gap-2 justify-content-center'>
    {Object.entries(manufacturers).map((id,val)=>
      <div className='card col p-3' key={id} id="box" >
            <div className='card-body'  >
              <h4 className=''>{manufacturers[val].CompanyName}</h4>
              <h5>{manufacturers[val].VehicleType}</h5>
              <h6>Address: {manufacturers[val].Address}</h6>
              </div>
              <div className='card-footer' id="hove">
                <p className='fs-4 text-center'>Contact information</p>
              <p>Contact: <a href={"tel:"+manufacturers[val].Number}>{manufacturers[val].Number}</a></p>
              <p>Mail: <a href={"mailto:"+manufacturers[val].Email}>{manufacturers[val].Email}</a></p></div>
              
           
      </div>
      
      )}
  </div>
  </div></div>
  )
}

export default LandingPage