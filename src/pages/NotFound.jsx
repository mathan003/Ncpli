import { Link } from "react-router-dom";
import "./PageHero.css";

function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Page not found</h1>
          <p>The page you're looking for doesn't exist or may have moved.</p>
        </div>
      </section>

      <section className="page-placeholder">
        <p>Double check the link, or head back to the home page.</p>
        <Link to="/" className="btn btn-accent">Back to home</Link>
      </section>
    </>
  );
}

export default NotFound;
