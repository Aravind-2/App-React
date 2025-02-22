import { img } from "../Utilities/img";
import React from "react";
const Restro = ({rescard}) => {
  //const { rescard } = props;

  console.log(rescard);

  return (
    <div className="restro-card p-4 m-10 bg-gray-300 w-[400px] h-[600px] rounded-lg hover:bg-gray-400 hover:border">
      <img className="res-logo w-100 h-100 rounded-lg" src={img + rescard.info.cloudinaryImageId} />
      <h1 className="font-bold py-4">{rescard.info.name}</h1>
      <h3>{rescard.info.cuisines}</h3>
      <h3>{rescard.info.avgRating} rating</h3>
      <h3>{rescard.info.costForTwo}</h3>
    </div>
  );
};

export default Restro;
