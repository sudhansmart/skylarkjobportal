import React from 'react'
import It from  "../assets/Images/It1.png"
import Bpo from "../assets/Images/bpo1.png"
import pbo from "../assets/Images/Bpo.jpg"
import sale from "../assets/Images/sale1.png"
import customer1 from "../assets/Images/customer1.png"
import account from "../assets/Images/accounting.png"
import digital from "../assets/Images/digital1.png"
import health from "../assets/Images/medical.png"
import manifacture from "../assets/Images/building.png"
import skin from "../assets/Images/skin1.png"
import hr1 from "../assets/Images/hr2.png"
import operation from "../assets/Images/operation1.png"
import category from "../assets/Images/category12.png"
import ms from "../assets/Images/ms.webp"
import ms2 from "../assets//Images/ms3.png"

const Jobicon = () => {
  return (
    <div>
             <h1 className='text-center mt-5 '  style={{fontFamily:"cursive", color:"orange"}}>BROWSE JOBS BY CATEGORY</h1>
        <div className='container mt-5 text-center'>
    <div className="row mb-4">
<div className="col">
  
<div className="card">
<div className="card-body">
<h5 className="card-title">IT</h5>
<img src={It}/>


</div>
</div>
</div>
<div className="col"> <div className="card">
<div className="card-body">
<h5 className="card-title">Bpo</h5>
<img src={Bpo}/>


</div>
</div></div>
<div className="col"> 
<div className="card">
<div className="card-body">
<h5 className="card-title">Sale & Marketing</h5>
<img src={sale}/>


</div>
</div></div>
<div className="col">
 <div className="card">
<div className="card-body">
<h5 className="card-title">Customer service</h5>
<img src={customer1}/>


</div>
</div></div>

</div>
<div className="row mb-4">
<div className="col"><div className="col">
 <div className="card">
<div className="card-body">
<h5 className="card-title">Account</h5>
<img src={account}/>


</div>
</div></div></div>
<div className="col"><div className="col">
 <div className="card">
<div className="card-body">
<h5 className="card-title">Digital Marketing</h5>
<img src={digital}/>


</div>
</div></div></div>
<div className="col"><div className="col">
 <div className="card">
<div className="card-body">
<h5 className="card-title">Health care</h5>
<img src={health}/>


</div>
</div></div></div>
<div className="col"><div className="col">
 <div className="card">
<div className="card-body">
<h5 className="card-title">Manifacturing</h5>
<img src={manifacture}/>


</div>
</div></div></div>
</div>
</div>
<div classNameName='container text-center'>
<div className="row mb-4">
<div className="col">
<div className="card">
<div className="card-body">
<h5 className="card-title">Skin clinic</h5>
<img src={skin}/>


</div>
</div>
</div>
<div className="col"> <div className="card">
<div className="card-body">
<h5 className="card-title">Human Resource</h5>
<img src={hr1}/>


</div>
</div></div>
<div className="col"> <div className="card">
<div className="card-body">
<h5 className="card-title">Operation</h5>
<img src={operation}/>


</div>
</div></div>
<div className="col"> <div className="card">
<div className="card-body">
<h5 className="card-title">Miscellaneous</h5>
<img src={ms2}/>
</div>
</div>
</div></div>
</div>

</div>
  )
}

export default Jobicon