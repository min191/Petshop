import React from 'react';
import './styles.css'; 
import { Login } from '../../assets';
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div className="bg-login text-start">
            <div className="container mx-auto px-5">
                <div className="row justify-content-center align-items-stretch">
                    {/* Left */}
                    <div className="col-lg-5 p-0">
                        <div>
                            <img src={Login} alt="Login illustration" className="img-fluid pt-5 mt-5 w-100 rounded-start" />
                        </div>
                    </div>
                    {/* Right */}
                    <div className="col-lg-5 p-0">
                        <form id="form" className="bg-white rounded-3 py-5 px-5 mx-5 my-5">
                            <div className="fw-bold text-center mb-3 fs-1 text-info">Sign Up</div>

                            <div className="form-input text-left mb-2">
                                <label htmlFor="username" className="ms-4 mb-2 inline-block">
                                    Username
                                    <strong className="text-danger">*</strong>
                                </label>
                                <div className="mx-3">
                                    <input
                                        id="username"
                                        className="border w-100 rounded-pill px-3 py-2 border-secondary"
                                        placeholder="Enter username"
                                        type="text"
                                    />
                                </div>
                                <div className="error text-danger fs-6 ms-4" id="error-username" style={{ display: 'none' }}>
                                    Wrong username
                                </div>
                            </div>

                            <div className="text-left mb-2">
                                <label htmlFor="password" className="ms-4 text-sm font-medium mb-2 inline-block text-gray-600">
                                    Password
                                    <strong className="text-danger">*</strong>
                                </label>
                                <div className="mx-3">
                                    <input
                                        id="password"
                                        className="border w-100 rounded-pill px-3 py-2 border-secondary"
                                        type="password"
                                        placeholder="Enter password"
                                    />
                                </div>
                                <div className="error text-danger fs-6 ms-4" id="error-password" style={{ display: 'none' }}>
                                    Invalid password
                                </div>
                            </div>

                            <div className="text-left mb-2">
                                <label htmlFor="phone" className="ms-4 text-sm font-medium mb-2 inline-block text-gray-600">
                                    Phone Number
                                    <strong className="text-danger">*</strong>
                                </label>
                                <div className="mx-3">
                                    <input
                                        id="phone"
                                        className="border w-100 rounded-pill px-3 py-2 border-secondary"
                                        placeholder="Enter phone number"
                                        type="text"
                                    />
                                </div>
                                <div className="error text-danger fs-6 ms-4" id="error-phone" style={{ display: 'none' }}>
                                    Please enter phone with 10 digits
                                </div>
                            </div>

                            <div className="mt-4 mx-3">
                                <button
                                    id="signup"
                                    className="py-2 px-3 w-100 rounded-pill bg-info border border-secondary text-white fw-bold fs-5"
                                    type="submit"
                                >
                                    Create account
                                </button>
                            </div>

                            <div className="text-center mt-3">
                                <Link to="/LogIn" className="fs-6 text-decoration-none text-secondary">Log In.</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
