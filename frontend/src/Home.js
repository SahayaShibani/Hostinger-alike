import React from 'react'
import home from './assets/home.png';
import tick from './assets/tick.png';
import './Home.css'

export default function Home() {
    const tickContainer = {display:"flex" , alignItems:'center' , gap:10}
  return (
    <div className='first-container'>
      <div className='left-first-container'>
          <h1 style={{textAlign:'start'}}>Everything you need to<br/> create a website</h1>
          <p style={{fontWeight:'bold' , textAlign:'start' , marginTop:-10}}>Up to <span style={{color:'#673de6'}}>82%</span> off hosting + website builder</p>
          <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
            <span style={tickContainer}><img src={tick} width={20} height={20}></img><p style={{display:'inline' , padding:0 , margin:0}}>Free domain</p></span>
            <div style={tickContainer}><img src={tick} width={20} height={20}></img><p style={{display:'inline', padding:0 , margin:0}}>Free website migration</p></div>
            <div style={tickContainer}><img src={tick} width={20} height={20}></img><p style={{display:'inline', padding:0 , margin:0}}>24/7 customer support</p></div>
          </div>
          <div style={{display:'flex' , alignItems:'center' ,marginTop:-10}}>
          <p>&#8377;</p>
          <h1 style={{fontSize:60}}>149.00</h1><p style={{fontSize:40}}>/mo</p>
          </div>
          <div style={{marginTop:-60}}>
            <p style={{textAlign:'start' , fontWeight:'bold'}}>+3 months free</p>
          </div>
          <div style={{display:'flex' , justifyContent:'space-between', width:'70%'}}>
            <button style={{padding:"20px 30px" , backgroundColor:'#673de6' , border:"none" , color:"#fff" , borderRadius:'10px' , fontWeight:'bold'}}>Start Now</button>
            <button style={{padding:"20px 30px" , backgroundColor:'#ebe4ff' , border:"none" , color:"#673de6" , borderRadius:'10px' , fontWeight:"bold"}}>00 : 05 : 16 :39</button>
          </div>
          <div style={{display:'flex' , alignItems:'center'}}><img src='https://www.hostinger.in/h-assets/svg/icons/ui-icons/ic-shield.svg#svgView(viewBox(0%200%2020%2020))' width={20} height={20}></img>
          <p style={{fontSize:20 , marginLeft:5}}>
          30-day money-back guarantee
            </p></div>
      </div>
      <div>
       <img src={home}></img>
      </div>
    </div>
  )
}
