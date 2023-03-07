import React,{useEffect} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';

function Report() {
  const user = localStorage.getItem("storeTokendata")
  const navigate = useNavigate()
  const [countdata,setCountdata] = useState([])

  useEffect(()=>{
    handlecount()
    if(user == null){
        navigate("/login")
        }
  },[])

  const handlecount = async () =>{
    try {
        axios.get('https://inventory-bay.onrender.com/api/invoice/get')
        .then((res)=>{
            console.log(res.data.invoices)
            setCountdata(res.data.invoices)
        }).catch(err=>console.log(err))
            
           
    }catch(err){
        console.log(err)
    }
}

    return (
        <>
        <div>
             <div>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div className='my-3'>
                        <b>Report</b>
                    </div>
                </div>
                <table className='table shadow'>
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Sales Date</th>
                            <th>Release Time</th>
                            <th>Amount</th>
                            <th>Confirm paid/Unpaid</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            countdata.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.customer.name}</td>
                                        <td>{item.items.map(item=>item.item.name)}</td>
                                        <td>{item.date}</td>
                                        <td>{
                                             item.paidDate
                                            }</td>
                                        <td>{item.total}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                )
                            })
                         }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    );
}

export default Report;