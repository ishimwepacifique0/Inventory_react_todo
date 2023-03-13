import React, { useState,useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBRipple,
  MDBBadge,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import './Appsider.css'
import logo from '../../components/logo.jpg'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutCredentail } from '../../feather/authentication';

export default function Basic({children}) {
  const [showShow, setShowShow] = useState(false);
  const [countdata,setCountdata] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = localStorage.getItem("storeTokendata")
  

  const toggleShow = () => setShowShow(!showShow);

  const handlecount = async () =>{
    try {
        axios.get('https://inventory-bay.onrender.com/api/invoice/get',{
          headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user}`
          }
        }
        )
        .then((res)=>{
            console.log(res.data.invoices)
            setCountdata(res.data.invoices)
        }).catch(err=>console.log(err))
            
           
    }catch(err){
        console.log(err)
    }
}
      useEffect(() => {
          handlecount();
      }, [])

      const logout = () =>{
        dispatch(LogoutCredentail())
        window.location.reload(true)
        console.log('you are logout')
        navigate("/login")
    }

  return (
    <>
      <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
        <div className="position-fixed">
          <MDBListGroup flush className="mx-3 mt-4">
            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='#' action className='border-0 border-bottom rounded rounded'>
                <MDBIcon fas icon="tachometer-alt me-3" />
                Main Dashboard
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='/' action className='border-0 border-bottom rounded' active aria-current='true'>
                <MDBIcon fas icon="chart-area me-3" />
                Activities
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='/invoice' action className='border-0 border-bottom rounded'>
                <MDBIcon far icon="chart-bar me-3" />
                Invoice
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='/items' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="money-bill me-3" />
                Items
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='/customers' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="building me-3" />
                Customers
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='/reports' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="calendar me-3" />
                Report
              </MDBListGroupItem>
            </MDBRipple>

            <MDBRipple rippleTag='span'>
              <MDBListGroupItem tag='a' href='/settings' action className='border-0 border-bottom rounded'>
                <MDBIcon fas icon="users me-3" />
                User
              </MDBListGroupItem>
            </MDBRipple>
          </MDBListGroup>
        </div>
      </MDBCollapse>

      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarNav className="d-flex flex-row align-items-center w-auto">
            <MDBNavbarToggler
              type='button'
              aria-label='Toggle navigation'
              onClick={toggleShow}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBNavbarBrand href='#'>
              <img
                src={logo}
                height='40'
                alt=''
                loading='lazy'
                className='rounded'
              />
            </MDBNavbarBrand>

            <MDBCollapse navbar>
              <MDBNavbarItem className="d-flex align-items-center my-2">
                <p className='my-2'><b>Stock Managements</b></p>
              </MDBNavbarItem>
            </MDBCollapse>


          </MDBNavbarNav>
          <MDBNavbarNav className="d-flex flex-row justify-content-end w-auto">
            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <MDBIcon fas icon="bell" />
                  <MDBBadge color='danger' notification pill>
                    {
                      countdata.length
                    }
                  </MDBBadge>
                </MDBDropdownToggle>

                <MDBDropdownMenu>
                  <MDBDropdownItem>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className='me-3 me-lg-0'>
              <MDBNavbarLink href='#'>
                <MDBIcon fas icon='fill-drip' />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
              <MDBDropdown>

                <MDBDropdownToggle tag="a" href="#!" className="hidden-arrow nav-link">
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" />
                </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link href='/settings'>Profile</MDBDropdownItem>
                    <MDBDropdownItem link href='/invoice'>Invoice</MDBDropdownItem>
                    <MDBDropdownItem link  onClick={logout}>Logout</MDBDropdownItem>
                  </MDBDropdownMenu>

              </MDBDropdown>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>
      <div className='d-flex flex-row justify-content-end row '>
        <div className='col-sm-10'>
        <div className='col align-self-end'>
        <main>{children}</main>
        </div>
        </div>
      </div>
    </>
  );
}