import React, { useContext } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../CartProvider';

const CheckOutPopUp = ({ onClose }) => {
    const { cartList, deleteFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cartList.reduce((total, product) => total + (product.price * product.quantity || 0), 0);
    };

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log("Order placed");
        onClose(); // Close the popup after placing the order
        navigate('/thank-you'); // Navigate to a thank you page
    };

    return (
        <>
            <div style={{ height: "100vh", width: "100vw", position: "fixed", top: 0, left: 0, background: "#60606047" }} onClick={onClose}></div>
            <div className={styles.popup}>
                <h1 className='mt-5'>Check out</h1>
                <h4 className={styles['ClosePopup']} onClick={onClose}>x</h4>
                <div className="d-flex justify-content-around container">
                    <div className="col-md-5 mb-4">
                        <form onSubmit={handleSubmit}>
                            <div className="text-start m-3">
                                <label htmlFor="fullName" className="form-label">FULL NAME:</label>
                                <input type="text" id="fullName" className="form-control" placeholder="Enter Your Full Name Here!" required />
                            </div>
                            <div className="text-start m-3">
                                <label htmlFor="email" className="form-label">EMAIL:</label>
                                <input type="email" id="email" className="form-control" placeholder="Enter Your Email Here!" required />
                            </div>
                            <div className="text-start m-3">
                                <label htmlFor="phoneNumber" className="form-label">PHONE NUMBER:</label>
                                <input type="tel" id="phoneNumber" className="form-control" placeholder="Enter Your Phone Number Here!" required />
                            </div>
                            <div className="text-start m-3">
                                <label htmlFor="address" className="form-label">ADDRESS:</label>
                                <textarea id="address" className="form-control" placeholder="Enter Your Address Here!" rows="3" required></textarea>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h4>YOUR ORDER</h4>
                        {cartList.map(product => (
                            <div key={product.id} className={`${styles['bill']} d-flex justify-content-between py-3 border-bottom`}>
                                <div className="fw-bold me-3">{product.title}</div>
                                <div className='d-flex'>
                                    <i className="font-weight-light me-2">{formatPrice(product.price)} VNĐ</i>
                                    <i className="font-weight-light"> x{product.quantity}</i>
                                </div>
                            </div>
                        ))}
                        <div className='d-flex justify-content-between'>
                            <div className="fw-bold mt-2">TOTAL</div>
                            <div className="fs-3">{formatPrice(calculateTotal())} VNĐ</div>
                        </div>
                        <button type="submit" className="btn btn-dark py-1 mt-3 fw-bold" onClick={onClose}>Place order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckOutPopUp;
