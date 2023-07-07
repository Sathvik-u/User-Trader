import React, { useEffect, useState } from 'react'

import './styles.css'


function LandingPage() {
  let [transporters,setThem]=useState([])
  useEffect(()=>{
    fetch(" http://localhost:4000/transporters")
    .then(res=>res.json())
    .then((data)=>setThem(data))
  },[])


  return (
    <div className='container '>
      <div className='p-3'><h2 className='text-center text-success'>Select your transporter</h2></div>
    <div className='row row-cols-sm-1 row-cols-md-2 row-cols-1 row-cols-lg-4 gap-2 justify-content-center'>
      {Object.entries(transporters).map((id,val)=>
        <div className='card col p-3' key={id} id='bom'>
              <div className='card-body'>
                <h4 className=''>{transporters[val].UserName}</h4>
                <h5>{transporters[val].VehicleType}</h5>
                <h6>Required Wage: {transporters[val].ExpectedWage}</h6>
                </div>
                <div className='card-footer' id="hov">
                <p className='fs-4 text-center'>Contact information</p>
                <p className='pb-1'>Contact: <a href={"tel:"+transporters[val].Number}>{transporters[val].Number}</a></p>
                <p>Mail: <a href={"mailto:"+transporters[val].Email}>{transporters[val].Email}</a></p></div>
                
              
        </div>
        
        )}
    </div>
    </div>
  )
}

export default LandingPage