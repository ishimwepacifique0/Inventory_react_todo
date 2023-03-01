import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useParams, useLocation } from 'react-router-dom'


const Print = () => {
  const { id } = useParams()
  const location = useLocation()
  const data = location.state;
  console.log(data)

  const [dataInvoice, setDataInvoice] = useState([])

  useEffect(() => {
    getonedata(id)
  }, [id]
  )
  const getonedata = async (id) => {

  }

  return (
    <>
      

      <table className='table table-border shadow'>
        <tr>
          <td>
          <p>CustomerName: {data.customer.name}</p>
           <p>CustomerPhone: {data.customer.phone}</p>
          <p>CustomerTin: {data.customer.customerTin}</p>
          </td>
        </tr>
          <tr>
            <td>ItemName</td>
            <td>Quantity</td>
            <td>Unit Price</td>
            <td>Total Price</td>
          </tr>
        <tbody>
          <td>{data.items.map(item => item.item?.name)}</td>
          <td>{data.items.map(item => item.quantity)}</td>
          <td>{data.items.map(item => item.salesPrice)}</td>
          <td>{data.total}</td>
        </tbody>
      </table>
    </>

  )

}

export default Print;
