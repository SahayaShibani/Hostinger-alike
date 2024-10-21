import React from 'react';
import './Footer.css'

export default function Footer() {
    return (
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>
       <div className='footer-container'>
            <div>
                <h3>Hosting</h3>
                <p>Web hosting</p>
                <p>WordPress Hosting</p>
                <p>VPS hosting</p>
                <p>Business email</p>
                <p>Cloud hosting</p>
                <p>WooCommerce hosting</p>
                <p>Hosting for agencies</p>
            </div>
            <div>
                <h3>Domain</h3>
                <p>domains</p>
                <p>Cheap domains</p>
                <p>Free Domain Name</p>
                <p>Free SSL certificate</p>
                <p>Cloud hosting</p>
                <p>Domain transfer</p>
                <p>Domain Extensions</p>
            </div>
            <div>
                <h3>Tools</h3>
                <p>Web hosting</p>
                <p>WordPress Hosting</p>
                <p>VPS hosting</p>
                <p>Business email</p>
                <p>Cloud hosting</p>
                <p>WooCommerce hosting</p>
                <p>Hosting for agencies</p>
            </div>
            
            <div>
                <h3>Information</h3>
                <p>Web hosting</p>
                <p>WordPress Hosting</p>
                <p>VPS hosting</p>
                <p>Business email</p>
                <p>Cloud hosting</p>
                <p>WooCommerce hosting</p>
                <p>Hosting for agencies</p>
            </div>
            <div>
                <h3>Company</h3>
                <p>About Hostinger</p>
                <p>Our technology</p>
                <p>Blog</p>                
            </div>
        </div>
        <div style={{height:2 , backgroundColor:'lightgray' , width:1000}}>

        </div>
        <div style={{display:'flex' , justifyContent:'space-between' , width:1000}}>
            <p style={{fontSize:12}}>© 2004-2024 hostinger.in - Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.</p>
            <p style={{fontSize:12}}>Prices are listed without GST</p>
        </div>
        </div>
       
    )
}
