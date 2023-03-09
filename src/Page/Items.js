import React from 'react';
import { Navigate, NavLink,Link } from 'react-router-dom';
import '../App.css'
import NewItemModal from './Modal/NewInvoice';
import {
    FaEdit,
    FaTrashAlt
} from 'react-icons/fa'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Print from './Modal/editpage/itemEdit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MDBBadge } from 'mdb-react-ui-kit';

function Items() {
    const [getdata,setGetdata] = useState([])
    const navigate = useNavigate()
    const user = localStorage.getItem("storeTokendata")
    const [msgsuccess,setMsgsuccess] = useState('')
    const IsLoggedin = useSelector((state)=>state.authstoredata.IsLoggedin)
    console.log(IsLoggedin)


     useEffect(()=>{
        console.log(getdata)
        if(!user == ''){
         getItems()
        }else{
            navigate("/login")
        }
         },[])
         const getItems = async () => {
    
         try{
           const response = await axios.get('https://inventory-bay.onrender.com/api/item/get',{
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user}`
            }
           })
            console.log(response.data.items)
            setGetdata(response.data.items)
        }catch(err){
         console.log(err)
         }
        }

        const deletedata = async (id) =>{
            try{
                console.log(id)
                const response = await axios.delete(`https://inventory-bay.onrender.com/api/item/delete/${id}`,
                {
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user}`
                    }
                })
                console.log(response.data)
                if(response.status == 200){
                    setMsgsuccess(response.data.message)
                    window.location.reload(true)
                }
            }catch(erro){
                console.log(erro)
            }
        }
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-between alert alert-primary'>
                    <div>
                        <b>ITEMS</b>
                        <p>all Items</p>
                    </div>
                    <div className=''>
                        <NavLink to="/newitem" >
                        <button className='btn btn-primary shadow'>New Item</button>
                        </NavLink>
                    </div>
                </div>
                {!msgsuccess == ''?(
            <div className='alert  alert-success text-center'>
                {msgsuccess}
            </div>
           ):null}
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
                                    <Link to={`/print/${item?._id}`} state={item._id}>
                                 <button className='btn btn-primary btn-sm'><FaEdit/></button>
                                    </Link>
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