import React from 'react'
import DomainComponent from './DomainComponent';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';


export default function Domain() {
    const color=' #2f1c6a';

    const component = [{isHorizontal:true , text1:"HOSTING, AS IT SHOULD BE" , text2:"Fast. Secure. Reliable." , desc:"Web hosting provides everything you need to get your idea online. From where your website lives in the digital world, to where your files and data are securely stored – find and manage it all in one place.Optimized for speed, security and reliability, we’re trusted by over 3 million website owners worldwide." , img:img1},
        {isHorizontal:false, text1:"HARNESS THE POWER OF AI" , text2:"Create a website in seconds" , desc:"Web hosting provides everything you need to get your idea online. From where your website lives in the digital world, to where your files and data are securely stored – find and manage it all in one place.Optimized for speed, security and reliability, we’re trusted by over 3 million website owners worldwide.Build a website in seconds with Hostinger AI website builder. No coding or design skills required. Perfect for complete beginners, all the way to web-building pros.Follow simple steps to get your site built and filled with bespoke, search-engine friendly content. Customize it with an easy drag-and-drop editor before sharing your new website with the world." , img:img2},

        {isHorizontal:false , text1:"FREE DOMAIN WITH ANNUAL PLANS" , desc:"Web hosting provides everything you need to get your idea online. From where your website lives in the digital world, to where your files and data are securely stored – find and manage it all in one place.Optimized for speed, security and reliability, we’re trusted by over 3 million website owners worldwide.Build a website in seconds with Hostinger AI website builder. No coding or design skills required. Perfect for complete beginners, all the way to web-building pros.Follow simple steps to get your site built and filled with bespoke, search-engine friendly content. Customize it with an easy drag-and-drop editor before sharing your new website with the world." , img:img3 , text2:"Give your website a good name"}]

  return (
    <div style={{marginTop:50 , backgroundColor:"#f4f5ff" , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
        <div style={{width:'100%' , display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center'}}>
        <h1 style={{color:color}}>Your website. Sorted.</h1>
        <p style={{color:color , width:'70%' ,textAlign:'center' , margin:0}}>From building your first website and registering your domain to setting up a professional email address, launching an eCommerce store or migrating an existing website – your online success story starts here.</p>
        </div>
        <div style={{display:'flex' , gap:40 , flexWrap:'wrap' , padding:20 , alignItems:'center' , justifyContent:'start' , width:'80%'}}>
            {
                component.map((item , index)=>{
                    return(<DomainComponent data={item}/>)
                })
            }
        </div>
    </div>
  )
}
