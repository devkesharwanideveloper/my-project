import React from "react";
import { Search } from "lucide-react";
const SearchFilter = () => {
  return (
    <>
      <div className="    mb-5 p-5 bg-gray-900  rounded-2xl shadow-xl border border-y-gray-800 ">
        <div className="flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-orange-600/50 transition duration-300 bg-gray-800">
          <Search className="ml-4 " />
          <input
            type="text"
            placeholder="Search high -performance product By name or feather...."
            className="w-full p-4 outline-none text-white  bg-gray-800 placeholder-gray-500 text-base font-medium "
          />
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
