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
  const [companyname,setCompany] = useState('')
  const [itenData,setItemData] = useState([])
  const [msg,setMsg] = useState('')
  const [allItems, setAllItems] = useState([])
  const [msgsuccess,setMsgsuccess] = useState('')
  const user = localStorage.getItem('storeTokendata')
  // const [inputmore,setInputmore] = useState([{item:'',quantity:'',salesPrice:''}])

  useEffect(() => {
   getItem()
  }, [])
  const getItem = () =>{
    axios.get('https://inventory-bay.onrender.com/api/item/get',{
      headers:{
        Authorization: `Bearer ${user}`
      }
    })
    .then((response)=>{
      setItemData(response.data.items)
    })
  }

  const handleinputmore = ()=>{
    setAllItems([...allItems,{
      item: itemname,
      quantity,
      salesPrice: unitPrice
    } ])
    setItemname("")
    setQuantity("")
    setUnitPrice("")
    // alert('add more field')
    // setInputmore([...inputmore,{item:'',quantity:'',salesPrice:''}])
  }
  const SaveInvoice = async (e) =>{
    e.preventDefault()
    const data = {
      "customerName": customerName,
      "customerPhone": customerPhone,
      "customerTin": customerTin,
      "companyName":companyname,
      "items": allItems
    }
    console.log(data)
    console.log(itemname)
    try{
      const response = await axios.post('https://inventory-bay.onrender.com/api/invoice/create',data,{
        headers: {
          'Content-Type': 'application/json',
            'Authorization': `Bearer ${user}`
        }
      })
      console.log(response.data)
      if(response.status == 200){
        setMsgsuccess("Invoice Saved successfully")
        setMsg('')
        setItemname('')
        setCustomerName('')
        setCustomerTin('')
        setCustometPhone('')
        setQuantity('')
        setUnitPrice('')
       }
    }catch(err){
      console.log(err.response.data.error)
      setMsg(err.response.data.error)
    }
  }
  

  return (
    <div className='container'>
       <div className='d-flex justify-content-between'>
                    <div>
                        <b>Invoice</b>
                    </div>
                    <div className=''>
                        <NavLink to='/invoice' >
                            <p>View Invoice</p>
                        </NavLink>
                    </div>
                  </div>
          <div className="form-horizontal jusify-content-center bg-white mx-2 px-5 py-4 shadow"
          //  method="post" 
          // onSubmit={SaveInvoice}
          >
        
          <div className=''>
              <h6 className='text-center'>Add new Invoice in Stock</h6>
          </div>
          {!msg == ''?(
            <div className='text-danger text-center'>
                {msg}
            </div>
           ):null}
           {!msgsuccess == ''?(
            <div className='text-success text-center'>
                {msgsuccess}
            </div>
           ):null}
           <div className='container'>
            <div className='row'>
              <div className='col'>
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
              <label className="col-sm-5 control-label my-1">CustomerPhonenumber</label>
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
              <label className="col-sm-5 control-label my-1">Company name</label>
              <div className="col-sm-10">
              <input 
              type="text" 
              name="address"
              className="form-control my-1"  
              value={companyname}
              onChange={(e)=>setCompany(e.target.value)}
               />
              </div>
              </div>
                </div>
                <div className='col'>
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
                      </div>
                      <div>
                        {
                          allItems.map((each)=>{
                            // console.log(itenData.filter((item)=>item?._id == each?.item))
                            return(
                              <div className='d-flex'>
                                <p className='mx-1'>{(itenData.filter((item)=>item._id == each.item))[0]?.name}</p>
                                <p className='mx-1'>{each?.quantity}</p>
                                <p className='mx-1'>{each?.salesPrice}</p>
                              </div>
                            )
                          })
                        }
                      </div>
                    <div className='form-group my-1'>
                      <div className=' d-flex justify-content-between'>
                      <button className='btn btn-success' onClick={SaveInvoice}>
                        Save
                      </button>
                      <button className='btn btn-success' onClick={handleinputmore} >
                        Add more items
                      </button>
                      </div>
                      </div>
                    </div>
                    </div>
              
              </div>
    </div>
  );
}

export default NewInvoice