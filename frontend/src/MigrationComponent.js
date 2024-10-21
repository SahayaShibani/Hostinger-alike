import React from 'react'

export default function MigrationComponent({data}) {
  return (
    <div style={{width:'400px' , display:"flex" , justifyContent:"start" , flexDirection:"column" , alignItems:'start' , backgroundColor:"#2f1c6a" , padding:"20px" , borderRadius:20}}>
        <div>
            <img src={data?.img}></img>
        </div>
        <h3 style={{color:"#fff"}}>{data?.title}</h3>
        <p style={{color:"#fff" , textAlign:'start'}}>{data?.desc}</p>
    </div>
  )
}
