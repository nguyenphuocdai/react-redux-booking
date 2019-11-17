import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import Tags from "./Tags";
import agent from "../../agent";
import { connect } from "react-redux";
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from "../../constants/actionTypes";
import { Link } from "react-router-dom";

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () => dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? "feed" : "all";
    const articlesPromise = this.props.token
      ? agent.Articles.feed
      : agent.Articles.all;

    this.props.onLoad(
      tab,
      articlesPromise,
      Promise.all([agent.Tags.getAll(), articlesPromise()])
    );
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      // <div className="home-page">

      //   <Banner token={this.props.token} appName={this.props.appName} />

      //   <div className="container page">
      //     <div className="row">
      //       <MainView />

      //       <div className="col-md-3">
      //         <div className="sidebar">

      //           <p>Popular Tags</p>

      //           <Tags
      //             tags={this.props.tags}
      //             onClickTag={this.props.onClickTag} />

      //         </div>
      //       </div>
      //     </div>
      //   </div>

      // </div>
      <div>
        <div
          className="search_container_block home_main_search_part main_search_block"
          data-background-image="images/city_search_background.jpg"
        >
          <div className="main_inner_search_block">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2>Find &amp; Explore Nearby Attractions</h2>
                  <h4>
                    Find great places to stay, eat, shop, or visit the city
                  </h4>
                  <div className="main_input_search_part">
                    <div className="main_input_search_part_item">
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                      />
                    </div>
                    <div className="main_input_search_part_item location">
                      <input type="text" placeholder="Search Location..." />
                      <a href="javascript:void(0)">
                        <i className="sl sl-icon-location" />
                      </a>
                    </div>
                    <div className="main_input_search_part_item">
                      <select
                        data-placeholder="All Categories"
                        className="utf_chosen_select"
                      >
                        <option>Choose Category</option>
                        <option>Food &amp; Restaurants </option>
                        <option>Shop &amp; Education</option>
                        <option>Education</option>
                        <option>Business</option>
                        <option>Events</option>
                      </select>
                    </div>
                    <button className="button" onclick="window.location.">
                      Search
                    </button>
                  </div>
                  <div className="main_popular_categories">
                    <h3>Or Browse Popular Categories</h3>
                    <ul className="main_popular_categories_list">
                      <li>
                        {" "}
                        <a href="javascript:void(0)">
                          <div className="utf_box">
                            {" "}
                            <i
                              className="im im-icon-Chef-Hat"
                              aria-hidden="true"
                            />
                            <p>Restaurant</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="javascript:void(0)">
                          <div className="utf_box">
                            {" "}
                            <i
                              className="im im-icon-Dumbbell"
                              aria-hidden="true"
                            />
                            <p>Fitness</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="javascript:void(0)">
                          <div className="utf_box">
                            {" "}
                            <i
                              className="im im-icon-Electric-Guitar"
                              aria-hidden="true"
                            />
                            <p>Events</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="javascript:void(0)">
                          <div className="utf_box">
                            {" "}
                            <i
                              className="im im-icon-Hotel"
                              aria-hidden="true"
                            />
                            <p>Hotels</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="javascript:void(0)">
                          <div className="utf_box">
                            {" "}
                            <i
                              className="im im-icon-Home-2"
                              aria-hidden="true"
                            />
                            <p>Real Estate</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="javascript:void(0)">
                          <div className="utf_box">
                            {" "}
                            <i
                              className="im im-icon-Business-Man"
                              aria-hidden="true"
                            />
                            <p>Business</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline_part centered margin-top-75">
                {" "}
                Most Popular Categories
                <span>Browse the most desirable categories</span>
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="container_categories_box margin-top-5 margin-bottom-30">
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Hotel" />
                  <h4>Hotels</h4>
                  <span>22</span>
                </a>
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Hamburger" />
                  <h4>Eat &amp; Drink</h4>
                  <span>15</span>
                </a>
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Shop-2" />
                  <h4>Shops</h4>
                  <span>05</span>
                </a>
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Cocktail" />
                  <h4>Nightlife</h4>
                  <span>12</span>
                </a>
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Electric-Guitar" />
                  <h4>Events</h4>
                  <span>08</span>
                </a>
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Dumbbell" />
                  <h4>Fitness</h4>
                  <span>18</span>
                </a>
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Home-2" />
                  <h4>Real Estate</h4>
                  <span>14</span>
                </a>
                <Link
                  to="/restaurant" replace 
                  className="nav-link utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Chef-Hat" />
                  <h4>Restaurant</h4>
                  <span>22</span>
                </Link>

                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Couple-Sign" />
                  <h4>Dance Floor</h4>
                  <span>20</span>
                </a>
                <a
                  href="listings_list_with_sidebar.html"
                  className="utf_category_small_box_part"
                >
                  {" "}
                  <i className="im im-icon-Old-Cassette" />
                  <h4>Cinema</h4>
                  <span>07</span>
                </a>
              </div>
              {/* <div className="col-md-12 centered_content"> <a href="javascript:void(0)" className="button border margin-top-20">View More</a> </div> */}
            </div>
          </div>
        </div>
        <section
          className="fullwidth_block margin-top-65 padding-top-75 padding-bottom-70"
          data-background-color="#f9f9f9"
        >
          <div className="container">
            <div className="row slick_carousel_slider">
              <div className="col-md-12">
                <h3 className="headline_part centered margin-bottom-45">
                  {" "}
                  Most Visited Places{" "}
                  <span>Explore the greates places in the city</span>{" "}
                </h3>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="simple_slick_carousel_block utf_dots_nav">
                    <div className="utf_carousel_item">
                      {" "}
                      <a
                        href="listings_single_page_1.html"
                        className="utf_listing_item-container compact"
                      >
                        <div className="utf_listing_item">
                          {" "}
                          <img
                            src="images/utf_listing_item-01.jpg"
                            alt=""
                          />{" "}
                          <span className="tag">
                            <i className="im im-icon-Chef-Hat" /> Restaurant
                          </span>{" "}
                          <span className="featured_tag">Featured</span>
                          <span className="utf_open_now">Open Now</span>
                          <div className="utf_listing_item_content">
                            <div className="utf_listing_prige_block">
                              <span className="utf_meta_listing_price">
                                <i className="fa fa-tag" /> $25 - $55
                              </span>
                              <span className="utp_approve_item">
                                <i className="utf_approve_listing" />
                              </span>
                            </div>
                            <h3>Chontaduro Barcelona</h3>
                            <span>
                              <i className="sl sl-icon-location" /> The
                              Ritz-Carlton, Hong Kong
                            </span>
                            <span>
                              <i className="sl sl-icon-phone" /> (415) 796-3633
                            </span>
                          </div>
                        </div>
                        <div
                          className="utf_star_rating_section"
                          data-rating="4.5"
                        >
                          <div className="utf_counter_star_rating">(4.5)</div>
                          <span className="utf_view_count">
                            <i className="fa fa-eye" /> 822+
                          </span>
                          <span className="like-icon" />
                        </div>
                      </a>
                    </div>
                    <div className="utf_carousel_item">
                      {" "}
                      <a
                        href="listings_single_page_1.html"
                        className="utf_listing_item-container compact"
                      >
                        <div className="utf_listing_item">
                          {" "}
                          <img
                            src="images/utf_listing_item-02.jpg"
                            alt=""
                          />{" "}
                          <span className="tag">
                            <i className="im im-icon-Electric-Guitar" /> Events
                          </span>
                          <div className="utf_listing_item_content">
                            <div className="utf_listing_prige_block">
                              <span className="utf_meta_listing_price">
                                <i className="fa fa-tag" /> $45 - $70
                              </span>
                            </div>
                            <h3>The Lounge &amp; Bar</h3>
                            <span>
                              <i className="sl sl-icon-location" /> The
                              Ritz-Carlton, Hong Kong
                            </span>
                            <span>
                              <i className="sl sl-icon-phone" /> (415) 796-3633
                            </span>
                          </div>
                        </div>
                        <div
                          className="utf_star_rating_section"
                          data-rating="4.5"
                        >
                          <div className="utf_counter_star_rating">(4.5)</div>
                          <span className="utf_view_count">
                            <i className="fa fa-eye" /> 822+
                          </span>
                          <span className="like-icon" />
                        </div>
                      </a>
                    </div>
                    <div className="utf_carousel_item">
                      {" "}
                      <a
                        href="listings_single_page_1.html"
                        className="utf_listing_item-container compact"
                      >
                        <div className="utf_listing_item">
                          {" "}
                          <img
                            src="images/utf_listing_item-03.jpg"
                            alt=""
                          />{" "}
                          <span className="tag">
                            <i className="im im-icon-Hotel" /> Hotels
                          </span>
                          <span className="utf_closed">Closed</span>
                          <div className="utf_listing_item_content">
                            <div className="utf_listing_prige_block">
                              <span className="utf_meta_listing_price">
                                <i className="fa fa-tag" /> $25 - $55
                              </span>
                            </div>
                            <h3>Westfield Sydney</h3>
                            <span>
                              <i className="sl sl-icon-location" /> The
                              Ritz-Carlton, Hong Kong
                            </span>
                            <span>
                              <i className="sl sl-icon-phone" /> (415) 796-3633
                            </span>
                          </div>
                        </div>
                        <div
                          className="utf_star_rating_section"
                          data-rating="4.5"
                        >
                          <div className="utf_counter_star_rating">(4.5)</div>
                          <span className="utf_view_count">
                            <i className="fa fa-eye" /> 822+
                          </span>
                          <span className="like-icon" />
                        </div>
                      </a>
                    </div>
                    <div className="utf_carousel_item">
                      {" "}
                      <a
                        href="listings_single_page_1.html"
                        className="utf_listing_item-container compact"
                      >
                        <div className="utf_listing_item">
                          {" "}
                          <img
                            src="images/utf_listing_item-04.jpg"
                            alt=""
                          />{" "}
                          <span className="tag">
                            <i className="im im-icon-Dumbbell" /> Fitness
                          </span>
                          <div className="utf_listing_item_content">
                            <div className="utf_listing_prige_block">
                              <span className="utf_meta_listing_price">
                                <i className="fa fa-tag" /> $45 - $70
                              </span>
                              <span className="utp_approve_item">
                                <i className="utf_approve_listing" />
                              </span>
                            </div>
                            <h3>Ruby Beauty Center</h3>
                            <span>
                              <i className="sl sl-icon-location" /> The
                              Ritz-Carlton, Hong Kong
                            </span>
                            <span>
                              <i className="sl sl-icon-phone" /> (415) 796-3633
                            </span>
                          </div>
                        </div>
                        <div
                          className="utf_star_rating_section"
                          data-rating="4.5"
                        >
                          <div className="utf_counter_star_rating">(4.5)</div>
                          <span className="utf_view_count">
                            <i className="fa fa-eye" /> 822+
                          </span>
                          <span className="like-icon" />
                        </div>
                      </a>
                    </div>
                    <div className="utf_carousel_item">
                      {" "}
                      <a
                        href="listings_single_page_1.html"
                        className="utf_listing_item-container compact"
                      >
                        <div className="utf_listing_item">
                          {" "}
                          <img
                            src="images/utf_listing_item-05.jpg"
                            alt=""
                          />{" "}
                          <span className="tag">
                            <i className="im im-icon-Hotel" /> Hotels
                          </span>{" "}
                          <span className="featured_tag">Featured</span>
                          <span className="utf_closed">Closed</span>
                          <div className="utf_listing_item_content">
                            <div className="utf_listing_prige_block">
                              <span className="utf_meta_listing_price">
                                <i className="fa fa-tag" /> $45 - $70
                              </span>
                            </div>
                            <h3>UK Fitness Club</h3>
                            <span>
                              <i className="sl sl-icon-location" /> The
                              Ritz-Carlton, Hong Kong
                            </span>
                            <span>
                              <i className="sl sl-icon-phone" /> (415) 796-3633
                            </span>
                          </div>
                        </div>
                        <div
                          className="utf_star_rating_section"
                          data-rating="4.5"
                        >
                          <div className="utf_counter_star_rating">(4.5)</div>
                          <span className="utf_view_count">
                            <i className="fa fa-eye" /> 822+
                          </span>
                          <span className="like-icon" />
                        </div>
                      </a>
                    </div>
                    <div className="utf_carousel_item">
                      {" "}
                      <a
                        href="listings_single_page_1.html"
                        className="utf_listing_item-container compact"
                      >
                        <div className="utf_listing_item">
                          {" "}
                          <img
                            src="images/utf_listing_item-06.jpg"
                            alt=""
                          />{" "}
                          <span className="tag">
                            <i className="im im-icon-Chef-Hat" /> Restaurant
                          </span>
                          <span className="utf_open_now">Open Now</span>
                          <div className="utf_listing_item_content">
                            <div className="utf_listing_prige_block">
                              <span className="utf_meta_listing_price">
                                <i className="fa fa-tag" /> $25 - $45
                              </span>
                              <span className="utp_approve_item">
                                <i className="utf_approve_listing" />
                              </span>
                            </div>
                            <h3>Fairmont Pacific Rim</h3>
                            <span>
                              <i className="sl sl-icon-location" /> The
                              Ritz-Carlton, Hong Kong
                            </span>
                            <span>
                              <i className="sl sl-icon-phone" /> (415) 796-3633
                            </span>
                          </div>
                        </div>
                        <div
                          className="utf_star_rating_section"
                          data-rating="4.5"
                        >
                          <div className="utf_counter_star_rating">(4.5)</div>
                          <span className="utf_view_count">
                            <i className="fa fa-eye" /> 822+
                          </span>
                          <span className="like-icon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a
          href="listings_grid_full_width.html"
          className="flip-banner parallax"
          data-background="images/slider-bg-02.jpg"
          data-color="#000"
          data-color-opacity="0.85"
          data-img-width={2500}
          data-img-height={1666}
        >
          <div className="flip-banner-content">
            <h2 className="flip-visible">Browse Listings Attractions List</h2>
          </div>
        </a>
        <section className="utf_testimonial_part fullwidth_block padding-top-75 padding-bottom-75">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h3 className="headline_part centered">
                  What Say Our Customers{" "}
                  <span className="margin-top-15">
                    Lorem Ipsum is simply dummy text of the printing and type
                    setting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since...
                  </span>{" "}
                </h3>
              </div>
            </div>
          </div>
          <div className="fullwidth_carousel_container_block margin-top-20">
            <div className="utf_testimonial_carousel testimonials">
              <div className="utf_carousel_review_part">
                <div className="utf_testimonial_box">
                  <div className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                    suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa, a consequat purus viverra.
                  </div>
                </div>
                <div className="utf_testimonial_author">
                  {" "}
                  <img src="images/happy-client-01.jpg" alt="" />
                  <h4>
                    Denwen Evil <span>Web Developer</span>
                  </h4>
                </div>
              </div>
              <div className="utf_carousel_review_part">
                <div className="utf_testimonial_box">
                  <div className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                    suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa, a consequat purus viverra.
                  </div>
                </div>
                <div className="utf_testimonial_author">
                  {" "}
                  <img src="images/happy-client-02.jpg" alt="" />
                  <h4>
                    Adam Alloriam <span>Web Developer</span>
                  </h4>
                </div>
              </div>
              <div className="utf_carousel_review_part">
                <div className="utf_testimonial_box">
                  <div className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                    suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa, a consequat purus viverra.
                  </div>
                </div>
                <div className="utf_testimonial_author">
                  {" "}
                  <img src="images/happy-client-03.jpg" alt="" />
                  <h4>
                    Illa Millia <span>Project Manager</span>
                  </h4>
                </div>
              </div>
              <div className="utf_carousel_review_part">
                <div className="utf_testimonial_box">
                  <div className="testimonial">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                    Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                    suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                    Curabitur convallis fringilla diam sed aliquam. Sed tempor
                    iaculis massa faucibus feugiat. In fermentum facilisis
                    massa, a consequat purus viverra.
                  </div>
                </div>
                <div className="utf_testimonial_author">
                  {" "}
                  <img src="images/happy-client-01.jpg" alt="" />
                  <h4>
                    Denwen Evil <span>Web Developer</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container padding-bottom-70">
          <div className="row">
            <div className="col-md-12">
              <h3 className="headline_part centered margin-bottom-35 margin-top-70">
                Most Popular Cities/Towns{" "}
                <span>
                  Discover best things to do restaurants, shopping, hotels,
                  cafes and places
                  <br />
                  around the world by categories.
                </span>
              </h3>
            </div>
            <div className="col-md-3">
              <a
                href="listings_list_with_sidebar.html"
                className="img-box"
                data-background-image="images/popular-location-01.jpg"
              >
                <div className="utf_img_content_box visible">
                  <h4>Nightlife </h4>
                  <span>18 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                href="listings_list_with_sidebar.html"
                className="img-box"
                data-background-image="images/popular-location-02.jpg"
              >
                <div className="utf_img_content_box visible">
                  <h4>Shops</h4>
                  <span>24 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="listings_list_with_sidebar.html"
                className="img-box"
                data-background-image="images/popular-location-03.jpg"
              >
                <div className="utf_img_content_box visible">
                  <h4>Restaurant</h4>
                  <span>17 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a
                href="listings_list_with_sidebar.html"
                className="img-box"
                data-background-image="images/popular-location-04.jpg"
              >
                <div className="utf_img_content_box visible">
                  <h4>Outdoor Activities</h4>
                  <span>12 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                href="listings_list_with_sidebar.html"
                className="img-box"
                data-background-image="images/popular-location-05.jpg"
              >
                <div className="utf_img_content_box visible">
                  <h4>Hotels</h4>
                  <span>14 Listings</span>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                href="listings_list_with_sidebar.html"
                className="img-box"
                data-background-image="images/popular-location-06.jpg"
              >
                <div className="utf_img_content_box visible">
                  <h4>New York</h4>
                  <span>9 Listings</span>
                </div>
              </a>
            </div>
            {/* <div className="col-md-12 centered_content"> <a href="javascript:void(0)" className="button border margin-top-20">View More Categories</a> </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
