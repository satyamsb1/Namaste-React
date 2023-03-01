import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"; 
import { IMG_URL } from "../config";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
    // Read a dynamic URL params
    const {resid} = useParams(); //same as const {id} = params; also called as destructuring on the fly

    const [restaurant, setRestaurant] = useState(null); 
    console.log(useState());
    useEffect(() => {
        getRestaurantInfo();
    },[]);
    
    async function getRestaurantInfo()
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.943778545073037&lng=73.79395517606287&menuId=" + resid);
        const json = await data.json();
        // console.log(json);
        setRestaurant(json.data);
    }
    
    return (!restaurant)? <Shimmer/> : (
        <div className="Menu">
            <div>
                <h1>Restaurant id: {resid}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_URL + restaurant?.cloudinaryImageId} alt="" />
                <h1>{restaurant?.area}</h1>
                <h1>{restaurant?.city}</h1>
                <h1>{restaurant?.avgRating}</h1>
                <h1>{restaurant?.costForTwoMsg}</h1>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                   {Object.values(restaurant?.menu?.items).map((item) => (
                    <li key={item?.id}> {item?.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default RestaurantMenu;