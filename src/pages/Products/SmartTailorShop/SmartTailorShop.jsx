import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SmartTailorShop.css";

import contactUsImg from "../../../assets/image/product/contact us.png";
import tailorImg1 from "../../../assets/image/product/Smart Tailor Shop/image1.png";
import tailorImg2 from "../../../assets/image/product/Smart Tailor Shop/image2.png";
import tailorImg3 from "../../../assets/image/product/Smart Tailor Shop/image3.png";
import tailorImg4 from "../../../assets/image/product/Smart Tailor Shop/image4.png";
import tailorImg5 from "../../../assets/image/product/Smart Tailor Shop/image5.png";
import tailorImg6 from "../../../assets/image/product/Smart Tailor Shop/image6.png";
import tailorImg7 from "../../../assets/image/product/Smart Tailor Shop/image7.png";

function SmartTailorShop() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Smart Tailor Application",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Demo Request: Smart Tailor Application`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nBoutique/Company: ${demoFormData.institution}\nProduct: Smart Tailor Application\n\nMessage:\n${demoFormData.message}`
      );
      window.open(`mailto:support@ncpli.com?subject=${subject}&body=${body}`, "_blank");
    }, 800);
  };

  return (
    <div className="prod-page-wrapper">
      {/* Product Hero Banner */}
      <section className="prod-hero">
        <div className="prod-hero-container">
          <h1 className="prod-hero-title">PRODUCT</h1>
          <p className="prod-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/products">Product</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Smart Tailor Shop</span>
        </nav>
      </div>

      <main className="prod-container">
        {/* Left-Aligned Page Title & Description matching Mockup */}
        <div className="tailor-header-left">
          <h2 className="tailor-header-title">Smart Tailor Application</h2>
          <p className="tailor-header-desc">
            Smart Tailor Application is a responsive and easy-to-use tailor shop management system for customer, order and business operations.
          </p>
        </div>

        {/* 2-Column Main Section: Features (Left) & Visuals Stack (Right) */}
        <div className="tailor-main-layout">
          {/* Left Column: Detailed Features Card */}
          <div className="tailor-features-card">
            <h3 className="tailor-features-heading">Features</h3>

            <div className="tailor-feature-group">
              <h4 className="tailor-group-title">Tailor & Admin Operations:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> Manage multiple customer profiles with complete historical measurement logs</li>
              </ul>
            </div>

            <div className="tailor-feature-group">
              <h4 className="tailor-group-title">Growing a Customer:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> Send automated SMS notifications for order confirmation, trial dates, and delivery reminders</li>
                <li><span className="prod-arrow-icon">➔</span> Personalized promotional offers and festival greeting campaigns</li>
                <li><span className="prod-arrow-icon">➔</span> Customer feedback collection and rating management system</li>
                <li><span className="prod-arrow-icon">➔</span> Digital invoice delivery via SMS / WhatsApp and Email</li>
                <li><span className="prod-arrow-icon">➔</span> Customer mobile application with live order tracking and measurement book</li>
              </ul>
            </div>

            <div className="tailor-feature-group">
              <h4 className="tailor-group-title">Staff & Workshop Workflow:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> User friendly interface for tailors and masters with custom measurement charts</li>
                <li><span className="prod-arrow-icon">➔</span> Daily order status management (Cutting, Stitching, Finishing, Quality Check)</li>
                <li><span className="prod-arrow-icon">➔</span> Fabric image capture with pattern upload via mobile camera or webcam</li>
                <li><span className="prod-arrow-icon">➔</span> Worker piece-rate wages calculation and daily ledger management</li>
                <li><span className="prod-arrow-icon">➔</span> Inbuilt inventory management for lining materials, zippers, threads, and accessories</li>
              </ul>
            </div>

            <div className="tailor-feature-group">
              <h4 className="tailor-group-title">Pricing Groups:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> Define price groups based on stitch patterns, custom cuts, and urgency (Normal / Express)</li>
                <li><span className="prod-arrow-icon">➔</span> Automatic price calculation based on fabric type, design addons, and embroidery work</li>
                <li><span className="prod-arrow-icon">➔</span> Flexible discount rules for regular clients and seasonal promotions</li>
                <li><span className="prod-arrow-icon">➔</span> Advance payment and partial payment tracking with receipt generation</li>
              </ul>
            </div>

            <div className="tailor-feature-group">
              <h4 className="tailor-group-title">Bill Receipt of Tailor to Orders:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> Instant print format bill receipts with QR code for quick order status lookup</li>
              </ul>
            </div>

            <div className="tailor-feature-group">
              <h4 className="tailor-group-title">Smart Billing:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> GST / Non-GST invoices with custom terms and conditions</li>
                <li><span className="prod-arrow-icon">➔</span> Split payment support (Cash, UPI, Card, Net Banking)</li>
              </ul>
            </div>

            <div className="tailor-feature-group">
              <h4 className="tailor-group-title">Technology used:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> Node JS</li>
                <li><span className="prod-arrow-icon">➔</span> React JS</li>
                <li><span className="prod-arrow-icon">➔</span> Express JS</li>
                <li><span className="prod-arrow-icon">➔</span> Mongo DB</li>
              </ul>
            </div>

            <div className="tailor-feature-group" style={{ marginBottom: 0 }}>
              <h4 className="tailor-group-title">Customer Mobile App Technology Used:</h4>
              <ul className="tailor-group-items">
                <li><span className="prod-arrow-icon">➔</span> Flutter / React Native</li>
                <li><span className="prod-arrow-icon">➔</span> Node JS</li>
                <li><span className="prod-arrow-icon">➔</span> Express JS</li>
                <li><span className="prod-arrow-icon">➔</span> Mongo DB</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Visual Previews Stack matching Mockup */}
          <div className="tailor-visuals-stack">
            {/* 1. YouTube Video Preview Card */}
            <div className="tailor-video-card" onClick={() => setVideoModalOpen(true)} title="Click to Watch Smart Tailor Demo">
              <div className="tailor-video-box">
                <div className="prod-yt-badge">
                  <span className="prod-yt-icon"><span className="prod-yt-triangle"></span></span>
                  <span>YouTube</span>
                </div>
              </div>
              <div className="tailor-video-info">
                <span className="tailor-video-title">Smart Tailor Application</span>
                <span className="tailor-video-desc">Watch how to manage tailoring orders, customer measurements and deliveries.</span>
              </div>
            </div>

            {/* 2. Desktop Screenshot 1 (Dashboard Overview) */}
            <div className="tailor-desktop-screen0">
              <img src={tailorImg1} alt="Tailor Management Dashboard Screen" />
            </div>

            {/* 3. Desktop Screenshot 2 (Order Status Table) */}
            <div className="tailor-desktop-screen1">
              <img src={tailorImg2} alt="Tailor Orders and Measurement Schedule" />
            </div>

            {/* 4. Desktop Screenshot 3 (Order Ledger Table) */}
            <div className="tailor-desktop-screen2">
              <img src={tailorImg3} alt="Order Tracking and Status Overview" />
            </div>

            {/* 5. Phone Row 1: 3D Angled Phones Side-by-Side */}
            <div className="tailor-phones-grid">
              <div className="tailor-phone-item">
                <img src={tailorImg4} alt="Order Details Mobile App Screen" />
              </div>
              <div className="tailor-phone-item">
                <img src={tailorImg5} alt="Boutique Story Mobile App Screen" />
              </div>
            </div>

            {/* 6. Phone Row 2: Frontal Straight Phones Side-by-Side */}
            <div className="tailor-phones-grid">
              <div className="tailor-phone-item">
                <img src={tailorImg6} alt="Smart Tailor Customer Navigation Screen" />
              </div>
              <div className="tailor-phone-item">
                <img src={tailorImg7} alt="Smart Tailor My Orders Screen" />
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans Section */}
        <h2 className="prod-section-title">Pricing Plans</h2>
        <div className="prod-pricing-grid">
          {/* Plan 1: Basic */}
          <div className="prod-price-card">
            <div className="prod-price-header prod-price-header--pink">
              <h3 className="prod-plan-name">Basic Subscription</h3>
              <p className="prod-plan-amount">₹ 6999 /month</p>
            </div>
            <div className="prod-price-body">
              <ul className="prod-check-list">
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> 500 Orders Placement</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Customer Management</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Interactive Charts</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Report Generation</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Rates Updater</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Smart Billing</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Up to 3 Staff Accounts</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Mobile Web View</li>
                <li className="prod-check-item" style={{ color: "#8a948e" }}><span className="prod-cross-badge">✕</span> Multi-Branch Support</li>
                <li className="prod-check-item" style={{ color: "#8a948e" }}><span className="prod-cross-badge">✕</span> Custom Pattern Upload</li>
                <li className="prod-check-item" style={{ color: "#8a948e" }}><span className="prod-cross-badge">✕</span> Dedicated Customer Mobile App</li>
                <li className="prod-check-item" style={{ color: "#8a948e" }}><span className="prod-cross-badge">✕</span> Advanced Analytics & Reports</li>
              </ul>
            </div>
          </div>

          {/* Plan 2: Standard */}
          <div className="prod-price-card">
            <div className="prod-price-header prod-price-header--blue">
              <h3 className="prod-plan-name">Standard Subscription</h3>
              <p className="prod-plan-amount">₹ 7999 /month</p>
            </div>
            <div className="prod-price-body">
              <ul className="prod-check-list">
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Up to 3 Branch Support</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Customer Management</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Advanced Measurement Book</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> GST / Non-GST Invoicing</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> SMS & WhatsApp Alerts</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Real-time Order Tracking</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Up to 10 Staff Accounts</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Inventory Tracking</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Worker Piece-Rate Ledger</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Pattern & Design Upload</li>
                <li className="prod-check-item" style={{ color: "#8a948e" }}><span className="prod-cross-badge">✕</span> Dedicated Customer Mobile App</li>
                <li className="prod-check-item" style={{ color: "#8a948e" }}><span className="prod-cross-badge">✕</span> Multi-Currency & Franchise Support</li>
              </ul>
            </div>
          </div>

          {/* Plan 3: Premium */}
          <div className="prod-price-card">
            <div className="prod-price-header prod-price-header--gold">
              <h3 className="prod-plan-name">Premium Subscription</h3>
              <p className="prod-plan-amount">₹ 9999 /month</p>
            </div>
            <div className="prod-price-body">
              <ul className="prod-check-list">
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Unlimited Branch Support</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Multi-Store Customer Management</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Advanced Custom Measurement System</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Complete ERP & GST Billing</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> SMS, WhatsApp & Email Automation</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Live Order Tracking with Barcode/QR</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Unlimited Staff Accounts & Roles</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Comprehensive Inventory & Raw Material ERP</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Tailor Performance & Incentive Tracker</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Fabric Image & 3D Pattern Upload</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> Dedicated Android & iOS Customer App</li>
                <li className="prod-check-item"><span className="prod-check-badge">✓</span> 24/7 Priority Support & Dedicated Account Manager</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Terms Arrow List */}
        <div className="prod-arrow-list" style={{ maxWidth: "100%", margin: "20px 0 40px" }}>
          <div className="prod-arrow-item">
            <span className="prod-arrow-icon">➔</span>
            <span>All plans include secure cloud backup, regular updates, and technical onboarding assistance.</span>
          </div>
          <div className="prod-arrow-item">
            <span className="prod-arrow-icon">➔</span>
            <span>Custom feature additions, barcode scanner integrations, and white-label branding available upon request.</span>
          </div>
          <div className="prod-arrow-item">
            <span className="prod-arrow-icon">➔</span>
            <span>Annual billing discounts: Pay for 10 months and get 2 months free on all subscription tiers.</span>
          </div>
        </div>

        {/* Bottom Contact CTA Card */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us. Also we can add/update new features and design 
              changes in this product. If you want To discuss about this product and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73050 23014</strong>.
            </p>
            <button type="button" className="btn-request-demo" onClick={() => setIsDemoModalOpen(true)}>
              Request a Demo
            </button>
          </div>
          <div className="prod-cta-image">
            <img src={contactUsImg} alt="Netcom Support Representative" />
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="prod-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="prod-modal-card" style={{ maxWidth: "680px" }} onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>Smart Tailor Application - Video Demonstration</h3>
              <button type="button" className="prod-modal-close" onClick={() => setVideoModalOpen(false)}>✕</button>
            </div>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "12px", background: "#000" }}>
              <iframe
                title="Smart Tailor Demo"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="prod-modal-backdrop" onClick={() => setIsDemoModalOpen(false)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>Request a Demo</h3>
              <button type="button" className="prod-modal-close" onClick={() => setIsDemoModalOpen(false)}>✕</button>
            </div>
            {demoSuccess ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "3rem", color: "#1b8754", marginBottom: "12px" }}>✓</div>
                <h4 style={{ color: "#0e4a34", fontSize: "1.3rem", margin: "0 0 10px" }}>Thank You!</h4>
                <p style={{ color: "#4f5d54" }}>Your demo request for Smart Tailor Application has been received.</p>
                <button type="button" className="prod-modal-submit" onClick={() => setIsDemoModalOpen(false)}>Done</button>
              </div>
            ) : (
              <form className="prod-modal-form" onSubmit={handleDemoSubmit}>
                <div className="prod-form-group">
                  <label htmlFor="demo-name">Your Full Name *</label>
                  <input id="demo-name" type="text" required placeholder="Enter your name" value={demoFormData.name} onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-inst">Boutique / Business Name *</label>
                  <input id="demo-inst" type="text" required placeholder="e.g. Royal Boutique" value={demoFormData.institution} onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-email">Email Address *</label>
                  <input id="demo-email" type="email" required placeholder="name@example.com" value={demoFormData.email} onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-phone">Phone Number *</label>
                  <input id="demo-phone" type="tel" required placeholder="+91 98765 43210" value={demoFormData.phone} onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })} />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="demo-msg">Specific Requirements</label>
                  <textarea id="demo-msg" rows="3" placeholder="Tell us about your requirements..." value={demoFormData.message} onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}></textarea>
                </div>
                <button type="submit" className="prod-modal-submit">Submit Demo Request</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SmartTailorShop;
