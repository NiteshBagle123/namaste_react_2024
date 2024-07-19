import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard 
                    resName="Meghna Foods" 
                    cuisine="Biryani, North Indian, Asian"
                    rating="4.4 stars"
                    eta="38 minutes"
                />
                <RestaurantCard 
                    resName="KFC"
                    cuisine="Burger, Fast Food"
                    rating="4.6 stars"
                    eta="45 minutes"
                />
            </div>
        </div>
    );
};

export default Body;