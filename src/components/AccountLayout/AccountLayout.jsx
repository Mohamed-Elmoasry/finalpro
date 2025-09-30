
import { NavLink, Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping, faUser, faBox, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { faUserAlt } from "@fortawesome/free-regular-svg-icons";

export default function AccountLayout() {

    const {userInfo,logOut} = useContext(AuthContext)
    console.log(userInfo);
  return  <>

    <section className=" ">
<div className="container flex ">
          {/* Sidebar */}
      <aside className="w-64 mt-4 bg-white shadow-lg p-5">
        <div className="user-data flex items-center mb-3 gap-3">
           <FontAwesomeIcon icon={faUserAlt} className="text-3xl"/>
            <div className="content">
                <h3 className=" text-fontbold">{userInfo?.name || "User Name"} </h3>
                <p className="text-sm text-gray-500">{userInfo?.email || "User Email"}</p>
            </div>
        </div>
        <h2 className="text-lg font-bold mb-6">My Account</h2>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="orders"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
            }
          >
            <FontAwesomeIcon icon={faBox} /> Orders
          </NavLink>

          <NavLink
            to="wishlist"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
            }
          >
            <FontAwesomeIcon icon={faHeart} /> wishlist
          </NavLink>

          <NavLink
            to="cart"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
            }
          >
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </NavLink>

          <NavLink
          onClick={()=>{logOut()}}
            to="logout"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""}`
            }
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
          </NavLink>
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 min-h-screen">
        <Outlet />
      </main>
</div>
    </section>
  );

    
    </>
  
}
