import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import freshCartLogo from "../../assets/images/mini-logo.png"
import freshCartFullLogo from "../../assets/images/freshcart-logo (1).svg"
import { faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import {Link} from "react-router"
export default function Footer() {
  return (
    <footer className="py-5 bg-white border-t border-gray-400/50">
      <div className="container">
        <div className="grid md:grid-cols-2 xl:grid-cols-5 py-8 gap-6">
          <div className="xl:col-span-2 space-y-3">
            <img src={freshCartFullLogo} alt="" className="" />
            <p className="text-sm">
              Fresh Cart is a Verstile E-commerce plaform offering a wide 
              range of products,from clothes to electronics,it's provide 
              a user friendly experiance for seameless
               shopping acrooss diverse categories
            </p>
            <ul className="flex items-center gap-3 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon icon={faPinterest} /></a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Categories</h2>
            <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to="">men's Fashion</Link>
              </li>
              <li>
                <Link to="">women's Fashion</Link>
              </li>
              <li>
                <Link to="">Baby & Toys</Link>
              </li>
              <li>
                <Link to="">Beauty & Health</Link>
              </li>
              <li>
                <Link to="">Electronics</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4 ">Quick Links</h2>
            <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Services</Link>
              </li>
              <li>
                <Link to="/shipping-policy">Shipping Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-4">Customer Service</h2>
            <ul className="space-y-3 *:hover:text-primary-600 *:transition-colors *:duration-200">
              <li>
                <Link to="/Account">Account</Link>
              </li>
              <li>
                <Link to="/orders">My Orders</Link>
              </li>
              <li>
                <Link to="/Wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/returns-and-refunds">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center py-5 border-t border-gray-300">
          <p>&copy; {new Date().getFullYear()} Fresh Cart. All Rights Reserved.</p>
          <img src={freshCartLogo} alt="Mini Logo of Fresh Cart" className="w-10"/>
        </div>
      </div>

    </footer>
  )
}
