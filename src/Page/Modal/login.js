import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LoginCredetial } from '../../feather/authentication'




const Login = () =>{
    const disErr = useSelector((state)=> state.authstoredata.err)
    const dispatch = useDispatch()
    const [username,setUsername] = React.useState([])
    const [password,setPassword] = React.useState([])
    console.log(disErr)

    const AuthLogin = (e) => {
        e.preventDefault()

        const data = {
            "email":username,        
            "password":password,
        }
        dispatch(LoginCredetial(data))
        console.log(data)
    }
    return(
       <div className='container rounded'>
            <div className='row'>
                <div className='col-sm-7'>
            <form className='bg-white form-horizontal my-4 mx-4 px-5 py-5 justify-content-center shadow'
            onSubmit={AuthLogin}
            >
                <h2 className='justify-content-center text-center text-primary'>Login</h2>

                {
                    disErr?(
                        <div className='alert alert-danger text-center'>
                                {disErr}
                        </div>
                    ):(null)}
                <div className='form-group'>
                    <label className='col-sm-2 control-label my-1' >Username</label>
                    <div className='col-sm-10'>
                        <input
                         type="username" 
                         className="form-control my-1"
                         value={username}
                         onChange={(event)=>setUsername(event.target.value)}
                         />
                    </div>
                 </div>
                 <div className='form-group'>
                    <label className='col-sm-2 control-label my-1' >Password</label>
                    <div className='col-sm-10'>
                        <input 
                        type="password"
                         className="form-control my-1" 
                         value={password}
                         onChange={(event)=>setPassword(event.target.value)}
                         />
                    </div>
                 </div>
                 <button type='submit' className='btn btn-success my-2 d-flex justify-content-end'
                 >
                    Login
                 </button>
                 <div>
                <p className='text-center'>
                    Create account <NavLink to={"/signup"} > Sign up </NavLink>
                </p>
            </div>
            </form>
                </div>
            </div>
       </div>
    )
}
export default Login;