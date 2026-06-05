import React, { useEffect, useRef, useState } from 'react'
import AxiosInstance from './Axios'
import { useNavigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

function Login() {

  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  
  const submithadler = async (e)=>{
    e.preventDefault()
    try{
      const response = await AxiosInstance.post('api/token/',{username,password})
      alert('succesfully login')
      const decode = jwtDecode(response.data.access)
      if(decode.role === 'hr'){
        navigate('/hrdashboard')
      }
      if(decode.role === 'manager'){
        navigate('/managerdashboard')
      }
      if(decode.role === 'employee'){
        navigate('/employeedashboard')
      }
    }
 
    catch(error){
      alert('failed to login jwt')
    }
  }
 
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <form onSubmit={submithadler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', height: '40vh' }}>
        <input type='text' onChange={(event) => { setUsername(event.target.value) }} placeholder='username' />
        <input type='password' onChange={password} placeholder='enter the password' onChange={(event) => setPassword(event.target.value)} />
        <input type='submit' value='login' />
      </form>
    </div>
  )
}
export default Login;