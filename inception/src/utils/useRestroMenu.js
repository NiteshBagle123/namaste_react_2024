import { useState } from "react";

const useRestroMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const restaurantMenuList = async () => {
        const restaurantListResponse = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.545163&lng=73.9168766&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const restaurantListResponseJSON = await restaurantListResponse.json();
        setResInfo(restaurantListResponseJSON.data);
    }
    useEffect(() => {
        restaurantMenuList();
    }, []);

    return resInfo;
};

export default useRestroMenu;