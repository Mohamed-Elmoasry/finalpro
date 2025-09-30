
import Loading from "../Loading/Loading"
import { useContext } from "react"
import {AuthContext} from "../../context/auth.context"
import { Navigate, useLocation,} from "react-router"
export default function ProtectedRoute({children}) {
const{token,isAuthinticated,loading} = useContext(AuthContext)
const location = useLocation()
if (loading) {
   return <Loading/> 
}
if (!isAuthinticated) {
 return <Navigate to={"/login"} state={{from:location.pathname}}/>
}
else{
return children
}
}
