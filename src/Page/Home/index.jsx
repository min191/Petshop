import React from 'react';
import HomeBanner from '../../Component/HomeBannerComponent';
import BestSeller from '../../Component/BestSellerComponent';
import OfferSale from '../../Component/OfferSaleComponent';
import HistoryHomePage from '../../Component/HistoryHomePage';


const Home = () => {
    return (
        <div>
            <HomeBanner />
            <OfferSale />
            <BestSeller />
            <HistoryHomePage/>
        </div>
    );
};

export default Home;