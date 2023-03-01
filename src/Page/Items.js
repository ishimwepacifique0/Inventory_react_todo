import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import NewItemModal from './Modal/NewInvoice';
import {
    FaEdit,
    FaTrashAlt
} from 'react-icons/fa'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Print from './Modal/editpage/itemEdit';

function Items() {
    const [getdata,setGetdata] = useState([])

     useEffect(()=>{
        console.log(getdata)
         getItems()
         },[])
         const getItems = async () => {
    
         try{
           const response = await axios.get('https://inventory-bay.onrender.com/api/item/get')
            console.log(response.data.items)
            setGetdata(response.data.items)
        }catch(err){
         console.log(err)
         }
        }

        const deletedata = async (id) =>{
            try{
                console.log(id)
                const response = await axios.delete(`https://inventory-bay.onrender.com/api/item/delete/${id}`)
                console.log(response.data)
            }catch(erro){
                console.log(erro)
            }
        }
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <b>Items</b>
                        <p>all Items</p>
                    </div>
                    <div className=''>
                        <NavLink to="/newitem" >
                        <button className='btn btn-primary shadow'>New Item</button>
                        </NavLink>
                    </div>
                </div>
                <table className='table shadow'>
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>ItemName</th>
                            <th>Unit Price</th>
                            <th>Current Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getdata.map((item)=>{
                            return(
                                <tr>
                                    <td>{item?.name}</td>
                                    <td>{item?.unitPrice}</td>
                                    <td>{item?.currentStock}</td>
                                <td>
                                 <button className='btn btn-primary btn-sm'><Print/></button>
                                <button className='btn btn-danger btn-sm' onClick={()=>deletedata(item?._id)}> <FaTrashAlt /> </button>
                            </td>
                         </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Items;