import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Assessment.css";

import contactUsImg from "../../../assets/image/product/contact us.png";

function Assessment() {
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
      const subject = encodeURIComponent("Demo Request: Assessment Tool");
      const body = encodeURIComponent(
        `Name: ${demoFormData.name}\nEmail: ${demoFormData.email}\nPhone: ${demoFormData.phone}\nInstitution: ${demoFormData.institution}\nProject: Assessment Tool\n\nMessage:\n${demoFormData.message}`
      );
      window.location.href = `mailto:support@ncpli.com?subject=${subject}&body=${body}`;
    }, 500);
  };

  return (
    <div className="prod-page-wrapper assess-page-wrapper">
      {/* Hero Banner */}
      <section className="prod-hero">
        <div className="prod-hero-container">
          <h1 className="prod-hero-title">PROJECT</h1>
          <p className="prod-hero-subtitle">Designed for the way you work.</p>
        </div>
      </section>

      {/* Floating Capsule Breadcrumb */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/projects">Project</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">Assessment Tool</span>
        </nav>
      </div>

      <main className="prod-container assess-main-container">
        {/* Main Title: ASSESSMENT TOOL */}
        <h1 className="assess-page-title">ASSESSMENT TOOL</h1>

        {/* First Arrow Callout Card */}
        <div className="assess-callout-card">
          <span className="assess-arrow-icon">➔</span>
          <p>
            Netcom Assessment is The Process Of Gathering And Discussing Information From Multiple And Diverse Sources In Order To Develop A Deep Understanding Of What Students Know, Understand, And Can Do With Their Knowledge As A Result Of Their Educational Experiences. Netcom Process Culminates When Assessment Results Are Used To Improve Subsequent Learning. Assessment Is The Systematic Basis For Making Inferences About The Learning And Development Of Students. Netcom Process Is About Defining, Selecting, Designing, Collecting, Analyzing, Interpreting, And Using Information To Increase Students&apos; Learning And Development. Assessment Is The Systematic Collection, Review, And Use Of Information About Educational Programs Undertaken For The Purpose Of Improving Student Learning And Development.
          </p>
        </div>

        {/* Section Heading: Purpose of Assessment */}
        <h2 className="assess-section-heading">Purpose of Assessment</h2>

        {/* Second Arrow Callout Card */}
        <div className="assess-callout-card">
          <span className="assess-arrow-icon">➔</span>
          <p>
            Two Common Phrases Surrounding Assessment Recently Are Assessment For Improvement And Assessment For Accountability. While Assessment For Accountability Is An Important Reason To Initiate And Conduct Assessment, The Real Benefit To An Institution And Its Students Come From The Discussions And Changes That Happen As A Result Of Assessment For Improvement. Many Staff Are Motivated By The Benefits Of Focusing On Assessment For Improving The Quality Of Teaching, Learning, Programs And Services, And Planning And Decision Making. The Purpose Of Assessment For Accountability Is To Demonstrate The Effectiveness Of Programs And Services Across The Institution To Various Audiences, Including Parents. An Assessment Cycle Effectively Addressing Assessment For Improvement Will Also Provide The Necessary Evidence For Accountability.
          </p>
        </div>

        {/* Subtitle Intro Line */}
        <h3 className="assess-methods-intro-line">
          Netcom Assessment methods define the nature of the assessor actions and include:
        </h3>

        {/* 4 Methods 2x2 Grid */}
        <div className="assess-methods-grid">
          {/* 1. Examine Method */}
          <div className="assess-method-card">
            <h4 className="assess-card-title">Examine method:</h4>
            <p className="assess-card-desc">
              The process of reviewing, inspecting, observing, studying, or analyzing one or more assessment objects (i.e., specifications, mechanisms, or activities). The purpose of the examine method is to facilitate assessor understanding, achieve clarification, or obtain evidence.
            </p>
          </div>

          {/* 2. Interview Method */}
          <div className="assess-method-card">
            <h4 className="assess-card-title">Interview method:</h4>
            <p className="assess-card-desc">
              The process of holding discussions with individuals or groups of individuals within an organization to, once again, facilitate assessor understanding, achieve clarification, or obtain evidence.
            </p>
          </div>

          {/* 3. Test Method */}
          <div className="assess-method-card">
            <h4 className="assess-card-title">Test method:</h4>
            <p className="assess-card-desc">
              The process of exercising one or more assessment objects (i.e., activities or mechanisms) under specified conditions to compare actual with expected behavior.
            </p>
            <p className="assess-card-desc" style={{ marginTop: "10px" }}>
              Netcom Assessment is the ongoing process of gathering, analyzing and interpreting evidence, reflecting on findings, making informed and consistent judgements to improve student learning.
            </p>
            <p className="assess-card-desc" style={{ marginTop: "10px" }}>
              Assessment for improved student learning and deep understanding requires a range of assessment practices to be used with three overarching purposes.
            </p>
          </div>

          {/* 4. Assessment for Learning */}
          <div className="assess-method-card">
            <h4 className="assess-card-title">Assessment for learning:</h4>
            <p className="assess-card-desc">
              occurs when teachers use inferences about student progress to inform their teaching.
            </p>
            <h4 className="assess-card-title" style={{ marginTop: "16px" }}>
              Assessment for learning:
            </h4>
            <p className="assess-card-desc">
              occurs when students reflect on and monitor their progress to inform their future learning goals.
            </p>
            <h4 className="assess-card-title" style={{ marginTop: "16px" }}>
              Assessment for learning:
            </h4>
            <p className="assess-card-desc">
              occurs when teachers use evidence of student learning to make judgements on student achievement against goals and standards.
            </p>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <section className="prod-cta-card">
          <div className="prod-cta-content">
            <h2>Need this Product? Contact us:</h2>
            <p>
              If you like and want this product, Please feel free to contact us. Also we can add/update new features and design changes in this product. If you want To discuss about this product and our other services, please mail us on <strong>support@ncpli.com</strong> or call <strong>+91 73977 30945</strong>.
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

      {/* Demo Request Modal */}
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
                  <label htmlFor="assess-demo-comp">School / College / Institution Name *</label>
                  <input
                    id="assess-demo-comp"
                    type="text"
                    required
                    placeholder="e.g. SRM Institute / Anna University"
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
                    placeholder="name@institution.edu"
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
                    placeholder="Tell us about student count, evaluation criteria, custom grading scales..."
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

export default Assessment;
