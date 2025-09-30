import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/product-service";

export function useProductDetails(id){
    const {data,isLoading,isError,error} = useQuery({
        queryKey:['productDetails',id],
        queryFn:()=> getProductById({id})
    })

    return {productDetails:data?.data.data,isLoading,isError,error}
}