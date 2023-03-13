import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBadge,
} from 'mdb-react-ui-kit';
import axios from 'axios';

export default function EditProfile() {
  const [topRightModal, setTopRightModal] = useState(false);

  const toggleShow = () => setTopRightModal(!topRightModal);
  const [name,setName] = useState('')
  const [companyTin,setCompanyTin] = useState('')
  const [phonenumber,setPhonenumber] = useState('')
  const user = localStorage.getItem("storeTokendata")
  const userdata = localStorage.getItem
  const [msg,setmsg] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name,companyTin,phonenumber)

    const data = {
      name: name,
      companyTin: companyTin,
      phone: phonenumber
    }
    if(data.name == '' ||data.name == '' || data.companyTin == ''){
      setmsg('please provide  data to field')
    }
    try{
      const  response = await axios.patch('https://inventory-bay.onrender.com/api/auth/editUser',data,{
        headers:{
          Authorization: `Bearer ${user}`
        }
      })
      if(response.status == 200 ){
          setmsg('successfully edit profile')
      }
      console.log(response)
    }catch(err){console.log (err)
    }
  };

  return (
    <>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
        <mdb-form-control>
               <label>Edit profile</label><br></br>
                {
                  msg?(
                    <div className="text-success" role="alert">{msg}</div>
                  ):null
                }
                <label mdbLabel class="form-label" for="typeText">Name</label>
                <input mdbInput type="text" id="typeText" class="form-control" 
                value={name}
                onChange={(event) =>setName(event.target.value)}
                />
                <label mdbLabel class="form-label" for="typeText">Phone number</label>
                <input mdbInput type="text" id="typeText" class="form-control" 
                value={phonenumber}
                onChange={(event) =>setPhonenumber(event.target.value)}
                />
                <label mdbLabel class="form-label" for="typeText">Company Tin</label>
                <input mdbInput type="text" id="typeText" class="form-control"
                value={companyTin}
                onChange={(event) =>setCompanyTin(event.target.value)}
                />
                <MDBBtn color="primary" onClick={handleSubmit} className="my-3">Submit</MDBBtn>
              </mdb-form-control>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
           
    </>
  );
}