import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { LoginCredetial } from '../../feather/authentication'




const Login = () =>{
    
    const dispatch = useDispatch()

    const [username,setUsername] = React.useState([])
    const [password,setPassword] = React.useState([])

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
       <div className='container'>
            <form className='bg-white form-horizontal my-4 mx-4 px-5 py-5 justify-content-center shadow'
            onSubmit={AuthLogin}
            >
                <h2 className='justify-content-center'>Login</h2>
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
    )
}
export default Login;