import React from 'react';
import image from './assets/img14.png';
import tick from './assets/tick.png'

export default function Help() {
  return (
    <div style={{display:'flex' , justifyContent:'center' , marginBottom:100}}>
        <div style={{width:500}}>
            <h1 style={{textAlign:'start'}}>
            Here to help 24/7
            </h1>
            <div style={{display:'flex' , alignItems:'center' , gap:8}}>
                <img src={tick} width={15} height={15} style={{marginTop:-20}}></img>
                <p style={{textAlign:'start'}}>Access expert support whenever you need it via live chat and email</p>
            </div>
            <div style={{display:'flex',alignItems:'center', gap:8}}>
            <img src={tick} width={15} height={15} style={{marginTop:-20}}></img>
                <p style={{textAlign:'start'}}>Our specialists are fluent in 10+ languages so you can be sure communication will be smooth</p>
            </div>
            <div style={{display:'flex',alignItems:'center', gap:8}}>
                <img src={tick} width={15} height={15} style={{marginTop:-20}}></img>
                <p style={{textAlign:'start'}}>Spend less time waiting, our speedy support team typically responds in under 2 minutes</p>
            </div>
        </div>
       <img src={image}>
       </img>
    </div>
  )
}
