import { useState } from 'react'
import PageMetaData from '../../components/PageMetaData/PageMetaData'
import {resetPassword} from '../../services/password-service'
import { useLocation, useNavigate } from 'react-router'

export default function ResetPassword() {
const location = useLocation()
const [newPassword,setNewPassword] = useState("")
const [message,setMessage] = useState("") 
const navigate = useNavigate()
const email = location.state?.email

async function handleResetPassword(e){
e.preventDefault()
try {
  const response = await resetPassword({email,newPassword}) 
  console.log(response);
  
  if (response.success) {
      console.log(response);
    setMessage(" You Will be Redirected to Login Page")
        setTimeout(()=>{
      navigate("/login")
    },3000)
    
  }
  
} catch (error) {
  console.log(error);
  setMessage("some thing went wrong")
}
}

  return (
    <>
    <PageMetaData title={"Reset Password"} description={"please Enter Your New Password"}/>
      <section className='py-10'>
        <div className="container" >
    <div className='flex items-center justify-center flex-col py-8"'>
            <form onSubmit={handleResetPassword}>
            <p className='mb-5 text-white bg-primary-600 py-2 px-2 rounded-md'>Please Enter the New Password</p>
            <input type="password" name="text" id="text" className='form-control mb-5 w-full' value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}}/>
            <button type='submit' className='btn block bg-primary-600 text-white'>Send</button>
          </form>
          {message && <p className='py-2 px-1 rounded-md bg-white border border-primary-600 mt-5 text-primary-600 text-center'>{message}</p>}
    </div>
        </div>
      </section>
    </>
  )
}
