import { createContext, useEffect, useState } from "react";
import { addToWishlist, deleteItemsFromWishlist, getItemsFromWishlist } from "../services/wishlist-service";
import { toast } from "react-toastify";

export const WishlistContext = createContext(null)
export function WishlistProvider({children}){
    const [product,setProduct] = useState([])
    const [isLoading,setIsLoading] = useState(true)
async function handleAddToWishlist({id}){
    try {
        const response =await addToWishlist({id})
        if(response.success){
            setProduct(response?.data.data)
            toast.success(response.data.message)  
            handleGetitemsFromWishlist()     
        }         
    } 
    catch (error) {
        console.log(error);
    }
}
async function handleGetitemsFromWishlist(){

    try {
        setIsLoading(true)
        const response =await getItemsFromWishlist()
        if(response.success){
            setIsLoading(false)
            setProduct(response?.data.data)
        }         
    } 
    catch (error) {
        setIsLoading(false)
        console.log(error);
    }
}

async function handleDeleteItemsFromWishlist({id}){
try {
    const response = await deleteItemsFromWishlist({id})
    if (response.success) {
        setProduct(response?.data.data)
        console.log(response.data.data);
        toast.error(response.data.message)
        handleGetitemsFromWishlist()
    }
} catch (error) {
    console.log(error);  
}
}
useEffect(()=>{
    handleGetitemsFromWishlist()
},[])


return<WishlistContext.Provider value={{handleAddToWishlist,isLoading,product,handleDeleteItemsFromWishlist}}>
    {children}
</WishlistContext.Provider>
}