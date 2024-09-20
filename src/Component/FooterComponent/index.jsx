import React from 'react';
import { App_store, Google_Play, Logo_Mint_Pet } from '../../assets';
import Style from './style.module.css'
const Footer = () => {
    return (
        <footer className="py-3 bg-light text-start">
            <div className="container py-5">
                <div className="row">
                    {/* <!--Block 1--> */}
                    <div className="col-lg-3 mb-3">
                        <div className="mb-2">
                            <img src={Logo_Mint_Pet} style={{ width: '150px' }} />
                        </div>
                        <div className="fs-6 fw-normal  text-secondary my-3">
                            We know pets are like family, so we are committed to providing the highest-quality products that you can
                            trust.</div>
                        <div className="d-flex">
                            <div><i className="fa-solid fa-phone fs-4"></i></div>
                            <div className="ms-2 fs-6 fw-bold">Hotline Order</div>
                        </div>
                        <div className="text-danger fw-bold fs-5">(+84) 0888 299 116</div>
                        <div className="d-flex me-3 my-4">
                            <i style={{marginLeft:'20px'}} className="bi bi-facebook"/>
                            <i style={{marginLeft:'20px'}} className="bi bi-instagram"/>
                            <i style={{marginLeft:'20px'}} className="bi bi-twitter"/>
                            <i style={{marginLeft:'20px'}} className="bi bi-pinterest"/>
                        </div>
                    </div>
                    {/* <!--Block 2--> */}
                    <div className=" col-6 col-lg-2 mb-3">
                        <div className="mb-4">
                            <h2 className="text-uppercase fw-bold fs-6">useful links</h2>
                        </div>
                        <div>
                            <ul className="list-unstyled">
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>New Products</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Best Sellers</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Bundle & Save</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Online Gift Card</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Discount</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Pet Store Locator</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* <!--Block 3--> */}
                    <div className="col-6 col-lg-2 mb-3">
                        <div className="mb-4">
                            <h2 className="text-uppercase fw-bold fs-6">my account</h2>
                        </div>
                        <div>
                            <ul className="list-unstyled">
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>My Profile</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>My Order History</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>My Wish List</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Order Tracking</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Shipping Info</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Shopping Cart</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--Block 4--> */}
                    <div className="col-6 col-lg-2 mb-3">
                        <div className="mb-4">
                            <h2 className="text-uppercase fw-bold fs-6">company</h2>
                        </div>
                        <div>
                            <ul className="list-unstyled">
                                <li className="mb-2 home ">
                                    <a className={`${Style['TextFooter']} text-secondary`}>About us</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Careers</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Blog</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Affiliate</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Contact Us</a>
                                </li>
                                <li className="mb-2 home">
                                    <a className={`${Style['TextFooter']} text-secondary`}>Gift Cards</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--Block 5--> */}
                    <div className="col-lg-3 mb-3">
                        <div className="mb-4">
                            <h2 className="text-uppercase fw-bold fs-6">newsletter</h2>
                        </div>
                        <div className="fs-6 fw-normal  text-secondary my-3">
                            Subscrible & get 10% discount. Get E-mail updates about our latest shop and special offers.
                        </div>

                        <div>
                            <div>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="email" placeholder="Enter your email" aria-label="Search" />
                                    <button className="btn btn-outline-dark" type="submit">
                                        <i className="bi bi-envelope-fill"/></button>
                                </form>
                            </div>
                        </div>

                        <div className="d-fex mt-3">
                            <span>
                                <i className="fa-solid fa-mobile-screen-button fs-3 me-2"></i>
                            </span>
                            <span className="fw-bold fs-6">Download Our App</span>
                        </div>

                        <div className="d-flex mt-4">
                            <div className='m-2'>
                                <img src={Google_Play} style={{ width: '145px' }} />
                            </div>
                            <div className='m-2'>
                                <img src={App_store} style={{ width: '130px' }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;