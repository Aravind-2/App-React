import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroFetch from "../Utilities/useRestroFetch";
import  RestuarantCategory from "../Components/RestuarantCategory"

const RestroMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestroFetch(resId);

  const [showIndex, setShowIndex]=useState(null)

  //console.log(resInfo)

  if (resInfo === "") return <Shimmer />;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card;
  console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const items = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(items)

  return (
    <div className="p-4 m-4">
      <h1 className="font-bold text-2xl flex justify-center">
        {resInfo.cards[2].card.card.info.name}
      </h1>
      <p className="p-4 m-4 font-bold text-lg flex justify-center">
        {resInfo.cards[2].card.card.info.cuisines.join(",")} -
        {resInfo.cards[2].card.card.info.costForTwoMessage}
      </p>
      <div>
        {items.map((category,index)=>(
           <RestuarantCategory data={category?.card?.card}
           showIndex={index===showIndex?true:false}
           setShowIndex={()=>{setShowIndex(index)}}

           />
        ))}
       
      </div>
      
    </div>
  );
};

export default RestroMenu;

/*<ul>
        {itemCards.map((val) => (
          <li key={val.card.info.id}>
            {val.card.info.name} -Rs.
            {val.card.info.defaultPrice ||
              val.card.info.finalPrice ||
              val.card.info.price}
          </li>
        ))}
      </ul>*/
