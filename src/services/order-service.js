import {apiClient} from "./apiClient"
export async function getAllOrders({id}){
try {
    const options = {
        url:`/orders/user/${id}`,
        method:"GET",
    }
    const response = await apiClient.request(options)
    return response
} catch (error) {
 throw error   
}
}