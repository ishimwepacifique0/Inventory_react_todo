import React, { useState } from 'react';

const Example = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-between'>
                    <div>
                        <b>Item</b>
                        <p>all Item</p>
                    </div>
                    <div className=''>
                        <NavLink to='/items' >
                            <button className="btn btn-primary">View Item</button>
                        </NavLink>
                        <Print />
                    </div>
                </div>
        <form className="form-horizontal jusify-content-center my-1 py-5 mx-3 bg-white px-5 shadow" method="post" action="" >

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
                    <label for="default" className="col-sm-2 control-label my-1"> Sales Price</label>
                    <div className="col-sm-10">
                    <input type="text" name="date" className="form-control my-1" />
                    </div>
                    </div>

                    <div className="form-group">
                    <label for="default" className="col-sm-2 control-label my-1">Current Stock</label>
                    <div className="col-sm-10">
                    <input type="text" name="date" className="form-control my-1" />
                    </div>
                    </div>
                    <button className='btn btn-success my-1'>Save</button>
            
            </form>

        </div>
  );
}

export default Example