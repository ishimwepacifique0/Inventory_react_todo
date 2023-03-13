import axios from 'axios';
import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Dashboard(props) {
    const user = localStorage.getItem("storeTokendata")
     const isLoged = useSelector(state=>state.authstoredata.isLoggedin)
    const navigate = useNavigate()
    const [countdata,setCountdata] = useState([])
    const [countdataitem,setCountdataitem] = useState([])

    const handlecount = async () =>{
        try {
            axios.get('https://inventory-bay.onrender.com/api/invoice/get',{
                headers:{
                    'Content-Type': 'application/json',
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

 
                const handlecountitem= async () =>{
                    try {
                           axios.get('https://inventory-bay.onrender.com/api/item/get',{
                            headers:{
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${user}`
                            }
                           })
                           .then((response)=>{
                               setCountdataitem(response.data.items)
                               console.log(response.data.items)
                           })
                    }catch(err){
                        console.log(err)
                    }
                }
    
    useEffect(() => {
        handlecount()
        handlecountitem()
        if(user == null){
            navigate("/login")
            }
    }, [])
    return (
        <>
            <div className='container'>
            <div className='row'>
                                        <div className='col-sm-4 bg-primary rounded py-3 mx-2 my-2'>
                                            <div className='text-white font-bold'>Pending invoice</div>
                                                {
                                                    countdata.length
                                                }
                                        </div>
                                        <div className='col-sm-4 bg-success rounded py-3 mx-2 my-2'>
                                        <div className='text-white font-bold'>Pending item</div>


                                        {
                                                    countdataitem.length
                                                }
                                        </div>
    
                                        <div className='col-sm-4 bg-warning rounded py-3 mx-2 my-2'>
                                        <div className='text-white font-bold'>Pending customers</div>

                                        {
                                                    countdata.length
                                                }
                                        </div>

                                        </div>
                                        </div>
    </>
    );
}
export default Dashboard
