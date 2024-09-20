import React from 'react';
import {
    nguoi_1,
    nguoi_2,
    nguoi_3,
    tailor_made_1,
    tailor_made_2,
    tailor_made_3,
    dog
} from '../../assets';

const About = () => {
    return (
        <div className='text-start mb-5'>
            {/* Block 1 */}
            <div className="container">
                <div className="row ">
                    <div className="col-4 d-flex flex-column justify-content-center">
                        <div className="ms-5 pt-5 mt-3">
                            <h2 className="text-uppercase fw-bold text-danger fs-6 mt-5 pt-5">

                                A FRESH START, A NEW FOCUS.
                            </h2>
                        </div>
                        <div className="ms-5">
                            <h2 className="fw-bold fs-1 text-dark">
                                Personalized pet care, up close.
                            </h2>
                        </div>
                        <div className="ms-5 my-5">
                            We’re not just sporting a fresh new look. As you'll read below, we've hired more qualified advisors,
                            expanded our product range, designed a pet-centric navigation, and introduced new services such as
                            on-demand healthcare and insurance. There's much more on the horizon,
                            and we hope you agree we're moving in the right direction.
                        </div>
                        <div className="d-flex align-items-center ms-5">
                            <i class="bi bi-fast-forward-circle-fill"></i>
                            <div className="ms-3 fw-bold fs-6">Watch Our Video</div>
                            <button className="ms-5 btn btn-info rounded-pill" type="button">
                                Learn more
                            </button>
                        </div>
                    </div>
                    <div className="col-8">
                        {/* Placeholder for image */}
                        <img className="ms-5 ps-5 rounded float-end my-5" style={{ width: '550px' }} src={dog} />
                    </div>
                </div>
            </div>

            {/* Block 2 */}
            <div className="container">
                <div className="my-5 text-center">
                    <div className="fw-bold fs-6 text-uppercase text-danger">
                        we're here for you
                    </div>
                    <div className="fw-bold fs-1">
                        All you need, all in one place
                    </div>
                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card text-dark bg-light">
                                <img src={tailor_made_1} className="mx-auto d-block" style={{ width: "80%" }} alt="Tailor-made insurance" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Tailor-made insurance</h5>
                                    <p className="card-text text-center fs-6">Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-dark bg-light">
                                <img src={tailor_made_2} className="mx-auto d-block" style={{ width: "80%" }} alt="On-demand healthcare" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">On-demand healthcare</h5>
                                    <p className="card-text text-center fs-6">Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-dark bg-light">
                                <img src={tailor_made_3} className="mx-auto d-block" style={{ width: "80%" }} alt="Comprehensive Coverage" />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Comprehensive Coverage</h5>
                                    <p className="card-text text-center fs-6">Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Block 3 */}
            <div className="container">
                <div className="my-5 text-center">
                    <div className="fw-bold fs-6 text-uppercase text-danger">
                        Customers
                    </div>
                    <div className="fw-bold fs-1">
                        Our regular customers
                    </div>
                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card text-dark bg-light">
                                <img src={nguoi_1} className="mx-auto d-block mt-4" style={{ width: "66%" }}/>
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Albert McKinney</h5>
                                    <p className="card-text text-center fs-6">&<br/>Nancy </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-dark bg-light">
                                <img src={nguoi_2} className="mx-auto d-block mt-4" style={{ width: "66%" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Paul Pogba</h5>
                                    <p className="card-text text-center fs-6">&<br/>Jack </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card text-dark bg-light">
                                <img src={nguoi_3} className="mx-auto d-block mt-4" style={{ width: "66%" }}/>
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold">Michella Keega</h5>
                                    <p className="card-text text-center fs-6">&<br/>Oggy </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
