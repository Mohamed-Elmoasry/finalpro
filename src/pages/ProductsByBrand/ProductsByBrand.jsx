import { useParams } from 'react-router'
import useProducts from '../../hooks/useProducts'
import Loading from '../../components/Loading/Loading';
import ProductCard from '../../components/ProductCard/ProductCard';
export default function ProductsByBrand() {
const {id:brand=[]} = useParams()
console.log(brand  + "From products by brand");
const {products,isLoading,isError,error} = useProducts()    
console.log(products);
if (isLoading) {
    return <Loading/>
}
  return (
      <>
<section className='py-10'>
<div className='container'>
  {products.length == 0 ?<p className='text-gray-600 text-xl bg-gray-200 py-4 px-2 text-center '>No Products For This Brand</p> : 
                <div className='grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {products.map((product)=>{
        return <ProductCard productInfo={product} key={product.id}/>
        })}
        </div>}
</div>
</section>
    </>
  )
}
