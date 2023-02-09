import React from 'react';
import {
    FaEdit,
    FaTrashAlt
} from 'react-icons/fa'

function Customer(props) {
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
                            <th>#</th>
                            <th>CustomerTin</th>
                            <th>CustomerName</th>
                            <th>CustomerPhone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>5703798529</td>
                            <td>ISHIMWE Pacifique</td>
                            <td>0787334843</td>
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

export default Customer;