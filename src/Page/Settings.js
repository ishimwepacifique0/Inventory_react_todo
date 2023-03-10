import React,{useState} from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LogoutCredentail } from '../feather/authentication';
import { useEffect } from 'react';
import EditProfile from './Modal/editpage/editProfile';
import axios from 'axios';

export default function ProfilePage() {
    // const [datauser,setConvert] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user  = localStorage.getItem('storeTokendata')

    const data = localStorage.getItem("userData")
    const [datauser,setDatauser] = useState([])

    useEffect(()=>{
      getuserdata()
    },[])

    const getuserdata = async () =>{
      try{
          const response = await axios.get('https://inventory-bay.onrender.com/api/auth/user/',{
            headers:{
              Authorization: `Baerer ${user}`
            }
          })
          console.log(response.data.user)
          setDatauser(response.data.user)
      }catch(err){
        console.log(err)
      }
    }

  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-7">
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{datauser.name}</p>
                <p className="text-muted mb-4">{datauser.address}</p>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn className="bg-danger" >Logout</MDBBtn>
                  <Link to='/edit-user'>
                    <MDBBtn>edit</MDBBtn>
                  </Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Company name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{datauser.companyName}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{datauser.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{datauser.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{datauser.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr/>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Company Tin</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{datauser.companyTin}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}