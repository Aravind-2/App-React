import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/cartSlice";

const ItemCards = ({ value }) => {
  console.log(value);
  const dispatch=useDispatch();

  const handleClick=(item)=>(
    dispatch(addItem(item))
    
)
  return (
    <div>
      {value.map((item) => (
        <div className="border-b-2 border-gray-400 p-2 my-2">
          <div className="flex justify-between">
            <span className="font-bold text-lg">{item.card.info.name}</span>
            <button className="p-1 m-4 border-1 bg-black text-white rounded-lg cursor-pointer" onClick={()=>(handleClick(item))}>Add +</button>
          </div>
          <div>
            <span className="">
              Rs-
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p className="py-4 my-4 text-sm">{item.card.info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemCards;
