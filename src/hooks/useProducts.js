import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/product-service";
export default function useProducts() {
  const {data,isLoading,isError,error} = useQuery({
        queryKey:['products',],
        queryFn:  ()=> getAllProducts()
        
          
    }) 

    
    return{products:data?.data.data,isLoading,isError,error}
}
