import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

const Print = ({id}) =>{
  console.log(id)

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dataInvoice,setDataInvoice] = useState([])

  const getonedata  = async (id) =>{
    try{
      const response = await axios(`https://inventory-bay.onrender.com/api/invoice/get/${id}`)
      console.log(response.data.invoices)
      setDataInvoice(response.data.invoices)
    }catch(err){
      console.log(err)
    }
  } 

    return(
        <>
        <Button variant="success" onClick={handleShow}>
          Print
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Invoice</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <button onClick={getonedata}>Print</button>
            {dataInvoice.map((item,key)=>{
              return(
                <>            
            <p>CustomerName: {item.customer.name}</p>
            <p>CustomerPhone: {item.customer.phone}</p>
            <p>CustomerTin: {item.customer.customerTin}</p>

           <table className='table table-border'>
            <thead>
                <tr>
                    <th>ItemName</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody>
                                    <td>{item.items.map(item=>item.item?.name)}</td>
                                    <td>{item.items.map(item=>item.quantity)}</td>
                                    <td>{item.items.map(item=>item.salesPrice)}</td>
                                    <td>{item.total}</td>
            </tbody>
           </table>
           </>
            )
          })}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Print
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )

}

export default Print;
