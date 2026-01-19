import React from 'react'
import { CheckCircle } from 'lucide-react'

import { Link } from 'react-router-dom'
const OrderConfirmetion = ({deliveryDetails}) => {
  return (
    <div className="container mx-auto md:px-8 pt-12">

      <div className='p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl  mx-auto text-center mt-12 border border-green-700 text-white'>

           <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg '/>

         <h2 className='text-4xl font-extrabold text-white mb-4'>Order Confimed</h2>
         
         <p className='text-lg text-gray-300 mb-6 '>Your transaction is complete. A confirmation emails  hsa been sent to your  account</p>

      
        <div className=' p-6 bg-green-900/30 border-green-700 rounded-xl not-odd:font-mono text-left inline-block text-green-300 text-sm'>
          <p className='font-semibold text-lg mb-1 '>
            {deliveryDetails ?.name}
          </p>
          <p>{deliveryDetails?.address}</p>
          <p>{deliveryDetails.city},{deliveryDetails?.zip}</p>
        </div>
           
         <Link  to={'/'}
                className="  mt-8 px-8 py-4 bg-orange-600 text-white font-extrabold text-xl  rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 hover:ring-4 hover:ring-pink-600/50 uppercase tracking-widest"
              >
               Continue Shopping
              </Link>

      </div>
    </div>
  )
}

export default OrderConfirmetion
