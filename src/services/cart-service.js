import { data } from "react-router";
import { apiClient } from "./apiClient"

export async function addToCart({ id }) {
    try {
        const options = {
            url: "/cart",
            method: "POST",
            data: {
                productId: id,
            }
        }
        const response = await apiClient.request(options)
        return response;
    } catch (error) {
        throw error;
    }
}

export async function getItemsFromCart() {
    try {
        const options = {
            url: "/cart",
            method: "GET"
        }
        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}

export async function removeItemFromCart({id}){
   try {
     const options = {
        url:`/cart/${id}`,
        method:"DELETE"
    }
    const response = await apiClient.request(options)
    console.log(response);
    
    return response;
   } catch (error) {
    throw error
   }
}

export async function updateCartItems({id,count}){
try {
    const options = {
        url:`/cart/${id}`,
        method:"PUT",
        data:{
            count
        }
    }
    const response = await apiClient.request(options)
    return response;
} catch (error) {
    throw error
}
}