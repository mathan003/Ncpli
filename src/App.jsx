import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Career from "./pages/Career.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

// Project Pages
import DigitalContent from "./pages/Projects/DigitalContent/DigitalContent.jsx";
import ProjectEMIS from "./pages/Projects/EMIS/EMIS.jsx";
import LanguageLab from "./pages/Projects/LanguageLab/LanguageLab.jsx";
import CallSoft from "./pages/Projects/CallSoft/CallSoft.jsx";
import Assessment from "./pages/Projects/Assessment/Assessment.jsx";
import SkillDevelopment from "./pages/Projects/SkillDevelopment/SkillDevelopment.jsx";
import ICTHiTechLab from "./pages/Projects/ICTHiTechLab/ICTHiTechLab.jsx";
import Kiosk from "./pages/Projects/Kiosk/Kiosk.jsx";
import RFID from "./pages/Projects/RFID/RFID.jsx";

// Product Pages
import SmartClassRoom from "./pages/Products/SmartClassRoom/SmartClassRoom.jsx";
import SmartTailorShop from "./pages/Products/SmartTailorShop/SmartTailorShop.jsx";
import OnlineCabBooking from "./pages/Products/OnlineCabBooking/OnlineCabBooking.jsx";
import ProductEMIS from "./pages/Products/EMIS/EMIS.jsx";
import AssessmentTool from "./pages/Products/AssessmentTool/AssessmentTool.jsx";
import Gilgal from "./pages/Products/Gilgal/Gilgal.jsx";

// Service Pages
import GraphicDesign from "./pages/Service/GraphicDesign/GraphicDesign.jsx";
import Econtent from "./pages/Service/EContentDevelopment/Econtent.jsx";
import ShortFilm from "./pages/Service/ShortFilm/ShortFilm.jsx";
import WebApplication from "./pages/Service/WebApplicationDevelopment/WebApplication.jsx";
import MobileApplication from "./pages/Service/MobileApplicationDevelopment/MobileApplication.jsx";
import WebHostingServices from "./pages/Service/WebHostingServices/WebHostingServices.jsx";
import CustomSoftwareDevelopment from "./pages/Service/CustomSoftwareDevelopment/softwareDevelopment.jsx";
import HardwareSupport from "./pages/Service/HardwareSupport/HardwareSupport.jsx";
import CloudMaintenance from "./pages/Service/CloudMaintenance/CloudMaintenance.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Project Routes */}
        <Route path="/projects" element={<Navigate to="/projects/digital-content" replace />} />
        <Route path="/projects/digital-content" element={<DigitalContent />} />
        <Route path="/projects/emis" element={<ProjectEMIS />} />
        <Route path="/projects/language-lab" element={<LanguageLab />} />
        <Route path="/projects/call-soft" element={<CallSoft />} />
        <Route path="/projects/assessment" element={<Assessment />} />
        <Route path="/projects/skill-development" element={<SkillDevelopment />} />
        <Route path="/projects/ict-hi-tech-lab" element={<ICTHiTechLab />} />
        <Route path="/projects/kiosk" element={<Kiosk />} />
        <Route path="/projects/rfid" element={<RFID />} />

        {/* Product Routes */}
        <Route path="/products" element={<Navigate to="/products/smart-class-room" replace />} />
        <Route path="/products/smart-class-room" element={<SmartClassRoom />} />
        <Route path="/products/smart-tailor-shop" element={<SmartTailorShop />} />
        <Route path="/products/online-cab-booking" element={<OnlineCabBooking />} />
        <Route path="/products/emis" element={<ProductEMIS />} />
        <Route path="/products/assessment-tool" element={<AssessmentTool />} />
        <Route path="/products/gilgal" element={<Gilgal />} />

        {/* Service Routes */}
        <Route path="/service" element={<Navigate to="/service/graphic-design" replace />} />
        <Route path="/service/graphic-design" element={<GraphicDesign />} />
        <Route path="/service/e-content-development" element={<Econtent />} />
        <Route path="/service/short-film" element={<ShortFilm />} />
        <Route path="/service/web-application-development" element={<WebApplication />} />
        <Route path="/service/mobile-application-development" element={<MobileApplication />} />
        <Route path="/service/web-hosting-services" element={<WebHostingServices />} />
        <Route path="/service/custom-software-development" element={<CustomSoftwareDevelopment />} />
        <Route path="/service/hardware-support" element={<HardwareSupport />} />
        <Route path="/service/cloud-maintenance" element={<CloudMaintenance />} />

        {/* Portfolio Routes */}
        <Route path="/portfolio" element={<Navigate to="/portfolio/ar&vr" replace />} />
        <Route path="/portfolio/:category" element={<Portfolio />} />

        {/* Static Routes */}
        <Route path="/career" element={<Career />} />
        <Route path="/career/:roleId" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
