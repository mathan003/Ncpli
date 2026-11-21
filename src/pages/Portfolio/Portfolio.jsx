import React from "react";
import { useParams } from "react-router-dom";

import ARVR from "./ARVR/ARVR.jsx";
import Robotics from "./Robotics/Robotics.jsx";
import NetcomSmartClass from "./NetcomSmartClass/NetcomSmartClass.jsx";
import Kiosk from "./Kiosk/Kiosk.jsx";
import SkillDevelopment from "./SkillDevelopment/SkillDevelopment.jsx";
import DigitalContent from "./DigitalContent/DigitalContent.jsx";
import YouTube from "./YouTube/YouTube.jsx";
import NotFound from "../NotFound.jsx";

function Portfolio() {
  const { category = "ar&vr" } = useParams();
  const normalizedCategory = String(category).toLowerCase().replace(/&/g, "-");

  switch (normalizedCategory) {
    case "ar-vr":
      return <ARVR />;
    case "robotics":
      return <Robotics />;
    case "netcom-smart-class":
      return <NetcomSmartClass />;
    case "kiosk":
      return <Kiosk />;
    case "skill-development":
      return <SkillDevelopment />;
    case "digital-content":
      return <DigitalContent />;
    case "youtube":
      return <YouTube />;
    default:
      return <NotFound />;
  }
}

export default Portfolio;

