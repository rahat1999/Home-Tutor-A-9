import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <footer className="page-footer bg-secondary font-small blue pt-4 foot">
                <div className="container-fluid text-center text-md-left text-white">
                    <div className="d-flex
                     align-items-center
                      justify-content-center  text-black">
                        <div className="col-md-6 mt-md-0 text-white mt-3">
                            <h5 className="text-uppercase text-warning ">Online Tutor Web Info</h5>
                            <p>Our aim is to digitalize the education system, make it simpler, and present it in a more attractive and understandable way</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h6 className=" text-warning">Follow Us On</h6>
                            <div className="list-unstyled ">
                                <Link to="">
                                    <i className="fab fa-facebook-square text-white ms-2">
                                    </i></Link>
                                <Link to="">
                                    <i className="fab fa-twitter-square text-white ms-2">
                                    </i></Link>
                                <Link to="">
                                    <i className="fab fa-instagram-square text-white ms-2">
                                    </i></Link>
                                <Link to="">
                                    <i className="fab fa-linkedin text-white ms-2">
                                    </i></Link>

                                <div>
                                    <h5 className='text-warning'> Pyment On</h5>
                                    <img style={{ width: '200px', height: '100px' }} src="https://dnc.techtunes.io/tDrive/tuner/2021/06/techtunes_af962953dc659f5fb48384e65af0f324.png" alt="" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="footer-copyright text-center py-3 copy text-white">© 2021 Copyright : Online Tutor
                </div>

            </footer>
        </div>
    );
};

export default Footer;