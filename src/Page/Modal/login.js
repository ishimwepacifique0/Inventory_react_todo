import React from 'react'

const Login = () =>{
    return(
       <div className='container'>
            <form className='bg-white form-horizontal my-4 mx-4 px-5 py-5 justify-content-center shadow'>
                <h2 className='justify-content-center'>Login</h2>
                <div className='form-group'>
                    <label for="default" className='col-sm-2 control-label my-1' >Username</label>
                    <div className='col-sm-10'>
                        <input type="username" className="form-control my-1" />
                    </div>
                 </div>
                 <div className='form-group'>
                    <label for="default" className='col-sm-2 control-label my-1' >Password</label>
                    <div className='col-sm-10'>
                        <input type="password" className="form-control my-1" />
                    </div>
                 </div>
                 <button className='btn btn-success my-2 d-flex justify-content-end'>
                    Login
                 </button>
            </form>
       </div>
    )
}
export default Login;