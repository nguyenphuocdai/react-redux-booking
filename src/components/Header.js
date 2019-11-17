import React from "react";
import { Link } from "react-router-dom";

// const LoggedOutView = props => {
//   if (!props.currentUser) {
//     return (
//       <ul className="nav navbar-nav pull-xs-right">

//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/login" className="nav-link">
//             Sign in
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/register" className="nav-link">
//             Sign up
//           </Link>
//         </li>

//       </ul>
//     );
//   }
//   return null;
// };

// const LoggedInView = props => {
//   if (props.currentUser) {
//     return (
//       <ul className="nav navbar-nav pull-xs-right">

//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/editor" className="nav-link">
//             <i className="ion-compose"></i>&nbsp;New Post
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="/settings" className="nav-link">
//             <i className="ion-gear-a"></i>&nbsp;Settings
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link
//             to={`/@${props.currentUser.username}`}
//             className="nav-link">
//             <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
//             {props.currentUser.username}
//           </Link>
//         </li>

//       </ul>
//     );
//   }

//   return null;
// };

class Header extends React.Component {
  render() {
    return (
      // <nav className="navbar navbar-light">
      //   <div className="container">

      //     <Link to="/" className="navbar-brand">
      //       {this.props.appName.toLowerCase()}
      //     </Link>

      //     <LoggedOutView currentUser={this.props.currentUser} />

      //     <LoggedInView currentUser={this.props.currentUser} />
      //   </div>
      // </nav>
      <header id="header_part">
        <div id="header">
          <div className="container">
            <div className="utf_left_side">
              <div id="logo">
                {" "}
                <Link to="/">
                  <img src="/images/logo.png" alt="" />
                </Link>{" "}
              </div>
              <div className="mmenu-trigger">
                <button className="hamburger utfbutton_collapse" type="button">
                  <span className="utf_inner_button_box">
                    <span className="utf_inner_section" />
                  </span>
                </button>
              </div>
              <nav id="navigation" className="style_one">
                <ul id="responsive">
                  <li>
                    <a className="current" href="javascript:void(0)">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Blog</a>
                    <ul>
                      <li>
                        <a href="blog_page.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog_page_left_sidebar.html">
                          Blog Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog_page_right_sidebar.html">
                          Blog Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog_detail_left_sidebar.html">
                          Blog Detail Leftside
                        </a>
                      </li>
                      <li>
                        <a href="blog_detail_right_sidebar.html">
                          Blog Detail Rightside
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Pages</a>
                    <ul>
                      <li>
                        <a href="page_about.html">About Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Categorie Type</a>
                        <ul>
                          <li>
                            <a href="page_categorie_one.html">Categorie One</a>
                          </li>
                          <li>
                            <a href="page_categorie_two.html">Categorie Two</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="add_listing.html">Add Listing</a>
                      </li>
                      <li>
                        <a href="listing_booking.html">Booking Listing</a>
                      </li>
                      <li>
                        <a href="page_pricing.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="wishlist_listings.html">Wishlist Page</a>
                      </li>
                      <li>
                        <a href="page_filtering_style.html">Filtering Style</a>
                      </li>
                      <li>
                        <a href="typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="page_element.html">Page Element</a>
                      </li>
                      <li>
                        <a href="page_faqs.html">Page Faq</a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Icons</a>
                        <ul>
                          <li>
                            <a href="page_icons_one.html">Icon-Mind Icon</a>
                          </li>
                          <li>
                            <a href="page_icons_two.html">Simple Line Icon</a>
                          </li>
                          <li>
                            <a href="page_icons_three.html">
                              Font Awesome Icon
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="page_not_found.html">Page Error 404</a>
                      </li>
                      <li>
                        <a href="page_coming_soon.html">Coming Soon</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <div className="clearfix" />
            </div>
            <div className="utf_right_side">
              <div className="header_widget">
                {" "}
                <a
                  href="#dialog_signin_part"
                  className="button border sign-in popup-with-zoom-anim"
                >
                  <i className="fa fa-sign-in" /> Sign In
                </a>
                {/* <a href="dashboard_add_listing.html" className="button border with-icon"><i className="sl sl-icon-user" /> Add Listing</a> */}
              </div>
            </div>
            <div id="dialog_signin_part" className="zoom-anim-dialog mfp-hide">
              <div className="small_dialog_header">
                <h3>Sign In</h3>
              </div>
              <div className="utf_signin_form style_one">
                <ul className="utf_tabs_nav">
                  <li className>
                    <a href="#tab1">Log In</a>
                  </li>
                  <li>
                    <a href="#tab2">Register</a>
                  </li>
                </ul>
                <div className="tab_container alt">
                  <div
                    className="tab_content"
                    id="tab1"
                    style={{ display: "none" }}
                  >
                    <form method="post" className="login">
                      <a
                        href="javascript:void(0);"
                        className="social_bt facebook_btn"
                      >
                        <i className="fa fa-facebook" />
                        Login with Facebook
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="social_bt google_btn"
                      >
                        <i className="fa fa-google-plus" />
                        Login with Google
                      </a>
                      <p className="utf_row_form utf_form_wide_block">
                        <label htmlFor="username">
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username"
                            defaultValue
                            placeholder="Username"
                          />
                        </label>
                      </p>
                      <p className="utf_row_form utf_form_wide_block">
                        <label htmlFor="password">
                          <input
                            className="input-text"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                          />
                        </label>
                      </p>
                      <div className="utf_row_form utf_form_wide_block form_forgot_part">
                        {" "}
                        <span className="lost_password fl_left">
                          {" "}
                          <a href="javascript:void(0);">
                            Forgot Password?
                          </a>{" "}
                        </span>
                        <div className="checkboxes fl_right">
                          <input
                            id="remember-me"
                            type="checkbox"
                            name="check"
                          />
                          <label htmlFor="remember-me">Remember Me</label>
                        </div>
                      </div>
                      <div className="utf_row_form">
                        <input
                          type="submit"
                          className="button border margin-top-5"
                          name="login"
                          defaultValue="Login"
                        />
                      </div>
                    </form>
                  </div>
                  <div
                    className="tab_content"
                    id="tab2"
                    style={{ display: "none" }}
                  >
                    <form method="post" className="register">
                      <p className="utf_row_form utf_form_wide_block">
                        <label htmlFor="username2">
                          <input
                            type="text"
                            className="input-text"
                            name="username"
                            id="username2"
                            defaultValue
                            placeholder="Username"
                          />
                        </label>
                      </p>
                      <p className="utf_row_form utf_form_wide_block">
                        <label htmlFor="email2">
                          <input
                            type="text"
                            className="input-text"
                            name="email"
                            id="email2"
                            defaultValue
                            placeholder="Email"
                          />
                        </label>
                      </p>
                      <p className="utf_row_form utf_form_wide_block">
                        <label htmlFor="password1">
                          <input
                            className="input-text"
                            type="password"
                            name="password1"
                            id="password1"
                            placeholder="Password"
                          />
                        </label>
                      </p>
                      <p className="utf_row_form utf_form_wide_block">
                        <label htmlFor="password2">
                          <input
                            className="input-text"
                            type="password"
                            name="password2"
                            id="password2"
                            placeholder="Confirm Password"
                          />
                        </label>
                      </p>
                      <input
                        type="submit"
                        className="button border fw margin-top-10"
                        name="register"
                        defaultValue="Register"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
