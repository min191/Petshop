import React from 'react';
import style from './style.module.css';


const Contact = () => {
    return (
        <div>
            <div className="container text-start">
                <div className="row py-5">
                    <div className="col-lg-4 left">
                        <div className="fs-2 fw-bold">Don’t hesitate to contact us if you need help.</div>
                    </div>
                    <div className="col-lg-8 right">
                        <div className="fs-6 fw-normal ps-5 py-2">
                            We proudly present our 24/7 advisory team, ready to support you anytime, anywhere.
                            <br/>Dedicated and professional, we provide timely and effective solutions.Day or night,so we strive 
                            <br/>to offer the best support, resolving issues smoothly and efficiently.
                            <br/>Trust us to accompany you on the path to success.
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="d-flex">
                            <div><i class="bi bi-geo-alt-fill"></i></div>
                            <div className="ms-3 fw-bold" style={{ color: 'rgb(255, 120, 44)' }}>Address</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mt-3">98 phố Dương Quảng Hàm, Quan Hoa, Cầu Giấy, Hà Nội</div>
                        </div>
                    </div>
                    <div className="col-lg-8 row">
                        <div className="col-lg-4">
                            <div className="d-flex">
                                <div><i class="bi bi-telephone-fill"></i></div>
                                <div className="ms-3 fw-bold" style={{ color: 'rgb(255, 120, 44)' }}>Call Us</div>
                            </div>
                            <div className="content mt-3">
                                (+84) 0888 299 116 <br />
                                (+84) 0983 190 104
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex">
                                <div><i class="bi bi-alarm-fill"></i></div>
                                <div className="ms-3 fw-bold" style={{ color: 'rgb(255, 120, 44)' }}>Opening</div>
                            </div>
                            <div className="content mt-3">
                                <div>Monday – Friday: 8am – 4pm</div>
                                <div>Saturday – Sunday: 9am – 5pm</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex">
                                <div><i class="bi bi-envelope-fill"></i></div>
                                <div className="ms-3 fw-bold" style={{ color: 'rgb(255, 120, 44)' }}>Contact</div>
                            </div>
                            <div className="content mt-3">
                                <div>mint99@gmail.com</div>
                                <div>minhnq@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-5" style={{ backgroundColor: 'rgb(229, 239, 255)' }}>
                    <div className="col-lg-6 px-4">
                        <div className="fw-bold fs-5 pt-5 pb-2">Got Any Questions?</div>
                        <div className="pb-3">Use the form below to get in touch with the sales team</div>
                        <div>
                            <form>
                                <div className="pb-3">
                                    <input className="border w-100 px-3 py-2 border-secondary" placeholder="Name*" />
                                </div>
                                <div className="pb-3">
                                    <input className="border w-100 px-3 py-2 border-secondary" placeholder="Email*" />
                                </div>
                                <div className="pb-3">
                                    <input className="border w-100 px-3 py-5 border-secondary" placeholder="" />
                                </div>
                            </form>
                        </div>
                        <div className="pb-5">
                            <button className="rounded-pill bg-pink mt-3">Send Your Message</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9208668708675!2d105.79875297471456!3d21.035852087536032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3f57fc23d1%3A0xf813dfd05dfa4078!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBUaOG7pyDEkcO0IEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1717115465327!5m2!1svi!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            className="mx-3 my-4"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;