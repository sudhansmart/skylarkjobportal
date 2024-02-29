import React from 'react'
import review from "../assets/Images/review.png"
import Carousel from 'react-bootstrap/Carousel';
import "../Style/Review.css"
export const Review = () => {
    const data=[
        {
            id:"1",
            content:"  I'm very thankful to HR Robinson from Skylark HR Solutions Pvt Ltd.  I got selected in one of biggest organisation with really good designation  and really good package. He guided me a lot, he was with me from my interview process till my joining. I highly recommend Skylark HR Solutions for all your career requirements. Once again thank you Robin."
        },
        {
            id:"2",
            content:" I am very grateful to HR FARZEENa👏 for her support during my interview process. She guided me, updated me, and encouraged on each and every step of the way. Her professionalism and dedication made a huge difference for on me. I am very happy with the opportunity she helped me get. Skylark HR solutions is a great choice for anyone looking for career guidance and assistance."
        },
        {
            id:"3",
            content:"Thanks to HR Sumithra from Skylark HR Solutions now I'm a part of IPROAT Solutions with the help of Sumithra. She helped me a lot from starting to until my joining as well as  she guided me a lot for the interview process So, very big thanks to Sumithra ☺️"
        },
        {
            id:"4",
        content:"Skylark HR solutions is the company help to get job , it's one of the trusted consultancy HR Mullai kodi ,is the person who contact me for the job opportunity in Infosys. She is very helpful and motivating person. She assist me to get the job from the day one to till today."
            }
      ]
       
  return (
    <div className='imagess mt-4'>
        <div className='image-overlayss'>
        <div className="row">
  <div className="col-sm-6">
  <div className="card mt-4 mb-4  ">
  <div className="card-body">
    <h5 className="card-title">   
    <h1 className="text-center" style={{fontFamily:"cursive", color:"orange"}}>Review<i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></h1></h5>
    <p className="card-text"> 
     <Carousel controls={false}>
        {
            data.map(data=>{
                return(
<Carousel.Item key={data.id} interval={1000}>
                <h4>{data.content}</h4>
        </Carousel.Item>
                )
            })
        }
        </Carousel>
        </p>
  </div>
</div>
   </div>
  <div > 
  <div className="col-sm-6" >
    <img src={review} />
    </div>
</div>
</div>
      </div>
      </div>
    
  )
}
