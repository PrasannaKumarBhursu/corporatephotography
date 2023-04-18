import React from "react";
import "./Invite.css";
import {
  letter,
  facebook,
  whatsapp,
  linkedin,
  youtube,
  instagram,
} from "../../assests/index";

const Invite = () => {
  return (
    <>
      <div className="top-line mt-5"></div>
      <div className="outer-invite-container mb-5">
        <div className="inner-invite-container">
          <div className="d-flex align-items-center mt-5">
            <img src={letter} alt="letter" />
            <p className="invite-heading">Invite partner</p>
          </div>
          <input
            className="form-control invite-input-element"
            type="text"
            placeholder="Partner Email Id"
            aria-label="default input example"
          ></input>
          <div className="innvite-button-container mt-3">
            <button className="invite-button-white">CANCEL</button>
            <button className="invite-button-blue">INVITE</button>
          </div>
        </div>
      </div>
      <div className="top-line"></div>
      <div className="mt-3 mb-3">
        <h1 className="need-heading">Need Support</h1>
        <p className="need-para">Discuss with our Wedding Support Team</p>
      </div>
      <div className="top-line"></div>
      <div className="continue-outer-cont mt-5 pt-5 pb-5">
        <div className="continue-inner-cont">
          <div className="continue-card">
            <h1 className="continue-heading">
              Book your Consultant (999/-) Free
            </h1>
            <hr style={{ borderWidth: "2px" }} />
            <p className="continue-para">
              Book a consultation from our expertise in wedding photography to
              your home. Doorstep Visit Quality cheque of products Satisfaction
              in any FAQ, query or problem
            </p>
            <button className="continue-btn">Continue</button>
          </div>
          <div className="continue-card">
            <h1 className="continue-heading">
            Plan your wedding
            </h1>
            <hr style={{ borderWidth: "2px" }} />
            <p className="continue-para">
            Let's plan your wedding for photography with our special storytelling team. Get more ideas Live Samples and BTS discussion Consulting help in Make up artist, destination wedding, wedding story
            </p>
            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>

      <div className="book-container pt-3 pb-5">
        <h1 className="book-head">Want to have your personalized photobook?</h1>
        <button className="book-btn">Book a Photobook</button>
      </div>
      <div className="footer">
        <div className="right-footer-ellipse"></div>
        <div className="left-footer-ellipse"></div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 px-3 mt-3 mb-3">
              <h1>Never miss a thing.</h1>
              <div className="footer-email w-75">
                <input
                  className="form-control w-100 footer-rel-email"
                  type="email"
                  placeholder="Email Address"
                  aria-label="default input example"
                ></input>
                <p className="mb-0 subscribe">Subscribe</p>
              </div>
              <h4 className="small-footer">Be in touch</h4>
              <div className="contancts-footer">
                <img className="emoji-footer" src={facebook} alt="facebook" />
                <img className="emoji-footer" src={whatsapp} alt="whatsapp" />
                <img className="emoji-footer" src={linkedin} alt="linkedin" />
                <img className="emoji-footer" src={youtube} alt="youtube" />
                <img className="emoji-footer" src={instagram} alt="instagram" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 px-3 mt-3 mb-3">
              <h4 className="small-footer text-center">Never miss a thing.</h4>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="small-text">Services</p>
                  <p className="small-text">Blog</p>
                  <p className="small-text">Portfolio</p>
                </div>
                <div>
                  <p className="small-text">Tutorial</p>
                  <p className="small-text">Careers</p>
                  <p className="small-text">Film</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 px-3 mt-3 mb-3">
              <h4 className="small-footer text-center">Never miss a thing.</h4>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="small-text">Contact us</p>
                  <p className="small-text">Feedback</p>
                  <p className="small-text">FAQ</p>
                  <p className="small-text">Terms and conditions</p>
                  <p className="small-text">Privacy Policy</p>
                  <p className="small-text">Data Deletion Protocol</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5 mb-3">
              <p className="small-text">
                2019-2021, FliqaIndia Pvt Ltd. <br /> -ALL RIGHT RESERVED
                POWERED BY FLIQAINDIA PVT. LTD.
                <br />
                VERSION 5.1.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invite;
