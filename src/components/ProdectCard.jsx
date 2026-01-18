import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
const ProdectCard = ({ dataSet }) => {
  const { addTocart } = useCart();
  return (
    <>
      <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full transition duration-500 transform border border-gray-800  group hover:scale-[1.03] hover:shadow-orange-900/40 ">
        <Link
          to={`/product/${dataSet.id}`}
          className="relative cursor-pointer overflow-hidden"
        >
          <img
            src={dataSet.image}
            alt={dataSet.name}
            className="w-full h-56 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:opacity-90  "
          />
          <div className="absolute bottom-0 left-0 bg-orange-600/95 text-white px-5 py-2 text-x font-extrabold rounded-tr-xl shadow-lg ">
            ₹ {dataSet.price.toFixed(2)}
          </div>
        </Link>
        <div className="p-5 flex-col grow">
          <Link to={"/product"}>
            <h3 className="text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-orange-400 transition duration-200 line-clamp-1 ">
              {dataSet.name}
            </h3>
          </Link>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3  ">
            {" "}
            {dataSet.description}
          </p>
          <div className="flex items-center text-gray-500  mb-4">
            <span className="px-3 py-1 bg-gray-800  rounded-full font-semibold">
              {dataSet.category}
            </span>
          </div>
          <button
            onClick={() => addTocart(dataSet)}
            className="max-auto w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 hover:ring-4 hover:ring-pink-600/50 uppercase tracking-widest"
          >
            {" "}
            <ShoppingCart className="w-5 h-5" /> <span>Add To Cart</span>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProdectCard;
