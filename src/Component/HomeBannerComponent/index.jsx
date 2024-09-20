import style from './style.module.css';
import React from 'react';
import {
    BannerHome_1,
} from "../../assets/index";
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className={style.banner}>
            <img src={BannerHome_1} className='d-block' style={{ width: '100%' }} alt="Banner Home 1"/>
            <div className={style.caption}>
                <h1>Everything <br />your pet needs</h1>
                <p>Pet supplies, food, and products from the best manufacturers.</p>
                {/* <Button variant="primary">Primary</Button> */}
                <Link to="/about">
                    <button className={style.btn_left}>About Us</button>
                </Link>
                <Link to="/shop">
                    <button className={style.btn_right}>Shopping <i className="bi bi-arrow-right-short"></i></button>
                </Link>
            </div>
        </div>
    );
};

export default HomeBanner;
