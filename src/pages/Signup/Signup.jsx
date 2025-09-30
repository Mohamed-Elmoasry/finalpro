import { faShieldHalved, faStar, faTruckFast, faUser, faUserPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import reviewAuthorImage from "../../assets/images/review-author.png"
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router";
import {useFormik} from "formik"
import * as yup from "yup"
import { toast} from 'react-toastify';
import { useState } from "react";
import {sendDataToSignUp} from "../../services/auth-service.js"
import {passwordStrength} from "../../utils/password-strength"
import PageMetaData from "../../components/PageMetaData/PageMetaData.jsx";
export default function Signup() {
  <PageMetaData title={"Sign up"} description={"you Can Make Sign up"}/>
  
 const navigate = useNavigate()
 const [isErrorExist,setIsErrorExist] = useState(null)
const phoneRegex = /^(\+2)?01[0125][0-9]{8}$/
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
const schema = yup.object({
  name:yup.string().required("Enter Your Name"),
  email:yup.string().required("Enter Your Email").email("Email is InValid"),
  phone:yup.string().required("Enter Your Phone").matches(phoneRegex,"we accept egyption numbers only"),
  password:yup.string().required("Enter Your Password").matches(passwordRegex,"password should be at least 8 charachters ,One Uppercase English letter , One Lowercase English letter , One Number , One Special charachter"),
  rePassword:yup.string().required("Repeat Your Password").oneOf([yup.ref("password")],"password should be the same"),
  terms:yup.boolean().oneOf([true],"you must agree to our terms and conditions")
})

async function handleSubmit(values){
// *integgrate with backend Api
console.log("Values sent to API:", values);

try { 
const response = await sendDataToSignUp(values)
if(response.success){
  toast.success("your account has been created")
  setTimeout(()=>{navigate("/login")},3000)
}

} catch (error) {
  console.log(error);
  setIsErrorExist(error.message)
  
}

  console.log("USER SIGNED UP");
}
  const formik = useFormik({
    initialValues:{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:"",
    terms:false,
    },
    validationSchema:schema,
    onSubmit:handleSubmit
  })

let passwordFeedback = passwordStrength(formik.values.password)
// console.log(passwordStrength(formik.values.password))
  return (
    <main className="py-12">
      <div className="container grid lg:grid-cols-2 lg:gap-6 py-10">
        {/* left side */}
        <div className="space-y-4">
          <div className="welcome-msg">
            <h2 className="text-4xl font-bold ">
              welcome to <span className="text-primary-500">FrechCart</span>
            </h2>
            <p className="text-lg mt-4">
              join thousands of happy customers who enjoy
              fresh groceries delivered right
              to their doorstep
            </p>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <div className="icon bg-primary-400 size-10 text-xl flex justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="content">
                <h3 className="font-semibold">
                  Premium Quality
                </h3>
                <p className="text-gray-500">
                  Premium Quality products sourced from trusted suppliers
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="icon bg-primary-400 size-10 text-xl flex justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faTruckFast} />
              </div>
              <div className="content">
                <h3 className="font-semibold">
                  Fast Delivery
                </h3>
                <p className="text-gray-500">
                  same-day available in most areas
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="icon bg-primary-400 size-10 text-xl flex justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>
              <div className="content">
                <h3 className="font-semibold">
                  Secure Shopping
                </h3>
                <p className="text-gray-500">
                  your data and payments are completely secure
                </p>
              </div>
            </li>
          </ul>
          <div className="review p-6 bg-white shadow-md rounded-2xl">
            <div className="flex items-center gap-4">
              <img src={reviewAuthorImage} alt="sara johnson" className="w-12 rounded-full" />
              <div>
                <h3>
                  sara johnson
                </h3>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                </div>
              </div>
            </div>
            <blockquote className="text-gray-400 italic mt-4">
              <p>
                freshCart has transformed my shopping experiance. the quality
                of the products is outstanding,and the delivery is always on time,
                Highly recommended.
              </p>
            </blockquote>
          </div>
        </div>
        {/* right side */}
        <div className="px-6 py-10 bg-white shadow-xl rounded-xl space-y-4">

          <div className="signup-text text-center ">
            <h2>
              Create Your Account
            </h2>
            <p className="mt-2">
              Start your fresh journey with us
            </p>
          </div>
          <div className="signup-buttons flex items-center justify-center gap-4 *:hover:bg-gray-200">
            <button className="flex items-center gap-2 btn w-full justify-center bg-transparent border border-gray-400/50" >
              <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
              <span>Google</span>
            </button>
            <button className="flex items-center gap-2 btn w-full justify-center bg-transparent border border-gray-400/50">
              <FontAwesomeIcon icon={faFacebook} className="text-blue-600" />
              Facebook
            </button>
          </div>
          <div className="h-0.5 w-full relative bg-gray-300/30 mt-8">
            <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-white p-2">or</span>
          </div>
          <form className="space-y-5" onSubmit={formik.handleSubmit}>
            <div className="name flex flex-col gap-1">
              <label htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" placeholder="Ali" id="name" name="name"
               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}/>
           {formik.touched.name && formik.errors.name && <p className="text-red-500">* {formik.errors.name}</p>}
            </div>
            <div className="email flex flex-col gap-1">
              <label htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" placeholder="Ali@gmail.com" id="email" name="email"
               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
               {formik.touched.email && formik.errors.email && <p className="text-red-500">* {formik.errors.email}</p>}
               {isErrorExist&&<p className="text-red-500">* {isErrorExist}</p>}
            </div>
            <div className="phone flex flex-col gap-1">
              <label htmlFor="phone">
                phone
              </label>
              <input className="form-control" type="tel" placeholder="01200000000" id="phone" name="phone" 
              onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}/>
              {formik.touched.phone && formik.errors.phone && <p className="text-red-500">* {formik.errors.phone}</p>}
            </div>
            <div className="password flex flex-col gap-1">
              <label htmlFor="password">
                password
              </label>
              <input className="form-control" type="password" placeholder="Strong Password" id="password" name="password"
               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>


               {(formik.touched.password && formik.errors.password) ? (<p className="text-red-500">* {formik.errors.password}</p>) :
              
              (<p className="-mt-1 text-gray-400 text-sm">Must be at least 8 charachters with numbers and symbols</p>)}
              { formik.values.password &&  
              <div className="password-srength flex items-center justify-between gap-3">
                <div className="bar h-1 w-full bg-gray-300/30">
                  <div className={`${passwordFeedback.width} ${passwordFeedback.background} progress  h-1`}></div>
                </div>
                <span className="text-center text-nowrap">{passwordFeedback.text} </span>
              </div>}
            </div>
            <div className="rePassword flex flex-col gap-1">
              <label htmlFor="rePassword">
                rePassword
              </label>
              <input className="form-control" type="password" placeholder="Confirm Your Password" id="rePassword" name="rePassword"
               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword}/>
               {formik.touched.rePassword && formik.errors.rePassword && <p className="text-red-500">* {formik.errors.rePassword}</p>}
            </div>
<div className="terms">
              <div className=" flex items-center gap-4" >
              <input type="checkbox" id="terms" name="terms" className=" accent-primary-600 size-4"
               onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.terms}/>
              <label htmlFor="terms">
                i agree to the 
                <Link to="/terms" className="text-primary-600 underline me-1">Terms of Services</Link>and  <Link to="privacy-policy" className="text-primary-600 underline me-1">the Privacy Policy</Link>
              </label>
            </div>
               {formik.touched.terms && formik.errors.terms &&<p className="text-red-500 mt-3">*{formik.errors.terms}</p>}
</div>
            <button type="submit" className="btn bg-primary-600 text-white hover:bg-primary-700 w-full flex gap-2 items-center justify-center">
              <FontAwesomeIcon icon={faUserPlus} />
              <span>Create My Account</span>
            </button>
          </form>
          <p className="text-center pt-5 border-t border-gray-300/50 ">Already have an account <Link to="/login" className="text-primary-600 underline">Sign in</Link></p>
        </div>
      </div>
    </main>
  )
}
