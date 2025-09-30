import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/apiCategories";
import categories from "../components/SubCategories/SubCategories";

export function useCategories(){
const {data,isLoading,isError,error} = useQuery({
    queryKey:['categories'],
    queryFn:getAllCategories
})

return{categories:data?.data.data,isError,error,isLoading}
}

// {
//     if (product.category == categories._id) {
        
//     }
// }