import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [resList, setResList] = useState([]);
    const fetchRestaurantList = async () => {
        const restaurantList = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonObj = await restaurantList.json();
        const { data: { cards }} = jsonObj;
        const restaurantListRes = cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(restaurant => ({
            id: restaurant.info.id,
            resName: restaurant.info.name,
            cuisine: restaurant.info.cuisines.join(', '),
            rating:  restaurant.info.avgRatingString,
            eta:  restaurant.info.sla.deliveryTime,
            imgId: restaurant.info.cloudinaryImageId
        }));
        setResList(restaurantListRes);
    }
    useEffect(() => {
        fetchRestaurantList();
    }, []);
    const filterRestaurantHandler = () => {
        const updatedResList = resList.filter(restaurant => restaurant.rating > 4.5)
        setResList(updatedResList);
    }
    if(!resList.length) {
        return <Shimmer />;
    }
    return (
        <div className='body'>
            <div className='filter'>
                <button 
                    className="filter-btn" 
                    onClick={filterRestaurantHandler}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className='res-container'>
                {resList.map(({ id, resName, cuisine, rating, eta, imgId }) => (
                    <RestaurantCard
                        key={id}
                        resName={resName}
                        cuisine={cuisine}
                        rating={rating}
                        eta={eta}
                        imgId={imgId}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;