import React,{useState,useEffect} from 'react';
import {
    FaEdit,
    FaTrashAlt
} from 'react-icons/fa'
import axios from 'axios';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Customer(props) {
    const [getCustomer,setGetCustomer] = useState([])
    const user = localStorage.getItem("storeTokendata")
    const navigate = useNavigate()

  useEffect(() => {
    if(!user == ''){
        fetchData()
    }else{
        navigate("/login")
    }
  }, [])

    const fetchData = async () =>{
        const response = await axios.get('https://inventory-bay.onrender.com/api/invoice/get',{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user}`
            }
        })
        console.log(response.data.invoices)
        setGetCustomer(response.data.invoices)
    }
    return (
        <div>
            <div className='container'>
                <div className=' '>
                    <div>
                        <b>Customer</b>
                        <p>All customers are recorded in database</p>
                    </div>
                </div>
                <div style={{overflowX:'auto'}}>
                <table className='table shadow'>
                    <thead className="bg-primary text-white">
                        <tr>

                            <th>CustomerTin</th>
                            <th>CustomerName</th>
                            <th>CustomerPhone</th>
                            <th>View all</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getCustomer.map((itemdata,key)=>{
                            return(
                        <tr>
                            
                                    <td className='px-2 mx-2'>{itemdata.customer.name}</td>
                                    <td className='px-2'>{itemdata.customer.customerTin}</td>
                                    <td className='px-2'>{itemdata.customer.phone}</td>
                                    <td><Link to={'/detail'} state={itemdata}>
                                    Detail
                                    </Link>
                                        </td>
                                    
                        </tr>
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

export default Customer;