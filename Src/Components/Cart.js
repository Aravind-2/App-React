import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { emptyCart } from "../Utilities/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch=useDispatch()

  const clearCart=()=>{
    dispatch(emptyCart())
  }
  return (
    <div className="p-4 m-4 text-xl font-bold text-center">
      <div className="p-2">
        <h1>Cart</h1>
        <button className="p-2 m-4 border-1 bg-black text-white rounded-lg cursor-pointer" onClick={clearCart}>Clear cart</button>
      </div>
      <div className="p-4 w-8/12 m-auto ">
      
        <ItemCards value={cartItems}></ItemCards>
      </div>
    </div>
  );
};
export default Cart;
