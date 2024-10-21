import React from 'react'
import img from './assets/img8.png'

export default function Quotes() {
  return (
    <div style={{display:'flex' , marginLeft:200 , marginRight:200 , marginBottom:100}}>
        <img src={img}></img>
        <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center'}}>
            <img src='https://www.hostinger.in/h-assets/svg/icons/ui-icons/ic-quotes-filled.svg#svgView(viewBox(0%200%2048%2048))' width={40} height={40}></img>
            <p style={{fontSize:50}}>Migrating to Hostinger was <span style={{color:"#673de6"}}>the best decision </span>I ever made.</p>
            <div style={{backgroundColor:'lightgray' , height:'1px'}}></div>
            <div style={{display:'flex'}}>
                <div>
                    <p style={{fontSize:25 , fontWeight:'bold' , margin:0 , color:"#673de6"}}>Gabrielle Scarlett</p>
                    <p style={{margin:0 ,color:"#673de6"}}>gabriellescarlett.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}
