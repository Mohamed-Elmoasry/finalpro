import { createContext, useEffect, useState } from "react";
import { verifyToken } from "../services/verifyToken";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null)
export default function AuthProvider({children})
{
    // const navigate = useNavigate()

    const [token,setToken] = useState(localStorage.getItem("token") || sessionStorage.getItem("token"))
    const [isAuthinticated,setIsAuthinticated] = useState(false)
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("userinfo")))
    const [loading,setLoading] = useState(true)
     
    
function logOut(){
  // navigate("/login")
  setToken(null)
  setUserInfo(null)
  localStorage.removeItem("userInfo")
  localStorage.removeItem("token")
  sessionStorage.removeItem("token")
}


async function handleVerifyTtoken(){
try {
  setLoading(true)
  const response = await verifyToken()
  if (response.success) {
    setLoading(false)
    setIsAuthinticated(true)
    setUserInfo(response?.data.decoded)
    localStorage.setItem("userInfo",JSON.stringify(response?.data.decoded))
  }
} catch (error) {
  setLoading(false)
  console.log(error);
}
}

useEffect(()=>{
  handleVerifyTtoken()
},[token])
  return <AuthContext.Provider value={{token,setToken,logOut,isAuthinticated,setIsAuthinticated,userInfo,loading}}>
{children}
  </AuthContext.Provider>
}
