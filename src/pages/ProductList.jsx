import CategoryFilter from '../components/CategoryFilter'
import Prodect from '../components/ProdectCard'
import SearchFilter from '../components/SearchFilter'
import { useCart } from '../context/CartContext'
import { initialProducts } from '../data/product'
import ProductDetail from './ProductDetail'
const ProductList = () => {
  console.log("my Products=",useCart())
  const {products}=useCart();
  return (
   <>
   <div className='container mx-auto px-4 md:px-8 pt-8'>
   <SearchFilter/>
   <CategoryFilter/>
   <h2 className='text-2xl font-extrabold mx-auto  px-4 md:px-8 pt-4'>Featured Gear ({products.length} Items  )</h2>

  <div className=' mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center'>
     {initialProducts.map((product,index)=>(
      <Prodect key={index} 
      dataSet={product}/>))} 
      
  </div>
  {/* {initialProducts.map((product,index)=>(
  <ProductDetail key={index} 
      dataSet={product}/>))}  */}


</div>
   
    </>
  )
}

export default ProductList
