import { useState } from "react";
import ItemCards from "./ItemCards";
const RestroCategory = ({ data,showIndex,setShowIndex }) => {

  const handleClick=()=>{
    setShowIndex()

  }

  console.log(data);
  return (
    <div className="p-4 w-6/12 mx-auto my-6 bg-gray-300 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-md">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      <div className="">
        
        {showIndex&&<ItemCards value={data.itemCards} />}

        </div>
    </div>
  );
};

export default RestroCategory;
