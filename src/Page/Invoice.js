import React from 'react';
import { 
    FaTrashAlt,
    FaEdit,
    FaCheckSquare,
} from 'react-icons/fa'
import { Navigate, NavLink,Link,useNavigate } from 'react-router-dom';
import '../App.css'
import Editinvoice from './Modal/editpage/invoinceEdit';
import Example from './Modal/NewInvoice';
import Print from './Modal/Basic';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { MDBBadge } from 'mdb-react-ui-kit';


function Invoice() {
    const [getData,setGetData] = useState([])
    const user = localStorage.getItem("storeTokendata")
    const navigate = useNavigate()
    const [paid,setPaid] = useState('')


    console.log(typeof user)
    
    useEffect(()=>{
        if(!user == ''){
            getInvoice()
         }
         else{
             navigate("/login")
         }
    },[])

    const getInvoice = async () =>{
        try{ 
            const response = await axios({url:'https://inventory-bay.onrender.com/api/invoice/get',
            method: "GET",
            headers: {
                Authorization: `Bearer ${user}`
            }
                
            })
            console.log(response.data.invoices)
            setGetData(response.data.invoices)

    }catch(err){
        console.log(err)
    }

    }
    const paidHandle = async (id,data) =>{
            const dataedit = {
                "status": "Paid"
            }
            console.log(id)
            try{
                 const response = await axios.patch(`https://inventory-bay.onrender.com/api/invoice/updateStatus/${id}`,dataedit)
                console.log(response.data)
                if(response.status == 200){
                    window.location.reload(true)
                }
             }catch(err){
                console.log(err)
            }
    }
    const acceptedHandle = async (id) =>{
        const dataedit = {
            "status": "Accepted",
        }
        console.log(id)
        try{
             const response = await axios.patch(`https://inventory-bay.onrender.com/api/invoice/updateStatus/${id}`,dataedit)
            console.log(response.data)
            if(response.status == 200){
                window.location.reload(true)
            }
         }catch(err){
            console.log(err)
        }
}
    return (
        <div>
            <div className='container'>
            <div className='d-flex justify-content-between '>
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
                <div  style={{overflowX:'auto'}}>
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
                                    <td>{itemdata.items.map(item=>item.item?.name,)}</td>
                                    <td>{itemdata.items.map(item=>item.quantity)}</td>
                                    <td>{itemdata.items.map(item=>item.salesPrice)}</td>
                                    <td>{itemdata.total}</td>
                                    <td className=' d-flex'>
                                    {
                                        itemdata.status == "Paid"?(
                                            <button className='btn btn-danger btn-sm d-none' onClick={()=>paidHandle(itemdata._id)}> <FaTrashAlt/> </button>
                                        ):(
                                            <button className='btn btn-success btn-sm' onClick={()=>paidHandle(itemdata._id)}> <FaCheckSquare/> </button>
                                        )
                                    }
                                    {
                                        itemdata.status == "Accepted"?(
                                            <button className='btn btn-danger btn-sm d-none' onClick={()=>acceptedHandle(itemdata._id)}> <FaTrashAlt/> </button>
                                        ):(
                                            <button className='btn btn-warning btn-sm' onClick={()=>acceptedHandle(itemdata._id)}> Accepted</button>
                                        )
                                    }

                                     <Link to={`/printing/${itemdata._id}`} state={itemdata} >
                                    <MDBBadge>Print</MDBBadge>                            
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
        </div>
    );
}
export default Invoice;