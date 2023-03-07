import React from "react";

const Detailcustomer = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">

                </div>
                <div className="col">

                </div>
                <div className="col">
                    <div>Name:</div>
                    <div>Tin:</div>
                    <div>Tel:</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-border">
                        <tr>
                           <td>Detail of  Invoice he/she made</td> 
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>ItemName</th>
                            <th>Quantity</th>
                            <th>Sales Price</th>
                            <th>Total Amount</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detailcustomer;