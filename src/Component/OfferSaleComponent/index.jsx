import React from 'react';
import style from './style.module.css';
import { discount_4, discount_5 } from '../../assets';
import { Link } from 'react-router-dom';

const OfferSale = () => {
    return (
        <div className="container mt-5">
        <h1>Offer Sale</h1>
        <div className="row">
            <Link to='/shop' className="text-start col-lg-6">
                <div className={`card text-white ${style.zoom}`}>
                    <img src={discount_4} className="card-img" />
                    <div className="card-img-overlay ms-4 mt-4">
                        <h5 className="card-title fw-bold fs-4">Dog Supplies</h5>
                        <h5 className=" fw-bold  fs-1">25%</h5>
                        <h5 className=" fs-5 fw-bold text-info mt-3">Hotline Order</h5>
                        <p className=" fw-bold fs-4">(+84) 0888 299 116</p>
                    </div>
                </div>

            </Link>
            <Link to='shop' className="text-start col-lg-6">
                <div className={`card text-white ${style.zoom}`}>
                    <img src={discount_5} className="card-img" />
                    <div className="card-img-overlay mt-4 ms-4">
                        <h5 className="text-uppercase fw-bold fs-6">Gift for pet</h5>
                        <h5 className="card-title fw-bold fs-1">Premium<br />Cat Food</h5>
                        <div className=" d-flex">
                            <p className=" fw-bold fs-3 me-2">SALE OFF </p>
                            <p className="fw-bold text-warning fs-3"> 50%</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
    );
};

export default OfferSale;
