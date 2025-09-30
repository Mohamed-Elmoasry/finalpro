import { faCcAmex, faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faChevronLeft, faCircleInfo, faLock, faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Link } from 'react-router'
import { toast } from "react-toastify"
import { useContext } from 'react'
import { CartContext } from '../../context/cart.Context'
import Loading from '../../components/Loading/Loading'
import { createOrder } from '../../services/checkout-service'
import { useNavigate } from 'react-router'
import PageMetaData from "../../components/PageMetaData/PageMetaData"
export default function Checkout() {

  <PageMetaData title={"Checkout"} description={"your payment process"}/>
  
  const navigate = useNavigate()
  const { cartinfo, setCartInfo, loading, handleGetItems } = useContext(CartContext)
  // const {cartId,data} = cartinfo

  const cartId = cartinfo?.cartId
  const data = cartinfo?.data
  console.log(cartinfo);

  const validationSchema = yup.object({
    paymentMethod: yup.string().required("Payment Method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("Your details is required"),
      phone: yup.string().required("Your phone is required").matches(/^(\+2)?01[0125][0-9]{8}/, "Your phone is invalid"),
      city: yup.string().required("Your city is required"),
    })
  })

  async function handleCreatingOrder(values) {
    try {
      if (cartinfo?.cartId) {
        const response = await createOrder({ paymentMethod: values.paymentMethod, cartId, shippingAddress: values.shippingAddress })
        // console.log(response.data)   
        // console.log(cartinfo)   


        if (response.success) {
          console.log("data success");

          if (response.data.session) {
            toast.info("You will be redirected to complete payment process")
            setTimeout(() => {
              location.href = response.data.session.url
            }, 3000)
          }
          toast.success("You will be redirectes to Orders page ")
          console.log(cartinfo);
          
          setCartInfo({
            numOfCartItems: 0,
            data: {
              products: [],
              totalCartPrice: 0
            }
          })
          setTimeout(() => { navigate("/orders") }, 3000)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      }
    },
    validationSchema,
    onSubmit: handleCreatingOrder
  })

  if (loading || !cartinfo) {
    return <Loading />
  }


  const { products, totalCartPrice } = data

  return <>
    <section>
      <form className="container py-8 max-w-6xl" onSubmit={formik.handleSubmit}>
        <h1 className='text-2xl font-semibold mb-3'>Checkout</h1>
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='payment-method lg:col-span-2'>
            <div className="payment-options shadow-sm p-6 rounded-lg mb-6">
              <h2 className='font-semibold text-xl'>Payment Method</h2>
              <div >
                <label htmlFor="cod" className={`${formik.values.paymentMethod === "cod" && "bg-primary-50 border-primary-500"} flex gap-8 items-center border rounded-lg p-4 mt-6 border-gray-200 hover:border-primary-600 transition-colors duration-300`}>
                  <input type="radio" name='paymentMethod' id='cod' value={"cod"} className='size-4' onChange={() => { formik.setFieldValue("paymentMethod", "cod") }} />
                  <div className='w-full'>
                    <div className='w-full flex justify-between items-center '>
                      <div className='flex items-center gap-4' >
                        <FontAwesomeIcon icon={faMoneyBill} className='text-2xl text-primary-600' />
                        <div>
                          <h3 className='font-semibold'>Cash on Deleivery</h3>
                          <p className='text-gray-600 text-sm'>Pay when your orders arrives</p>
                        </div>
                      </div>
                      <span className='text-primary-600'>No extra charges</span>
                    </div>

                    {formik.values.paymentMethod === "cod" &&
                      <div className='pl-10 flex items-center gap-4 border border-primary-600/50 p-2 mt-3 rounded-md'>
                        <FontAwesomeIcon icon={faCircleInfo} className='text-primary-600' />
                        <p className='text-primary-600 text-sm'>please keep exact change ready for hassle - free deleivery</p>
                      </div>
                    }
                  </div>

                </label >
                <label htmlFor="online" className={`${formik.values.paymentMethod === "online" && "bg-primary-50 border-primary-500"} flex gap-8 items-center border rounded-lg p-4 mt-6 border-gray-200 hover:border-primary-600 transition-colors duration-300`}>
                  <input type="radio" name='paymentMethod' id='online' value={"online"} className='size-4' onChange={() => { formik.setFieldValue("paymentMethod", "online") }} />
                  <div className='w-full'>
                    <div className='w-full flex justify-between items-center'>
                      <div className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faMoneyBill} className='text-2xl text-primary-600' />
                        <div>
                          <h3 className='font-semibold'>Online Payment</h3>
                          <p className='text-gray-600 text-sm'>Pay securely with card or digital wallet</p>
                        </div>
                      </div>
                      <span className='text-primary-600'>Recommended</span>
                    </div>
                    {formik.values.paymentMethod === "online" &&
                      <div className='pl-10 flex items-center gap-4 border border-blue-400/50 p-2 mt-3 rounded-md'>
                        <FontAwesomeIcon icon={faCircleInfo} className='text-blue-400' />
                        <p className='text-blue-400 text-sm'>you will be redirected to secure payment gateaway to complete your transaction</p>
                      </div>
                    }
                  </div>

                </label>
              </div>

            </div>

            <div className="shipping-address shadow-sm p-6 rounded-lg">
              <h2 className='font-semibold text-xl'>Shipping Adress</h2>
              <div className='address flex flex-col gap-2 mt-4'>
                <label htmlFor="address">Adderss Details*</label>
                <textarea name="shippingAddress.details"
                  id="address"
                  className='form-control'
                  placeholder='Enter Your Full Address'
                  value={formik.values.shippingAddress.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}>

                </textarea>
                {formik.errors.shippingAddress?.details && formik.touched.shippingAddress?.details&&<p className='text-red-500'>{formik.errors.shippingAddress?.details}</p>}
              </div>
              <div className="phone flex flex-col gap-2 mt-4">
                <label htmlFor="phone">phone*</label>
                <input type="tel" id='phone' placeholder='01236985221' className='form-control' name='shippingAddress.phone'
                  value={formik.values.shippingAddress.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} />
                  {formik.errors.shippingAddress?.phone && formik.touched.shippingAddress?.phone&&<p className='text-red-500'>{formik.errors.shippingAddress?.phone}</p>}

              </div>
              <div className="city flex flex-col gap-2 mt-4">
                <label htmlFor="city">City*</label>
                <input type="text" id='city' placeholder='Sohag' className='form-control' name='shippingAddress.city'
                  value={formik.values.shippingAddress.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} />
                 {formik.errors.shippingAddress?.city && formik.touched.shippingAddress?.city&&<p className='text-red-500'>{formik.errors.shippingAddress?.city}</p>}

              </div>
            </div>

          </div>

          <div className='summery-order lg:col-span-1 bg-white p-6 shadow-md'>
            <h2 className='text-xl font-semibold'>Order Summery </h2>
            <div className='items border-b border-gray-300/50 p-3 overflow-auto  max-h-48 space-y-3'>
              {products.map((product) => {
                return <div className='item flex items-center gap-2' key={product._id}>
                  <img src={product.product.imageCover} alt="" className='size-12 object-cover rounded-lg' />
                  <div>
                    <h3 className='text-xs text-gray-500'>Logo T-shirt green</h3>
                    <span className='text-xs text-gray-500'>Qty: {product.count}</span>
                  </div>
                  <span className='ms-auto '>{product.price} Egp</span>
                </div>
              })}


            </div>
            <ul className='space-y-2 mt-4'>
              <li className='flex justify-between '>
                <span>subtotal</span>
                <span>{totalCartPrice}</span>
              </li>
              <li className='flex justify-between '>
                <span>Deleivery</span>
                <span>70</span>
              </li>
              <li className='flex justify-between '>
                <span>Tax</span>
                <span>{Math.trunc(totalCartPrice * 0.14)}</span>
              </li>
              <li className='py-3 flex justify-between font-semibold border-t border-gray-200'>
                <span>Total</span>
                <span>{Math.trunc(totalCartPrice * 0.14 + totalCartPrice + 70)}</span>
              </li>
            </ul>
            <div className="btn-group flex flex-col mt-5 gap-3 ">
              <button type='submit' className='btn text-white bg-primary-600 flex items-center justify-center gap-2'>
                <span>Proceed to Payment</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <Link to={"/cart"} className='btn bg-gray-300/50 text-primary-600 flex items-center justify-center gap-2'>
                <FontAwesomeIcon icon={faChevronLeft} />
                <span>Previous Step</span>
              </Link>
            </div>
            <div className='space-y-2'>
              <h3 className='text-gray-600 '>Secure Checkout</h3>
              <p className='text-gray-600'>
                <FontAwesomeIcon icon={faLock} className='text-primary-600' />
                Your payment information is secure</p>
              <div className='flex gap-2'>
                <FontAwesomeIcon icon={faCcVisa} className='text-2xl text-blue-700' />
                <FontAwesomeIcon icon={faCcMastercard} className='text-2xl text-red-500' />
                <FontAwesomeIcon icon={faCcAmex} className='text-2xl text-blue-500' />
                <FontAwesomeIcon icon={faCcPaypal} className='text-2xl text-blue-800' />
                <FontAwesomeIcon icon={faCcApplePay} className='text-2xl text-gray-800' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  </>

}
