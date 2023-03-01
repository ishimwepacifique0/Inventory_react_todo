import { path } from "./routerPath/Path";
import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.jpg'
import { useDispatch } from "react-redux";
import { LogoutCredentail } from "../feather/authentication";
import { useNavigate } from "react-router-dom";


const Sidebar = ({children}) =>{
    const user = localStorage.getItem("storeTokendata")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () =>{
        dispatch(LogoutCredentail())
        window.location.reload(true)
        console.log('you are logout')
        navigate("/login")
    }
    return(
        <div className="cont">
           <div className="sidebar navbar-nav bg-gradient-primary sidebar-dark ">
             <div className="row">
                <div className="top_section">
                    <img src={logo} className="img img-border" alt="logo-image"/>
                    <div className="logo">
                        Stock Managements
                        </div>
                        <div className="bars">
                        </div>
                </div>
                <hr className="sidebar-divider "/>
                {
                    path.map((item,index)=>{
                        return(
                            <NavLink to={item.path} key={index} className="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link-text">{item.name}</div>
                            </NavLink>
                        )
                    })
                }
                {
                    !user == ''?(
                        <button className="btn btn-danger text-center mx-1" onClick={logout}>logout</button>

                    ):(
                        <button className="btn btn-danger text-center mx-1 d-none" onClick={logout}>logout</button>

                    )
                }
              </div>
        </div>
        <div>
            <main>{children}</main>
            </div>
        </div>
    )

}

export default Sidebar;