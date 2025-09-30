import { useState } from 'react'
import PageMetaData from '../../components/PageMetaData/PageMetaData'
import { forgetPassword } from '../../services/password-service'
import { useLocation, useNavigate } from 'react-router'

export default function ForgetPassword() {
  const navigate = useNavigate()
  useLocation()
const [email,setEmail] = useState("")
const [message,setMessage] = useState("") 
async function handleForgetPassword(e){
  e.preventDefault()
try {
  const response = await forgetPassword({email}) 
  if (response.success) {
    setMessage(response.data.message + " and You will be Redirected to Verify code page")
    setTimeout(()=>{
      navigate("/verify-reset-code",{state:{email}})
    },3000)
  }
  
} catch (error) {
  console.log(error);
  setMessage("some thing went wrong")
}
}

  return (
    <>
    <PageMetaData title={"Forget Password"} description={"Forget password"}/>
      <section className='py-10'>
        <div className="container" >
    <div className='flex items-center justify-center flex-col py-8"'>
            <form onSubmit={handleForgetPassword}>
            <p className='mb-5 text-white bg-primary-600 py-2 px-2 rounded-md'>Please Enter Your Email and we will send you a code</p>
            <input type="email" name="email" id="email" className='form-control mb-5 w-full' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button type='submit' className='btn block bg-primary-600 text-white'>Send</button>
          </form>
          {message && <p className='py-2 px-1 rounded-md bg-white border border-primary-600 mt-5 text-primary-600 text-center'>{message}</p>}
    </div>
        </div>
      </section>
    </>
  )
}
