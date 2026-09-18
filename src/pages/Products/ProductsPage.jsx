import React from "react";
import { useParams } from "react-router-dom";

import SmartClassRoom from "./SmartClassRoom/SmartClassRoom.jsx";
import SmartTailorShop from "./SmartTailorShop/SmartTailorShop.jsx";
import OnlineCabBooking from "./OnlineCabBooking/OnlineCabBooking.jsx";
import EMIS from "./EMIS/EMIS.jsx";
import AssessmentTool from "./AssessmentTool/AssessmentTool.jsx";
import Gilgal from "./Gilgal/Gilgal.jsx";

function ProductsPage() {
  const { category = "smart-class-room" } = useParams();

  switch (category) {
    case "smart-class-room":
      return <SmartClassRoom />;
    case "smart-tailor-shop":
      return <SmartTailorShop />;
    case "online-cab-booking":
      return <OnlineCabBooking />;
    case "emis":
      return <EMIS />;
    case "assessment-tool":
      return <AssessmentTool />;
    case "gilgal":
      return <Gilgal />;
    default:
      return <SmartClassRoom />;
  }
}

export default ProductsPage;
