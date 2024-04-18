import {useEffect} from "react";
import { useDispatch } from "react-redux";
import { updateCaresData, updateMenuData } from "../utils/resSlice";
import { useParams } from "react-router-dom";


 
const useFetchCardsData = ()=>{
    const dispatch = useDispatch();
    const { id }= useParams();

const fetchdata = async() => {
    const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING&id=${id}`)
    const jsondata = await data.json();
    console.log("line 15",jsondata?.data?.cards[0]?.card?.card?.info);
    console.log('Menu debug',jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    // console.log('menu debug',jsondata?.data?.cards[2]);
    dispatch(updateMenuData(jsondata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards))
    console.log("hi",jsondata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    dispatch(updateCaresData(jsondata?.data?.cards[2]?.card?.card.info))

  }

  useEffect(() => {
    fetchdata();
  }, );


}

export default useFetchCardsData;