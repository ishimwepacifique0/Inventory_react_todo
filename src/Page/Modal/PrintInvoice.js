import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Print = () =>{

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <p>CustomerName:.........</p>
            <p>CustomerPhone:.........</p>
            <p>CustomerTin:.........</p>

           <table className='table table-border'>
            <thead>
                <tr>
                    <th>N<sup>o</sup></th>
                    <th>ItemName</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                </tr>
            </thead>
           </table>
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
