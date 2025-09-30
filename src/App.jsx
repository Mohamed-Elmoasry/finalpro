import { RouterProvider, createBrowserRouter } from "react-router"
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Brands from "./pages/Brands/Brands"
import Cart from "./pages/Cart/Cart"
import Favorites from "./pages/Favorites/Favorites"
import Checkout from "./pages/Checkout/Checkout"
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import Orders from "./pages/Orders/Orders"
import NotFound from "./pages/NotFound/NotFound"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import SearchProducts from "./pages/SerachProducts/SearchProducts"
import Signup from "./pages/Signup/Signup"
// import VerifyEmail from "./pages/VerifyEmail/VerifyEmail"
import WishList from "./pages/WishList/WishList"
import Layout from "./components/Layout/Layout"
import AuthProvider from "./context/auth.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import CartProvider from "./context/cart.Context";
import AccountLayout from "./components/AccountLayout/AccountLayout";
import OfflineScreen from "./components/OfflineScreen/OfflineScreen";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CategoriesLayout from "./pages/CategoriesLayout/CategoriesLayout";
import CategoriesProducts from "./components/CategoriesProducts/CategoriesProducts";
import CategoriesDetails from "./pages/CategoriesDetails/CategoriesDetails";
import Deals from "./pages/Deals/Deals";
import ProductsByBrand from "./pages/ProductsByBrand/ProductsByBrand";
import { WishlistProvider } from "./context/wishlist.context";
import VerifyResetCode from "./pages/verifyResetCode/verifyResetCode";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
        // refetchInterval:2000,
        retry: 3,
        retryDelay: 5000
      }
    }
  })
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "brands", element: <Brands /> },
        { path: "brand/:id", element: <ProductsByBrand/> },
        { path: "deals", element: <Deals/> },
        { path: "wishlist", element: <ProtectedRoute><WishList /> </ProtectedRoute>}
        ,
        {
          path: "account", element: <ProtectedRoute><AccountLayout /></ProtectedRoute>, children: [
            { path: "orders", element: <Orders /> },
            { path: "wishlist", element: <WishList /> },
             { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> } 
          ]
        },
        { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
        {path: "category/:id", element: <CategoriesDetails />},   
        { path: "checkout", element: <ProtectedRoute><Checkout /></ProtectedRoute> },
        { path: "favorites", element: <ProtectedRoute><Favorites /></ProtectedRoute> },
        { path: "forget-password", element: <ForgetPassword /> },
        { path: "verify-reset-code", element: <VerifyResetCode/> },
        { path: "reset-password", element: <ResetPassword/> },
        { path: "orders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "allorders", element: <ProtectedRoute><Orders /></ProtectedRoute> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "search-products", element: <SearchProducts /> },
        { path: "signup", element: <Signup /> },
        // { path: "verify-email", element: <VerifyEmail /> },
        { path: "*", element: <NotFound /> },
        { path: "categories", element: <CategoriesLayout/> ,
          children:[{path: "category/:id", element: <CategoriesProducts />,}
            // {path: "category/:id", element: <SubCategories />}
          ]}
      ]
    },
  ])
  return (
    <>
    <WishlistProvider>
      <QueryClientProvider client={queryClient}>
        <OfflineScreen>
          <AuthProvider>
            <CartProvider>
              <RouterProvider router={router} />
              <ToastContainer />
            </CartProvider>
          </AuthProvider>
        </OfflineScreen>
      </QueryClientProvider>
      </WishlistProvider>
    </>
  )
}

export default App
