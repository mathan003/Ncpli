import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AssessmentTool.css";

import contactUsImg from "../../../assets/image/product/contact us.png";

function AssessmentTool() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    product: "Assessment Tool",
    message: "",
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSuccess(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Demo Request: Assessment Tool`);
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProduct: Assessment Tool\n\nMessage:\n${demoFormData.message}`
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
          <span className="cs-breadcrumb-current">Assessment Tool</span>
        </nav>
      </div>

      <main className="prod-container">
        <h2 className="assess-main-title">ASSESSMENT TOOL</h2>

        {/* Core Definition Block */}
        <div className="assess-arrow-block">
          <div className="assess-arrow-card">
            <span className="assess-arrow-icon">➔</span>
            <span>
              Netcom Assessment is the process of gathering and discussing information from multiple and diverse sources in order to develop a deep understanding of what students know, understand, and can do with their knowledge as a result of their educational experiences. Netcom process culminates when assessment results are used to improve subsequent learning. Assessment is the systematic basis for making inferences about the learning and development of students. Netcom process is about defining, selecting, designing, collecting, analyzing, interpreting, and using information to increase students' learning and development. Assessment is the systematic collection, review, and use of information about educational programs undertaken for the purpose of improving student learning and development.
            </span>
          </div>
        </div>

        {/* Purpose of Assessment Section */}
        <h2 className="assess-section-title">Purpose of Assessment</h2>
        <div className="assess-arrow-block">
          <div className="assess-arrow-card">
            <span className="assess-arrow-icon">➔</span>
            <span>
              Two common phrases surrounding assessment recently are assessment for improvement and assessment for accountability. While assessment for accountability's is an important reason to initiate and conduct assessment, the real benefit to an institution and its students come from the discussions and changes that happen as a result of assessment for improvement. Many staff are motivated by the benefits of focusing on assessment for improving the quality of teaching, learning, programs and services, and planning and decision-making. The purpose of assessment for accountability is to demonstrate the effectiveness of programs and services across the institution to various audiences, including parents. An assessment cycle effectively addressing assessment for improvement will also provide the necessary evidence for accountability.
            </span>
          </div>
        </div>

        {/* 4 Methods Cards Grid */}
        <h3 className="assess-subtitle">
          Netcom Assessment methods define the nature of the assessor actions and include:
        </h3>
        <div className="assess-grid">
          <div className="assess-card">
            <h3>Examine method:</h3>
            <p>
              The process of reviewing, inspecting, observing, studying, or analyzing one or more assessment objects (i.e., specifications, mechanisms, or activities). The purpose of the examine method is to facilitate assessor understanding, achieve clarification, or obtain evidence.
            </p>
          </div>

          <div className="assess-card">
            <h3>Interview method:</h3>
            <p>
              The process of reviewing, inspecting, observing, studying, or analyzing one or more assessment objects (i.e., specifications, mechanisms, or activities). The purpose of the examine method is to facilitate assess or understanding, achieve clarification, or obtain evidence.
            </p>
          </div>

          <div className="assess-card">
            <h3>Test method:</h3>
            <p>
              The process of exercising one or more assessment objects (i.e., activities or mechanisms) under specified conditions to compare actual with expected behavior.
            </p>
            <p>
              Netcom Assessment is the ongoing process of gathering, analysing and interpreting evidence, reflecting on findings, making informed and consistent judgements to improve student learning.
            </p>
            <p>
              Assessment for improved student learning and deep understanding requires a range of assessment practices to be used with three overarching purposes
            </p>
          </div>

          <div className="assess-card">
            <h3>Assessment for learning:</h3>
            <p>
              <strong>Assessment for learning:</strong> occurs when teachers use inferences about student progress to inform their teaching
            </p>
            <p>
              <strong>Assessment for learning:</strong> occurs when students reflect on and monitor their progress to inform their future learning goals
            </p>
            <p>
              <strong>Assessment for learning:</strong> occurs when teachers use evidence of student learning to make judgements on student achievement against goals and standards
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us. Also we can add/update new features and design changes in this product. If you want To discuss about this product and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73050 23014</strong>.
            </p>
            <button
              type="button"
              className="btn-request-demo"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Request a Demo
            </button>
          </div>
          <div className="prod-cta-image">
            <img src={contactUsImg} alt="Netcom Support Representative" />
          </div>
        </section>
      </main>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="prod-modal-backdrop" onClick={() => setIsDemoModalOpen(false)}>
          <div className="prod-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="prod-modal-header">
              <h3>Request a Demo</h3>
              <button
                type="button"
                className="prod-modal-close"
                onClick={() => setIsDemoModalOpen(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            {demoSuccess ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ fontSize: "3rem", color: "#1b8754", marginBottom: "12px" }}>✓</div>
                <h4 style={{ color: "#0e4a34", fontSize: "1.3rem", margin: "0 0 10px" }}>Thank You!</h4>
                <p style={{ color: "#4f5d54" }}>Your demo request for Assessment Tool has been received.</p>
                <button
                  type="button"
                  className="prod-modal-submit"
                  onClick={() => setIsDemoModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <form className="prod-modal-form" onSubmit={handleDemoSubmit}>
                <div className="prod-form-group">
                  <label htmlFor="assess-demo-name">Your Full Name *</label>
                  <input
                    id="assess-demo-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={demoFormData.name}
                    onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="assess-demo-inst">Institution / School Name *</label>
                  <input
                    id="assess-demo-inst"
                    type="text"
                    required
                    placeholder="e.g. Oxford Public School"
                    value={demoFormData.institution}
                    onChange={(e) => setDemoFormData({ ...demoFormData, institution: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="assess-demo-email">Email Address *</label>
                  <input
                    id="assess-demo-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={demoFormData.email}
                    onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="assess-demo-phone">Phone Number *</label>
                  <input
                    id="assess-demo-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={demoFormData.phone}
                    onChange={(e) => setDemoFormData({ ...demoFormData, phone: e.target.value })}
                  />
                </div>
                <div className="prod-form-group">
                  <label htmlFor="assess-demo-msg">Specific Requirements</label>
                  <textarea
                    id="assess-demo-msg"
                    rows="3"
                    placeholder="Tell us about assessment types, student strength..."
                    value={demoFormData.message}
                    onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="prod-modal-submit">
                  Submit Demo Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AssessmentTool;
