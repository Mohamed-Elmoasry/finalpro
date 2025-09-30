import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllOrders } from "../../services/order-service"
import {
  faBoxOpen,
  faTruck,
  faTimes,
  faCreditCard,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth.context";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import PageMetaData from "../../components/PageMetaData/PageMetaData";

export default function Orders() {
  <PageMetaData title={"Orders"} description={"your Orders From FreshCart here"}/>
  
  const { userInfo } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState(null)
  async function handleGetAllOrders() {
    try {
      setLoading(true)
      const response = await getAllOrders({ id: userInfo.id })
      console.log(response.data);

      if (response.success) {
        setLoading(false)
        setOrders(response?.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error);

    }
  }

  useEffect(() => {
    handleGetAllOrders()
  }, [])

  if (loading) {
    return <Loading />
  }




  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>

      {
        orders.length === 0 &&
        <div className="flex flex-col items-center justify-center py-16 border rounded-lg mb-8">
          <FontAwesomeIcon
            icon={faBoxOpen}
            className="text-5xl text-gray-400 mb-4"
          />
          <p className="text-gray-600 text-lg mb-2">No orders found</p>
          <p className="text-gray-400 mb-4">
            You haven&apos;t placed any orders yet.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow">
            Start Shopping
          </button>
        </div>
      }
      {/* ====== Single Order Card ====== */}
      <div className="border rounded-lg p-6 shadow-sm flex flex-col gap-4">
        {/* Header */}

        {orders.map((order) => {
          return <> <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Order #{order.id}</h3>
            <div className="flex gap-2">
              {order.isPaid ? <span className="text-green-600 text-sm font-semibold">✔ Paid</span> :
                <span className="text-red-600 text-sm font-semibold">Unpaid</span>}


            </div>
          </div>

            {/* Info */}
            <div className="flex justify-between items-center">
              {order.cartItems.slice(0,3).map((item) => {
                return <>
                  <div className="flex flex-col items-center gap-2 p-3">
                    <img
                      src={item.product.imageCover}
                      alt="product"
                      className="w-16 h-16 rounded-md"
                    />
                      <p className="text-sm text-gray-600">{item.count} Items</p>
                  </div>
                </>
              })}
              <div>
                <p className="text-sm font-semibold">Total Amount: {order.totalOrderPrice} EGP</p>
                <p className="text-sm text-gray-600">
                  Delivered to {order.shippingAddress.city}
                  <br />
                  <span className="font-semibold">order created at {new Date(order.createdAt).toLocaleDateString()}</span> </p>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 justify-end mt-4">
              {order.isPaid ?<>  <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                <FontAwesomeIcon icon={faTruck} /> Track Order
              </button>
              <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">
                <FontAwesomeIcon icon={faTimes} /> Cancel Order
              </button>  </>
              :
             
              <><button className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                <FontAwesomeIcon icon={faCreditCard} /> Complete Payment
              </button>
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                <FontAwesomeIcon icon={faCartShopping} /> Reorder Items
              </button>
            </>}
            </div></>
        })}

      </div>
    </div>
  );
}
