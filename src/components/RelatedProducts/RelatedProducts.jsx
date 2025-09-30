import React, { useEffect, useState } from 'react'
import {getAllProducts} from "../../services/product-service"
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 export default function RelatedProducts({ProductInfo}) {
const {category} = ProductInfo
const [relatedProducts,setRelatedProducts] = useState(null)
const [loading,setLoading] = useState(true)

async function fetchByCategory(){
    try {
        const response = await getAllProducts({category:category._id})
    if(response.success){
setLoading(false)
setRelatedProducts(response.data.data)
console.log(response.data.data);

    }
    } catch (error) {
     setLoading(false)
     console.log(error);
        
    }
}

useEffect(()=>{
    fetchByCategory()
},[])

if(loading){
    return <Loading/>
}

  return (
    <>
     <section className='related-products py-4'>
        <div className="container">

            <Swiper slidesPerView={5} spaceBetween={10} modules={[Navigation,Pagination]} navigation pagination={{clickable:true}}>
{relatedProducts?.map((product)=>{
    return<SwiperSlide key={product.id} >
        <ProductCard productInfo={product} />
         </SwiperSlide>
})}
</Swiper> 

        </div>
        </section> 
    </>
  )
}
