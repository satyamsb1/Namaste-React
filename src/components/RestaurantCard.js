import { IMG_URL } from "../config";

const RestaurantCard = ({name, cloudinaryImageId, cuisines, avgRating}) => { 
    return (
        <div className="card">
            <img src= {IMG_URL + cloudinaryImageId }  alt="" />
            <h2>{name}</h2>
            <h3> {cuisines.join(", ")}</h3>
            <h4> {avgRating } stars</h4>
        </div> 
    );     
};

export default RestaurantCard;