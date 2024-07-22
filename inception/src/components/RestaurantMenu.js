import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
const RestaurantMenu = () => {
    const { resId } = useParams();
    const resMenu = useRestroMenu(resId);

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