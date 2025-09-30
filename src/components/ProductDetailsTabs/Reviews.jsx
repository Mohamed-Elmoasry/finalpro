import React from 'react'
import Rating from "../Rating/Rating"

export default function Reviews({ProductInfo}) {
  const {ratingsAverage,ratingsQuantity} = ProductInfo
  return (
    <>
                         <div className="rating flex items-center gap-3 py-6">
 <Rating rating={ratingsAverage}/>
                             <span>{ratingsAverage}</span>
                             <span>({ratingsQuantity} reviews)</span>
                         </div>
    </>
  )
}
