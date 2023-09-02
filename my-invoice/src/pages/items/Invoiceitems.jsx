import React from 'react'
import { Button, Table } from 'react-bootstrap'
import Editable from './Editable'

import { BiTrash } from 'react-icons/bi'

function Invoiceitems(props) {
    var itemTable = props.items.map(item => <ItemRow onItemizedItemEdit={props.onItemizedItemEdit} item={item} onDelEvent={props.onRowDel} key={item.id} currency={props.currency} />)
  return (
    <div>
      <Table>
      <thead>
        <tr>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
            <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        {itemTable}
      </tbody>
      </Table>
      <Button className='fs-5'>
        ADD ITEMS
      </Button>
    </div>
  )
}

function ItemRow(props) {
    const onDelEvent =()=>{
       props.onDelEvent(props.item)
    }
    return(
        <tr>
            <td className='w-100'>
            <Editable
            onItemizedItemEdit={props.onItemizedItemEdit}
            cellData={{
                type:'text',
                name:'name',
                placeholder:'item name',
                value:props.item.value,
                id:props.item.id
            }}
            />
             <Editable
            onItemizedItemEdit={props.onItemizedItemEdit}
            cellData={{
                type:'text',
                name:'description',
                placeholder:'item description',
                value:props.item.description,
                id:props.item.id
            }}
            />
            
            </td>
            <td style={{minWidth:`70px`}}>
            <Editable
            onItemizedItemEdit={props.onItemizedItemEdit}
            cellData={{
                type:'number',
                name:'quantity',
                min:1,
                step:'1',
                value:props.item.quantity,
                id:props.item.id
            }}
            />
            </td>
            <td style={{minWidth:`130px`}}>
            <Editable
            onItemizedItemEdit={props.onItemizedItemEdit}
            cellData={{
                leading:props.currency,
                type:'number',
                name:'price',
                min:1,
                step:'0.01',
                textAlign:'text-end',
                value:props.item.price,
                id:props.item.id
            }}
            />
            </td>
            <td className='text-center' style={{minWidth:`50px`}}>
                <BiTrash onClick={onDelEvent}
                style={{height:`33px` ,width:`33px` , padding :`8px`}}
                className='text-white  mt-1 btn btn-danger'
                />
            </td>
        </tr>
    )
}


export default Invoiceitems
