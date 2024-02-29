import React from 'react'
import review from "../assets/Images/review.png"
import Carousel from 'react-bootstrap/Carousel';
import "../Style/Reviewslider.css"
const Reviewslider = () => {
    const data=[
        {
            id:"1",
            content:"  I'm very thankful to HR Robinson from Skylark HR Solutions Pvt Ltd.  I got selected in one of biggest organisation with really good designation  and really good package. He guided me a lot, he was with me from my interview process till my joining. I highly recommend Skylark HR Solutions for all your career requirements. Once again thank you Robin."
        },
        {
            id:"2",
            content:" I am very grateful to HR FARZEENa👏 for her support during my interview process. She guided me, updated me, and encouraged on each and every step of the way. Her professionalism and dedication made a huge difference for on me. I am very happy with the opportunity she helped me get. Special Thanks to our outstanding coordinator FARZEENa."
        },
        {
            id:"3",
            content:"Thanks to HR Sumithra from Skylark HR Solutions now I'm a part of IPROAT Solutions with the help of Sumithra. She helped me a lot from starting to until my joining as well as  she guided me a lot for the interview process So, very big thanks to Sumithra ☺️ Team SKYLARK wishes you success in all your future endeavors."
        }
      ]
  return (
    
<div className='image-overlayss'>

  <div className="col-sm-6 mt-4 mb-4 ">
  <div className="card container " style={{height:"300px"}}>
  
  <div className="card-body">
    <h5 className="card-title">
    <h1 className="text-center" style={{fontFamily:"cursive", color:"orange"}}>Review<i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></h1>
    </h5>
    <p className="card-text">
    <Carousel controls={false}>
        {
            data.map(data=>{
                return(
<Carousel.Item key={data.id} interval={1000}>
            <blockquote>
                <h4>{data.content}</h4>
            </blockquote>
        </Carousel.Item>
     
                )
            })
        }
        </Carousel>
        </p>

  </div>
</div>
  
  </div>
  <div className="col-sm-2 ">
     <img src={review} />
  
  </div>

</div>
   
  )
}

export default Reviewslider