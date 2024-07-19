const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestaurantCard = ({ resName, cuisine, rating, eta }) => {
    return (
        <div className='restaurant-card' style={styleCard}>
            <img 
                alt='res-logo' 
                className='res-logo' 
                src='https://b.zmtcdn.com/data/pictures/2/51232/e811eb8ee82e2c14447b04450a5e4334.jpg'
            />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{eta}</h4>
        </div>
    );
};

export default RestaurantCard;