import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;


    return (
        <div className="footer">

            <div className="container-fluid text-center text-md-left container">
                <div className="row">


                    <div className="col-md-6 pe-sm-5 mt-3 text-white ">
                        <div className="footer-left p-4">
                            <img className='logo' src={logo} alt="" />

                            <h5 style={{ textAlign: 'left' }} className="sub-heading mt-2">BOOST BRAINPOWER WITH MUSIC. FROM ANYWHERE.</h5>

                            <p className="footer-p">Music Land is the world’s leading provider of music-based education for children from birth through age seven. <br /> We use the power and joy of </p>
                        </div>




                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Your Needed Links</h5>


                        <div className="footer-links">


                            <Link to="/home" className=" nav-link">Home</Link>
                            <Link to="/packages" className=" nav-link">Packages</Link>
                            <Link to="/purchase" className=" nav-link">Purchase</Link>
                            <Link to="/manageOrders" className=" nav-link">Manage Orders</Link>
                            <Link to="/about" className=" nav-link">About</Link>



                        </div>
                    </div>


                    <div className="col-md-3  mb-3">
                        <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Follow Us</h5>


                        <div className="footer-links">



                            <a className="btn btn-primary" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i></a>

                            

                            <button
                                type="button"
                                className="btn btn-primary position-relative mx-4"
                                data-mdb-ripple-unbound="true">
                                    
                                <i className="fab fa-instagram"></i>
                                
                            </button>





                        </div>

                        <div className="text-white" style={{ textAlign: 'left' }}>
                            <h5 style={{ textAlign: 'left' }} className="sub-heading mt-5 text-white">Contact Details</h5>
                            <p>   Email : rakib35-2638@diu.edu.bd</p>
                            <p> Location : Dhanmondi,Dhaka</p>

                        </div>



                    </div>






                </div>
            </div>
        </div >
    );
};

export default Footer;