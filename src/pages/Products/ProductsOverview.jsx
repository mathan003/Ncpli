import React from "react";
import { Link } from "react-router-dom";
import "./ProductsOverview.css";

// Product asset images from "our Products"
import roboticsImg from "../../assets/image/product/our Products/Robotics.png";
import arvrImg from "../../assets/image/product/our Products/ar&vr.png";
import smartTailorImg from "../../assets/image/product/our Products/Smart Tailor Shop.png";
import cabBookingImg from "../../assets/image/product/our Products/online cab book.png";
import smartClassImg from "../../assets/image/product/our Products/smart class room.png";
import gilgalImg from "../../assets/image/product/our Products/gilgal.jpg";
import emisProductImg from "../../assets/image/product/our Products/emis.png";
import assessmentToolImg from "../../assets/image/product/our Products/assment tool.png";

const PRODUCTS = [
  {
    id: "robotics",
    title: "Robotics",
    image: roboticsImg,
    to: "/products/robotics",
  },
  {
    id: "ar-vr",
    title: "AR & VR",
    image: arvrImg,
    to: "/products/ar-vr",
  },
  {
    id: "smart-tailor-shop",
    title: "Smart Tailor Shop",
    image: smartTailorImg,
    to: "/products/smart-tailor-shop",
  },
  {
    id: "online-cab-booking",
    title: "Online Cab Booking",
    image: cabBookingImg,
    to: "/products/online-cab-booking",
  },
  {
    id: "smart-class-room",
    title: "Smart Class Room",
    image: smartClassImg,
    to: "/products/smart-class-room",
  },
  {
    id: "gilgal",
    title: "Educational Mobile App - Gilgal",
    image: gilgalImg,
    to: "/products/gilgal",
  },
  {
    id: "emis",
    title: "Educational Management Information System (EMIS)",
    image: emisProductImg,
    to: "/products/emis",
  },
  {
    id: "assessment-tool",
    title: "Assesment Tool",
    image: assessmentToolImg,
    to: "/products/assessment-tool",
  },
];

function ProductsOverview() {
  return (
    <div className="products-overview-page">
      {/* Product Hero Banner */}
      <section className="prod-hero" aria-label="Products Hero Banner"></section>

      {/* Floating Breadcrumb Capsule */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Products</span>
        </nav>
      </div>

      <main className="products-overview-container">
        {/* Section Heading */}
        <h1 className="our-products-title">Our Products</h1>

        {/* Products Grid */}
        <div className="our-products-grid">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              to={product.to}
              className="our-product-card"
              aria-label={`View ${product.title}`}
            >
              <div className="our-product-img-wrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="our-product-img"
                  loading="lazy"
                />
              </div>
              <h2 className="our-product-name">{product.title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductsOverview;
