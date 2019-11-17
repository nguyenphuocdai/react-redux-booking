import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="utf_cta_area_item utf_cta_area2_block">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="utf_subscribe_block clearfix">
                  <div className="col-md-8 col-sm-7">
                    <div className="section-heading">
                      <h2 className="utf_sec_title_item utf_sec_title_item2">
                        Subscribe to Newsletter!
                      </h2>
                      <p className="utf_sec_meta">
                        Subscribe to get latest updates and information.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-5">
                    <div className="contact-form-action">
                      <form method="post">
                        <span className="la la-envelope-o" />
                        <input
                          className="form-control"
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                        <button className="utf_theme_btn" type="submit">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="footer" className="footer_sticky_part">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-3 col-xs-6">
                <h4>Useful Links</h4>
                <ul className="social_footer_link">
                  <li>
                    <a href="javascript:void(0)">Home</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Listing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Blog</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-3 col-xs-6">
                <h4>My Account</h4>
                <ul className="social_footer_link">
                  <li>
                    <a href="javascript:void(0)">Dashboard</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Profile</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">My Listing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Favorites</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-3 col-xs-6">
                <h4>Pages</h4>
                <ul className="social_footer_link">
                  <li>
                    <a href="javascript:void(0)">Blog</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Our Partners</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">How It Work</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-3 col-xs-6">
                <h4>Help</h4>
                <ul className="social_footer_link">
                  <li>
                    <a href="javascript:void(0)">Sign In</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Register</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Add Listing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Pricing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <h4>About Us</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="footer_copyright_part">
                  Copyright © 2019 All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="bottom_backto_top">
          <a href="javascript:void(0)" />
        </div>
      </div>
    );
  }
}
