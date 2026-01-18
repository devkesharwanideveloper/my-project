import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ShoppingCart,ChevronLeft,Zap } from 'lucide-react' ;
import CartItem from 
const Cart = () => {
  const {Cart,cartTotal,cartCount}=useCart();
  return (
    <div>
      <>
        <div className="container mx-auto px-4 md:px-8 pt-8 ">
          <div className="flex items-center mb-10 *">
            <Link to={'/'} className='flex items-center  text-gray-400 hover:text-orange-400 transition duration-150 font-semibold text-lg'>
             <ChevronLeft className='w-6 h-6 mr-1'/>
             <span>Back to Store</span>
            </Link>
          </div>

          <h2 className='text-4xl font-extrabold text-white mb-10 tracking-tight  '>Shopping Card ({cartCount})</h2>
     
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            <div className='lg:col-span-2 space-y-4  '>

              {Cart.map(item=>)}
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Cart
 