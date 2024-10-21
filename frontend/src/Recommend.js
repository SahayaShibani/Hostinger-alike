import React from 'react'
import RecommendComponent from './RecommendComponent'

export default function Recommend() {
    const recommendComponent = [{name : "Trustpilot" , TrustScore:4.6 , reviews:'33,671' , img:'https://www.hostinger.in/h-assets/svg/icons/review-icons/ic-star.svg#svgView(viewBox(0%200%2024%2024))'},{name:"Google" , ratings:'4.8 /5' , reviews:'1,237',img:'https://www.hostinger.in/h-assets/svg/icons/review-icons/ic-star.svg#svgView(viewBox(0%200%2024%2024))'},{name:"hostAdvice" , ratings:'4.6/5' , reviews:'2,432' , img:'https://www.hostinger.in/h-assets/svg/icons/review-icons/ic-star.svg#svgView(viewBox(0%200%2024%2024))'},{name:"wpbeginner" , ratings:'4.7/5' , reviews:'874',img:'https://www.hostinger.in/h-assets/svg/icons/review-icons/ic-star.svg#svgView(viewBox(0%200%2024%2024))'}]
  return (

    <div style={{marginBottom:"200px"}}>
        <div style={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
            <img src='https://www.hostinger.in/h-assets/svg/icons/product-icons/ic-wordpress.svg#svgView(viewBox(0%200%2048%2048))' width={50} height={50}></img>
            <p style={{color:"#2f1c6a" , fontSize:25}}>Recommended by <b>WordPress.org</b></p>
        </div>
        <div style={{display:'flex' , justifyContent:'space-evenly'}}>
            {
                recommendComponent.map((item , index)=>{
                    return (<RecommendComponent data={item}/>)
                })
            }
        </div>
    </div>
  )
}
