import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus,faPlus,faTrash} from '@fortawesome/free-solid-svg-icons';
import Rating from "../Rating/Rating"
import { CartContext } from "../../context/cart.Context";
import { useContext } from "react";
export default function CartItem({productInfo}){
const {handleDeleteItem,handleUpdateItem} = useContext(CartContext)
const {price,count,product} = productInfo
const id= product.id

return<>
       <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={product.imageCover}
                    alt="Relaxed Fit Knitted Joggers Lilac"
                    className="h-16 w-16 rounded-lg object-cover ring-1 ring-slate-100"
                  />
                  <div>
                    <h3 className="font-medium text-slate-800 leading-snug">{product.title}</h3>
                    <p className="text-xs text-slate-500">{product.category.name}</p>
                    <div className="mt-1 flex items-center gap-1 text-xs text-amber-500">
                      <Rating rating={product.ratingsAverage}/>
                      <span className="text-slate-500">{product.ratingsAverage}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Qty controls (visual only) */}
                  <div className="flex items-center rounded-xl border border-slate-200">
                    <button  onClick={()=>{handleUpdateItem({id,count:count-1})}} className="inline-flex h-9 w-9 items-center justify-center rounded-l-xl">
                      <FontAwesomeIcon icon={faMinus} className='text-sm' />
                    </button>
                    <div className="w-10 text-center text-sm font-medium select-none">{count}</div>
                    <button onClick={()=>{handleUpdateItem({id,count:count+1})}}  className="inline-flex h-9 w-9 items-center justify-center rounded-r-xl">
                      <FontAwesomeIcon icon={faPlus} className='text-sm' />
                    </button>
                  </div>
                  <div className="w-20 text-right text-sm font-semibold text-slate-800">{price} EGP</div>
                  <button onClick={()=>{handleDeleteItem({id})}} className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400">
                    <FontAwesomeIcon icon={faTrash} className='text-sm text-red-500' />
                  </button>
                </div>
              </div>
</>
}