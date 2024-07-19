import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST } from '../utils/constant';

const Body = () => {
    const [resList, setResList] = useState(RESTAURANT_LIST);
    const filterRestaurantHandler = () => {
        const updatedResList = resList.filter(restaurant => restaurant.rating > 4.5)
        setResList(updatedResList);
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
                {resList.map(({ id, resName, cuisine, rating, eta}) => (
                    <RestaurantCard
                        key={id}
                        resName={resName}
                        cuisine={cuisine}
                        rating={rating}
                        eta={eta}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;