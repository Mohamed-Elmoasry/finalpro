import React, { useContext } from 'react'
import CartItem from "../../components/CartItem/CartItem.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/cart.Context.jsx';
import Loading from "../../components/Loading/Loading.jsx"
import { Link } from "react-router"
import PageMetaData from "../../components/PageMetaData/PageMetaData.jsx"
export default function Cart() {

<PageMetaData title={"Cart"} description={"your cart shopping page"}/>
  
  const { loading, cartinfo ,handleGetItems } = useContext(CartContext)

  if (loading) {
    return <Loading />
  }
  //   if (!cartinfo) {
  //     return <Loading />
  //   }
    const { numOfCartItems, data } = cartinfo 
     if (!data) {
   return <Loading />
   }
  const { totalCartPrice, products } = data 

  return <>
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: Shopping Cart */}
          <section className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <header className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-800">Shopping Cart</h2>
                  <p className="text-sm text-slate-500">{numOfCartItems}</p>
                </div>
              </header>


              {products?.length > 0 ? products?.map((product) => {
                return <CartItem key={product._id} productInfo={product} />
              }) : <div className='text-center space-y-3 py-5'>
                <h3>Your Cart is Empty </h3>
                <p>you can continue shopping from <Link to="/" className="text-primary-600">here</Link> </p>
              </div>}


              {/* Single Item (static) */}

            </div>
          </section>

          {/* Right: Order Summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <h3 className="mb-4 text-lg font-semibold text-slate-800">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Subtotal ({numOfCartItems} item)</span>
                    <span className="text-slate-800">{totalCartPrice} EGP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Shipping</span>
                    <span className="text-slate-800">{products.length > 0 ? 70 : 0} EGP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Tax</span>
                    <span className="text-slate-800">{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                  </div>
                </div>
                <div className="my-4 h-px bg-slate-100" />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-500">Total</span>
                  <span className="font-semibold text-slate-800"> {(totalCartPrice + (products.length > 0 ? 70 : 0) + (totalCartPrice * 0.14)).toFixed(0)} EGP</span>
                </div>
                <Link to={"/Checkout"} className='w-full'>

                  <button className="mt-4 w-full rounded-xl bg-primary-600 px-4 py-3 text-sm font-semibold text-white shadow-sm">
                    Proceed to Checkout
                  </button>
                </Link>
                <button className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm">
                  Continue Shopping
                </button>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-emerald-50 p-2"><FontAwesomeIcon icon={faTruck} /></div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">Free Delivery</h4>
                    <p className="text-xs text-slate-500">Your order qualifies for free delivery. Estimated delivery: 2–3 business days</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-emerald-50 p-2">
                    <FontAwesomeIcon icon={faShieldAlt} className='text-emerled-600' />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">Secure Checkout</h4>
                    <p className="text-xs text-slate-500">Your payment information is protected with 256 bit SSL encryption.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    ;
  </>

}
