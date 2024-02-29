import React, { useState } from 'react'
import "../Style/Forms.css"
export const Forms = () => {
  const[details,setDetails]=useState({
    mobileno:'',
    email:'',
    
  });
  const[errors, setErrors]=useState({
    mobileno:'',
    email:'',
    server:''
  });

  
  return (
    
    <div>
  
            <div class="container mt-4">
  <div class="row">
    <div class="col-sm">
    <form action="#" class="form">
            <div class="form-group">
                <input type="text" class="form-control" required      
               />
                <lable for="" class="form-lable">Enter Name</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
               />
                <lable for="" class="form-lable">Enter Location</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
                 />
                <lable for="" class="form-lable">Enter Experience</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
    />
                <lable for="" class="form-lable">Enter CurrentCTC</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
                 />
                <lable for="" class="form-lable">Enter  Relocate</lable>

            </div>
            
        </form>
    </div>
    <div class="col-sm">
    <form action="#" class="form">
         
    <div class="form-group">
                <input type="text" class="form-control" required      
               />
                <lable for="" class="form-lable">Enter MobileNo</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
/>
                <lable for="" class="form-lable">Enter Qualification</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
                  />
                <lable for="" class="form-lable">Enter skills</lable>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
             />
                <lable for="" class="form-lable">Enter   expectedCTC</lable>

            </div>
         <div class="form-group">
         <select style={{width:"220px"}} class="form-control form-control-lg mt-1"  
          >
  <option>Gender</option>
  <option>Male</option>
  <option>Female</option>
</select>
         </div>
     </form>
    </div>
    <div class="col-sm">
    <form action="#" class="form">
         
    <div class="form-group">
                <input type="text" class="form-control" required      
               />
                <lable for="" class="form-lable">Enter Email</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
                 />
                <lable for="" class="form-lable">Enter  Dob</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
        />
                <lable for="" class="form-lable">Enter  CurrentCompany</lable>

            </div>
            <div class="form-group">
                <input type="text" class="form-control" required      
                />
                <lable for="" class="form-lable">Enter NoticePeriod</lable>

            </div>
            <div class="form-group">
                <input type="file" class="form-control" required      
                  />
        

            </div>
         
     </form>
    </div>
    <div class='text-center'>
  <button type="button" class="btn btn-primary  mt-5" >Submit</button>
  </div>
  </div>
</div>
        
    </div>
  )
}
