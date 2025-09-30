import { useEffect, useState } from 'react'
import { calcTimeLeft } from '../../utils/counterDown'
import useProducts from '../../hooks/useProducts'
import HomeDealsSkeleton from '../../components/Skeleton/HomeDealsSkeleton'
import ProductCard from '../../components/ProductCard/ProductCard'

export default function Deals() {
  const [timeLeft,setTimeLeft] = useState({hour:0,minute:0,second:0})
  const {isLoading,products,error,isError} = useProducts()
  
useEffect(()=>{
  setInterval(()=>{
    const newTimeLeft = calcTimeLeft()
    setTimeLeft(newTimeLeft)
  },1000)
},[])


if(isLoading){
return  <HomeDealsSkeleton></HomeDealsSkeleton>
}

const deals = products?.filter((product)=>{
  return product.priceAfterDiscount
})

 

  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between items-center ">
            <div>
              <h2 className="text-2xl font-bold">Deals of the Day</h2>
              <div className="flex space-x-3 mt-2 mb-2 items-center">
                <p className="">Deals ends in : </p>
                <div className="counter flex gap-3">
                  <div className="size-8 rounded-md bg-gray-800 text-white text-sm  flex justify-center items-center">{timeLeft.hour}</div>
                  <span>:</span>
                  <div className="size-8 rounded-md bg-gray-800 text-white text-sm  flex justify-center items-center">{timeLeft.minute}</div>
                  <span>:</span>
                  <div className="size-8 rounded-md bg-gray-800 text-white text-sm  flex justify-center items-center">{timeLeft.second}</div>
                </div>
              </div>
            </div>

          </div>
          <div className="grid py-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
{deals?.map((product)=> <ProductCard productInfo = {product} key={product.id}/>)}

          </div>
        </div>
      </section>
    </>
  )

}
