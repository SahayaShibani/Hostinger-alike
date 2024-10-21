import React, { useState } from 'react'
import img1 from './assets/img10.png';
import img2 from './assets/img11.png'
import img3 from './assets/img12.png';
import img from './assets/img13.png'
import MigrationComponent from './MigrationComponent';
import tick from './assets/tick1.png'

export default function Performance() {

    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        width:"fit-content",
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


    const component=[{img:img1 , title:"Local data centers.Around the world." , desc:"Wherever you are in the world, your site will automatically connect to the closest data center in our global network. Extra efficiency at no extra cost."},{img:img2 , title:"Full speed ahead.Whatever the traffic." , desc:"Benefit from lower response times and rapid page-loading speeds, no matter how high your site traffic spikes."},{img:img3 , title:"Live and kicking.24/7." , desc:"Day and night your site is working hard. Our 99.9% uptime guarantee means your website is always available."}]
  return (
    <div style={{marginTop:50 , backgroundColor:"#1f1346" , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , paddingBottom:100}}>
           <div style={{marginTop:50 , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
        <h1 style={{color:"#fff"}}>Speed. Reliability. Efficiency.</h1>
        <p style={{ textAlign:'center' , margin:0 , color:'#fff'}}>Enjoy top-notch performance you can rely on and give your website visitors a smooth experience.</p>
        </div>
        <div style={{display:'flex' , gap:30 , marginTop:50}}>
            {
                component.map((item , index)=><MigrationComponent data={item}/>)
            }
        </div>
        <div style={{display:'flex' , color:'#fff' , marginTop:200 ,alignItems:'center'}}>
            <img src={img}></img>
            <div style={{width:500, display:'flex' , flexDirection:'column' , justifyContent:'start'}}>
                <h1>Total security. Complete confidence.</h1>
                <div>
                    <div style={{display:'flex' , alignItems:'center' , gap:10}}>
                        <img src={tick} width={20} height={20}></img>
                        <p style={{fontSize:15 , textAlign:'start'}}>Secure your files with regular automatic backups and two-factor authentication</p>
                    </div>
                    <div style={{display:'flex' , alignItems:'center' , gap:10}}>
                        <img src={tick}></img>
                        <p style={{fontSize:15 , textAlign:'start'}}>Encrypt your website traffic with unlimited SSL security certificates</p>
                    </div>
                    <div style={{display:'flex' , alignItems:'center' , gap:10}}>
                        <img src={tick}></img>
                        <p style={{fontSize:15 , textAlign:'start'}}>Enjoy full protection from DDoS attacks with Cloudflare protected nameservers</p>
                    </div>
                    
                </div>
                <button  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={buttonStyle}>
            Get started
        </button>
            </div>
        </div>
        
    </div>
  )
}
