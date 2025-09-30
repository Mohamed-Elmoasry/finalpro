import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight} from "@fortawesome/free-solid-svg-icons"
import ProductCard from "../ProductCard/ProductCard.jsx"
import {useEffect, useState } from "react"
import Loading from "../Loading/Loading.jsx"
import {calcTimeLeft} from "../../utils/counterDown.js"
import useProducts from "../../hooks/useProducts.js"
import HomeDealsSkeleton from "../Skeleton/HomeDealsSkeleton.jsx"
export default function HomeDeals() {
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
}).slice(0,5)

 

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
            <Link to={"deals"} className="text-primary-600 flex items-center gap-2 hover:text-primary-800">
              <span>View All Deals</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="grid py-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
{deals?.map((product)=> <ProductCard productInfo = {product} key={product.id}/>)}

          </div>
        </div>
      </section>
    </>
  )
}

