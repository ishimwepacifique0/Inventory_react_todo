import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const NewInvoice = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='container'>
       <div className='d-flex justify-content-between'>
                    <div>
                        <b>Invoice</b>
                        <p>all invoice</p>
                    </div>
                    <div className=''>
                        <NavLink to='/invoice' >
                            <button className="btn btn-primary">View Invoice</button>
                        </NavLink>
                        <Print />
                    </div>
                </div><div className='d-flex justify-content-between'>
          <div>
             <p>Invoice</p>
              <p>New invoice</p>
          </div>
      </div>
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

                   <div className='form-group my-1'>
                     <button className='btn btn-success'>
                      Save
                     </button>
                    </div>

            
            </form>
    </div>
  );
}

export default NewInvoice