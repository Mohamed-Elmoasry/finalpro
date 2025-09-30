import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faBabyCarriage, faBars, faBolt, faCartShopping, faChevronDown, faChevronRight, faEllipsis, faEnvelope, faHeart, faMagnifyingGlass, faPerson, faPersonDress, faPersonDressBurst, faPhone, faSpinner, faSuitcaseMedical, faUserPlus, faWifi, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router";
import freshCartFullLogo from "../../assets/images/freshcart-logo (1).svg"
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import { CartContext } from "../../context/cart.Context/"
import { useOfflineScreen } from "../../hooks/UseOfflineScreen";
export default function Navbar() {

  const online = useOfflineScreen()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { logOut, token } = useContext(AuthContext)
  const { loading, cartinfo } = useContext(CartContext)
  // console.log(loading,cartinfo);

  function toggleState() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <header>
        <div className="container">
          {/* top Level header */}
          <div className="text-sm py-2 lg:flex items justify-between border-b border-gray-300/50 hidden">
            <ul className="flex gap-5 items-center *:flex *:gap-2 *:items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />

                <a href="tel:01275772311">Phone</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />

                <a href="tel:01275772311">Phone</a>
              </li>
              {
                online && (<li className="text-primary-600">
                  <FontAwesomeIcon icon={faWifi} />
                  <span>online</span>
                </li>)
              }

            </ul>
            <ul className="flex gap-5 items-center">
              <li>
                <Link to="track-order">Track orders</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
              <li>
                <select name="" id="">
                  <option value="">Egp</option>
                  <option value="">Sar</option>
                  <option value="">Aed</option>
                </select>
              </li>
              <li>
                <select name="" id="">
                  <option value="en">English</option>
                  <option value="ar">العربيه</option>
                </select>
              </li>

            </ul>
          </div>

          {/* main header */}
          <nav className="flex justify-between items-center py-5">
            <h1 className=""><NavLink to="/">
              <img src={`${freshCartFullLogo}`} alt="fresh cart logo " className="" />
            </NavLink>
            </h1>
            <search className="relative hidden lg:block">
              <input type="text" placeholder="Search For Products " className="form-control min-w-96" />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-5 top-1/2 -translate-y-1/2" />
            </search>
            <ul className="hidden lg:flex gap-8 items-center">
              <li>
                <NavLink to="wishlist" className={({ isActive }) => { return `${isActive ? "text-primary-600" : ""} flex flex-col items-center gap-2 hover:text-primary-600 transition-colors duration-200` }}>
                  <FontAwesomeIcon className="text-xl" icon={faHeart} />
                  <span className="text-sm">Wishlist</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="cart" className={({ isActive }) => { return `${isActive ? "text-primary-600" : ""} flex flex-col items-center gap-2 hover:text-primary-600 transition-colors duration-200` }}>
                  <div className="relative">
                    <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
                    <span className="absolute top-0 right-0 rounded-full size-5 flex justify-center items-center -translate-y-1/2 bg-primary-600 text-sm text-white">
                      {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : cartinfo?.numOfCartItems || 0}
                    </span>
                  </div>
                  <span className="text-sm ">Cart</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="account" className={({ isActive }) => { return `${isActive ? "text-primary-600" : ""} flex flex-col items-center gap-2 hover:text-primary-600 transition-colors duration-200` }}>
                  <FontAwesomeIcon className="text-xl" icon={faUser} />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li>
              {!token ? <>
                <li>
                  <NavLink to="signup" className={({ isActive }) => { return `${isActive ? "text-primary-600" : ""} flex flex-col items-center gap-2 hover:text-primary-600 transition-colors duration-200` }}>
                    <FontAwesomeIcon className="text-xl" icon={faUserPlus} />
                    <span className="text-sm">Sign up</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="login" className={({ isActive }) => { return `${isActive ? "text-primary-600" : ""} flex flex-col items-center gap-2 hover:text-primary-600 transition-colors duration-200` }}>
                    <FontAwesomeIcon className="text-xl" icon={faAddressCard} />
                    <span className="text-sm">Log in</span>
                  </NavLink>
                </li>
              </>
                : (<li onClick={logOut} className="flex flex-col items-center gap-2 hover:text-primary-600 transition-colors duration-200 cursor-pointer">
                  <FontAwesomeIcon className="text-xl" icon={faAddressCard} />
                  <span className="text-sm">Log out</span>
                </li>)
              }



            </ul>
            <button className=" lg:hidden btn bg-primary-600 text-white" onClick={toggleState}>
              {isMenuOpen ? (<FontAwesomeIcon icon={faXmark} />) : (<FontAwesomeIcon icon={faBars} />)}
            </button>
          </nav>
        </div>
        {/* low level header */}
        <nav className="bg-gray-100 py-4 hidden lg:block">
          <div className="container flex gap-8 items-center">


            <div className="group relative">
              <button className="btn bg-primary-500 text-white flex items-center gap-3 hover:bg-primary-700 transition-colors duration-200">
                <FontAwesomeIcon icon={faBars} />
                <span>Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className="absolute top-6 min-w-60 hidden group-hover:block z-10 *:py-2 *:px-3 rounded-lg shadow *:hover:bg-gray-200 bg-white divide-y divide-gray-300/30">
                <li>
                  <Link classsName="flex gap-3 " to="">
                    <FontAwesomeIcon className="text-primary-400 me-3 text-xl" fixedWidth icon={faPerson} />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link classsName="flex gap-3 " to="">
                    <FontAwesomeIcon className="text-primary-400 me-3 text-xl" fixedWidth icon={faPersonDress} />
                    <span>women's Fashion</span></Link>
                </li>
                <li>
                  <Link classsName="flex gap-3 " to=""><FontAwesomeIcon className="text-primary-400 me-3 text-xl" fixedWidth icon={faBabyCarriage} />
                    <span>Baby & Toys</span>
                  </Link>  </li>
                <li>
                  <Link classsName="flex gap-3 " to=""><FontAwesomeIcon className="text-primary-400 me-3 text-xl" fixedWidth icon={faSuitcaseMedical} />
                    <span>Beauty & Health</span>
                  </Link> </li>
                <li>
                  <Link classsName="flex gap-3 " to="">
                    <FontAwesomeIcon className="text-primary-400 me-3 text-xl" fixedWidth icon={faBolt} />
                    <span>Electronic</span>
                  </Link>  </li>
                <li>
                  <Link classsName="flex gap-3 " to="">
                    <FontAwesomeIcon className="text-primary-400 me-3 text-xl" fixedWidth icon={faEllipsis} />
                    <span>View All Categories</span>

                  </Link></li>
              </menu>

            </div>


            <ul className="flex gap-5">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/categories"}>Categories</NavLink>
              </li>
              <li>
                <NavLink to={"/deals"}>Deals</NavLink>
              </li>
              <li>
                <NavLink to={"/brands"}>Brands</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* off Canvas */}
        {

          isMenuOpen && <>

            <div className="background fixed z-30 inset-0 bg-black/30" >

            </div>
            <div className="off-canvas fixed bg-white z-40 top-0 bottom-0 p-3 space-y-7 animate-slide-in">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <h1 className=""><NavLink to="/">
                  <img src={`${freshCartFullLogo}`} alt="fresh cart logo " className="" />
                </NavLink>
                </h1>
                <button className="btn cursor-pointer rounded-full" onClick={toggleState}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
              <search className="relative">
                <input type="text" placeholder="Search For Products " className="form-control min-w-68" />
                <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute right-5 top-1/2 -translate-y-1/2" />
              </search>
              <div className="border-b border-gray-200 pb-5">
                <h2 className="text-2xl font-bold">Main Menu</h2>
                <ul className="space-y-3 *:hover:bg-gray-100">
                  <li>
                    <NavLink to="wishlist" className={({ isActive }) => { return `${isActive ? " bg-primary-200" : ""} cursor-pointer flex items-center gap-2 hover:text-primary-600 transition-colors duration-200 px-2 py-3` }}>
                      <FontAwesomeIcon className="text-xl" icon={faHeart} />
                      <span className="text-sm">Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="cart" className={({ isActive }) => { return `${isActive ? " bg-primary-200" : ""} cursor-pointer flex items-center gap-2 hover:text-primary-600 transition-colors duration-200 px-2 py-3` }}>
                      <div className="relative">
                        <FontAwesomeIcon className="text-xl" icon={faCartShopping} />
                        <span className="absolute top-0 right-0 rounded-full size-5 flex justify-center items-center -translate-y-1/2 bg-primary-600 text-sm text-white">
                          {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : cartinfo?.numOfCartItems || 0}</span>
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="account" className={({ isActive }) => { return `${isActive ? " bg-primary-200" : ""} cursor-pointer flex items-center gap-2 hover:text-primary-600 transition-colors duration-200 px-2 py-3` }}>
                      <FontAwesomeIcon className="text-xl" icon={faUser} />
                      <span className="text-sm">Account</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Account</h2>
                <ul className="space-y-3 *:hover:bg-gray-100">
                  {!token ?
                    <>

                      <li>
                        <NavLink to="signup" className={({ isActive }) => { return `${isActive ? "bg-primary-100 " : ""}cursor-pointer flex gap-2 hover:text-primary-600 transition-colors duration-200 px-2 py-3` }}>
                          <FontAwesomeIcon className="text-xl" icon={faUserPlus} />
                          <span className="text-sm">Sign up</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="login" className={({ isActive }) => { return `${isActive ? "bg-primary-100 " : ""}cursor-pointer  flex gap-2 hover:text-primary-600 transition-colors duration-200 px-2 py-3` }}>
                          <FontAwesomeIcon className="text-xl" icon={faAddressCard} />
                          <span className="text-sm">Log in</span>
                        </NavLink>
                      </li>
                    </>

                    :
                    <li onClick={logOut} className="flex gap-2 cursor-pointer  hover:text-primary-600 transition-colors duration-200 px-2 py-3">
                      <FontAwesomeIcon className="text-xl" icon={faAddressCard} />
                      <span className="text-sm">Log out</span>

                    </li>
                  }


                </ul>
              </div>
            </div>


          </>
        }

      </header>
    </>
  )
}
