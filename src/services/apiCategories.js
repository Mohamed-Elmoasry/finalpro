import {apiClient} from "./apiClient.js"

export async function getAllCategories(){
 try {
    const   options = {
url:"/categories",
method:"GET"
    }
    const response = await apiClient.request(options);      
   return response

 } catch (error) {
     console.log(error);
throw error    

 }    
}

export async function getSubCategories({id}){
    try {
        const options = {
            url:`categories/${id}/subcategories`,
            method:"GET",
        }
        const response  =await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}