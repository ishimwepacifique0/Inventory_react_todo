import React from 'react';

function Dashboard(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-xl-3 colo-md-6 mb-4'>
                    <div className='card border-left-warning shadow h-100 py-2 bg-primary'>
                        <div className='card-body'>
                            <div className='row no-gutters align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-xs font-weight-bold text-white text-uppercase mb-1'>
                                        Pending the Invoice
                                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                4
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 colo-md-6 mb-4'>
                    <div className='card border-left-warning shadow h-100 py-2 bg-secondary'>
                        <div className='card-body'>
                            <div className='row no-gutters align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-xs font-weight-bold text-white text-uppercase mb-1'>
                                        Pending the Item
                                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                3
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 colo-md-6 mb-4'>
                    <div className='card border-left-warning shadow h-100 py-2 bg-success'>
                        <div className='card-body'>
                            <div className='row no-gutters align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-xs font-weight-bold text-white text-uppercase mb-1'>
                                        Pending the Customer
                                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                3
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 colo-md-6 mb-4'>
                    <div className='card border-left-warning shadow h-100 py-2 bg-warning'>
                        <div className='card-body'>
                            <div className='row no-gutters align-items-center'>
                                <div className='col mr-2'>
                                    <div className='text-xs font-weight-bold text-white text-uppercase mb-1'>
                                        Pending the Income statement
                                        <div className='h5 mb-0 font-weight-bold text-gray-800'>
                                                3
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;