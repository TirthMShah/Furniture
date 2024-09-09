import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Home = () => {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Artificial Flowers</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        {/* Latest compiled JavaScript */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
          integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="css/home_style.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="icon" type="image/x-icon" href="image/Home_Page-Images/hh 02.png" />
        <div className="containerr">
          <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top d-flex">
            <div className="container">
              <div className="navbar-brand mx-5">
                <a
                  href="#"
                  style={{
                    fontFamily:
                      'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                    fontSize: "xx-large"
                  }}
                  className="text-decoration-none text-black mx-2"
                >
                  <img
                    src="image/Home_Page-Images/hh 02.png"
                    alt=""
                    height="60px"
                    width="130px"
                  />
                </a>
              </div>
              <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#collapsiblenavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-around"
                id="collapsiblenavbar"
              >
                <ul className="navbar-nav nav-pills">
                  <li className="nav-item">
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      Seating
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/Bean-bags"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Bean Bags
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Sofa"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Sofa
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Bed"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Bed
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/SofaCumBed"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Sofa cum Bed
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item dropdownitems text-secondary"
                          href="#"
                        >
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Wooden
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/Wooden_Stools"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Wooden Stools
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/WoodenChair"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Wooden Chair
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/WoodenTable"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Wooden Tables
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/WoodenDoors"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Wooden Doors
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/WoodenShelves"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Shelves
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      Metallic
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/Metallic-chair"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Chairs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/MetallicTables"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Tables
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Metallic-handles"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Handles
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/MetallicShelves"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Shelves
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item dropdownitems text-secondary"
                          href="#"
                        >
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="tabeltop_and_bar.html"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      Glass
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/GlassTables"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Tables
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Frames"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Frames
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/Mirrors"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Mirrors
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item dropdownitems text-secondary"
                          href="#"
                        >
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                    >
                      {" "}
                      Acrylic
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/A-door"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Doors
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/A-chair"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Chairs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/A-handle"
                          className="dropdown-item dropdownitems text-secondary"
                        >
                          Handles
                        </Link>
                      </li>
                      <li>
                        <a
                          className="dropdown-item dropdownitems text-secondary"
                          href="#"
                        >
                          Shop All
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* <div
      class="collapse navbar-collapse justify-content-end"
      id="collapsiblenavbar"
    > */}
              <div className="navbar-brand search">
                <span className="iconSearch">
                  {/* <i
              className="fa-solid fa-magnifying-glass nav-link searchBtn" onclick="search()"></i> */}
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" onclick="search()" className="nav-link searchBtn" />
                  <i
                    className="fas fa-times nav-link closeBtn"
                    style={{ color: "#000000" }}
                  />
                </span>
              </div>
              {/* </div> */}
              <div className="navbar-brand">
                <Link to="/login" style={{ color: "#000000" }}>
                  <i className="fa-solid fa-user nav-link" />
                </Link>
              </div>
              <div className="navbar-brand cart-div cart-icon">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='nav-link iconCart' />
                {/* <i className="fa-solid fa-cart-shopping nav-link iconCart" /> */}
                <span className="cart-items totalQuantity" />
              </div>
            </div>
            <div className="searchbox">
              {/* <div> */}
              <input
                type="text"
                name=""
                id="input-box"
                placeholder="Search here..."
                autoComplete="off"
              />
              <span className="newIconSearch">
                <i className="fa-solid fa-magnifying-glass nav-link newSearch" />
                <i
                  className="fas fa-times nav-link newClose"
                  style={{ color: "#000000" }}
                />
              </span>
              <div className="result-box" />
            </div>
          </nav>
          <div id="demo" className="carousel slide" data-bs-ride="carousel">
            {/* Indicators/dots */}
            {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div> */}
            {/* The slideshow/carousel */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="image/Extra_photos/3website_3334x1192_8e40c30e-6c5d-4f41-a657-cd9faeb250bb.webp"
                  alt="Los Angeles"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="image/Extra_photos/coffee_mug_3334x1192_50e236a6-693e-4abf-b77e-8ef5c55b32b6.webp"
                  alt="Chicago"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="image/Extra_photos/Furniture_3334x1192_b59a8bd9-e2f9-49ab-aa84-08cccdf0184c.webp"
                  alt="New York"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="image/Extra_photos/https_www.nestroots.com_collections_all-kitchen-dining.webp"
                  alt="New York"
                  className="d-block w-100"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="image/Extra_photos/valentine_1.webp"
                  alt="New York"
                  className="d-block w-100"
                />
              </div>
            </div>
            {/* Left and right controls/icons */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-dark rounded-5" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#demo"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-dark rounded-5" />
            </button>
          </div>
          {/* <img src="Home_Page-Images/Clean beige cardboard paper background texture_ Horizontal banne.jpg" alt=""> */}
          <div className="carousel-container p-0">
            <div className="container-fluid">
              <div className="ourowlcarousel" style={{ marginLeft: 100 }}>
                <h1 className="display-5">Bestsellers</h1>
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <a href="wooden_stools.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_1.jpg"
                        className="img-fluid animate"
                        alt=""
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Wooden Stools →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="masala_boxes.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl-4.webp"
                        className="img-fluid animate"
                        alt=""
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Masala Boxes →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="Benches.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_3.webp"
                        className="img-fluid animate"
                        alt=""
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Benches →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="baskets.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_5.webp"
                        className="img-fluid animate"
                        alt=""
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Basekets →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="artificial_flowers.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_11.webp"
                        className="img-fluid animate"
                        alt=""
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">
                          Artificial Flowers →
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="cutlery.html">
                      <img
                        src="image/Owl_Carousel_1-images/cutlery_owl.jpg"
                        className="img-fluid animate"
                        alt=""
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Cutlery →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="Metallic_Stools.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_2.jpg"
                        alt=""
                        className="img-fluid animate"
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Metalic stools →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="roti_boxes.html">
                      <img
                        src="image/Owl_Carousel_1-images/roti.webp"
                        className="img-fluid animate"
                        alt=""
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Roti Boxes →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="coffee_mugs.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_8.webp"
                        alt=""
                        className="img-fluid animate"
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Coffee mugs →</span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="drinkware_glasses.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_9.webp"
                        alt=""
                        className="img-fluid animate"
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">
                          Drinkware &amp; Glasses →
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="item">
                    <a href="cushion_covers.html">
                      <img
                        src="image/Owl_Carousel_1-images/owl_10.webp"
                        alt=""
                        className="img-fluid animate"
                        style={{ height: 300, width: 300 }}
                      />
                      <div style={{ marginTop: 20 }}>
                        <span className="fw-bolder h5 mt-5">Cushion Cover →</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <img
              src="image/Home_Page-Images/banner_7677566a-f316-4cf6-a6b6-90a1fc3ed545.webp"
              alt=""
              className="bigphoto img-fluid"
            />
          </div>
          <div className="main-image-container">
            <div className="image-container">
              <img src="image/Home_Page-Images/Bar_Tools_set.webp" alt="Image 1" />
              <div className="text-overlay">
                <p>Raise the Bar</p>
                <a href="cutlery.html" className="shop-now-button">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="image-container">
              <img src="image/Home_Page-Images/Dancing_Glasses.webp" alt="Image 2" />
              <div className="text-overlay">
                <p>Glasses That Groove</p>
                <a href="drinkware_glasses.html" className="shop-now-button">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="item_container container-fluid p-4">
            <h1 className="display-6  mx-4 ">New Arrivals Coming Soon</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-3 g-3 equal-spacing">
              <div className="col">
                <img
                  src="image/Home_Page-Images/lamps/lamp1.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Bedroom Lamps
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/lamps/lamp2.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Living Room Lamps
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/lamps/lamp3.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Crystal &amp; Metal Lamps
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/lamps/lamp4.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Floor Lamps
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/lamps/lamp5.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Ceiling &amp; Pendant Lights
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/lamps/lamp6.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Wall Sconces
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <img
              src="image/Home_Page-Images/sideTablesHome.webp"
              alt=""
              className="bigphoto img-fluid"
            />
          </div>
          <div className="main-image-container">
            <div className="image-container">
              <img src="image/Home_Page-Images/MetallicSideTableHome.webp" alt="Image 1" />
              <div className="text-overlay">
                <p>Side Tables</p>
                <a href="Metallic_Stools.html" className="shop-now-button">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="image-container">
              <img src="image/Home_Page-Images/WoodenSideTableHome.webp" alt="Image 2" />
              <div className="text-overlay">
                <p>The Art of Devotion</p>
                <a href="Benches.html" className="shop-now-button">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="item_container container-fluid p-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-3 g-3 equal-spacing">
              <div className="col">
                <img
                  src="image/Home_Page-Images/Oil_Paintings/Oil_painting-1.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Classic Oil Paintings
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/Oil_Paintings/Oil_painting-2.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Framed Wall Art
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/Oil_Paintings/Oil_painting-3.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">Mirrors</div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/Oil_Paintings/Oil_painting-4.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Modern Oil Paintings
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/Oil_Paintings/Oil_painting-5.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Wall Plates &amp; Accents
                </div>
              </div>
              <div className="col">
                <img
                  src="image/Home_Page-Images/Oil_Paintings/Oil_painting-6.webp"
                  alt=""
                  className="img-fluid"
                />
                <div className="text-decoration-underline text-center">
                  Wall Vases
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid p-0">
            <img
              src="image/Home_Page-Images/CushionHome.webp"
              alt=""
              className="bigphoto img-fluid"
            />
            {/* <div class="text-overlay">
    <p>Storage Baskets for Tidy Spaces</p>
    <a href="baskets.html" class="shop-now-button">Shop Now</a>
  </div> */}
          </div>
          <div className="main-image-container">
            <div className="image-container">
              <img src="image/Home_Page-Images/BasketsHome.webp" alt="Image 1" />
              <div className="text-overlay">
                <p>Storage Baskets for Tidy Spaces</p>
                <a href="baskets.html" className="shop-now-button">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="image-container">
              <img src="image/Home_Page-Images/GlassesHome.webp" alt="Image 2" />
              <div className="text-overlay">
                <p>Every Drink is an Experience</p>
                <a href="drinkware_glasses.html" className="shop-now-button">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <footer>
            <div className="container-fluid bg-dark">
              <div className="container pt-5">
                <div className="footer-container text-light">
                  <div className="footer-section">
                    <h3>
                      Shop <i className="fa-solid fa-chevron-down footeraerow" />
                    </h3>
                    <ul>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          Furniture
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          Kitchen and Dining
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          Table Top &amp; Bar
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          Furnishings
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h3>
                      Support <i className="fa-solid fa-chevron-down footeraerow" />
                    </h3>
                    <ul>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          Return Portal
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          Terms &amp; Condition
                        </a>
                      </li>
                      <li className="h6">
                        <a href="" className="text-decoration-none text-light">
                          Return Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h3>
                      Connect <i className="fa-solid fa-chevron-down footeraerow" />
                    </h3>
                    <ul>
                      <li>
                        <a
                          href="login.html"
                          className="text-decoration-none text-light"
                        >
                          Account Login
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="" className="text-decoration-none text-light">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h3>
                      <a
                        href="#"
                        style={{
                          fontFamily:
                            'Impact, Haettenschweiler, "Arial Narrow Bold",sans-seri',
                          fontSize: "xx-large"
                        }}
                        className="text-decoration-none text-black mx-2"
                      >
                        <img
                          src="image/Home_Page-Images/hh 02.png"
                          alt=""
                          height="60px"
                          width="130px"
                        />
                      </a>
                      <i className="fa-solid fa-chevron-down footeraerow" />
                    </h3>
                    <ul>
                      <p>
                        Home Harmony epitomizes dream homes, seamlessly merging
                        design, aesthetics, and authenticity. Our mission is to create
                        visually captivating and profoundly fulfilling spaces, with
                        transparency, authenticity, and innovation at the core.
                      </p>
                      <li>
                        <div>
                          <i
                            className="fa-brands fa-instagram mx-2"
                            style={{ cursor: "pointer" }}
                          />
                          <i
                            className="fa-brands fa-facebook mx-2"
                            style={{ cursor: "pointer" }}
                          />
                          <i
                            className="fa-brands fa-youtube mx-2"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="cart">
          <h2>
            CART
            <span className="close">
              <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }} />
            </span>
          </h2>
          <div className="listCart">
            {/* <div class="item">
    <img src="wooden-stool-images/wooden-stool-1.jpg" alt="" />
    <div class="content">
      <div class="name">Name</div>
      <div class="price">Rs. 2,299</div>
    </div>
    <div class="quantity">
      <button>-</button>
      <span class="value">3</span>
      <button>+</button>
    </div>
  </div> */}
          </div>
          <div className="buttons">
            {/* <div class="close">CLOSE</div> */}
            <div className="checkout">
              <a href="checkout.html" style={{ textDecorationLine: "none" }}>
                CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}