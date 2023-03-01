import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FaEdit } from 'react-icons/fa'
import axios from 'axios'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Print = () => {
   const {id} = useParams()

  console.log(id, "id")
  const navigate = useNavigate()
  const [itemname, setItemname] = useState('')
  const [unitPrice, setUnitPrice] = useState('')
  const [currentStock, setCurrenStock] = useState('')
  const [dataid,setDataid] = useState(id)
  const [msg,setMsg] = useState('')
  const location = useLocation()




  const getone = async(e) => {
    e.preventDefault()

    const data = {
      "name": itemname,
      "unitPrice": unitPrice,
      "currentStock": currentStock
    }
    console.log(data)
    try {
      const response = await axios.patch(`https://inventory-bay.onrender.com/api/item/update/${dataid}`,data)
      if(response.status == 200){
        setMsg('Date Updated successfully')
        navigate("/items")
        
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    <div className='container justify-content-center'>
      <div className='row'>
        <div className='col-sm-7'>
      <form className="form-horizontal jusify-content-center  bg-white my-1 py-1 mx-1 px-3 py-4">
        {msg?(
            <div className="alert alert-success">
                {msg}
            </div>
          ):null
        }
        <div className="form-group">
          <label className="col-sm-2 control-label my-1">ItemName</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="address"
              className="form-control my-1"
              value={itemname}
              onChange={(e => setItemname(e.target.value))}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-sm-2 control-label my-1">Unit Price</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="telephone"
              className="form-control my-1"
              value={unitPrice}
              onChange={(e => setUnitPrice(e.target.value))}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-5 control-label my-1">current Stock</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="date"
              className="form-control my-1"
              value={currentStock}
              onChange={(e => setCurrenStock(e.target.value))}
            />
          </div>
        </div>
        <button className='btn btn-success' onClick={getone}>Edit</button>
      </form>
      </div>
      </div>
      </div>

    </>
  )

}

export default Print;
