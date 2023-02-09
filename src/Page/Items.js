import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import NewItemModal from './Modal/NewInvoice';
import {
    FaEdit,
    FaTrashAlt
} from 'react-icons/fa'
import Example from './Modal/iItemModal';

function Items() {
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <b>Items</b>
                        <p>all Items</p>
                    </div>
                    <div className=''>
                        {/* <NavLink to="/newitem" >
                        <button className='btn btn-primary shadow' onClick={ <Example/> }>New Item</button>
                        </NavLink> */}
                        <Example />
                    </div>
                </div>
                <table className='table shadow'>
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>#</th>
                            <th>ItemName</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Sales Price</th>
                            <th>Current Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>1</td>
                            <td>Robinet</td>
                            <td>40</td>
                            <td>2000</td>
                            <td>4000</td>
                            <td>50</td>
                            <td>
                                 <button className='btn btn-primary btn-sm'><FaEdit/></button>
                                <button className='btn btn-danger btn-sm'> <FaTrashAlt /> </button>
                            </td>
                         </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Items;