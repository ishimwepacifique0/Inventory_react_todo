import React,{useState} from "react";
import { useLocation } from "react-router-dom";
const Detailcustomer = () =>{
    const location = useLocation()
    const state = location.state
    const [record,setRecord] = useState([])
    const Data = localStorage.getItem("userData")
    const convertdata = JSON.parse(Data)
    console.log(convertdata.email)
    console.log(state)
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div>Company Name: {convertdata.companyName}</div>
                    <div>Company Phone: {convertdata.phone}</div>
                    <div>Company Tel: {convertdata.phone}</div>
                </div>
            </div>
            <div className="row">
                <div className="col">

                </div>
                <div className="col">

                </div>
                <div className="col">
                    <div>Name: {state.customer.name}</div>
                    <div>Tin:{state.customer.customerTin}</div>
                    <div>Tel:{state.customer.phone}</div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table px-2">
                        <tr>
                            <th>ItemName</th>
                            <th>Quantity</th>
                            <th>Sales Price</th>
                        </tr>
                        {
                            state.items.map((item,index)=>{
                                return(
                                    <tr>
                                        <td className="px-2">{item?.item.name}</td>
                                        <td className="px-2">{item?.quantity}</td>
                                        <td className="px-2">{item?.salesPrice}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr className="bg-blue">
                            <td>
                                <b>Total</b>
                            </td>
                            <td colSpan={'2'} className='text-left'>
                                {state.total}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Detailcustomer;