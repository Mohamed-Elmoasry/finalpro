import { faHeart, faMinus, faPlus, faReorder, faRotateLeft, faShare, faShieldHalved, faStar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../../components/Rating/Rating"
import { calcDiscount } from "../../utils/discount-utils";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { CartContext } from "../../context/cart.Context";
import { useContext } from "react";
export default function ProductInfo({ ProductInfo }) {
    const { id, title, description, images, ratingsAverage, category, price, priceAfterDiscount, quantity, ratingsQuantity } = ProductInfo
   console.log(ProductInfo);
   
    const {handleAddingToCart} = useContext(CartContext)

    return <>
        <section className="py-10 bg-gray-100">
            <div className="container px-4">
                <div className="product-info flex flex-col md:flex-col-reverse items-center lg:flex-row gap-8 justify-center">
                    <div className="images ">
                        <ImageGallery showNav={false} showFullscreenButton={false} showPlayButton={false} items={images.map((image) => {
                            return {
                                original: image,
                                thumbnail: image
                            }
                        })} />
                    </div>
                    <div className="info space-y-4 bg-white  px-5 py-4">
                        <div className=" flex justify-between items-center">
                            <p className={`${quantity > 0 ? "bg-primary-200 text-primary-700" : "bg-red-200 text-red-700"} px-2 py-1 rounded-lg `}>{quantity > 0 ? "in Stock" : "out of Stock"} </p>
                            <div className="icons text-gray-400">
                                <FontAwesomeIcon icon={faShare} />
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                        </div>
                        <h3 className="font-bold text-2xl">{title}</h3>
                        <div className="rating flex items-center gap-3">
                            <Rating rating={ratingsAverage} />
                            <span>{ratingsAverage}</span>
                            <span>({ratingsQuantity} reviews)</span>
                        </div>
                        <div className="price flex items-center gap-3">
                            <span className="font-bold text-2xl">{priceAfterDiscount ? priceAfterDiscount : price}</span>
                            {priceAfterDiscount && <del className="text-sm text-gray-400">{price}</del>

                            }
                            {priceAfterDiscount && <span className="bg-red-300 px-2 py-1 rounded-lg text-red-500">save {calcDiscount({ price, priceAfterDiscount }).toFixed(0)}%</span>}
                        </div>
                        <div className="bg-gray-200 h-0.5 mt-5 mb-5 w-full my-10"></div>
                        <p>{description}</p>
                        <div className="flex items-center gap-2">
                            <div>Quantity</div>
                            <div>
                                <button className="btn">
                                    <FontAwesomeIcon icon={faMinus} />
                                    <input type="number" defaultValue={1} min={1} className="w-12 focus:outline-none border-0 focus:ring-0  text-center" />
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <div>only {quantity} items in Stock</div>
                        </div>
                        <div className="buttons flex gap-2 mt-5">
                            <button onClick={()=>{handleAddingToCart({id})}} className="w-1/2 btn bg-primary-600 text-white">Add to Cart</button>
                            <button className="w-1/2 btn bg-white border border-gray-300">Buy Now</button>
                        </div>
                        <div className="bg-gray-200 h-0.5 mt-5 mb-5 w-full my-10"></div>
                        <div className="flex justify-between py-6">
                            <div className="flex gap-2 items-center">

                                <FontAwesomeIcon icon={faTruckFast} className=" rounded-full text-xl p-2 bg-primary-200 text-primary-600" />


                                <div>
                                    <h3 className="font-bold">Free Delivery</h3>
                                    <p className="text-gray-400 text-sm">Free Shipping on Orders over $50</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">

                                <FontAwesomeIcon icon={faRotateLeft} className=" rounded-full text-xl p-2 bg-primary-200 text-primary-600" />


                                <div>
                                    <h3 className="font-bold">30 Days Return</h3>
                                    <p className="text-gray-400 text-sm">Satisfaction guaranteed or money back</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
} 