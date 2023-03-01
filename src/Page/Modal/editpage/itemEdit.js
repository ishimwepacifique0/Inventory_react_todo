import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FaEdit } from 'react-icons/fa'

const Print = (id) =>{

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(id)

    // const [itemname,setItemname] = useState('')
    // const [unitPrice,setUnitPrice] = useState('')
    // const [currentStock,setCurrenStock] = useState('')

    return(
        <>
          <FaEdit onClick={handleShow} />
  
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title className='text-center'>Edit item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form className="form-horizontal jusify-content-center my-1 py-1 mx-1 px-3" method="post">

        <div className="form-group">
        <label for="default" className="col-sm-2 control-label my-1">ItemName</label>
        <div className="col-sm-10">
        <input 
        type="text" 
        name="address"
        className="form-control my-1" 
        />
        </div>
        </div>

    <div className="form-group">
        <label for="default" className="col-sm-2 control-label my-1">Unit Price</label>
        <div className="col-sm-10">
        <input 
        type="text" 
        name="telephone" 
        className="form-control my-1"
        />
        </div>
        </div>
        <div className="form-group">
        <label for="default" className="col-sm-2 control-label my-1">Current Stock</label>
        <div className="col-sm-10">
        <input 
        type="text" 
        name="date" 
        className="form-control my-1" 
        />
        </div>
        </div>
</form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type='submit' onClick={handleClose}>
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
