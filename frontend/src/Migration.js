import React, { useState } from 'react';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import MigrationComponent from './MigrationComponent';

export default function Migration() {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        padding: '20px 60px',
        border: 'none',
        borderRadius: '10px',
        fontSize:20,
        backgroundColor: isHovered ? '#fc5185' : '#d63163', 
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
        transform: isHovered ? 'translateY(-2px)' : 'none', 
        marginTop:'50px',

    };
    const color=' #2f1c6a';
    const component = [{img:img4 , title:"3 simple steps" , desc:"Simply pick your plan, fill in the migration request form, submit it and then sit back and relax."},{img:img5 , title:"Fast and secure" , desc:"95% of websites are migrated in under 20 minutes. The other 5% are quicker than the industry average. And, your site stays live the whole time too."},{img:img6 , title:"Free" , desc:"Whether you have 1 website to migrate or 100, migration is free with all of our plans."}]
  return (
    <div style={{marginTop:50 , backgroundColor:"#1f1346" , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , paddingBottom:100}}>
        <div style={{marginTop:50 , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
        <h1 style={{color:"#fff"}}>Website migration. Made simple.</h1>
        <p style={{ width:'70%' ,textAlign:'center' , margin:0 , color:'#fff'}}>Currently hosting your website elsewhere? Join the 3+ million website owners who enjoy fast, secure and reliable web hosting here at Hostinger. Our expert team will handle everything while your site stays up and running throughout. That’s right – no downtime. No data loss. No problem.</p>
        </div>

        <div style={{display:'flex',gap:25 , marginTop:70}}>
            {
                component.map((item , index)=><MigrationComponent data={item}/>)
            }
        </div>
        <button  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={buttonStyle}>
            Get started
        </button>

    </div>
  )
}
