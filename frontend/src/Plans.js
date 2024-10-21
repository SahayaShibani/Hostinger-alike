import React from 'react'
import PlanComponent from './PlanComponent'

export default function Plans() {
    const plans=[{planName:"Single" , desc:"A great solution for beginners", delRup:"399.00" ,savePercent:82,price:69.00 , renewPrice:179 , isPopular:false},{planName:"Premium" , desc:"Everything you need to create your website.", delRup:"599.00" ,savePercent:75,price:149.00 , renewPrice:249 , isPopular:true},{planName:"Business" , desc:"Level up with more power and enhanced features.", delRup:"699.00" ,savePercent:64,price:249.00 , renewPrice:499 , isPopular:false},{planName:"Cloud Startup" , desc:"Enjoy optimised performance & guaranteed resources.", delRup:"1699.00" ,savePercent:58,price:699.00 , renewPrice:1279 , isPopular:false}]

  return (
   <div style={{marginBottom:40}}>
    <p style={{margin:0,padding:0, fontSize:'40px' , fontWeight:'bold', color:"#2f1c6a"}}>Pick your perfect plan</p>
    <p style={{margin:20,padding:0, color:"#2f1c6a"}}>Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free.</p>
    <div style={{display:'flex' , justifyContent:'space-evenly'}}>
        {
            plans.map((item,index)=><PlanComponent data={item}/>)
        }
    </div>
    <div>
        <p style={{fontWeight:'bold' , color:"#2f1c6a"}}>Payment terms</p>
    </div>
   </div>
  )
}
