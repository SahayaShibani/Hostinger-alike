import React from 'react';
import img from './assets/img9.png'

export default function Dashboard() {
  return (
    <div style={{display:'flex' ,alignItems:'center'}}>
        <img src={img}></img>
        <div style={{width:400 , marginLeft:50}}>
<div style={{backgroundColor:'#dadce0'  , borderRadius:50 , margin:0 ,display:'flex' , padding:10 , width:200}}>
    <p style={{textAlign:'start',margin:0 , fontSize:15 , fontWeight:'bold', color:'#2f1c6a'}}>EASY TO USE DASHBOARD</p>
</div>
<h1 style={{textAlign:'start', color:"#2f1c6a"}}>See everything. Control everything.</h1>
<p style={{textAlign:'start' , color:'#2f1c6a'}}>Keep an eye on everything that's important to you, with our easy to use dashboard.

Designed to be easy-to-use for beginners and professionals alike, you can see at a glance how your site is performing and make adjustments, among other things.</p>
        </div>
    </div>
  )
}
