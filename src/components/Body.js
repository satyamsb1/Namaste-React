import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";


const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchInput] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
useEffect(() => {
    getRestaurants();
},[]);

    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.943778545073037&lng=73.79395517606287&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

if(!allRestaurants) return null;

return (allRestaurants?.length === 0 ) ? <Shimmer/> : (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    className="search-input" 
                    placeholder="Search" 
                    value= {searchText} 
                    onChange= {(e)=> {
                        setSearchInput(e.target.value)
                    }}
                 />
                 
                <button className="search-btn" onClick={()=>{
                    //Need to update the data
                    const data = filterData(searchText, allRestaurants);
                    //update the state - restaurant
                    setFilteredRestaurants(data);
                }}>Search</button>

            </div>
            <div className="restaurant-list">
                {
                    filteredRestaurants.map((restaurant) => {
                        return( 
                        <Link to={"/restaurant/" + restaurant.data.id}
                        key={restaurant.data.id}
                        >
                            <RestaurantCard {...restaurant.data} />
                            </Link>
                        );
                    })
                }
            </div> 
        </>    
    );
};

export default Body;