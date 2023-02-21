import React from 'react';
import { 
    FaTrashAlt,
    FaEdit,
    FaCheckSquare,
    FaCheck
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import '../App.css'
import Example from './Modal/NewInvoice';
import Print from './Modal/PrintInvoice';

function Invoice() {
    return (
        <div>
            <div className='container'>
            <div className='d-flex justify-content-between'>
                    <div>
                        <b>Invoice</b>
                        <p>all invoice</p>
                    </div>
                    <div className=''>
                        <NavLink to='/newinvoice' >
                            <button className="btn btn-primary">Add Invoice</button>
                        </NavLink>
                        <Print />
                    </div>
                </div>
                <table className='table'>
                    <thead className="bg-primary text-white">
                        <tr>
                            <th>CustomerTin</th>
                            <th>CustomerName</th>
                            <th>CustomerPhone</th>
                            <th>ItemName</th>
                            <th>Quantity</th>
                            <th>Sales Price</th>
                            <th>Total amount</th>
                            <th>Decision</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>5703798529</td>
                            <td>ISHIMWE Pacifique</td>
                            <td>0787334843</td>
                            <td>Robinet</td>
                            <td>30</td>
                            <td>1400</td>
                            <td>42000</td>
                            <td className=''>
                                <button className='btn btn-secondary btn-sm'><FaCheckSquare/> </button>
                                <button className='btn btn-warning btn-sm'> Unpaid </button>
                            </td>
                            <td className='d-flex'>
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

export default Invoice;