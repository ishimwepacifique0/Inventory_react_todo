import React from 'react';
import '../App.css'
import Example from './Modal/iItemModal';
import NewItem from './Modal/iItemModal';

function Report() {
    return (
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
                            <th>InvoiceId</th>
                            <th>Customer</th>
                            <th>Items</th>
                            <th>Sales Date</th>
                            <th>Release Time</th>
                            <th>Amount</th>
                            <th>Confirm paid/Unpaid</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>11256</td>
                            <td>ISHIMWE</td>
                            <td>Robinet</td>
                            <td>2000-03-04</td>
                            <td>2000-01-01</td>
                            <td>50000</td>
                            <td>Paid</td>
                         </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default Report;