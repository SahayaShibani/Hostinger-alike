import React from 'react';
import star from './assets/star.png';
import grpStar from './assets/grpstar.png'

export default function MemberComponents({data}) {

  return (
    <div style={{width:360 ,borderRadius:10 , overflow:'hidden' , border:'1px solid #b39ef3'}}>
        <div style={{display:'flex' , alignItems:'center', backgroundColor:'#f4f5ff' , padding:20}}>
           <img src={data?.img} width={70} height={70}></img>
           <div style={{paddingLeft:8}}>
            <p style={{margin:0 , fontWeight:'bold' , color:"#2f1c6a" , textAlign:'start'}}>{data?.name}</p>
            <p style={{margin:0 , color:"#2f1c6a" , fontSize:15 , textAlign:'start'}}>{data?.role}</p>
           </div>
        </div>
        <div style={{marginTop:25 , padding:15 , display:'flex' , flexDirection:'column'}}>
         <img src={grpStar} width={150} height={40}></img>
         <p style={{textAlign:'start' , fontSize:15}}>
          {data?.desc}
         </p>
         <p style={{textAlign:'start' , fontWeight:"bold" , color:"#2f1c6a" , fontSize:17}} >Read the full story</p>
        </div>
    </div>
  )
}
