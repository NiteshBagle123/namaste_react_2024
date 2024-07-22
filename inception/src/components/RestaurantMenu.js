import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resMenu, setResMenu] = useState(null);
    const restaurantMenuList = async () => {
        const restaurantListResponse = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.545163&lng=73.9168766&restaurantId=691729&catalog_qa=undefined&submitAction=ENTER');
        const restaurantListResponseJSON = await restaurantListResponse.json();
        setResMenu(restaurantListResponseJSON.data);
    }
    useEffect(() => {
        restaurantMenuList();
    }, []);

    if(resMenu === null) {
        return <Shimmer />;
    };

    const restaurantDetails = resMenu?.cards[2]?.card?.card?.info;
    const { cuisines, name, costForTwoMessage } = restaurantDetails;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {`${cuisines.join(', ')} - ${costForTwoMessage}`}
            </p>
            <h2>Menu</h2>
        </div>
    );
}

export default RestaurantMenu;