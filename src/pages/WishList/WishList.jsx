import { useContext, useState } from 'react'
import PageMetaData from '../../components/PageMetaData/PageMetaData'
import { WishlistContext } from '../../context/wishlist.context'
import Loading from '../../components/Loading/Loading';
import { CartContext } from '../../context/cart.Context';
export default function WishList() {
const {isLoading,product,handleDeleteItemsFromWishlist} = useContext(WishlistContext)
 const {handleAddingToCart} = useContext(CartContext)


if (isLoading) {
  return<Loading></Loading>
}
  return (
    <>
      <PageMetaData title={"WishList"} description={"your wish list products"} />

      <section className='py-8'>
        <div className="container">
          {product?.length === 0 ? <p className='text-gray-600 text-xl bg-gray-200 py-4 px-2 text-center '>No items in your wishlist</p>:
          <>
          
          {product?.map((item)=>{
            return           <div className='item flex justify-between items-center' key={item.id}>
            <div className='flex gap-5 items-center'>
              <img src={item.imageCover}alt={item.title} className='size-24'/>
              <div className="data space-y-3">
                <h2 className='font-semibold text-gray-400'>{item.title}</h2>
                <p className='text-green-400'>{item.price} Egp</p>
                <button onClick={()=>{handleDeleteItemsFromWishlist({id:item.id})}} className='text-red-600'>Remove From wishlist</button>
              </div>
            </div>
            <button onClick={()=>{handleAddingToCart({id:item.id})}} className='bg-primary-600 text-white btn'>Add To Cart</button>
          </div>
          })}</>
        }

        </div>
      </section>

    </>
  )
}
