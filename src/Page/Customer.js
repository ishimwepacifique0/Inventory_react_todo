import React,{useState,useEffect} from 'react';
import {
    FaEdit,
    FaTrashAlt
} from 'react-icons/fa'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Customer(props) {
    const [getCustomer,setGetCustomer] = useState([])
    const user = localStorage.getItem("storeTokendata")
    const navigate = useNavigate()

  useEffect(() => {
    if(!user == null){
        fetchData()
    }else{
        navigate("/login")
    }
  }, [])

    const fetchData = async () =>{
        const response = await axios.get('https://inventory-bay.onrender.com/api/invoice/get')
        console.log(response.data.invoices)
        setGetCustomer(response.data.invoices)
    }
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-between alert alert-primary'>
                    <div>
                        <b>Customer</b>
                        <p>All customers are recorded in database</p>
                    </div>
                </div>
                <table className='table shadow'>
                    <thead className="bg-primary text-white">
                        <tr>

                            <th>CustomerTin</th>
                            <th>CustomerName</th>
                            <th>CustomerPhone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getCustomer.map((itemdata,key)=>{
                            return(

                        <tr>
                            <Link to={"/invoices"}>
                                    <td className='px-2'>{itemdata.customer.name}</td>
                                    <td className='px-2'>{itemdata.customer.customerTin}</td>
                                    <td className='px-2'>{itemdata.customer.phone}</td>
                                    </Link>
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

export default Customer;