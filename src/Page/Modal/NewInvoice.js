import axios from 'axios';
import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';


const NewInvoice = () => {
  const [show, setShow] = useState(false);
  const [customerName,setCustomerName] = useState('')
  const [customerTin,setCustomerTin] = useState('')
  const [customerPhone,setCustometPhone] = useState('')
  const [itemname,setItemname] = useState('')
  const [quantity,setQuantity] = useState('')
  const [unitPrice,setUnitPrice] = useState('')
  const [itenData,setItemData] = useState([])

  useEffect(() => {
   getItem()
  }, [])
  const getItem = () =>{
    axios.get('https://inventory-bay.onrender.com/api/item/get')
    .then((response)=>{
      setItemData(response.data.items)
    })
  }

  const SaveInvoice = async (e) =>{
    
    e.preventDefault()

    const data = {
      "customerName": customerName,
      "customerPhone": customerPhone,
      "customerTin": customerTin,
      "items": [
        {
          "item": itemname,
          "quantity": quantity,
          "salesPrice": unitPrice
        }
      ]
    }
    console.log(data)
    console.log(itemname)
    try{
      const response = await axios.post('https://inventory-bay.onrender.com/api/invoice/create',data)
      console.log(response.data)
    }catch(err){
      console.log(err)
    }
  }
  

  return (
    <div className='container'>
       <div className='d-flex justify-content-between'>
                    <div>
                        <b>Invoice</b>
                        <p>all invoice</p>
                    </div>
                    <div className=''>
                        <NavLink to='/invoice' >
                            <button className="btn btn-primary">View Invoice</button>
                        </NavLink>
                    </div>
                  </div>
          <form className="form-horizontal jusify-content-center bg-white mx-2 px-5 py-1 shadow" method="post" onSubmit={SaveInvoice}>
        
              <div className="form-group">
              <label className="col-sm-2 control-label my-1">CustomerName</label>
              <div className="col-sm-10">
              <input 
              type="text" 
              name="address" 
              className="form-control my-1" 
              value={customerName}
              onChange={(e)=>setCustomerName(e.target.value)}
              />
              </div>
              </div>

              <div className="form-group">
              <label className="col-sm-2 control-label my-1">CustomerPhonenumber</label>
              <div className="col-sm-10">
              <input 
              type="text" 
              name="address" 
              className="form-control my-1"  
              value={customerPhone}
              onChange={(e)=>setCustometPhone(e.target.value)}
              />
              </div>
              </div>

              <div className="form-group">
              <label className="col-sm-2 control-label my-1">CustomerTin</label>
              <div className="col-sm-10">
              <input 
              type="text" 
              name="address"
              className="form-control my-1"  
              value={customerTin}
              onChange={(e)=>setCustomerTin(e.target.value)}
               />
              </div>
              </div>

              <div className="form-group">
              <label  className="col-sm-2 control-label my-1">ItemName</label>
              <div className="col-sm-10">
                <select 
                className='form-control'
                value={itemname}
                onChange={(e)=>setItemname(e.target.value)}
                >
                  <option>select item name</option>
                  {itenData.map((item)=>{
                      return(
                        <option value={item._id}>{item.name}</option>
                      )
                  })}   
                    
                </select>
              </div>
              </div>

                  <div className="form-group">
                  <label className="col-sm-2 control-label my-1">Quantity</label>
                  <div className="col-sm-10">
                  <input 
                  type="text" 
                  name="name" 
                  className="form-control my-1"
                  value={quantity}
                  onChange={(e)=>setQuantity(e.target.value)}
                  />
                  </div>
                  </div>
                  <div className="form-group">
                      <label className="col-sm-2 control-label my-1">Unit Price</label>
                      <div className="col-sm-10">
                      <input 
                      type="text" 
                      name="telephone" 
                      className="form-control my-1"
                      value={unitPrice}
                      onChange={(e)=>setUnitPrice(e.target.value)}
                      />
                      </div>
                      </div>

                    <div className='form-group my-1'>
                      <button className='btn btn-success'>
                        Save
                      </button>
                      </div>

              
              </form>
    </div>
  );
}

export default NewInvoice