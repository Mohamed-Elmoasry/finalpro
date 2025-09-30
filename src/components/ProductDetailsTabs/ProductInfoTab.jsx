import React from 'react'

export default function ProductInfoTab() {
  return (
    <>
      <div className='space-y-4 py-6'>

        <h2>Product information</h2>
        <p>Your discription here </p>
        <div className='grid grid-cols-2'>
          <div className="benefits">
            <h3 className='mb-3'>Benefits</h3>
            <ol className='space-y-3'>
              <li className='text-black/50'>Rich in Vitamine C and K</li>
              <li className='text-black/50'>Good Source of fiber and antioxidants</li>
              <li className='text-black/50'>Support Heart Health</li>
              <li className='text-black/50'>Helps regulate blood Suger</li>
              <li className='text-black/50'>Promotes healthy Skin</li>
            </ol>
          </div>
          <div className="details">
            <h3 className='mb-3'>Product Details</h3>
            <div className='grid grid-cols-2 text-black/50'>
              <div className=''>Origin</div>
              <div className=''>California</div>
            </div>
            <div className='grid grid-cols-2 text-black/50'>
              <div className=''>Cultivation</div>
              <div className=''>Organic</div>
            </div>
            <div className='grid grid-cols-2 text-black/50'>
              <div className=''>Storage</div>
              <div className=''>Refrigerate upon arrival</div>
            </div>
            <div className='grid grid-cols-2 text-black/50'>
              <div>Shelf Life</div>
              <div>5 - 7 days when refrigerated</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
