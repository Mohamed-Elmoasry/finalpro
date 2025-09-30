import React from 'react'

export default function ShippingTab() {
  return (
    <div className='grid grid-cols-2 py-6'>
<div className='shipping info'>
<h3>Shipping information</h3>
<div className='grid grid-cols-2 text-black/50 mt-3 gap-10'>
    <span>Standard</span>
    <span>3 - 5 business days ($4.99)</span>
</div>
<div className='grid grid-cols-2 text-black/50 mt-3 gap-10'>
    <span>Express</span>
    <span>3 - 5 business days ($9.99)</span>
</div>
<div className='grid grid-cols-2 text-black/50 mt-3 gap-10'>
    <span>Free Shipping </span>
    <span>Order Over ($50)</span>
</div>
</div>
<div className='returns info'>
<h3>Returns Policy</h3>
<div className='grid grid-cols-2 text-black/50 mt-3 gap-10'>
    <span>Time Limit</span>
    <span>30 Days</span>
</div>
<div className='grid grid-cols-2 text-black/50 mt-3 gap-10'>
    <span>Condition</span>
    <span>Unopened original packaging</span>
</div>
<div className='grid grid-cols-2 text-black/50 mt-3 gap-10'>
    <span>Refund</span>
    <span>Full refund available</span>
</div>
</div>

  </div>  
    
  )
}
