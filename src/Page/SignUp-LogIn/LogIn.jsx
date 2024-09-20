import React from 'react';
import './styles.css';
import { Login } from '../../assets';
import { Link } from 'react-router-dom';

function LogIn() {
  const logIn = (event) => {
    event.preventDefault();
    // Add logIn logic here
  };

  return (
    <div className="bg-login">
      <div className="container mx-auto px-5">
        <div className="row justify-content-center align-items-stretch">
          {/* Left */}
          <div className="col-lg-5 p-0">
            <div>
              <img src={Login} className="img-fluid pt-5 mt-5 w-100 rounded-start" />
            </div>
          </div>
          {/* Right */}
          <div className="col-lg-5 p-0">
            <form id="form" className="bg-white rounded-3 py-5 px-5 mx-5 my-5" onSubmit={logIn}>
              <div className="fw-bold text-center mb-3 fs-1 text-info">Log In</div>
              {/* Username */}
              <div className="form-input text-start mb-4">
                <label htmlFor="username" className="ms-4 text-sm font-medium mb-2 inline-block">
                  Username
                  <strong className="text-danger">*</strong>
                </label>
                <div className="mx-3">
                  <input
                    id="phone"
                    className="border w-100 rounded-pill px-3 py-2 border-secondary"
                    placeholder="Enter phone number"
                    data-gtm-form-interact-field-id="0"
                  />
                </div>
                <div className="error text-danger fs-6 ms-4" id="error-message" style={{ display: 'none' }}>
                  Wrong phone
                </div>
              </div>
              {/* Password */}
              <div className="text-start mb-4">
                <label htmlFor="pwd" className="ms-4 text-sm font-medium mb-2 inline-block text-gray-600">
                  Password
                  <strong className="text-danger">*</strong>
                </label>
                <div className="mx-3">
                  <input
                    id="password"
                    className="border w-100 rounded-pill px-3 py-2 border-secondary"
                    type="password"
                    placeholder="Enter password"
                    data-gtm-form-interact-field-id="0"
                  />
                </div>
                <div className="error text-danger fs-6 ms-4" id="error-pass" style={{ display: 'none' }}>
                  Wrong password
                </div>
              </div>
              {/* LogIn button */}
              <div className="mt-4 mx-3">
                <button
                  id="logIn"
                  className="py-2 px-3 w-100 rounded-pill bg-info border border-secondary text-white fw-bold fs-5"
                  type="submit"
                >
                  Log In
                </button>
              </div>
              {/* Links */}
              <div className="ms-4 mt-3 mb-3 text-center">
                <a className="text-secondary fs-6  text-decoration-none" href="#">
                  Forgot the password ?
                </a>
                <br />
                <Link className="text-secondary fs-6  text-decoration-none" to="/SignUp">
                  Create new account.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
