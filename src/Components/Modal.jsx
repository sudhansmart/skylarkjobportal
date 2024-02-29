import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

<Modal.Footer>
     
        <Button onClick={props.onHide} style={{color:"black"}}><i class="bi bi-x-lg"></i></Button>
      </Modal.Footer>
      <Modal.Body>
        
        <p className='text-center'>
        
        </p>
        <h5 className='text-center'>Job Posting Form</h5>
       <h6>JobTitle:</h6>
       <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Enter Job Title</label>
  <input placeholder='Enter Job Title' className='form-control'></input>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Enter Category</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder='Category'></textarea>

</div>
       <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Company Information</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" placeholder='Message'></textarea>

</div>
<div className="mb-3">
<label >Job Location</label>
  <input placeholder='Location' className='form-control'></input>
  </div>
  <div className="mb-3">
<label >JobType</label>
  <input placeholder='Jobtype' className='form-control'></input>
  </div>
  <div className="mb-3">
<label >Salary/Compensation</label>
  <input placeholder='Salary/Compensation' className='form-control'></input>
  </div>     
 
  <div className="mb-3">
<label > Skills and Qualifications</label>
  <input placeholder=' Skills and Qualifications' className='form-control'></input>
  </div> 
  <div className="mb-3">
<label >   Application Deadline</label>
  <input placeholder='   Application Deadline' className='form-control'></input>
  </div> 
  <div className="mb-3">
<label > Contact Information</label>
  <input placeholder=' Contact Information' className='form-control'></input>
  </div> 
  <div className="mb-3">
<label > Application Instructions</label>
  <input placeholder=' Application Instructions' className='form-control'></input>
  </div> 
  <div className="mb-3">
<label > 
Privacy and Terms</label>
  <input placeholder='
Privacy and Terms' className='form-control'></input>
  </div> 



      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>Sumbit</Button>
      
      </Modal.Footer>
    </Modal>
  )
}

export default  MyVerticallyCenteredModal
