import {restaurantList} from "../config";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant)=> restaurant.data.name.includes(searchText));
}

const Body = () => {
    
    const [searchText, setSearchInput] = useState("");
    // const searchClicked = false;
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchClicked, setSearchClicked] = useState("false");

    return (
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
                    const data = filterData(searchText, restaurants);
                    //update the state - restaurant
                    setRestaurants(data);
                }}>Search</button>

            </div>
            <div className="restaurant-list">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                    })
                }
            </div> 
        </>    
    );
};

export default Body;