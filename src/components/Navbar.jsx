import React from "react";
import { Link } from "react-router-dom";
import { House, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <>
      <header
        className="sticky top-0% bg-gray-950/95
   backdrop:blue-md shadow-gray-950/70 border-b border-orange-950 "
      >
        <div className="container mx-auto px-4 py-4 flex justify-between">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer  ">
              <House className="w-8 h-8 text-orange-400 drop-shadow-lg" />

              <h1 className="text-2xl font-extrabold  tracking-widest ">
                BTM<span className="text-orange-400">STORE</span>
              </h1>
            </div>
          </Link>

          <nav className="flex items-center space-x-6">
            <Link
              to={"/cart"}
              className="relative p-3 bg-orange-500/10
             rounded-xl hover:bg-orange-500/20  transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer"
            >
              {" "}
              <ShoppingCart className="w-6 h-6 text-orange-400" />
              {cartCount > 0 && <span className="absolute -top-2 -right-2 flex items-center justify-center 
      text-xs font-bold text-white bg-red-600 rounded-full 
      min-w-[22px] h-[22px] px-1"></span>}
            </Link>
            <div className="absolute top-2 right-10 ">{cartCount}</div>
            
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
