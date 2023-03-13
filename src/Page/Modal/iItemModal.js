import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Items from '../Items';



const Example = () => {
  const [itemname, setItemname] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [currentStock, setCurrenStock] = useState('')
  const [msg, setMsg] = useState('')
  const [msgsuccess, setMsgsuccess] = useState('')
  const user = localStorage.getItem('storeTokendata')
  const Savedata = async (e) => {
    e.preventDefault()
    const data = {
      "name": itemname,
      "unitPrice": unitPrice,
      "currentStock": currentStock
    }
    if (data.name == '') {
      console.log('name are required')
    }
    else if (data.unitPrice == '') {
      console.log('unitprice are require')
    } else if (data.currentStock == '') {
      console.log('currentstock are empty')
    }
    console.log(data)
    try {
      const response = await axios.post('https://inventory-bay.onrender.com/api/item/create', data,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user}`
        }
      })
      console.log(response.data)
      if (response.status == 200) {
        setMsgsuccess("Saved successfully")
        setMsg('')
        setItemname('')
        setCurrenStock('')
        setUnitPrice('')
      }

    } catch (err) {
      console.log(err.response.data.error)
      setMsg(err.response.data.error)
    }

  }
  return (
    <div className='container'>
      <div className='d-flex justify-content-between'>
        <div>
          <b>ITEMS</b>
        </div>
        <div className=''>
          <NavLink to='/items' >
            <p className="ms-1 text-link">View Item</p>
          </NavLink>
        </div>
      </div>
      <form className="form-horizontal jusify-content-center my-1 py-5 mx-3 bg-white px-5 shadow" method="post" onSubmit={Savedata} >
        <div className=''>
          <h6 className='text-center'>Add new item in Stock</h6>
        </div>
        {!msg == '' ? (
          <div className='text-danger text-center'>
            {msg}
          </div>
        ) : null}
        {!msgsuccess == '' ? (
          <div className='text-success text-center'>
            {msgsuccess}
          </div>
        ) : null}
      
        <div className="form-group">
          <label for="default" className="col-sm-2 control-label my-1">ItemName</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="address"
              className="form-control my-1"
              value={itemname}
              onChange={(e) => setItemname(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label for="default" className="col-sm-2 control-label my-1">Unit Price</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="telephone"
              className="form-control my-1"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label for="default" className="col-sm-2 control-label my-1">New Stock</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="date"
              className="form-control my-1"
              value={currentStock}
              onChange={(e) => setCurrenStock(e.target.value)}
            />
          </div>
        </div>
        <button className='btn btn-success my-1' type='submit'>Save</button>

      </form>

    </div>
  );
}

export default Example