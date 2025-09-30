import { apiClient } from "./apiClient";
export async function verifyToken(){
try {
    const options = {
    url:"/auth/verifyToken",
    method:"GET"
}
const response = await apiClient.request(options)
return response
} catch (error) {
    throw error;
}
}