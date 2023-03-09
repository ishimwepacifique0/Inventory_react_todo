import React,{useEffect} from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import axios from 'axios';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


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
        axios.get('https://inventory-bay.onrender.com/api/invoice/get',{
            headers: {
                'Authorization': `Bearer ${user}`
            }
        })
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
                <MDBTable align='middle'>
                    <MDBTableHead>
                        <tr>
                        <th scope='col'>CustomerName</th>
                        <th scope='col'>Item name</th>
                        <th scope='col'>Sales date</th>
                        <th scope='col'>Realese date</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Status</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {
                            countdata.map((item)=>{
                                return(

                        <tr>
                        <td>
                            <div className='ms-3'>
                                <p className='fw-bold mb-1'>{item.customer.name}</p>
                            </div>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>{item.items.map(item=>item.item.name)}</p>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>{item.date}</p>
                        </td>
                        <td>
                            <p className='fw-normal mb-1'>{item.paidDate}</p>
                        </td>
                         <td>
                            <p className='fw-normal mb-1'>{item.total}</p>
                        </td>

                        <td>
                            <MDBBadge color='warning' pill>
                            {item.status}
                            </MDBBadge>
                        </td>
                        </tr>
                              )
                            })
                         }
                    </MDBTableBody>
                    </MDBTable>
            </div>
        </div>
        </div>
        </>
    );
}

export default Report;