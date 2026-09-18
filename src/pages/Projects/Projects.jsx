import React from "react";
import { useParams } from "react-router-dom";

import DigitalContent from "./DigitalContent/DigitalContent.jsx";
import EMIS from "./EMIS/EMIS.jsx";
import LanguageLab from "./LanguageLab/LanguageLab.jsx";
import CallSoft from "./CallSoft/CallSoft.jsx";
import Assessment from "./Assessment/Assessment.jsx";
import SkillDevelopment from "./SkillDevelopment/SkillDevelopment.jsx";
import ICTHiTechLab from "./ICTHiTechLab/ICTHiTechLab.jsx";
import Kiosk from "./Kiosk/Kiosk.jsx";
import RFID from "./RFID/RFID.jsx";
import SmartTailorShop from "./SmartTailorShop/SmartTailorShop.jsx";
import OnlineCabBooking from "./OnlineCabBooking/OnlineCabBooking.jsx";

function Projects() {
  const { category = "digital-content" } = useParams();

  switch (category) {
    case "digital-content":
      return <DigitalContent />;
    case "emis":
      return <EMIS />;
    case "language-lab":
      return <LanguageLab />;
    case "call-soft":
      return <CallSoft />;
    case "assessment":
      return <Assessment />;
    case "skill-development":
      return <SkillDevelopment />;
    case "ict-hi-tech-lab":
      return <ICTHiTechLab />;
    case "kiosk":
      return <Kiosk />;
    case "rfid":
      return <RFID />;
    case "smart-tailor-shop":
      return <SmartTailorShop />;
    case "online-cab-booking":
      return <OnlineCabBooking />;
    default:
      return <DigitalContent />;
  }
}

export default Projects;
