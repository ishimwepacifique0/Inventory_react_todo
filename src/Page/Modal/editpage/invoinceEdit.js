import { Modal } from 'bootstrap'
import React from 'react'
import { Button } from 'react-bootstrap'

const Editinvoice = () => {
  return (
    <Modal>
        <Modal.Header>
            <Modal.Title>
                Edit Invoice
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <form className="form-horizontal jusify-content-center bg-white mx-2 px-5 py-1 shadow" method="post" action="" >
            
            <div className="form-group">
                <label for="default" className="col-sm-2 control-label my-1">CustomerTin</label>
                <div className="col-sm-10">
                <input type="text" name="address" className="form-control my-1"  />
                </div>
                </div>
    
                <div className="form-group">
                <label for="default" className="col-sm-2 control-label my-1">CustomerName</label>
                <div className="col-sm-10">
                <input type="text" name="address" className="form-control my-1"  />
                </div>
                </div>
    
                <div className="form-group">
                <label for="default" className="col-sm-2 control-label my-1">CustomerPhonenumber</label>
                <div className="col-sm-10">
                <input type="text" name="address" className="form-control my-1"  />
                </div>
                </div>
    
                <div className="form-group">
                <label for="default" className="col-sm-2 control-label my-1">ItemName</label>
                <div className="col-sm-10">
                <input type="text" name="address" className="form-control my-1"  />
                </div>
                </div>
    
                    <div className="form-group">
                    <label for="default" className="col-sm-2 control-label my-1">Quantity</label>
                    <div className="col-sm-10">
                    <input type="text" name="name" className="form-control my-1" />
                    </div>
                    </div>
                    <div className="form-group">
                        <label for="default" className="col-sm-2 control-label my-1">Unit Price</label>
                        <div className="col-sm-10">
                        <input type="text" name="telephone" className="form-control my-1"/>
                        </div>
                        </div>
    
                        <div className="form-group">
                        <label for="default" className="col-sm-2 control-label my-1"> Total Price</label>
                        <div className="col-sm-10">
                        <input type="text" name="date" className="form-control my-1" />
                        </div>
                        </div>
                
                </form>

        </Modal.Body>
        <Modal.Footer>
            <Button>Edit</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default Editinvoice