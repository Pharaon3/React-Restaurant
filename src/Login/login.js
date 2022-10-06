import React, { useState } from 'react'
import imgUrl from '../public/img/login-bottom.png'
import innerImgUrl from '../public/img/inner.png'
import axios from 'axios';
import { Button,Modal} from 'react-bootstrap';  
import { ConsoleSqlOutlined } from '@ant-design/icons';
function Login() {
  const [ epFlag, setEpFlag ] = useState('true')
  const [ modalFlag, setModalFlag ] = useState('false');
  const [ clientEmail, setClientEmail ] = useState('');
  const [ clientPhone, setClientPhone ] = useState('');
  var modalTitle = 'Login'
  const [ modalComment , setModalComment] = useState('')
  const [ userName, setUserName ] = useState('')
  
  const loginWithEmailBtnClicked = () => {
    setEpFlag(true)
  }
  const loginWithPhoneBtnClicked = () => {
    setEpFlag(false)
  }
  const onEmailChanged = (e) => {
    setClientEmail(e.target.value)
  }
  const onPhoneChanged = (e) => {
    setClientPhone(e.target.value)
  }
  const onUserNameChanged = (e) => {
    setUserName(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setModalComment('Login Failed')
    const loginEmail = {
      userName: userName,
      userEmail: clientEmail
    }
    const loginPhone = {
      userName: userName,
      userPhone: clientPhone
    }
    if(epFlag){
      axios.post('http://localhost:4000/order/valid-user', loginEmail)
      .then(res => {
        if(res.data.isExist === 'true'){
          setModalComment('Login Failed! This Email is already exist!')
        } else {
          axios.post('http://localhost:4000/order/login', loginEmail)
          .then(res => {
            if(res){
              setModalComment('Login Success')
            } else {
              setModalComment('Login Failed')
            }
          });
        }
      })
    } else {
      axios.post('http://localhost:4000/order/valid-user', loginPhone)
      .then(res => {
        if(res.data.isExist === 'true'){
          setModalComment('Login Failed! This Phone is already exist!')
        } else {
          axios.post('http://localhost:4000/order/login', loginPhone)
          .then(res => {
            if(res){
              setModalComment('Login Success')
            } else {
              setModalComment('Login Failed')
            }
          });
        }
      })
    }
    openModal();
  }
  const handleModal = () => {  
    setModalFlag(!modalFlag)
  } 
  const openModal = () => {
    console.log('client opens Modal')
    handleModal()
  }
  return (
    <>
    <div style = {{width: 800, height: 400, marginLeft: 'auto', marginRight: 'auto', marginTop: 200}}> 
      <img src = {innerImgUrl} alt = 'innerImg' style = {{float: 'left'}}/>
      <div style = {{paddingLeft: 200, marginLeft: 200, marginTop: 20}}>
        <h3 style = {{ paddingTop: 20, paddingLeft: 70}}> Login </h3>
        <p style = {{ paddingTop: 20, paddingLeft: 70}}> Please enter your phone or email for OTP verification. </p>
        <div style = {{ marginLeft: 'auto', marginRight: 'auto', paddingTop: 20, paddingLeft: 70 }}>
          <form>
            <input 
              type = 'text' 
              style = {{width: '100%', height: 40}} 
              placeholder = 'Ednomd Dates' 
              onChange = {onUserNameChanged}  
              value = {userName}  />
            <div className = "btn-group" style = {{width: '100%',  marginTop: 20}}>
              <button type = "button" onClick = {loginWithEmailBtnClicked} className = "btn btn-outline-info"> Login with Email </button>
              <button type = "button" onClick = {loginWithPhoneBtnClicked} className = "btn btn-outline-info"> Login with Phone </button>
            </div>
            <input 
              type = 'text' 
              style = {{display: epFlag ? 'block' : 'none', width: '100%', height: 40, marginTop: 20}} 
              placeholder = 'test@gmail.com'
              onChange = {onEmailChanged} 
              value = {clientEmail} />
            <input 
              type = 'text' 
              style = {{display: epFlag ? 'none' : 'block', width: '100%', height: 40,  marginTop: 20}} 
              placeholder = '+49' 
              onChange = {onPhoneChanged}  
              value = {clientPhone}  />
            <button 
              type = 'submit' 
              className = "btn btn-warning" 
              style = {{width: '100%', marginTop: 20}}
              onClick = {onSubmit}
              data-bs-toggle="modal" data-bs-target='#myModal'
              > SEND </button>
          </form>
        </div>
      </div>
    </div>
    <img src = {imgUrl} alt = 'login-bottom.png' />

    <Modal show={modalFlag} onHide={handleModal}>  
      <Modal.Header closeButton>Login</Modal.Header>  
      <Modal.Body> {modalComment} </Modal.Body>  
      <Modal.Footer>  
        <Button onClick={handleModal}>Close</Button>  
      </Modal.Footer>  
    </Modal>  
    </>
  );
}

export default Login;