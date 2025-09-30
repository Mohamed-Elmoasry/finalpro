import {createContext,useState} from "react"
import {addToCart} from "../services/cart-service"
import {getItemsFromCart} from "../services/cart-service"
import { toast } from "react-toastify"
import {useEffect} from "react"
import Swal from 'sweetalert2'
import { removeItemFromCart } from "../services/cart-service"
import {updateCartItems} from "../services/cart-service"
export const CartContext = createContext(null)


export default function CartProvider({children}){

    
    const [cartinfo,setCartInfo] = useState([])
    const [loading,setLoading] = useState(true)
    const [isError,setIsError] = useState(false)
    const [error,setError] = useState(null)
   async function handleAddingToCart({id}){
    try {
        setLoading(true)
        const response = await addToCart({id})
        if(response.success){
            setLoading(false)
            toast.success(response.data.message)
            handleGetItems()
            setCartInfo(response?.data.data)            
        }
    } catch (error) {
        setLoading(false)
        console.log(error);
        setIsError(true)
        setError(error)
    }
   }

  async function handleGetItems(){
  try{
    setLoading(true)
 const response  = await getItemsFromCart()
 if(response.success){
    setLoading(false)
    setCartInfo(response.data)
 }
  }
  catch(error){
setLoading(false)
setIsError(true)
setError(error)
  }

   }

 async function handleDeleteItem({id}){
try {
  const result = await Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  iconColor:"#d33",
  showCancelButton: true,
  confirmButtonColor: "#d33",
  cancelButtonColor: "#333446",
  confirmButtonText: "Yes, delete it !"
});
if (result.isConfirmed) {
    const response = await removeItemFromCart({id})
    const toastId = toast.loading("the product has been deleted from your cart")
    console.log(response);
    if (response.success) {
        toast.dismiss(toastId)
        setCartInfo(response.data)
    }
}
} 
catch (error) {
    console.log(error);
}
}

async function handleUpdateItem({id,count}){
try {
    const toastId = toast.loading("your count has been updated")
    const response = await updateCartItems({id,count})
    console.log(response);
    
    if (response.success) {
        setCartInfo(response.data)
        toast.dismiss(toastId)
    }

} catch (error) {
    console.log(error);
}
}
   useEffect(()=>{
    handleGetItems()
   },[])

    return <CartContext.Provider value={{setCartInfo,loading,cartinfo,handleAddingToCart,error,isError,handleDeleteItem,handleUpdateItem,handleGetItems}}>
        {children}
    </CartContext.Provider>
}