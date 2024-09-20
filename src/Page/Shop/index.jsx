import React from 'react';
import {
    BannerShop_1,
    BannerShop_2
} from '../../assets';
import CartItem from '../../Component/CardProductCompent/CartItem';

const Shop = () => {
    return (
        <div>
            {/* begin Banner */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={BannerShop_2} style={{ height: "700px" }} className="d-block w-100 " />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={BannerShop_1} style={{ height: "700px" }} className="d-block w-100 " />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* end Banner */}
            {/* begin Content */}
            <div className='mt-3'>
                <h1>Shop</h1>
                <div className="container my-3">
                    <CartItem />
                </div>
            </div>
            {/* end Content */}
        </div>
    );
};

export default Shop;