import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Example = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Item to Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body className="jusify-content-center">
        <form className="form-horizontal jusify-content-center my-3 mx-3" method="post" action="" >

            <div className="form-group">
            <label for="default" className="col-sm-2 control-label">ItemName</label>
            <div className="col-sm-10">
            <input type="text" name="address" className="form-control"  />
            </div>
            </div>

                <div className="form-group">
                <label for="default" className="col-sm-2 control-label">Quantity</label>
                <div className="col-sm-10">
                <input type="text" name="name" className="form-control" />
                </div>
                </div>
                <div className="form-group">
                    <label for="default" className="col-sm-2 control-label">Unit Price</label>
                    <div className="col-sm-10">
                    <input type="text" name="telephone" className="form-control"/>
                    </div>
                    </div>

                    <div className="form-group">
                    <label for="default" className="col-sm-2 control-label"> Sales Price</label>
                    <div className="col-sm-10">
                    <input type="text" name="date" className="form-control" />
                    </div>
                    </div>

                    <div className="form-group">
                    <label for="default" className="col-sm-2 control-label">Current Stock</label>
                    <div className="col-sm-10">
                    <input type="text" name="date" className="form-control" />
                    </div>
                    </div>
            
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example