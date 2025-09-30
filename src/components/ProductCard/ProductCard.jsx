import { Link } from "react-router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCodeCompare, faEye, faPlus} from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons"
import { calcDiscount } from "../../utils/discount-utils.js"
import Rating from "../Rating/Rating.jsx"
import {CartContext} from "../../context/cart.Context.jsx"
import { useContext} from "react"
import { WishlistContext } from "../../context/wishlist.context.jsx"
export default function ProductCard({ productInfo }) {
const {handleAddToWishlist,product,handleDeleteItemsFromWishlist} = useContext(WishlistContext)

   const {id, title, category, imageCover, priceAfterDiscount, price, ratingsQuantity, ratingsAverage } = productInfo
 const {handleAddingToCart} = useContext(CartContext)

const inWishlist =product.some((item) => item.id === id)

function toggleWishlist() {
  if (inWishlist) {
    handleDeleteItemsFromWishlist({ id });
  } else {
    handleAddToWishlist({ id });
  }
} 
  return (
    <>
      <div className="card overflow-hidden shadow-2xl rounded-2xl relative">
        <div className="card-image">
          <Link to={`/product/${id}`} className="block">
          <img src={imageCover} className="h-60 mx-auto " alt="" />
          </Link>
        </div>
        <div className="card-content p-4 space-y-3">
          <div>
            <span className="text-gray-500 text-sm">{category.name}</span>
            <h2 className="font-semibold">
              <Link className="line-clamp-1" to={`/product/${id}`}>  
              {title}
              </Link>
              </h2>
          </div>
          <div className="rating flex items-center gap-3">
            {<Rating rating={ratingsAverage}/>}
            <span>{ratingsAverage}</span>
            <span>{`(${ratingsQuantity})`}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="price space-x-2">
              
              <span className="text-primary-600 text-lg">{priceAfterDiscount ?priceAfterDiscount :price } Egp</span>
              {
                priceAfterDiscount && <del className="text-sm text-gray-500">{price} Egp</del>
              }
              
            </div>
            <button onClick={()=>{handleAddingToCart({id})}} className="bg-primary-600 text-white btn rounded-full p-0 size-8 hover:bg-primary-700">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className="actions absolute top-4 right-4 flex flex-col gap-3 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-300">
          <button onClick={toggleWishlist}>{inWishlist?<FontAwesomeIcon icon={heartSolid} className="text-red-600"/>:<FontAwesomeIcon icon={faHeart} />}</button>
          <button><FontAwesomeIcon icon={faCodeCompare} /></button>
          <button><Link to = {`/product/${id}`}><FontAwesomeIcon icon={faEye} /></Link></button>
        </div>
        {priceAfterDiscount && 
        <span className="badge absolute left-4 top-4 bg-red-600 px-2 py-1 text-white rounded-md">
          -{calcDiscount({ price, priceAfterDiscount }).toFixed(0)}%
        </span>
        }
      </div>
    </>
  )
}

