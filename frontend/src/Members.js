import React from 'react'
import MemberComponents from './MemberComponents'
import p1 from './assets/p1.png';
import p2 from './assets/p2.png'
import p3 from './assets/p3.png'

export default function Members() {
    const components =[{name:"Shreyash Pandey" , role:"Founder of Ethereal Corporate Network" , desc:"Unlike the previous web hosts we’ve tried, Hostinger’s user experience was much less complicated. Its hPanel is easy to use, and the response time is fast. I don’t need to train my team members on how to navigate it because everyone can learn it by themselves." ,img:p1},{name:"Pranay Jain" , role:"Founder of Ethereal Corporate Network" , desc:"Unlike the previous web hosts we’ve tried, Hostinger’s user experience was much less complicated. Its hPanel is easy to use, and the response time is fast. I don’t need to train my team members on how to navigate it because everyone can learn it by themselves." ,img:p2},{name:"Shreyash Pandey" , role:"Founder of Ethereal Corporate Network" , desc:"Unlike the previous web hosts we’ve tried, Hostinger’s user experience was much less complicated. Its hPanel is easy to use, and the response time is fast. I don’t need to train my team members on how to navigate it because everyone can learn it by themselves." ,img:p3}]
  return (
    <div style={{marginBottom:80}}>
        <h1 style={{color:"#2f1c6a"}}>Trusted by 3+ million website owners worldwide</h1>
       <div style={{display:'flex' , justifyContent:'center' , gap:25 , marginBottom:50}}>
       {
            components.map((item , index)=><MemberComponents data={item}/>)
        }
       </div>
       <button style={{borderColor:'#2f1c6a', color:"#2f1c6a" ,padding:10 , borderRadius:10 , fontWeight:"bold"}}>
        Read more stories
       </button>
    </div>
  )
}
