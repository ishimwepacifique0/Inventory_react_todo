import React from 'react';
import { 
    FaTrashAlt,
    FaEdit,
    FaCheckSquare,
} from 'react-icons/fa'
import { Navigate, NavLink,Link } from 'react-router-dom';
import '../App.css'
import Editinvoice from './Modal/editpage/invoinceEdit';
import Example from './Modal/NewInvoice';
import Print from './Modal/PrintInvoice';
import { useState,useEffect } from 'react';
import axios from 'axios';
import BasicDocument from './Modal/editpage/invoinceEdit';

function Invoice() {
    const [getData,setGetData] = useState([])
    
    useEffect(()=>{
        getInvoice()
    },[])

    const getInvoice = async () =>{
        try{ 
            const response = await axios.get('https://inventory-bay.onrender.com/api/invoice/get')
            console.log(response.data.invoices)
            setGetData(response.data.invoices)

    }catch(err){
        console.log(err)
    }


    }
    const edit = (id) =>{
            console.log(id)
    }
    return (
        <div>
            <div className='container'>
            <div className='d-flex justify-content-between alert alert-primary'>
                    <div>
                        <b>INVOICE</b>
                        <p>all invoice</p>
                    </div>
                    <div className=''>
                        <NavLink to='/newinvoice' >
                            <p className="btn btn-primary">Add Invoice</p>
                        </NavLink>
                    </div>
                </div>
                <table className='table'>
                    <thead className="bg-primary text-white">
                        <tr>                
                            <th>CustomerName</th>
                            <th>CustomerTin</th>
                            <th>CustomerPhone</th>
                            <th>ItemName</th>
                            <th>Quantity</th>
                            <th>Sales Price</th>
                            <th>Total amount</th>
                            <th>Decision</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getData.map((itemdata,key)=>{
                                return(
                                    <>
                                    <tr>
                                    <td>{itemdata.customer.name}</td>
                                    <td>{itemdata.customer.customerTin}</td>
                                    <td>{itemdata.customer.phone}</td>
                                    <td>{itemdata.items.map(item=>item.item?.name)}</td>
                                    <td>{itemdata.items.map(item=>item.quantity)}</td>
                                    <td>{itemdata.items.map(item=>item.salesPrice)}</td>
                                    <td>{itemdata.total}</td>
                                    <td className=''>
                                    <button className='btn btn-secondary btn-sm'><FaCheckSquare/> </button>
                                    <button className='btn btn-warning btn-sm'> Unpaid </button>
                                    <Link to={`/printing/${itemdata._id}`} state={itemdata} >
                                    <button className='btn btn-success btn-sm'>Print </button>
                                    </Link>
                                    
                                         </td>
                                    </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Invoice;