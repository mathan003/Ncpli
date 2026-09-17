import { useParams } from "react-router-dom";
import CustomSoftwareDevelopment from "./CustomSoftwareDevelopment/softwareDevelopment.jsx";
import GraphicDesign from "./GraphicDesign/GraphicDesign.jsx";
import Econtent from "./EContentDevelopment/Econtent.jsx";
import WebApplication from "./WebApplicationDevelopment/WebApplication.jsx";
import MobileApplication from "./MobileApplicationDevelopment/MobileApplication.jsx";
import WebHostingServices from "./WebHostingServices/WebHostingServices.jsx";
import HardwareSupport from "./HardwareSupport/HardwareSupport.jsx";
import ShortFilm from "./ShortFilm/ShortFilm.jsx";

function Service() {
  const { category = "graphic-design" } = useParams();

  switch (category) {
    case "graphic-design":
      return <GraphicDesign />;
    case "e-content-development":
      return <Econtent />;
    case "web-application-development":
      return <WebApplication />;
    case "mobile-application-development":
      return <MobileApplication />;
    case "web-hosting-services":
      return <WebHostingServices />;
    case "custom-software-development":
      return <CustomSoftwareDevelopment />;
    case "hardware-support":
      return <HardwareSupport />;
    case "short-film":
      return <ShortFilm />;
    default:
      return <GraphicDesign />;
  }
}

export default Service;
