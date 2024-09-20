import React from 'react';
import { Logo_Mint_Pet } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.css'

const getCartList = () => {
    try {
        const cartList = JSON.parse((localStorage.getItem("cart_list")));
        return cartList || [];
    } catch (error) {
        console.error(error);
        return []

    }
};

const Header = () => {
    const numberOfCartList = getCartList()?.length;
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-light">
            <div className="container-fluid">
                <img className='navbar-brand' src={Logo_Mint_Pet} style={{ width: '100px' }} />
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className='nav-link' style={{ textDecoration: "none", color: "black" }} to="/"><span className='fs-5 fw-bold'>Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' style={{ textDecoration: "none", color: "black" }} to="/shop"><span className='fs-5 fw-bold'>Shop</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' style={{ textDecoration: "none", color: "black" }} to="/about"><span className='fs-5 fw-bold'>About Us</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' style={{ textDecoration: "none", color: "black" }} to="/contact"><span className='fs-5 fw-bold'>Contact Us</span></Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-dark" type="button">Search</button>
                    </form>
                    <div className={`${styles.pointer} d-flex m-3`}>
                        <div
                            className='text-dark fs-5 m-2'
                            onClick={() => navigate(`/logIn`)}
                        >
                            <i className="bi bi-person-circle"></i>
                        </div>
                        <div
                            style={{ position: "relative" }}
                            onClick={() => navigate(`/cart`)}
                        >
                            <div style={{ background: "red", borderRadius: "50%", position: "absolute", bottom: 0, right: -5, width: "25px", color: "#ffff" }}>{numberOfCartList || 0}</div>
                            <div className='m-2 text-dark fs-5'>
                                <i className="bi bi-cart3"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Header;
