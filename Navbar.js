import logo from './img/logo.png'
import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className="g-0">
                <section className="container-fluid head">
                    <section className="container">
                        <section className="row text-light ">
                            <div className="col-xl-2 col-md-4 mb-3">
                                <img src={logo} className="img-fluid mt-4" alt="img not found" />
                            </div>
                            <div className="col-lg-6  mb-3">
                                <nav className="navbar navbar-expand-lg d-none d-lg-block mt-3">
                                    <div className="container-fluid" id="nav2">
                                        <a className="navbar-brand text-light" href="index.html">Home</a>
                                        <a className="navbar-brand text-light" href="Property.html"> </a>
                                        <a className="navbar-brand text-light" href="About.html">About</a>
                                        <a className="navbar-brand text-light" href="Contact.html">Contact</a>
                                        <a className="navbar-brand text-light" href="Contact.html">Blog</a>
                                    </div>
                                </nav>
                            </div>

                            <div className="col-lg-2 mt-3 mb-3">
                                <h5 className="ms-5">Call Us</h5>
                                <h5> +10 (78) 356 3276 </h5>
                            </div>

                            <div className="col-xl-2 mt-4 d-none d-xl-block mb-3">
                                <button className="btn1 btn btn-lg border-5 btn-outline-primary text-white ms-3" type="button"> Sign In </button>
                            </div>

                        </section>
                    </section>
                </section>

               
            </div>
        </>
    );
};
export default Navbar;