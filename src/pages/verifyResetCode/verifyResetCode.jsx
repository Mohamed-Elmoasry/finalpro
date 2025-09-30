import { useState } from 'react'
import PageMetaData from '../../components/PageMetaData/PageMetaData'
import {verifyResetCode } from '../../services/password-service'
import { useLocation, useNavigate } from 'react-router'

export default function VerifyResetCode() {
const location = useLocation()
const [resetCode,setResetCode] = useState("")
const [message,setMessage] = useState("") 
const navigate = useNavigate()
const email = location.state?.email

async function handleVerifyResetCode(e){
e.preventDefault()
try {
  const response = await verifyResetCode({resetCode}) 
  console.log(response);
  
  if (response.success) {
    console.log(response);
    
    setMessage("You Will be Redirected to Reset Password page")
        setTimeout(()=>{
      navigate("/reset-password",{state:{email}})
    },3000)
    
  }
  
} catch (error) {
  console.log(error);
  setMessage("some thing went wrong")
}
}

  return (
    <>
    <PageMetaData title={"Verify Code"} description={"please verify code that was sent to you on you email"}/>
      <section className='py-10'>
        <div className="container" >
    <div className='flex items-center justify-center flex-col py-8"'>
            <form onSubmit={handleVerifyResetCode}>
            <p className='mb-5 text-white bg-primary-600 py-2 px-2 rounded-md'>Please Enter the verification code that we sent to ypur email</p>
            <input type="text" name="text" id="text" className='form-control mb-5 w-full' value={resetCode} onChange={(e)=>{setResetCode(e.target.value)}}/>
            <button type='submit' className='btn block bg-primary-600 text-white'>Send</button>
          </form>
          {message && <p className='py-2 px-1 rounded-md bg-white border border-primary-600 mt-5 text-primary-600 text-center'>{message}</p>}
    </div>
        </div>
      </section>
    </>
  )
}
