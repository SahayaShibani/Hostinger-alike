
import React from 'react'

export default function RecommendComponent({data}) {
  return (
    <div>
      <p style={{padding:0,margin:0, fontSize:30 , fontWeight:'bold',fontFamily:'"Open Sans", sans-serif'}}>{data?.name}</p>
      <div style={{display:'flex' , gap:10}}>
        {
                    Array.from({ length: 5 }).map((_, index) => (
                        <img width={40} height={40} key={index} src={data?.img} alt={`Image ${index + 1}`} />
                      ))   
        }
       
      </div>
      <div style={{display:'flex' , justifyContent:'center' , alignItems:"center" , marginTop:-20}}>
        <p style={{margin:0 , padding:0 , fontSize:"20px"}}>{
            data?.TrustScore ? "TrustScore "  : "Rating "
        }
        <b>
            {
                data?.TrustScore || data?.ratings
            }
            </b></p>
        <span style={{ padding:"1px" , backgroundColor:"lightgray" , height:"30px" , marginLeft:"10px" , marginRight:"10px"}}></span>
        <p><b>{data?.reviews}</b> reviews</p>
      </div>
    </div>
  )
}
