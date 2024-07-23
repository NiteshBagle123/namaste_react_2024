import { RESTAURANT_CARD_URL } from "../utils/constant";

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestaurantCard = ({ resName, cuisine, rating, eta, imgId }) => {
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg' style={styleCard}>
            <img 
                alt='res-logo' 
                className='rounded-lg' 
                src={`${RESTAURANT_CARD_URL}/${imgId}`}
            />
            <h3 className="font-bold py-2 text-lg">{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating} stars</h4>
            <h4>{eta} minutes</h4>
        </div>
    );
};

export default RestaurantCard;