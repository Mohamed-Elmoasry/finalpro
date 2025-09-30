import { apiClient } from "./apiClient";
export async function forgetPassword({email}){
try {
    const options = {
    url:"/auth/forgotPasswords",
    method:"POST",
    data:{
    email:email

    }
}
const response = await apiClient.request(options)
return response
} catch (error) {
    throw error
}
}

export async function verifyResetCode({resetCode}){
try {
    const options = {
    url:"/auth/verifyResetCode",
    method:"POST",
    data:{
    resetCode:resetCode

    }
}
const response = await apiClient.request(options)
return response
} catch (error) {
    throw error
}
}


export async function resetPassword({email,newPassword}){
try {
    const options = {
    url:"/auth/resetPassword",
    method:"PUT",
    data:{
        email,
        newPassword
    }
}
const response = await apiClient.request(options)
return response
} catch (error) {
    throw error
}
}




