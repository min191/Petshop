import React, { useContext, useState } from 'react';
import { CartContext } from '../../Component/CartProvider';
import styles from './styles.module.css'; // Ensure you have this CSS file for styling
import CheckOutPopUp from '../../Component/PopUp/checkOut';
import { formatPrice } from "../../utils/helper"

const Cart = () => {
    const { cartList, deleteFromCart } = useContext(CartContext);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const onClickDeleteToCart = (product) => {
        deleteFromCart(product.id);
    };

    const calculateTotal = () => {
        return cartList.reduce((total, product) => total + (product.price * product.quantity || 0), 0);
    };


    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div >
            <div className="mt-2" style={{ minHeight: '500px' }}>
                <div className="row">
                    <div className="col-12 col-lg-8 mx-4 mb-5 mt-2">
                        <div className="row bg-light text-center py-2">
                            <div className="col-2">IMAGE</div>
                            <div className="col-3">PRODUCT</div>
                            <div className="col-2">PRICE</div>
                            <div className="col-2">QUANTITY</div>
                            <div className="col-2">TOTAL</div>
                            <div className="col-1">REMOVE</div>
                        </div>

                        {cartList.map(product => (
                            <div key={product.id} className="row align-items-center text-center py-3 border-bottom">
                                <div className="col-2">
                                    <img src={product.img} style={{ width: '100%' }} alt={product.title} />
                                </div>
                                <div className="col-3 text-start">{product.title}</div>
                                <div className="col-2">{formatPrice(product.price)} VNĐ</div>
                                <div className="col-2">{product.quantity}</div>
                                <div className="col-2">{formatPrice(product.price * product.quantity)} VNĐ</div>
                                <div className="col-1">
                                    <button className="btn btn-dark" onClick={() => onClickDeleteToCart(product)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-lg-3 pt-3 ">
                        <div>
                            <div className="d-flex justify-content-between border-bottom align-items-center py-2">
                                <div className="fw-bold">Subtotal:</div>
                                <div>{formatPrice(calculateTotal())} VNĐ</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom align-items-center py-2">
                                <div className="fw-bold">Coupon code:</div>
                                <div>0 VNĐ</div>
                            </div>
                            <div className="d-flex justify-content-between border-bottom align-items-center py-2">
                                <div className="fw-bold">Grand total:</div>
                                <div className="fs-3">{formatPrice(calculateTotal())} VNĐ</div>
                            </div>
                            <div className="text-start my-3">
                                <div className="row mt-4">
                                    <div className="col-md-9">
                                        <span>Congrats, you're for</span>
                                        <br />
                                        <span className="fw-bold">free shipping</span>
                                    </div>
                                    <div className="col-md-3">
                                        <i className="fa-solid fa-car-side"></i>
                                    </div>
                                </div>
                                <div className="line border-top border-4 border-info my-4"></div>
                                <div>
                                    <button className="w-100 btn btn-warning" onClick={openPopup}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isPopupOpen && <CheckOutPopUp onClose={closePopup} />}
        </div>
    );
};

export default Cart;
