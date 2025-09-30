import { useState } from "react"
import ProductInfoTab from "./ProductInfoTab"
import Reviews from "./Reviews"
import ShippingTab from "./ShippingTab"
export default function ProductDetailsTabs({ProductInfo}) {

    const [tab, setTab] = useState("info")
    function switchTab(){

        switch (tab) {
            case "info":
                return <ProductInfoTab />
                case "reviews" :
                    return <Reviews ProductInfo={ProductInfo}/>
                    case "shipping":
                        return <ShippingTab/>    
                    }
                }


    return <>
        <section className="py-8">
            <div className="container px-4">
                <div className="bg-white overflow-hidden rounded-lg">
                    <div className="border-b border-gray-200">
                        <div className="flex">
                            <button className={`${tab === "info"?"border-b-2 border-primary-600 text-primary-600 px-6 py-4" :"px-6 py-4" }`} onClick={()=>{setTab("info")}}>
                                product details
                            </button>
                            <button className={`${tab === "reviews"?"border-b-2 border-primary-600 text-primary-600 px-6 py-4" :"px-6 py-4" }`} onClick={()=>{setTab("reviews")}}>
                                Rating
                            </button>
                            <button className={`${tab === "shipping"?"border-b-2 border-primary-600 text-primary-600 px-6 py-4" :"px-6 py-4" }`} onClick={()=>{setTab("shipping")}}>
                                Shipping &amp; Returns
                            </button>
                        </div>
                    </div>
                    <div>
                        {switchTab()}
                    </div>
                </div>
            </div>
        </section>
    </>
}