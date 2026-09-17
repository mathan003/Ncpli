import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ProductsPage from "./pages/Products/ProductsPage.jsx";
import Service from "./pages/Service/Service.jsx";
import Portfolio from "./pages/Portfolio/AR&VR/Portfolio.jsx";
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Navigate to="/projects/digital-content" replace />} />
        <Route path="/projects/:category" element={<Projects />} />
        <Route path="/products" element={<Navigate to="/products/smart-class-room" replace />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/service" element={<Navigate to="/service/graphic-design" replace />} />
        <Route path="/service/:category" element={<Service />} />
        <Route path="/portfolio" element={<Navigate to="/portfolio/ar&vr" replace />} />
        <Route path="/portfolio/:category" element={<Portfolio />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
