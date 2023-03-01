import axios from 'axios';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { SignupCredentail } from '../../feather/authentication';

const SignUp = () =>{

    const dispatch = useDispatch()

    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [companyName,setCompanyName] = useState('')
    const [companyTin,setCompanyTin] = useState('')

    const getregister = () =>{
        const data = 
            {
                "name": name,
                "email": email,
                "password": password,
                "phone": phone,
                "address": address,
                "city": city,
                "companyName": companyName,
                "companyTin": companyTin
              }
              console.log(data)
            dispatch(SignupCredentail(data))
    }

    return(
       <div className='container'>
            <form className='bg-white form-horizontal my-4 mx-4 px-5 py-5 justify-content-center shadow' method='post'>
                <h2 className='justify-content-center'>Register to Inventory</h2>
                <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >Name</label>
                    <div className='col-sm-10'>
                        <input 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        type="username" className="form-control my-1" />
                    </div>
                 </div>
                <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >Email</label>
                    <div className='col-sm-10'>
                        <input 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email" className="form-control my-1" />
                    </div>
                 </div>
                 <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >Password</label>
                    <div className='col-sm-10'>
                        <input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="text" className="form-control my-1" />
                    </div>
                 </div>

                 <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >Phone</label>
                    <div className='col-sm-10'>
                        <input 
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        type="text" className="form-control my-1" />
                    </div>
                 </div>

                 <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >Address</label>
                    <div className='col-sm-10'>
                        <input 
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        type="password" className="form-control my-1" />
                    </div>
                 </div>
                 <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >City</label>
                    <div className='col-sm-10'>
                        <input 
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                        type="text" className="form-control my-1" />
                    </div>
                 </div>
                 <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >Company Name</label>
                    <div className='col-sm-10'>
                        <input 
                        value={companyName}
                        onChange={(e)=>setCompanyName(e.target.value)}
                        type="text" className="form-control my-1" />
                    </div>
                 </div>
                 <div className='form-group'>
                    <label  className='col-sm-2 control-label my-1' >Company Tin</label>
                    <div className='col-sm-10'>
                        <input 
                        value={companyTin}
                        onChange={(e)=>setCompanyTin(e.target.value)}
                        type="password" className="form-control my-1" />
                    </div>
                 </div>
                 <button className='btn btn-success my-2 d-flex justify-content-end' onClick={getregister}>
                    Sign up
                 </button>
                 <div>
                <p className='text-center'>
                    Create account <NavLink to={"/login"} > Sign in </NavLink>
                </p>
            </div>
            </form>
       </div>
    )
}
export default SignUp;