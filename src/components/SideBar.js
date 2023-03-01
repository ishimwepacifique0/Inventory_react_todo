import { path } from "./routerPath/Path";
import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom";
import logo from './logo.jpg'
import { useDispatch } from "react-redux";
import { LogoutCredentail } from "../feather/authentication";


const Sidebar = ({children}) =>{
    const dispatch = useDispatch()
    const logout = () =>{
        dispatch(LogoutCredentail())
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
                <p className="text-danger text-center" onClick={logout}>logout</p>
              </div>
        </div>
        <div>
            <main>{children}</main>
            </div>
        </div>
    )

}

export default Sidebar;