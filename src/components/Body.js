    // import {restaurantList} from "../config"; now as we are using api directly
import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
}

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

// Not render Component (early return)
if(!allRestaurants) return null;

if(filteredRestaurants?.length ===0) {
    return <h1>No Restaurant found</h1>
};
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
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    })
                }
            </div> 
        </>    
    );
};

export default Body;