import {apiClient} from "./apiClient" 
export async function createOrder({paymentMethod,cartId,shippingAddress}){


try {
    
    const options = {
        method:"POST",
        data:{
            shippingAddress
}
    }
    if(paymentMethod === "cod"){
        options.url = `/orders/${cartId}`
            //   options.data.paymentMethodType = "cash"; 

    }
    else if(paymentMethod === "online"){
        options.url = `/orders/checkout-session/${cartId}?url=${location.origin}`
            //   options.data.paymentMethodType = "card"; 

    }
    const response = await apiClient.request(options)
    return response;
} catch (error) {
  throw error  
}
}
