import { useEffect, useState } from "react";

const useRestroFetch=(resId)=>{
    const [resInfo, setresInfo] = useState("");

    console.log(resInfo);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.66020&lng=78.15320&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
      };

      return resInfo;


}

export default useRestroFetch;