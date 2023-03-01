import React,{useState,useEffect} from 'react';
import {
    FaEdit,
    FaTrashAlt
} from 'react-icons/fa'
import axios from 'axios';

function Customer(props) {
    const [getCustomer,setGetCustomer] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

    const fetchData = async () =>{
        const response = await axios.get('https://inventory-bay.onrender.com/api/invoice/get')
        console.log(response.data.invoices)
        setGetCustomer(response.data.invoices)
    }
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <b>Customer</b>
                        <p>all customers</p>
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
                                    <td className='p-2'>{itemdata.customer.name}</td>
                                    <td className='p-2'>{itemdata.customer.customerTin}</td>
                                    <td className='p-2'>{itemdata.customer.phone}</td>
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