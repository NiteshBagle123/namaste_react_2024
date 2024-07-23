import { RESTAURANT_CARD_URL } from "../utils/constant";


const RestaurantCard = ({ resName, cuisine, rating, eta, imgId }) => {
    return (
        <div className='m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-200'>
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

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;