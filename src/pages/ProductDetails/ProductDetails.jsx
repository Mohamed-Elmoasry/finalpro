import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useParams } from "react-router";
import Loading from "../../components/Loading/Loading"
import ProductDetailsTabs from "../../components/ProductDetailsTabs/ProductDetailsTabs.jsx"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts.jsx";
import { useProductDetails } from "../../hooks/useProductDetails.js";
import PageMetaData from "../../components/PageMetaData/PageMetaData.jsx";

export default function ProductDetails() {
  const {id} = useParams()
  const {productDetails,isLoading,isError,error} = useProductDetails(id)
  
  if(isLoading){
    return<Loading/>
  }
  
  return (
    <>
    <PageMetaData title={productDetails.title} description={"your Product details"}/>
      <ProductInfo ProductInfo={productDetails}/>
      <ProductDetailsTabs ProductInfo={productDetails}/>
      <RelatedProducts ProductInfo={productDetails}/>
    </>
  )
}
