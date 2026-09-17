import { Link } from "react-router-dom";
import "./PageHero.css";

function Career() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Careers</h1>
          <p>Join the Netcom team and help build the future of learning technology.</p>
        </div>
      </section>

      <section className="page-placeholder">
        <p>List open roles and an application form or contact details here.</p>
        <Link to="/" className="btn btn-accent">Back to home</Link>
      </section>
    </>
  );
}

export default Career;
