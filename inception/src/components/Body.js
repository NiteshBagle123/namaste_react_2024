import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
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
            imgId: restaurant.info.cloudinaryImageId,
            isPromoted: true
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

    const onSearchClickHandler = () => {
        const data = resList.filter(restaurant => restaurant.resName.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurant(data);
    }
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) {
        return <h1>
            Looks like you are offline. Please check your interner connection.
        </h1>
    };
    if(!resList.length) {
        return <Shimmer />;
    }
    return (
        <div className='body'>
            <div className='filter flex'>
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black px-6 py-1" value={searchText} onChange={(event) => setSearchText(event.target.value)}/>
                    <button className="px-6 py-1 bg-green-100 m-4 rounded-lg" onClick={onSearchClickHandler}>Search</button>
                </div>
                <div className="search m-4 p-4">
                    <button
                        className="px-6 py-1 bg-gray-100 m-4 rounded-lg" 
                        onClick={filterRestaurantHandler}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className='flex  flex-wrap'>
                {filteredRestaurant.length && filteredRestaurant.map(({ id, resName, cuisine, rating, eta, imgId, isPromoted }) => (
                    <Link to={`/restaurants/${id}`} key={id}>
                        {isPromoted && <RestaurantCardPromoted 
                                resName={resName}
                                cuisine={cuisine}
                                rating={rating}
                                eta={eta}
                                imgId={imgId}
                            /> || 
                            <RestaurantCard
                                resName={resName}
                                cuisine={cuisine}
                                rating={rating}
                                eta={eta}
                                imgId={imgId}
                            />
                        }
                    </Link>
                )) || resList.map(({ id, resName, cuisine, rating, eta, imgId, isPromoted }) => (
                    <Link to={`/restaurants/${id}`} key={id}>
                        {isPromoted && <RestaurantCardPromoted 
                                resName={resName}
                                cuisine={cuisine}
                                rating={rating}
                                eta={eta}
                                imgId={imgId}
                            /> || 
                            <RestaurantCard
                                resName={resName}
                                cuisine={cuisine}
                                rating={rating}
                                eta={eta}
                                imgId={imgId}
                            />
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;