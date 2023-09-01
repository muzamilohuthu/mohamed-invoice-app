import React, { useState } from 'react'
import {Form, Card ,Row ,Col }from 'react-bootstrap';

function Page1() {
  const [state ,setState] = useState({
    isopen: false,
    currency: '$',
    currentDate: '',
    invoiceNumber:1,
    billTo:'',
    billToAddress:'',
    billToEmail:'',
    billFrom:'MUZAMIL STORE',
    billFromEmail:'muzamilohuthu@gmail.com',
    billFromAdress:'Coimbatore,Tamilnadu,India',
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

  return (
    <div>
      <h2>Invoice Generator</h2>

      <Form>
      <Row>
        <Col md={8} lg={9}>
        <Card className='p-4 p-xl- my-3 my-xl-4 d-flex flex-row justify-content-between'>
        <div className='d-flex flex-row mb-3 '>
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



        </Card>



        </Col>
      </Row>
      </Form>

    </div>
  )
}

export default Page1
