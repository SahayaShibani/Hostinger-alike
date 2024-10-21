import React from 'react';
import tick from './assets/tick.png';
import './plans.css'

const Minus = () =>{
    return(<div style={{width:'20px', height:'3px' , backgroundColor:"gray" , fontSize:15}}>

    </div>)
}

export default function PlanComponent({data}) {
    const featuresStyle = {display:"flex" , justifyContent:'start' ,alignItems:'center', gap:10 }
  return (
    <div style={{border:"1px solid lightgray" , padding:'20px' , width:'400px' , display:'flex',flexDirection:'column' , alignItems:'center',justifyContent:'center',gap:30 , borderRadius:20 , marginBottom:40}}>
        <div style={{display:'flex' , flexDirection:'column' , width:'100%'}}>
            <p style={{textAlign:"start" , fontWeight:"bold" , fontSize:30 , color:'#2f1c6a' , margin:0}}>{data?.planName}</p>
            <p style={{color:"#2f1c6a" , textAlign:"start"}}>{data?.desc}</p>
        </div>
        <div style={{display:'flex' , flexDirection:'column' , width:'100%' , justifyContent:'center'}}>
            <div style={{display:'flex' , alignItems:'center' , justifyContent:'start' , gap:10}}>
            <del style={{color:'gray'}}>₹ {data?.delRup}</del>
            <div style={{backgroundColor:'#d5dfff' , borderRadius:25}}>
                <p style={{margin:0 , padding:5 , fontSize:20 , fontWeight:'bold', color:'#2f1c6a'}}>Save {data?.savePercent}%</p>
            </div>
            </div>
            <div>
                <p style={{fontSize:30 ,color:"#2f1c6a" , textAlign:'start' , margin:0}}>₹<b style={{  fontSize:60}}>{data?.price}.00</b><span>/mo</span></p>
            </div>
        </div>
        <div style={{width:'100%',marginTop:40}}>
            <button style={{width:'100%' , border:"2px solid #673de6" , padding:20 , borderRadius:10 , color:"#673de6" , fontWeight:"bold" , fontSize:20}}>
                Choose Plan
            </button>
            <p style={{color:'gray' , textAlign:"start"}}>₹{data.renewPrice}/mo when you renew</p>
        </div>
        <div style={{backgroundColor:"lightgray" , width:"98%" , height:'1px'}}></div>
       <div className='features'>
       <div style={featuresStyle}>
            <img src={tick} width={20} height={20}></img>
            <p>1 website</p>
        </div>
        <div style={featuresStyle}>
            <img src={tick} width={20} height={20}></img>
            <p>Managed WordPress Hosting</p>
        </div>
        <div style={featuresStyle}>
            <img src={tick} width={20} height={20}></img>
            <p>50 GB SSD storage</p>
        </div>
        <div style={featuresStyle}>
            <img src={tick} width={20} height={20}></img>
            <p>Hostinger Website Builder</p>
        </div>
        <div style={featuresStyle}>
            <Minus/>
            <p>Free domain (₹749.00 value)</p>
        </div>
        <div style={featuresStyle}>
            <img src={tick}  width={20} height={20}></img>
            <p>Free automatic website migration</p>
        </div>
        <div style={featuresStyle}>
            <img src={tick}  width={20} height={20}></img>
            <p>1 email account</p>
        </div>
        <div style={featuresStyle}>
            <img src={tick} width={20} height={20}></img>
            <p>Unlimited free SSL</p>
        </div>
        <div style={featuresStyle}>
            <img src={tick} width={20} height={20}></img>
            <p>Weekly backups</p>
        </div>
        <div style={featuresStyle}>
            <Minus/>
            <p>Free CDN</p>
        </div>
        <div style={featuresStyle}>
            <Minus/>
            <p>WooCommerce</p>
        </div>
        <div style={featuresStyle}>
            <Minus/>
            <p>Dedicated IP address</p>
        </div>
        <div style={featuresStyle}>
            <Minus/>
            <p>Priority support</p>
        </div>
       </div>
       <div>
        <p style={{color:'#2f1c6a' , fontSize:22, fontWeight:'bold'}}>See more</p>
       </div>
    </div>
    
  )
}
