import React, { Component } from "react";
import $ from "jquery";
import 'slick-carousel';
export default class RestaurantDetail extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $(".utf_listing_slider").slick({
        centerMode: true,
        centerPadding: "20%",
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 1367,
            settings: {
              centerPadding: "15%"
            }
          },
          {
            breakpoint: 1025,
            settings: {
              centerPadding: "0"
            }
          },
          {
            breakpoint: 767,
            settings: {
              centerPadding: "0",
              slidesToShow: 1
            }
          }
        ]
      });
      function inlineCSS() {
        $(
          ".search_container_block, section.fullwidth_block, .utf_listing_slider .item, .address-container, .img-box-background, .image-edge, .edge-bg"
        ).each(function() {
          var attrImageBG = $(this).attr("data-background-image");
          var attrColorBG = $(this).attr("data-background-color");
          if (attrImageBG !== undefined) {
            $(this).css("background-image", "url(" + attrImageBG + ")");
          }
          if (attrColorBG !== undefined) {
            $(this).css("background", "" + attrColorBG + "");
          }
        });
      }
      inlineCSS();
    });
  }

  render() {
    return (
      <div>
        <div id="utf_listing_gallery_part" className="utf_listing_section">
          <div className="utf_listing_slider utf_gallery_container margin-bottom-0">
            <a
              href="/images/single-listing-01.jpg"
              data-background-image="/images/single-listing-01.jpg"
              className="item utf_gallery"
              target="_blank"
            />
            <a
              href="/images/single-listing-02.jpg"
              data-background-image="/images/single-listing-02.jpg"
              className="item utf_gallery"
              target="_blank"
            />
            <a
              href="/images/single-listing-03.jpg"
              data-background-image="/images/single-listing-03.jpg"
              className="item utf_gallery"
              target="_blank"
            />
            <a
              href="/images/single-listing-04.jpg"
              data-background-image="/images/single-listing-04.jpg"
              className="item utf_gallery"
              target="_blank"
            />
          </div>
        </div>
        <div className="container">
          <div className="row utf_sticky_main_wrapper">
            <div className="col-lg-8 col-md-8">
              <div id="titlebar" className="utf_listing_titlebar">
                <div className="utf_listing_titlebar_title">
                  <h2>
                    The Hot and More Restaurant{" "}
                    <span className="listing-tag">Restaurant</span>
                  </h2>
                  <span>
                    {" "}
                    <a href="#utf_listing_location" className="listing-address">
                      {" "}
                      <i className="sl sl-icon-location" /> The Ritz-Carlton,
                      Hong Kong{" "}
                    </a>{" "}
                  </span>
                  <span className="call_now">
                    <i className="sl sl-icon-phone" /> (415) 796-3633
                  </span>
                  <div className="utf_star_rating_section" data-rating="4.5">
                    <div className="utf_counter_star_rating">
                      (4.5) / (14 Reviews)
                    </div>
                  </div>
                  <ul className="listing_item_social">
                    <li>
                      <a href="#">
                        <i className="fa fa-bookmark" /> Bookmark
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-star" /> Add Review
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-flag" /> Featured
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-share" /> Share
                      </a>
                    </li>
                    <li>
                      <a href="#" className="now_open">
                        Open Now
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="utf_listing_overview" className="utf_listing_section">
                <h3 className="utf_listing_headline_part margin-top-30 margin-bottom-30">
                  Listing Description
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                  suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                  Curabitur convallis fringilla diam sed aliquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                  suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                  Curabitur convallis fringilla diam sed aliquam. Sed tempor
                  iaculis massa faucibus feugiat. In fermentum facilisis massa,
                  a consequat purus viverra.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                  suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                  Curabitur convallis fringilla diam sed aliquam.
                </p>
                <div
                  id="utf_listing_tags"
                  className="utf_listing_section listing_tags_section margin-bottom-10 margin-top-0"
                >
                  <a href="#">
                    <i className="sl sl-icon-phone" aria-hidden="true" /> +(01)
                    1123-254-456
                  </a>
                  <a href="#">
                    <i className="fa fa-envelope-o" aria-hidden="true" />{" "}
                    info@example.com
                  </a>
                  <a href="#">
                    <i className="sl sl-icon-globe" aria-hidden="true" />{" "}
                    www.example.com
                  </a>
                </div>
                <div className="social-contact">
                  <a href="#" className="facebook-link">
                    <i className="fa fa-facebook" /> Facebook
                  </a>
                  <a href="#" className="twitter-link">
                    <i className="fa fa-twitter" /> Twitter
                  </a>
                  <a href="#" className="instagram-link">
                    <i className="fa fa-instagram" /> Instagram
                  </a>
                  <a href="#" className="linkedin-link">
                    <i className="fa fa-linkedin" /> Linkedin
                  </a>
                  <a href="#" className="youtube-link">
                    <i className="fa fa-youtube-play" /> Youtube
                  </a>
                </div>
              </div>
              <div
                id="utf_listing_tags"
                className="utf_listing_section listing_tags_section"
              >
                <h3 className="utf_listing_headline_part margin-top-30 margin-bottom-40">
                  Listings Tags
                </h3>
                <a href="#">
                  <i className="fa fa-tag" aria-hidden="true" /> Food
                </a>
                <a href="#">
                  <i className="fa fa-tag" aria-hidden="true" /> Fruits
                </a>
                <a href="#">
                  <i className="fa fa-tag" aria-hidden="true" /> Lunch
                </a>
                <a href="#">
                  <i className="fa fa-tag" aria-hidden="true" /> Menu
                </a>
                <a href="#">
                  <i className="fa fa-tag" aria-hidden="true" /> Parking
                </a>
                <a href="#">
                  <i className="fa fa-tag" aria-hidden="true" /> Restaurant
                </a>
              </div>
              <div className="utf_listing_section">
                <h3 className="utf_listing_headline_part margin-top-50 margin-bottom-40">
                  Pricing
                </h3>
                <div className="show-more">
                  <div className="utf_pricing_list_section">
                    <h4>Menu Listing</h4>
                    <ul>
                      <li>
                        <h5>
                          Burger{" "}
                          <sub className="ppl-offer label-light-success">
                            20% Off
                          </sub>
                        </h5>
                        <p>Beef, Salad, Mayonnaise, Spicey Relish, Cheese</p>
                        <span>$120</span>
                      </li>
                      <li>
                        <h5>Goat Cheese Mousse</h5>
                        <p>Caramelized Fig, Plums, Macadamia Nuts and Sorrel</p>
                        <span>$150</span>
                      </li>
                      <li>
                        <h5>
                          Pizza{" "}
                          <sub className="ppl-offer label-light-success">
                            10% Off
                          </sub>
                        </h5>
                        <p>
                          Cheddar Cheese, Lettuce, Tomato, Onion, Dill Pickles
                        </p>
                        <span>$130</span>
                      </li>
                      <li>
                        <h5>
                          French Crostini{" "}
                          <sub className="ppl-offer label-light-success">
                            10% Off
                          </sub>
                        </h5>
                        <p>Breakfast Sandwich on a Roll with 2 Eggs</p>
                        <span>$130</span>
                      </li>
                      <li>
                        <h5>
                          Caramelised Rum Punch{" "}
                          <sub className="ppl-offer label-light-success">
                            15% Off
                          </sub>
                        </h5>
                        <p>
                          Caramelised Mount Gay Eclipse with a Picked Watermelon
                        </p>
                        <span>$120</span>
                      </li>
                      <li>
                        <h5>
                          <strong>Tatel Price</strong>
                        </h5>
                        <span>
                          <strong>$650</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="#"
                  className="show-more-button"
                  data-more-title="Show More"
                  data-less-title="Show Less"
                >
                  <i className="fa fa-angle-double-down" />
                </a>
              </div>
              <div id="utf_listing_amenities" className="utf_listing_section">
                <h3 className="utf_listing_headline_part margin-top-50 margin-bottom-40">
                  Features
                </h3>
                <ul className="utf_listing_features checkboxes margin-top-0">
                  <li>Air Conditioned</li>
                  <li>Swimming Pool</li>
                  <li>Room Service</li>
                  <li>Luxury Bedding</li>
                  <li>Free Wifi</li>
                  <li>Bath Towel</li>
                  <li>Wireless Internet</li>
                  <li>Free Parking on premises</li>
                  <li>Free Parking on Street</li>
                  <li>Live Music</li>
                  <li>Indoor Pool</li>
                </ul>
              </div>
              <div id="utf_listing_faq" className="utf_listing_section">
                <h3 className="utf_listing_headline_part margin-top-50 margin-bottom-40">
                  Listing FAQ's
                </h3>
                <div className="style-2">
                  <div className="accordion">
                    <h3>
                      <span className="ui-accordion-header-icon ui-icon ui-accordion-icon" />
                      <i className="sl sl-icon-plus" /> (1) How to Open an
                      Account?
                    </h3>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum is simply dummy text
                        of the printing and type setting industry.
                      </p>
                    </div>
                    <h3>
                      <span className="ui-accordion-header-icon ui-icon ui-accordion-icon" />
                      <i className="sl sl-icon-plus" /> (2) How to Add Listing?
                    </h3>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum is simply dummy text
                        of the printing and type setting industry.
                      </p>
                    </div>
                    <h3>
                      <span className="ui-accordion-header-icon ui-icon ui-accordion-icon" />
                      <i className="sl sl-icon-plus" /> (3) What is Featured
                      Listing?
                    </h3>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        type setting industry. Lorem Ipsum is simply dummy text
                        of the printing and type setting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="utf_listing_location" className="utf_listing_section">
                <h3 className="utf_listing_headline_part margin-top-60 margin-bottom-40">
                  Location
                </h3>
                <div id="utf_single_listing_map_block">
                  <div
                    id="utf_single_listingmap"
                    data-latitude="36.778259"
                    data-longitude="-119.417931"
                    data-map-icon="im im-icon-Hamburger"
                  />
                  <a href="#" id="utf_street_view_btn">
                    Street View
                  </a>
                </div>
              </div>
              <div id="utf_listing_reviews" className="utf_listing_section">
                <h3 className="utf_listing_headline_part margin-top-75 margin-bottom-20">
                  Reviews <span>(08)</span>
                </h3>
                <div className="clearfix" />
                <div className="reviews-container">
                  <div className="row">
                    <div className="col-lg-3">
                      <div id="review_summary">
                        <strong>4.5</strong>
                        <em>Superb Reviews</em>
                        <small>Out of 15 Reviews</small>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-2 review_progres_title">
                          <small>
                            <strong>Quality</strong>
                          </small>
                        </div>
                        <div className="col-lg-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "95%" }}
                              aria-valuenow={95}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 review_progres_title">
                          <small>
                            <strong>77</strong>
                          </small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 review_progres_title">
                          <small>
                            <strong>Space</strong>
                          </small>
                        </div>
                        <div className="col-lg-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 review_progres_title">
                          <small>
                            <strong>15</strong>
                          </small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 review_progres_title">
                          <small>
                            <strong>Price</strong>
                          </small>
                        </div>
                        <div className="col-lg-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 review_progres_title">
                          <small>
                            <strong>18</strong>
                          </small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 review_progres_title">
                          <small>
                            <strong>Service</strong>
                          </small>
                        </div>
                        <div className="col-lg-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "40%" }}
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 review_progres_title">
                          <small>
                            <strong>10</strong>
                          </small>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 review_progres_title">
                          <small>
                            <strong>Location</strong>
                          </small>
                        </div>
                        <div className="col-lg-9">
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 review_progres_title">
                          <small>
                            <strong>05</strong>
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments utf_listing_reviews">
                  <ul>
                    <li>
                      <div className="avatar">
                        <img src="../images/client-avatar1.jpg" alt="" />
                      </div>
                      <div className="utf_comment_content">
                        <div className="utf_arrow_comment" />
                        <div
                          className="utf_star_rating_section"
                          data-rating={5}
                        />
                        <a href="#" className="rate-review">
                          Helpful Review <i className="fa fa-thumbs-up" />
                        </a>
                        <div className="utf_by_comment">
                          Francis Burton
                          <span className="date">
                            <i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52
                            am
                          </span>{" "}
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt. Aliquam erat volutpat.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="../images/client-avatar2.jpg" alt="" />{" "}
                      </div>
                      <div className="utf_comment_content">
                        <div className="utf_arrow_comment" />
                        <div
                          className="utf_star_rating_section"
                          data-rating={4}
                        />
                        <a href="#" className="rate-review">
                          Helpful Review <i className="fa fa-thumbs-up" />
                        </a>
                        <div className="utf_by_comment">
                          Francis Burton
                          <span className="date">
                            <i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52
                            am
                          </span>{" "}
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt. Aliquam erat volutpat.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="../images/client-avatar3.jpg" alt="" />{" "}
                      </div>
                      <div className="utf_comment_content">
                        <div className="utf_arrow_comment" />
                        <div
                          className="utf_star_rating_section"
                          data-rating={4}
                        />
                        <div className="utf_by_comment">
                          Francis Burton
                          <span className="date">
                            <i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52
                            am
                          </span>{" "}
                        </div>
                        <a href="#" className="rate-review">
                          Helpful Review <i className="fa fa-thumbs-up" />
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt. Aliquam erat volutpat.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="../images/client-avatar1.jpg" alt="" />
                      </div>
                      <div className="utf_comment_content">
                        <div className="utf_arrow_comment" />
                        <div
                          className="utf_star_rating_section"
                          data-rating="4.5"
                        />
                        <div className="utf_by_comment">
                          Francis Burton
                          <span className="date">
                            <i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52
                            am
                          </span>{" "}
                        </div>
                        <a href="#" className="rate-review">
                          Helpful Review <i className="fa fa-thumbs-up" />
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt. Aliquam erat volutpat.
                        </p>
                        <div className="review-images utf_gallery_container">
                          <a
                            href="../images/review-image-01.jpg"
                            className="utf_gallery"
                          >
                            <img src="../images/review-image-01.jpg" alt="" />
                          </a>
                          <a
                            href="../images/review-image-02.jpg"
                            className="utf_gallery"
                          >
                            <img src="../images/review-image-02.jpg" alt="" />
                          </a>
                          <a
                            href="../images/review-image-03.jpg"
                            className="utf_gallery"
                          >
                            <img src="../images/review-image-03.jpg" alt="" />
                          </a>
                          <a
                            href="../images/review-image-01.jpg"
                            className="utf_gallery"
                          >
                            <img src="../images/review-image-01.jpg" alt="" />
                          </a>
                          <a
                            href="../images/review-image-02.jpg"
                            className="utf_gallery"
                          >
                            <img src="../images/review-image-02.jpg" alt="" />
                          </a>
                          <a
                            href="../images/review-image-03.jpg"
                            className="utf_gallery"
                          >
                            <img src="../images/review-image-03.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="avatar">
                        <img src="../images/client-avatar3.jpg" alt="" />{" "}
                      </div>
                      <div className="utf_comment_content">
                        <div className="utf_arrow_comment" />
                        <div
                          className="utf_star_rating_section"
                          data-rating={4}
                        />
                        <div className="utf_by_comment">
                          Francis Burton
                          <span className="date">
                            <i className="fa fa-clock-o" /> Jan 05, 2019 - 8:52
                            am
                          </span>{" "}
                        </div>
                        <a href="#" className="rate-review">
                          Helpful Review <i className="fa fa-thumbs-up" />
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Maecenas in pulvinar neque. Nulla finibus
                          lobortis pulvinar. Donec a consectetur nulla. Nulla
                          posuere sapien vitae lectus suscipit, et pulvinar nisi
                          tincidunt. Aliquam erat volutpat.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-md-12">
                    <div className="utf_pagination_container_part margin-top-30">
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
                            <a href="#">
                              <i className="sl sl-icon-arrow-right" />
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
              <div id="utf_add_review" className="utf_add_review-box">
                <h3 className="utf_listing_headline_part margin-bottom-20">
                  Add Your Review
                </h3>
                <span className="utf_leave_rating_title">
                  Your email address will not be published.
                </span>
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="clearfix" />
                    <div className="utf_leave_rating margin-bottom-30">
                      <input
                        type="radio"
                        name="rating"
                        id="rating-1"
                        defaultValue={1}
                      />
                      <label htmlFor="rating-1" className="fa fa-star" />
                      <input
                        type="radio"
                        name="rating"
                        id="rating-2"
                        defaultValue={2}
                      />
                      <label htmlFor="rating-2" className="fa fa-star" />
                      <input
                        type="radio"
                        name="rating"
                        id="rating-3"
                        defaultValue={3}
                      />
                      <label htmlFor="rating-3" className="fa fa-star" />
                      <input
                        type="radio"
                        name="rating"
                        id="rating-4"
                        defaultValue={4}
                      />
                      <label htmlFor="rating-4" className="fa fa-star" />
                      <input
                        type="radio"
                        name="rating"
                        id="rating-5"
                        defaultValue={5}
                      />
                      <label htmlFor="rating-5" className="fa fa-star" />
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="add-review-photos margin-bottom-30">
                      <div className="photoUpload">
                        {" "}
                        <span>
                          Upload Photo{" "}
                          <i className="sl sl-icon-arrow-up-circle" />
                        </span>
                        <input type="file" className="upload" />
                      </div>
                    </div>
                  </div>
                </div>
                <form id="utf_add_comment" className="utf_add_comment">
                  <fieldset>
                    <div className="row">
                      <div className="col-md-4">
                        <label>Name:</label>
                        <input type="text" placeholder="Name" defaultValue />
                      </div>
                      <div className="col-md-4">
                        <label>Email:</label>
                        <input type="text" placeholder="Email" defaultValue />
                      </div>
                      <div className="col-md-4">
                        <label>Subject:</label>
                        <input type="text" placeholder="Subject" defaultValue />
                      </div>
                    </div>
                    <div>
                      <label>Review:</label>
                      <textarea
                        cols={40}
                        placeholder="Your Message..."
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </fieldset>
                  <button className="button">Submit Review</button>
                  <div className="clearfix" />
                </form>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4 col-md-4 margin-top-75 sidebar-search">
              <div
                className="verified-badge with-tip margin-bottom-30"
                data-tip-content="Listing has been verified and belongs business owner or manager."
              >
                {" "}
                <i className="sl sl-icon-check" /> Now Available
              </div>
              <div className="utf_box_widget booking_widget_box">
                <h3>
                  <i className="fa fa-calendar" /> Booking
                  <div className="price">
                    <span>
                      185$<small>person</small>
                    </span>
                  </div>
                </h3>
                <div className="row with-forms margin-top-0">
                  <div className="col-lg-12 col-md-12 select_date_box">
                    <input
                      type="text"
                      id="date-picker"
                      placeholder="Select Date"
                      readOnly="readonly"
                    />
                    <i className="fa fa-calendar" />
                  </div>
                  <div className="col-lg-12">
                    <div className="panel-dropdown time-slots-dropdown">
                      <a href="#">Choose Time Slot...</a>
                      <div className="panel-dropdown-content padding-reset">
                        <div className="panel-dropdown-scrollable">
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-1"
                            />
                            <label htmlFor="time-slot-1">
                              <strong>
                                <span>1</span> : 8:00 AM - 8:30 AM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-2"
                            />
                            <label htmlFor="time-slot-2">
                              <strong>
                                <span>2</span> : 8:30 AM - 9:00 AM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-3"
                            />
                            <label htmlFor="time-slot-3">
                              <strong>
                                <span>3</span> : 9:00 AM - 9:30 AM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-4"
                            />
                            <label htmlFor="time-slot-4">
                              <strong>
                                <span>4</span> : 9:30 AM - 10:00 AM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-5"
                            />
                            <label htmlFor="time-slot-5">
                              <strong>
                                <span>5</span> : 10:00 AM - 10:30 AM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-6"
                            />
                            <label htmlFor="time-slot-6">
                              <strong>
                                <span>6</span> : 13:00 PM - 13:30 PM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-7"
                            />
                            <label htmlFor="time-slot-7">
                              <strong>
                                <span>7</span> : 13:30 PM - 14:00 PM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-8"
                            />
                            <label htmlFor="time-slot-8">
                              <strong>
                                <span>8</span> : 14:00 PM - 14:30 PM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-9"
                            />
                            <label htmlFor="time-slot-9">
                              <strong>
                                <span>9</span> : 15:00 PM - 15:30 PM
                              </strong>
                            </label>
                          </div>
                          <div className="time-slot">
                            <input
                              type="radio"
                              name="time-slot"
                              id="time-slot-10"
                            />
                            <label htmlFor="time-slot-10">
                              <strong>
                                <span>10</span> : 16:00 PM - 16:30 PM
                              </strong>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="panel-dropdown">
                      <a href="#">
                        Guests{" "}
                        <span className="qtyTotal" name="qtyTotal">
                          1
                        </span>
                      </a>
                      <div className="panel-dropdown-content">
                        <div className="qtyButtons">
                          <div className="qtyTitle">Adults</div>
                          <input type="text" name="qtyInput" defaultValue={1} />
                        </div>
                        <div className="qtyButtons">
                          <div className="qtyTitle">Childrens</div>
                          <input type="text" name="qtyInput" defaultValue={1} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="with-forms margin-top-0">
                    <div className="col-lg-12 col-md-12">
                      <select className="utf_chosen_select_single">
                        <option label="Select Time">Select Time</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                      </select>
                    </div>
                  </div>
                </div>
                <a
                  href="listing_booking.html"
                  className="utf_progress_button button fullwidth_block margin-top-5"
                >
                  Request Booking
                </a>
                <button className="like-button add_to_wishlist">
                  <span className="like-icon" /> Add to Wishlist
                </button>
                <div className="clearfix" />
              </div>
              <div className="utf_box_widget margin-top-35">
                <h3>
                  <i className="sl sl-icon-phone" /> Contact Info
                </h3>
                <div className="utf_hosted_by_user_title">
                  {" "}
                  <a href="#" className="utf_hosted_by_avatar_listing">
                    <img src="../images/dashboard-avatar.jpg" alt="" />
                  </a>
                  <h4>
                    <a href="#">Kathy Brown</a>
                    <span>Posted 3 Days Ago</span>
                    <span>
                      <i className="sl sl-icon-location" /> Lonsdale St,
                      Melbourne
                    </span>
                  </h4>
                </div>
                <ul className="utf_social_icon rounded margin-top-10">
                  <li>
                    <a className="facebook" href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="gplus" href="#">
                      <i className="icon-gplus" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="icon-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <i className="icon-instagram" />
                    </a>
                  </li>
                </ul>
                <ul className="utf_listing_detail_sidebar">
                  <li>
                    <i className="sl sl-icon-map" /> 12345 Little Lonsdale St,
                    Melbourne
                  </li>
                  <li>
                    <i className="sl sl-icon-phone" /> +(012) 1123-254-456
                  </li>
                  <li>
                    <i className="sl sl-icon-globe" />{" "}
                    <a href="#">www.example.com</a>
                  </li>
                  <li>
                    <i className="fa fa-envelope-o" />{" "}
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="utf_box_widget margin-top-35">
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
              <div className="utf_box_widget opening-hours margin-top-35">
                <h3>
                  <i className="sl sl-icon-clock" /> Business Hours
                </h3>
                <ul>
                  <li>
                    Monday <span>09:00 AM - 09:00 PM</span>
                  </li>
                  <li>
                    Tuesday <span>09:00 AM - 09:00 PM</span>
                  </li>
                  <li>
                    Wednesday <span>09:00 AM - 09:00 PM</span>
                  </li>
                  <li>
                    Thursday <span>09:00 AM - 09:00 PM</span>
                  </li>
                  <li>
                    Friday <span>09:00 AM - 09:00 PM</span>
                  </li>
                  <li>
                    Saturday <span>09:00 AM - 10:00 PM</span>
                  </li>
                  <li>
                    Sunday <span>09:00 AM - 10:00 PM</span>
                  </li>
                </ul>
              </div>
              <div className="opening-hours margin-top-35">
                <div
                  className="utf_coupon_widget"
                  style={{ backgroundImage: "url(images/coupon-bg-1.jpg)" }}
                >
                  <div className="utf_coupon_overlay" />
                  <a href="#" className="utf_coupon_top">
                    <h3>Book Now &amp; Get 50% Discount</h3>
                    <div className="utf_coupon_expires_date">
                      Date of Expires 05/08/2019
                    </div>
                    <div className="utf_coupon_used">
                      <strong>How to use?</strong> Just show us this coupon on a
                      screen
                    </div>
                  </a>
                  <div className="utf_coupon_bottom">
                    <p>Coupon Code</p>
                    <div className="utf_coupon_code">DL76T</div>
                  </div>
                </div>
              </div>
              <div className="utf_box_widget opening-hours margin-top-35">
                <h3>
                  <i className="sl sl-icon-info" /> Additional Information
                </h3>
                <ul>
                  <li>
                    Take Out: <span>Yes</span>
                  </li>
                  <li>
                    Delivery: <span>Yes</span>
                  </li>
                  <li>
                    Neutral Restrooms: <span>Yes</span>
                  </li>
                  <li>
                    Has Pool Table: <span>Yes</span>
                  </li>
                  <li>
                    Gender Neutral Restrooms: <span>Yes</span>
                  </li>
                  <li>
                    Waiter Service: <span>Yes</span>
                  </li>
                </ul>
              </div>
              <div className="utf_box_widget opening-hours margin-top-35">
                <h3>
                  <i className="sl sl-icon-envelope-open" /> Sidebar Form
                </h3>
                <form id="contactform">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        name="comments"
                        cols={40}
                        rows={2}
                        id="comments"
                        placeholder="Your Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="submit button"
                    id="submit"
                    defaultValue="Contact Agent"
                  />
                </form>
              </div>
              <div className="utf_box_widget opening-hours margin-top-35">
                <h3>
                  <i className="sl sl-icon-info" /> Google AdSense
                </h3>
                <span>
                  <img src="../images/google_adsense.jpg" alt="" />
                </span>
              </div>
              <div className="utf_box_widget margin-top-35">
                <h3>
                  <i className="sl sl-icon-phone" /> Quick Contact to Help?
                </h3>
                <p>
                  Excepteur sint occaecat non proident, sunt in culpa officia
                  deserunt mollit anim id est laborum.
                </p>
                <ul className="utf_social_icon rounded">
                  <li>
                    <a className="facebook" href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="gplus" href="#">
                      <i className="icon-gplus" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="icon-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <i className="icon-instagram" />
                    </a>
                  </li>
                </ul>
                <a
                  className="utf_progress_button button fullwidth_block margin-top-5"
                  href="contact.html"
                >
                  Contact Us
                </a>
              </div>
              <div className="utf_box_widget listing-share margin-top-35 margin-bottom-40 no-border">
                <h3>
                  <i className="sl sl-icon-pin" /> Bookmark Listing
                </h3>
                <span>1275 People Bookmarked Listings</span>
                <button className="like-button">
                  <span className="like-icon" /> Login to Bookmark Listing
                </button>
                <ul className="utf_social_icon rounded margin-top-35">
                  <li>
                    <a className="facebook" href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="gplus" href="#">
                      <i className="icon-gplus" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="icon-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="#">
                      <i className="icon-instagram" />
                    </a>
                  </li>
                </ul>
                <div className="clearfix" />
              </div>
              <div className="utf_box_widget opening-hours review-avg-wrapper margin-top-35">
                <h3>
                  <i className="sl sl-icon-star" /> Rating Average{" "}
                </h3>
                <div className="box-inner">
                  <div className="rating-avg-wrapper text-theme clearfix">
                    <div className="rating-avg">4.8</div>
                    <div className="rating-after">
                      <div className="rating-mode">/5 Average</div>
                    </div>
                  </div>
                  <div className="ratings-avg-wrapper">
                    <div className="ratings-avg-item">
                      <div className="rating-label">Quality</div>
                      <div className="rating-value text-theme">5.0</div>
                    </div>
                    <div className="ratings-avg-item">
                      <div className="rating-label">Location</div>
                      <div className="rating-value text-theme">4.5</div>
                    </div>
                    <div className="ratings-avg-item">
                      <div className="rating-label">Space</div>
                      <div className="rating-value text-theme">3.5</div>
                    </div>
                    <div className="ratings-avg-item">
                      <div className="rating-label">Service</div>
                      <div className="rating-value text-theme">4.0</div>
                    </div>
                    <div className="ratings-avg-item">
                      <div className="rating-label">Price</div>
                      <div className="rating-value text-theme">5.0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="fullwidth_block padding-top-20 padding-bottom-50">
          <div className="container">
            <div className="row slick_carousel_slider">
              <div className="col-md-12">
                <h3 className="headline_part centered margin-bottom-25">
                  Similar Listings
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
                            src="../images/utf_listing_item-01.jpg"
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
                            src="../images/utf_listing_item-02.jpg"
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
                            src="../images/utf_listing_item-03.jpg"
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
                            src="../images/utf_listing_item-04.jpg"
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
                            src="../images/utf_listing_item-05.jpg"
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
                            src="../images/utf_listing_item-06.jpg"
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
      </div>
    );
  }
}
