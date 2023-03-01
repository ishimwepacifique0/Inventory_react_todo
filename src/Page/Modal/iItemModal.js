import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Items from '../Items';



const Example = () => {
    const [itemname,setItemname] = useState('')
    const [unitPrice,setUnitPrice] = useState('')
    const [currentStock,setCurrenStock] = useState('')

    const Savedata = async (e) =>{
        e.preventDefault()
        const data = {
            "name":itemname,
            "unitPrice":unitPrice,
            "currentStock":currentStock
          }
          console.log(data)
        try{
        const response = await axios.post('https://inventory-bay.onrender.com/api/item/create',data)
        console.log(response.data)
        }catch(err){
            console.log(err)
        }

    }
  return (
    <div className='container'>
        <div className='d-flex justify-content-between'>
                    <div>
                        <b>Item</b>
                        <p>all Item</p>
                    </div>
                    <div className=''>
                        <NavLink to='/items' >
                            <button className="btn btn-primary">View Item</button>
                        </NavLink>
                    </div>
                </div>
        <form className="form-horizontal jusify-content-center my-1 py-5 mx-3 bg-white px-5 shadow" method="post" onSubmit={Savedata} >

            <div className="form-group">
            <label for="default" className="col-sm-2 control-label my-1">ItemName</label>
            <div className="col-sm-10">
            <input 
            type="text" 
            name="address"
            className="form-control my-1" 
            value={itemname}
            onChange={(e)=>setItemname(e.target.value)} 
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
                    onChange={(e)=>setUnitPrice(e.target.value)} 
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
                    onChange={(e)=>setCurrenStock(e.target.value)} 
                    />
                    </div>
                    </div>
                    <button className='btn btn-success my-1' type='submit'>Save</button>
            
            </form>

        </div>
  );
}

export default Example