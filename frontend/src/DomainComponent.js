import React from 'react'

export default function DomainComponent({data}) {


  return (
    <div style={{width:data?.isHorizontal ? "100%" : "45%" , display:'flex' , flexDirection:data?.isHorizontal ? "row" : 'column' , overflow:'hidden' , borderRadius:20}}>
        <img src={data?.img}></img>
        <div style={{display:'flex',flexDirection:'column' , alignItems:'center' , justifyContent:'center' , backgroundColor:'#fff' , padding:"5%" , width:data?.isHorizontal ? 100/2 + "%" : "90%"}}>
         <span style={{backgroundColor:"#d5dfff"  , fontWeight:'bold', padding:10 , borderRadius:50}}>
            <p style={{margin:0 , color:"#2f1c6a"}}>{data?.text1}</p>
         </span>
         <h2 style={{ color:"#2f1c6a"}}>{data?.text2}</h2>
         <p style={{textAlign:"justify" , color:"#2f1c6a"}}>{data?.desc}</p>
        </div>
    </div>
  )
}
