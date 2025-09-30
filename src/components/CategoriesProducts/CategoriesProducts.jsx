import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getAllProducts } from '../../services/product-service';
import Loading from '../Loading/Loading';
import ProductCard from '../ProductCard/ProductCard';
export default function CategoriesProducts() {

  const [subCategoriesProducts, setSubCategoriesProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const  {id}  = useParams()
  
  async function handleCategoriesProducts() {
    try {
      setIsLoading(true)
      const response = await getAllProducts({ category: id })
      if (response.success) {
        setIsLoading(false)
        setSubCategoriesProducts(response.data.data)
        console.log(response.data.data);
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  }
  useEffect(() => {
    handleCategoriesProducts()
  }, [id])

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <>
      <div className="container py-10 gap-5 grid md:grid-cols-3 lg:grid-cols-5">
         {subCategoriesProducts?.map((product)=>{
           return<div className=''>
          
          <ProductCard productInfo={product} key={product.id}/>
   </div>
        })}
      </div>
    </>
  )
}
