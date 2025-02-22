import Restro from "./Restro";
import { resList } from "../Utilities/resList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";

const Body = () => {
  const [listofrestro, newList] = useState(resList);
  const [searchInput, searchUpdate] = useState("");
  const [filterRest, updateRes] = useState([]);

  console.log(filterRest);

  useEffect(() => {
    fetchData();
    //console.log("data fetched");
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.66020&lng=78.15320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    newList(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    updateRes(
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  var onlineStatus = useOnlineStatus();
  console.log(onlineStatus);

  if (onlineStatus === false) {
    return <h1>You was seems to be offline!!! Check the Internet</h1>;
  } else {
    return listofrestro == 0 ? (
      <Shimmer />
    ) : (
      <div className="Body-cont">
        <div className="filter p-4 m-4 flex items-center justify-center ">
          <div>
            <input
              className="searchInput border border-black w-100 rounded-md"
              value={searchInput}
              onChange={(a) => {
                searchUpdate(a.target.value);
              }}
            ></input>

            <button
              className="searbtn px-4 py-0 m-4 border border-black rounded-lg bg-gray-300"
              onClick={() => {
                const searchRestaurents = listofrestro.filter((y) =>
                  y.info.name.toLowerCase().includes(searchInput.toLowerCase())
                );
                console.log(searchInput);
                console.log(searchRestaurents);
                updateRes(searchRestaurents);
              }}
            >
              Search
            </button>
            <button
              className="searbtn px-4 py-0 m-4 border border-black rounded-lg  bg-gray-300"
              onClick={() => {
                const TopRestaurents = listofrestro.filter(
                  (x) => x.info.avgRating > 4.3
                );
                console.log(TopRestaurents);
                updateRes(TopRestaurents);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="restro-cont flex flex-wrap items-center justify-center">
          {filterRest.map((restaurant) => (
            <Link to={"/restaurants/" + restaurant.info.id}>
              <Restro rescard={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Body;

/*{filterRest.map((restaurant) => (
  <Link to={"/restaurants/"+restaurant.info.id}><Restro  rescard={restaurant}/></Link>
))}*/

/*{filterRest.map((restaurant) => (
  <Restro  rescard={restaurant}/>
  ))}*/
