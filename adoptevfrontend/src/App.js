import React from 'react';
import { useFormik, Formik, Form } from 'formik';
import './App.css';
import * as yup from 'yup';
class App extends React.Component {
  render(){
  return (
    <div classNameName="App">
          <div className="a1">
        <div className="desktop-navbar-logo">
            <span  className="a2"><a href="/"><img id="navbar-logo" src="images/Logo-02.png"
                        alt="Logo"/></a></span>
        </div>
        <div className="desktop-navbar-links">
            <span id="navbar-home" className="a3"
            ><a>+91-8882454501</a></span>
            <span><a href="#"><button type="button"
                        className="a5">Login</button></a></span>
        </div>
    </div>
    <div className="a4">
        <br/>
        <div className="desktop-navbar-links">
            <span id="navbar-home"><a>Home</a></span>
            <span><a href="#OurServices">Our Services</a></span>
            <span id="navbar-enterprise"><a href="enterprise.html">For Enterprise</a></span>
            <span id="navbar-partnerus"><a href="partnerUs.html">Partner Us</a></span>
            <span><a href="/#main-page-contact-us-section">Contact Us</a></span>
        </div>


    </div>



    

    <section className="main-section navbar-color-change-div">
        <div className="main-page-main-section-container a6">

            <div className="alert alert-light a7" role="alert" >
                Looking for Cargo Vehicle without pollution
            </div>
            <br/>
            <br/>
    
            <div className="btn-group">

                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Faridabad</a>
                   
                </div>

                <div className="input-group">
                    <select className="custom-select a8" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Select City</option>
                        <option value="1">Faridabad</option>
                        </select>

                  
                </div>
            </div>


            <form>


                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary a9" > Trip Based</button>
                    <button type="button" className="btn btn-secondary a10" >Daily Rental</button>
                    <button type="button" className="btn btn-secondary a11" >Monthly Rental</button>
                </div>


                <div className="form-group a12" >

                    <input type="text" className="form-control" id="pickuplocation" placeholder="Enter Pickup Location" />

                </div>
                <div className="form-group a13" >
                  
                    <input type="text" className="form-control" id="droplocation" placeholder="Enter drop Location"/>
   
                </div>


                <div className="custom-control custom-switch a14">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label a15" for="customSwitch1"
                        >MULTISTOP</label>
                </div>




            </form>





            <a href="#"><button type="button" className="a16">Book Now</button></a>



        </div>
    </section>




    <section className="main-section navbar-color-change-div">
        <div className="main-page-main-section-container">
            <div className="main-page-main-section-content">
                <div className="main-page-main-section-content-heading">
                    <h2>Let's <span>AdoptEV</span></h2>
                       <h2>For</h2>
    
                </div>
                <div className="main-page-main-section-content-illustration">
                    <h2>Carbon Footprint</h2>
                </div>
                <div className="main-page-main-section-content-heading">
                    <h2><strong className= "a17">Sustainability</strong> </h2>
                </div>

            </div>
            <div className="main-page-main-section-image">
                <img src="images/Home_main-01.png" alt="" />
            </div>
        </div>
    </section>

    <section className="main-section navbar-color-change-div">
        <img src="images/Group262.png" alt="" className="a18" />
    </section>
    <br/>
    <br/><br/>
    <br/>
    <br/>
    <br/><br/>
    <br/>
    <br/>
    <br/>

    
    <footer>
        <div className="footer-container a19" >
            <div className="footer-content-container">
                <div className="footer-content-image-container">
                    <img src="images/Logo-02.png" alt="" />
                </div>
                <div className="footer-content-paragraph-container">
                    <p>We as an organization contribute towards society, protecting environment, adhering to safety and
                        health of the people.</p>
                </div>
                <br/>
                <h4 className="a20">FOLLOW <span className="a21">US</span></h4>
                <div className="footer-social-icons-container">
                    <div className="footer-social-icons-element">
                        <i className="fa fa-facebook-f"></i>
                    </div>
                    <div className="footer-social-icons-element">
                        <i className="fa fa-instagram"></i>
                    </div>
                    <div className="footer-social-icons-element">
                        <i className="fa fa-linkedin"></i>
                    </div>
                    <div className="footer-social-icons-element">
                        <i className="fa fa-youtube"></i>
                    </div>
                </div>

            </div>
            <div className="footer-links-container">
                <h4><span className="a22">COMPANY<span className="a25"></span> </span></h4>
                <div className="footer-links-inner-container" ><br/><br/>                
                    <h6 className="a23"><a href="#" className="a23">About Us</a></h6>
                    <h6 className="a23"><a href="partnerUs.html" className="a23">Partner Us</a></h6>
                    <h6 className="a23"><a href="enterprise.html"className="a23">For Enterprise</a></h6>
                    <h6 className="a23"><a href="/#main-page-contact-us-section" className="a23">Contact
                            Us</a></h6>
                </div>
            </div>
            <div className="footer-links-container">
                <h4 className="a24"><span>SUPPORT </span></h4><br/><br/>
                <div className="footer-links-inner-container" >
                <h6><a href=" /#OurServices" className="a23">Help Center</a></h6>
                    <h6 className="a23"><a href="#" className="a23">Privacy Policy</a></h6>
                    <h6 className="a23"><a href="partnerUs.html" className="a23">Terms of Services</a></h6>
                    <h6 className="a23"><a href="enterprise.html" className="a23">FAQs</a></h6>

                </div>
            </div>
            <div className="footer-links-container">
                <h4><span><span className="a26"> BOOK A AUTO</span> </span></h4>
                <br/><br/>
                <div className="footer-links-inner-container" >
                <h6><a href=" /#OurServices" className="a23">Try Auto</a></h6>
                    <h6 className="a23"><a href="#" className="a23">For Enterprise</a></h6>

                </div>
            </div>

        </div>
        <div className="footer-copyright-container">
            <h6>Copyright © 2020 AdoptEV, Inc.</h6>
        </div>
    </footer>
    </div>
    
    
  );
}
}


export default App;
