import React from 'react'
import { Link } from 'react-router-dom';

export const SofaCumBed = () => {
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
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="icon" type="image/x-icon" href="image/Home_Page-Images/hh 03.png" />
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
                                    <i
                                        className="fa-solid fa-magnifying-glass nav-link searchBtn"
                                        onclick="search()"
                                    />
                                    <i
                                        className="fas fa-times nav-link closeBtn"
                                        style={{ color: "#000000" }}
                                    />
                                </span>
                            </div>
                            {/* </div> */}
                            <div className="navbar-brand">
                                <a href="login.html" style={{ color: "#000000" }}>
                                    <i className="fa-solid fa-user nav-link" />
                                </a>
                            </div>
                            <div className="navbar-brand cart-div cart-icon">
                                <i className="fa-solid fa-cart-shopping nav-link iconCart" />
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
                    <div className="container-fluid p-0">
                        <img
                            src="image\Main_img\sofa cum bed title.png"
                            alt=""
                            className="d-block"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="container p-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={41}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (1).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Cushy Cloud Wooden Fabric Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>13 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 2,299</span>
                                        <strike>Rs. 5,500</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={42}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (2).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Velvel Vista Wooden Open Box Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>162 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 2,149</span>
                                        <strike>Rs. 3,699</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={43}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (3).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">
                                        Melange Fabric Wooden Ottoman in White Colour
                                    </span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>69 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 5,299</span>
                                        <strike>Rs. 6,999</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={44}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (4).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Velvet Vogue Maroon Wooden Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>3 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 1,349</span>
                                        <strike>Rs. 3,099</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={45}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (5).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Velvet Vogue Sea Blue Wooden Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star-half-alt"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>99 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 2,299</span>
                                        <strike>Rs. 5,500</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={46}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (6).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Fluffy Charm White Wooden Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>113 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 7,299</span>
                                        <strike>Rs. 8,499</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={47}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (7).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Cushy Cloud Wooden Fabric Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>31 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 3,679</span>
                                        <strike>Rs. 4,199</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={48}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (8).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">
                                        Melange Fabric Wooden Ottoman in Grey Colour
                                    </span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star-half-alt"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>110 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 1,239</span>
                                        <strike>Rs. 3,269</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={49}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (9).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Velvet Vogue Sea Blue Wooden Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star-half-alt"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>99 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 2,299</span>
                                        <strike>Rs. 5,500</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={50}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (10).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Fluffy Charm White Wooden Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>113 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 7,299</span>
                                        <strike>Rs. 8,499</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={51}>
                                    <img
                                        src="\image\SofaCumBed\SofaCumBed (11).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Cushy Cloud Wooden Fabric Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>31 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 3,679</span>
                                        <strike>Rs. 4,199</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={52}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (12).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">
                                        Melange Fabric Wooden Ottoman in Grey Colour
                                    </span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star-half-alt"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>110 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 1,239</span>
                                        <strike>Rs. 3,269</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={53}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (13).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Velvet Vogue Deep Blue Wooden Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star-half-alt"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>93 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 5,299</span>
                                        <strike>Rs. 5,999</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                    {/* <div class="mt-2 "><button class="buy-now-button">Buy Now</button></div> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={54}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (14).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Luxe Loom Wooden in White</span>
                                    <div style={{ marginTop: "10%" }}>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>299 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 12,499</span>
                                        <strike>Rs. 15,999</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                    {/* <div class="mt-2 "><button class="buy-now-button">Buy Now</button></div> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={55}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (15).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Cozy Craft Perch Wooden Stool</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star-half-alt"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>117 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 6,299</span>
                                        <strike>Rs. 11,239</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                    {/* <div class="mt-2 "><button class="buy-now-button">Buy Now</button></div> */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={56}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (16).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Cushy Cloud Wooden Fabric White</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>143 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 1,099</span>
                                        <strike>Rs. 2,349</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-3 col-md-6 col-xl-3 col-xxl-3 listProduct">
                                <div className="item" id={57}>
                                    <img
                                        src="image\SofaCumBed\SofaCumBed (17).jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <span className="name">Cushy Cloud Wooden Fabric Beige</span>
                                    <div>
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <i
                                            className="fas fa-star-half-alt"
                                            style={{ marginLeft: 2, color: "#f3c621" }}
                                        />
                                        <span>93 Reviews</span>
                                    </div>
                                    <div className="my-1 text-center">
                                        <span className="h4 mx-2">Rs. 2,299</span>
                                        <strike>Rs. 5,539</strike>
                                    </div>
                                    <button
                                        className="addcart-button"
                                        onclick="addCart(this.parentElement.id)"
                                    >
                                        Add To Cart
                                    </button>
                                    {/* <div class="mt-2 "><button class="buy-now-button">Buy Now</button></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-capitalize text-center text-secondary mx-5 p-5">
                            Discover the perfect blend of craftsmanship and comfort with Home
                            Harmony's exquisite collection of wooden stools. Crafted from
                            high-quality, sustainable wood, each stool is a testament to timeless
                            design and durability. Whether you're looking to add a rustic charm to
                            your kitchen or create a cozy corner in your living space, our wooden
                            stools offer versatility and style. The natural grains and textures of
                            the wood bring a warm, inviting touch to any room. Explore our curated
                            selection and find the ideal wooden stool that seamlessly combines
                            form and function, enhancing the aesthetic appeal of your home.
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
                                                    Seating
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="text-decoration-none text-light">
                                                    Wooden
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="text-decoration-none text-light">
                                                    Metallic
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="text-decoration-none text-light">
                                                    Glass
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" className="text-decoration-none text-light">
                                                    Acrylic
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
                                                        'Impact, Haettenschweiler, "Arial Narrow Bold",sans-serif',
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
                                                design, aesthetics, and authenticity. Our mission is to
                                                create visually captivating and profoundly fulfilling
                                                spaces, with transparency, authenticity, and innovation at
                                                the core.
                                            </p>
                                            <li>
                                                <div>
                                                    <i className="fa-brands fa-instagram mx-2" />
                                                    <i className="fa-brands fa-facebook mx-2" />
                                                    <i className="fa-brands fa-youtube mx-2" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                <i className="fas fa-star" style={{ marginLeft: 2, color: "#f3c621" }}>
                    <div className="cart">
                        {/* <h2>
  CART
  <span class="close"
    ><i class="fa-solid fa-xmark" style="color: #ffffff"></i
  ></span>
</h2>
<div class="outer-container" style="visibility: visible">
  <div class="inner-container">
    <h4>Your Cart Is Empty</h4>
    <div class="button">
      <button value="">Continue Shopping</button>
    </div>
    <div class="para">
      <p>Have an account?</p>
      <p><a href="">Log In</a> To check out faster</p>
    </div>
  </div>
</div> */}
                        <h2>
                            CART
                            <span className="close">
                                <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }} />
                            </span>
                        </h2>
                        <div className="listCart">
                            {/* <div class="item">
    <img src="Artificial-flower-Images/Artificial-flower-img- 1.jpg" alt="" />
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
                </i>
            </>
        </div>
    )
}