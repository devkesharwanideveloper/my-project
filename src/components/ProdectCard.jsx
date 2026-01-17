import React from "react";
import { Link } from "react-router-dom";
const ProdectCard = ({ dataSet }) => {
  return (
    <>
      <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-full transition duration-500 transform border border-gray-800  group hover:scale-[1.03] hover:shadow-orange-900/40 ">
        <Link
          to={"/dataSet"}
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
           <Link to={'/product'}>
            <h3 className="text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-orange-400 transition duration-200 line-clamp-1 ">
              {dataSet.name}
            </h3>
           </Link>

           <p> {dataSet.description}</p>

        </div>
      </div>
    </>
  );
};

export default ProdectCard;
