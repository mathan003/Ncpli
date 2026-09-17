import { Link, useParams } from "react-router-dom";
import "../PageHero.css";

const productImages = import.meta.glob(
  [
    "../../assets/image/project/**/*.{png,jpg,jpeg,webp}",
    "../../assets/image/home screen/**/*.{png,jpg,jpeg,webp}",
  ],
  {
    eager: true,
    import: "default",
    query: "?url",
  },
);

const PRODUCTS = {
  "smart-class-room": { title: "Smart Class Room", folder: "Smart Class Room", description: "Smart Classroom is a computer-enabled classroom with interactive learning software that helps teachers manage lessons and encourage collaboration.", features: ["Interactive teaching", "Digital content delivery", "Teacher training", "Classroom hardware", "Student engagement", "Learning analytics"] },
  gilgal: { title: "Educational Mobile App - Gilgal", folder: "Educational Mobile App - Gilgal", description: "Gilgal is an online learning app personalized for CBSE, ICSE and State Board students, with curriculum-aligned resources for learners.", features: ["Personalized learning", "Curriculum resources", "Video lessons", "Practice activities", "Progress tracking", "Mobile access"] },
  emis: { title: "Educational Management Information System", folder: "Educational Management Information System", description: "EMIS connects students, teachers, parents and school management with structured academic information and everyday administration tools.", features: ["Student records", "Academic calendar", "Attendance", "Reports", "Parent portal", "Administration tools"] },
  "assessment-tool": { title: "Assessment Tool", folder: "Assessment Tool", description: "Netcom Assessment helps institutions collect, evaluate and understand learner performance through secure digital assessments.", features: ["Online tests", "Question banks", "Automated results", "Performance insights", "Secure access", "Reports"] },
};

const fallbackImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><rect width='800' height='450' fill='#e7e7e7'/><text x='50%' y='52%' text-anchor='middle' font-family='Arial' font-size='48' font-weight='700' fill='#222'>PRODUCT</text></svg>")}`;

function getProductImage(folder) {
  const cleanFolder = folder.toLowerCase().replace(/[^a-z0-9]/g, "");
  const match = Object.entries(productImages).find(([path]) => {
    const cleanPath = path.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanPath.includes(cleanFolder);
  });
  return match ? match[1] : fallbackImage;
}

function ProductsPage() {
  const { category = "smart-class-room" } = useParams();
  const product = PRODUCTS[category] || PRODUCTS["smart-class-room"];

  return (
    <>
      <section className="detail-hero detail-hero--product">
        <div className="container"><span className="detail-kicker">PRODUCT</span><h1>{product.title}</h1><p>{product.description}</p></div>
      </section>
      {/* ================= BREADCRUMB CAPSULE ================= */}
      <div className="cs-breadcrumb-wrapper">
        <nav className="cs-breadcrumb-capsule" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <Link to="/products">Products</Link>
          <span className="cs-breadcrumb-separator">›</span>
          <span className="cs-breadcrumb-current">{product.title}</span>
        </nav>
      </div>
      <main className="detail-page">
        <section className="detail-intro">
          <div><h2>{product.title}</h2><p>{product.description}</p><p>Our products combine thoughtful design, useful technology and dependable support to make daily work and learning easier.</p></div>
          <img src={getProductImage(product.folder)} alt={product.title} />
        </section>
        <h2 className="detail-section-title">Highlights of {product.title}</h2>
        <section className="detail-grid">{product.features.map((feature) => <article className="detail-card" key={feature}><h3>{feature}</h3><p>Built around simple workflows, reliable technology and measurable outcomes.</p><span className="detail-arrow">→</span></article>)}</section>
        <section className="detail-cta"><div><h2>Need this product?</h2><p>Request a demonstration and learn how Netcom can support your institution.</p></div><Link to="/contact" className="btn btn-accent">Request a demo</Link></section>
      </main>
    </>
  );
}

export default ProductsPage;
