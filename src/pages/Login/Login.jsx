import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginImage from '../../assets/images/login-img.png'
import { faEnvelope, faEye, faGear, faLock, faShieldHalved, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link, useLocation, useNavigate } from "react-router"
import * as yup from "yup"
import { useFormik } from "formik"
import { useContext, useState, } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import { API_CONFIG } from "../../config/index.js"
import { sendDataToLogin } from "../../services/auth-service.js"
import { AuthContext } from '../../context/auth.context.jsx'
import PageMetaData from '../../components/PageMetaData/PageMetaData.jsx'
export default function Login() {

<PageMetaData title={"Log in"} description={"you can log in to FreshCart From here"}/>


  const location = useLocation()
  const from = location?.state?.from || "/"
  const { setToken } = useContext(AuthContext)
  const [isShown, setIsShown] = useState(false)
  const navigate = useNavigate()
  const [isCorrect, setIsCorrect] = useState("")
  function togglePassword() {
    setIsShown(!isShown)
  }
  function handleChange(e) {
    setIsCorrect("")
    formik.handleChange(e)
  }
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const schema = yup.object({
    email: yup.string().required("Enter Your Email").email("Email is InValid"),
    password: yup.string().required("Enter Your Password").matches(passwordRegex, "password should be at least 8 charachters ,One Uppercase English letter , One Lowercase English letter , One Number , One Special charachter"),
  })
  async function handleLogin(values) {
    // *integgrate with backend Api
    try {
      const response = await sendDataToLogin(values)
      if (response.success) {
        toast.success("Welcome back!")

        if (values.rememberMe == false) {
          sessionStorage.setItem("token", response.data.token)
        }
        else{
          localStorage.setItem("token", response.data.token)
        }
        setToken(response.data.token)
        setTimeout(() => { navigate(from) }, 3000)
      }
    } catch (error) {
      console.log(error);
      setIsCorrect(error.message)
    }
    console.log("USER SIGNED UP");
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: schema,
    onSubmit: handleLogin
  })

  return (
    <>
      <main className='py-12 px-12'>
        <div className="container grid lg:grid-cols-2 md:grid-cols-1">
          <div className='space-y-3 flex flex-col items-center justify-center p-4'>
            <img src={loginImage} alt="Freshcart log in image" className='w-100 shadow-2xl rounded-2xl' />
            <h2 className='text-2xl text-center font-semibold justify-center'>FreshCart Ypur One-Stop Shop for Fresh Products</h2>
            <p className='text-gray-500 text-center'>Join thousanda of happy customers who trust freshcart for their daily grocery needs</p>
            <ul className='flex gap-5'>
              <li className='flex gap-2 text-sm text-gray-400 '><span><FontAwesomeIcon className='text-primary-600' icon={faTruckFast} /></span> Free Delivery</li>
              <li className='flex gap-2 text-sm text-gray-400 '><span><FontAwesomeIcon className='text-primary-600' icon={faShieldHalved} /></span>Secure Payment</li>
              <li className='flex gap-2 text-sm text-gray-400 '><span><FontAwesomeIcon className='text-primary-600' icon={faGear} /></span>24/7 Support</li>
            </ul>
          </div>


          <div className='bg-white shadow-2xl p-10 rounded-2xl space-y-3'>
            <h2 className='text-2xl'><span className='text-primary-600'>Fresh</span> Cart</h2>
            <h2 className='text-2xl'>Welcome back !</h2>
            <p className='text-sm text-gray-500'>sign in to continue your fresh shopping experiance</p>
            <div className="signup-buttons space-y-3 *:hover:bg-gray-200">
              <button className="flex items-center gap-2 btn w-full justify-center bg-transparent border border-gray-400/50" >
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                <span>Continue With Google</span>
              </button>
              <button className="flex items-center gap-2 btn w-full justify-center bg-transparent border border-gray-400/50">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
                Continue With Facebook
              </button>
            </div>
            <div className='h-0.5 w-full bg-gray-200 relative mt-8' >
              <span className='text-sm bg-white  absolute top-1/2 left-1/2 -translate-1/2 text-gray-500/70'>or Continue With Email</span>
            </div>
            <form className="space-y-3" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email">Email adderss</label>
                <div className='relative'>
                  <FontAwesomeIcon icon={faEnvelope} className='text-xl text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 z-10' />
                  <input type="email" className='form-control w-full pl-10' placeholder='Enter Your Email Address' id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={handleChange}
                    onBlur={formik.handleBlur} />

                </div>
                {formik.touched.email && formik.errors.email &&
                  <p className="text-red-500 text-sm">*{formik.errors.email}</p>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div className='relative'>
                  <FontAwesomeIcon icon={faLock} className='text-xl text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 z-10' />
                  <input type={isShown ? "text" : "password"} className='form-control w-full pl-10' placeholder='Enter Your Password' id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon icon={faEye} className='text-xl text-gray-300 absolute right-4 top-1/2 -translate-y-1/2 z-10' onClick={togglePassword} />
                </div>
                {formik.touched.password && formik.errors.password &&
                  <p className="text-red-500 text-sm w-3/4 ">*{formik.errors.password}</p>}
                {isCorrect && <p className='text-red-500'>*{isCorrect}</p>}
              </div>
              <div className='flex gap-4 items-center' >
                <input type="checkbox" className=" accent-primary-600 size-4"
                  name="rememberMe"
                  value={formik.values.rememberMe}
                  onChange={handleChange}
                  onBlur={formik.handleBlur} />
                <p>keep me signed in</p>
              </div>
              <button type="submit" className='btn bg-primary-600 text-white w-full'>Sign in</button>
            </form>
            <div className='h-0.5 w-full bg-gray-200 mt-5 mb-5'></div>
            <p>New to freshCart ? <Link to="/signup" className='text-primary-600'>Create New Account</Link></p>
            <Link className='text-primary-700' to={"/forget-password"}>Forget Password Click here</Link>
          </div>
        </div>
      </main>
    </>
  )
}
