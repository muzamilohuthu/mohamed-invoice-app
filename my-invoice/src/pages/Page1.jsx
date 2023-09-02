import React, { useState } from 'react'
import {Form, Card ,Row ,Col }from 'react-bootstrap';
import Invoiceitems from './items/Invoiceitems';

function Page1() {
  const [state ,setState] = useState({
    isopen: false,
    currency: '$',
    currentDate: '',
    invoiceNumber:1,
    billTo:'',
    billToAddress:'',
    billToEmail:'',
    billFrom:'MUZAMIL LIFESTYLE',
    billFromEmail:'muzamilohuthu@gmail.com',
    billFromAddress:'Coimbatore,Tamilnadu,India.',
    notes:'',
    subTotal:'0.00',
    taxRate: 0.00,
    taxAmount:'0.00',
    discountRate:0.00,
    discountAmount:'0.00'
  })

  const[total ,setTotal]= useState(0.00)

  const[items,setItems]=useState(
    {
    id:0,
    name:'',
    description:'',
    price:1.0,
    quantity: 1,
  }
)

const onchangename  = (event) => {
     setState(state=>({
      ...state,
      [event.target.name]:event.target.value,
     }))
}

  return (
    <div>
      <h2>Invoice Generator</h2>

      <Form>

      <Row>
        <Col md={8} lg={9}>
          
        <Card className='p-4 p-xl- my-3 my-xl-4 d-flex  '>
        <div className='d-flex flex-row mb-3 justify-content-between'>
         <div className='mb-2'>
          <span className='fw-bold'> current Date: </span> 
          <span className='currentDate'> 
          {new Date().toLocaleDateString()}
          </span>
         </div>
        </div>

        <div className='d-flex flex-row  mb-3 '>
         <div className='mb-2'>
          <span className='fw-bold'> Invoice Number: </span> 
          <span className='currentDate'> 
          {state.invoiceNumber}
          </span>
         </div>
        </div>
       
       <hr className='my-6' />
       <Row className='mb-5'>

        <Col>
        <h3>Customer Details</h3>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label> Name: </Form.Label> */}
        <Form.Control
         placeholder='Customer Name' 
         value={state.billTo}
         type='text'
         name='billTo'
         className='my-2' 
         onChange={ onchangename }
         autoComplete={true}
         required={true}
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label> Email: </Form.Label> */}
        <Form.Control
         placeholder='Customer Email' 
         value={state.billToEmail}
         type='text'
         name='billToEmail'
         className='my-2' 
         onChange={ onchangename }
         autoComplete={true}
         required={false}
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label> Address: </Form.Label> */}
        <Form.Control
         placeholder='customer Address' 
         value={state.billTAddress}
         type='text'
         name='billToAddress'
         className='my-2' 
         onChange={ onchangename}
         autoComplete={true}
         required={false}
          />
        </Form.Group>
        </Col>

        <Col>
        <h3>Bill From</h3>
        <Form.Control value={state.billFrom} className='my-2'disabled={true}  /> 
        <Form.Control value={state.billFromEmail} className='my-2'disabled={true}  /> 
        <Form.Control value={state.billFromAddress} className='my-2'disabled={true}  /> 
        
        </Col>
        

       </Row>
      < Invoiceitems items={[items]} />

        </Card>



        </Col>
      </Row>
      </Form>

    </div>
  )
}

export default Page1
