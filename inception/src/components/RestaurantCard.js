import { RESTAURANT_CARD_URL } from "../utils/constant";

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestaurantCard = ({ resName, cuisine, rating, eta }) => {
    return (
        <div className='restaurant-card' style={styleCard}>
            <img 
                alt='res-logo' 
                className='res-logo' 
                src={RESTAURANT_CARD_URL}
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{eta} minutes</h4>
        </div>
    );
};

export default RestaurantCard;