import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED
} from "../../constants/actionTypes";

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () => dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

class Restaurants extends Component {
  render() {
    return (
      <div>
        <div id="titlebar" className="gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Layout List With Sidebar</h2>
                <nav id="breadcrumbs">
                  <ul>
                    <li>
                      <a href="index_1.html">Home</a>
                    </li>
                    <li>Layout List With Sidebar</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="listing_filter_block">
                <div className="col-md-2 col-xs-2">
                  <div className="utf_layout_nav">
                    {" "}
                    <a href="listings_grid_with_sidebar.html" className="grid">
                      <i className="fa fa-th" />
                    </a>{" "}
                    <a href="#" className="list active">
                      <i className="fa fa-align-justify" />
                    </a>{" "}
                  </div>
                </div>
                <div className="col-md-10 col-xs-10">
                  <div className="sort-by utf_panel_dropdown sort_by_margin float-right">
                    {" "}
                    <a href="#">Destination</a>
                    <div className="utf_panel_dropdown-content">
                      <input
                        className="distance-radius"
                        type="range"
                        min={1}
                        max={999}
                        step={1}
                        defaultValue={1}
                        data-title="Select Range"
                      />
                      <div className="panel-buttons">
                        <button className="panel-apply">Apply</button>
                      </div>
                    </div>
                  </div>
                  <div className="sort-by">
                    <div className="utf_sort_by_select_item sort_by_margin">
                      <select
                        data-placeholder="Sort by Listing"
                        className="utf_chosen_select_single"
                      >
                        <option>Sort by Listing</option>
                        <option>Latest Listings</option>
                        <option>Popular Listings</option>
                        <option>Price (Low to High)</option>
                        <option>Price (High to Low)</option>
                        <option>Highest Reviewe</option>
                        <option>Lowest Reviewe</option>
                        <option>Newest Listing</option>
                        <option>Oldest Listing</option>
                        <option>Random Listings</option>
                      </select>
                    </div>
                  </div>
                  <div className="sort-by">
                    <div className="utf_sort_by_select_item sort_by_margin">
                      <select
                        data-placeholder="Categories:"
                        className="utf_chosen_select_single"
                      >
                        <option>Categories</option>
                        <option>Restaurant</option>
                        <option>Health</option>
                        <option>Hotels</option>
                        <option>Real Estate</option>
                        <option>Fitness</option>
                        <option>Shopping</option>
                        <option>Travel</option>
                        <option>Shops</option>
                        <option>Nightlife</option>
                        <option>Events</option>
                      </select>
                    </div>
                  </div>
                  <div className="sort-by">
                    <div className="utf_sort_by_select_item utf_search_map_section">
                      <ul>
                        <li>
                          <a className="utf_common_button" href="#">
                            <i className="fa fa-dot-circle-o" />
                            Near Me
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="utf_listing_item-container list-layout">
                    {" "}
                    <Link to="/restaurant/1" className="utf_listing_item">
                      <div className="utf_listing_item-image">
                        <img src="images/utf_listing_item-01.jpg" alt="" />
                        <span className="like-icon" />
                        <span className="tag">
                          <i className="im im-icon-Hotel" /> Hotels
                        </span>
                        <div className="utf_listing_prige_block utf_half_list">
                          <span className="utf_meta_listing_price">
                            <i className="fa fa-tag" /> $25 - $45
                          </span>
                          <span className="utp_approve_item">
                            <i className="utf_approve_listing" />
                          </span>
                        </div>
                      </div>
                      <span className="utf_open_now">Open Now</span>
                      <div className="utf_listing_item_content">
                        <div className="utf_listing_item-inner">
                          <h3>Chontaduro Barcelona</h3>
                          <span>
                            <i className="sl sl-icon-location" /> The
                            Ritz-Carlton, Hong Kong
                          </span>
                          <span>
                            <i className="sl sl-icon-phone" /> (415) 796-3633
                          </span>
                          <div
                            className="utf_star_rating_section"
                            data-rating="4.5"
                          >
                            <div className="utf_counter_star_rating">(4.5)</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in pulvinar neque. Nulla finibus
                            lobortis pulvinar. Donec a consectetur nulla.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="utf_listing_item-container list-layout">
                    {" "}
                    <a
                      href="listings_single_page_1.html"
                      className="utf_listing_item"
                    >
                      <div className="utf_listing_item-image">
                        <img src="images/utf_listing_item-02.jpg" alt="" />
                        <span className="like-icon" />
                        <span className="tag">
                          <i className="im im-icon-Hotel" /> Hotels
                        </span>
                        <span className="featured_tag">Featured</span>
                        <div className="utf_listing_prige_block utf_half_list">
                          <span className="utf_meta_listing_price">
                            <i className="fa fa-tag" /> $35 - $55
                          </span>
                          <span className="utp_approve_item">
                            <i className="utf_approve_listing" />
                          </span>
                        </div>
                      </div>
                      <div className="utf_listing_item_content">
                        <div className="utf_listing_item-inner">
                          <h3>The Lounge &amp; Bar</h3>
                          <span>
                            <i className="sl sl-icon-location" /> The
                            Ritz-Carlton, Hong Kong
                          </span>
                          <span>
                            <i className="sl sl-icon-phone" /> (415) 796-3633
                          </span>
                          <div
                            className="utf_star_rating_section"
                            data-rating={5.0}
                          >
                            <div className="utf_counter_star_rating">(4.5)</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in pulvinar neque. Nulla finibus
                            lobortis pulvinar. Donec a consectetur nulla.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="utf_listing_item-container list-layout">
                    {" "}
                    <a
                      href="listings_single_page_1.html"
                      className="utf_listing_item"
                    >
                      <div className="utf_listing_item-image">
                        <img src="images/utf_listing_item-03.jpg" alt="" />
                        <span className="like-icon" />
                        <span className="tag">
                          <i className="im im-icon-Hotel" /> Hotels
                        </span>
                        <div className="utf_listing_prige_block utf_half_list">
                          <span className="utf_meta_listing_price">
                            <i className="fa fa-tag" /> $25 - $45
                          </span>
                          <span className="utp_approve_item">
                            <i className="utf_approve_listing" />
                          </span>
                        </div>
                      </div>
                      <div className="utf_listing_item_content">
                        <div className="utf_listing_item-inner">
                          <h3>Westfield Sydney</h3>
                          <span>
                            <i className="sl sl-icon-location" /> The
                            Ritz-Carlton, Hong Kong
                          </span>
                          <span>
                            <i className="sl sl-icon-phone" /> (415) 796-3633
                          </span>
                          <div
                            className="utf_star_rating_section"
                            data-rating="3.5"
                          >
                            <div className="utf_counter_star_rating">(3.5)</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in pulvinar neque. Nulla finibus
                            lobortis pulvinar. Donec a consectetur nulla.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="utf_listing_item-container list-layout">
                    {" "}
                    <a
                      href="listings_single_page_1.html"
                      className="utf_listing_item"
                    >
                      <div className="utf_listing_item-image">
                        <img src="images/utf_listing_item-04.jpg" alt="" />
                        <span className="like-icon" />
                        <span className="tag">
                          <i className="im im-icon-Hotel" /> Hotels
                        </span>
                        <span className="featured_tag">Featured</span>
                        <div className="utf_listing_prige_block utf_half_list">
                          <span className="utf_meta_listing_price">
                            <i className="fa fa-tag" /> $25 - $45
                          </span>
                          <span className="utp_approve_item">
                            <i className="utf_approve_listing" />
                          </span>
                        </div>
                      </div>
                      <span className="utf_closed">Closed</span>
                      <div className="utf_listing_item_content">
                        <div className="utf_listing_item-inner">
                          <h3>Ruby Beauty Center</h3>
                          <span>
                            <i className="sl sl-icon-location" /> The
                            Ritz-Carlton, Hong Kong
                          </span>
                          <span>
                            <i className="sl sl-icon-phone" /> (415) 796-3633
                          </span>
                          <div
                            className="utf_star_rating_section"
                            data-rating="4.5"
                          >
                            <div className="utf_counter_star_rating">(4.5)</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in pulvinar neque. Nulla finibus
                            lobortis pulvinar. Donec a consectetur nulla.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="utf_listing_item-container list-layout">
                    {" "}
                    <a
                      href="listings_single_page_1.html"
                      className="utf_listing_item"
                    >
                      <div className="utf_listing_item-image">
                        <img src="images/utf_listing_item-05.jpg" alt="" />
                        <span className="like-icon" />
                        <span className="tag">
                          <i className="im im-icon-Hotel" /> Hotels
                        </span>
                        <div className="utf_listing_prige_block utf_half_list">
                          <span className="utf_meta_listing_price">
                            <i className="fa fa-tag" /> $25 - $45
                          </span>
                          <span className="utp_approve_item">
                            <i className="utf_approve_listing" />
                          </span>
                        </div>
                      </div>
                      <div className="utf_listing_item_content">
                        <div className="utf_listing_item-inner">
                          <h3>UK Fitness Club</h3>
                          <span>
                            <i className="sl sl-icon-location" /> The
                            Ritz-Carlton, Hong Kong
                          </span>
                          <span>
                            <i className="sl sl-icon-phone" /> (415) 796-3633
                          </span>
                          <div
                            className="utf_star_rating_section"
                            data-rating="4.5"
                          >
                            <div className="utf_counter_star_rating">(4.5)</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in pulvinar neque. Nulla finibus
                            lobortis pulvinar. Donec a consectetur nulla.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="utf_listing_item-container list-layout">
                    {" "}
                    <a
                      href="listings_single_page_1.html"
                      className="utf_listing_item"
                    >
                      <div className="utf_listing_item-image">
                        <img src="images/utf_listing_item-06.jpg" alt="" />
                        <span className="like-icon" />
                        <span className="tag">
                          <i className="im im-icon-Hotel" /> Hotels
                        </span>
                        <div className="utf_listing_prige_block utf_half_list">
                          <span className="utf_meta_listing_price">
                            <i className="fa fa-tag" /> $25 - $45
                          </span>
                          <span className="utp_approve_item">
                            <i className="utf_approve_listing" />
                          </span>
                        </div>
                      </div>
                      <div className="utf_listing_item_content">
                        <div className="utf_listing_item-inner">
                          <h3>Fairmont Pacific Rim</h3>
                          <span>
                            <i className="sl sl-icon-location" /> The
                            Ritz-Carlton, Hong Kong
                          </span>
                          <span>
                            <i className="sl sl-icon-phone" /> (415) 796-3633
                          </span>
                          <div
                            className="utf_star_rating_section"
                            data-rating="4.5"
                          >
                            <div className="utf_counter_star_rating">(4.5)</div>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas in pulvinar neque. Nulla finibus
                            lobortis pulvinar. Donec a consectetur nulla.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
              <div className="row">
                <div className="col-md-12">
                  <div className="utf_pagination_container_part margin-top-20 margin-bottom-70">
                    <nav className="pagination">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="sl sl-icon-arrow-left" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="current-page">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="sl sl-icon-arrow-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4 col-md-4">
              <div className="sidebar">
                <div className="utf_box_widget margin-bottom-35">
                  <h3>
                    <i className="sl sl-icon-direction" /> Filters
                  </h3>
                  <div className="row with-forms">
                    <div className="col-md-12">
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                      />
                    </div>
                  </div>
                  <div className="row with-forms">
                    <div className="col-md-12">
                      <div className="input-with-icon location">
                        <input type="text" placeholder="Search Location..." />
                        <a href="#">
                          <i className="sl sl-icon-location" />
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="more-search-options-trigger margin-bottom-10"
                    data-open-title="More Filters Options"
                    data-close-title="More Filters Options"
                  />
                  <div className="more-search-options relative">
                    <div className="checkboxes one-in-row margin-bottom-15">
                      <input id="check-a" type="checkbox" name="check" />
                      <label htmlFor="check-a">Real Estate</label>
                      <input id="check-b" type="checkbox" name="check" />
                      <label htmlFor="check-b">Friendly Workspace</label>
                      <input id="check-c" type="checkbox" name="check" />
                      <label htmlFor="check-c">Instant Book</label>
                      <input id="check-d" type="checkbox" name="check" />
                      <label htmlFor="check-d">Wireless Internet</label>
                      <input id="check-e" type="checkbox" name="check" />
                      <label htmlFor="check-e">Free Parking</label>
                      <input id="check-f" type="checkbox" name="check" />
                      <label htmlFor="check-f">Elevator in Building</label>
                      <input id="check-g" type="checkbox" name="check" />
                      <label htmlFor="check-g">Restaurant</label>
                      <input id="check-h" type="checkbox" name="check" />
                      <label htmlFor="check-h">Dance Floor</label>
                    </div>
                  </div>
                  <button className="button fullwidth_block margin-top-5">
                    Update
                  </button>
                </div>
                <div className="utf_box_widget margin-top-35 margin-bottom-75">
                  <h3>
                    <i className="sl sl-icon-folder-alt" /> Categories
                  </h3>
                  <ul className="utf_listing_detail_sidebar">
                    <li>
                      <i className="fa fa-angle-double-right" />{" "}
                      <a href="#">Travel</a>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />{" "}
                      <a href="#">Nightlife</a>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />{" "}
                      <a href="#">Fitness</a>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />{" "}
                      <a href="#">Real Estate</a>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />{" "}
                      <a href="#">Restaurant</a>
                    </li>
                    <li>
                      <i className="fa fa-angle-double-right" />{" "}
                      <a href="#">Dance Floor</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
export default Restaurants;
