import React from "react";
import Ideal from "../accordions/ideal";
import Ocassion from "../accordions/ocassion";
import Work from "../accordions/work";
import Fabric from "../accordions/fabric";
import Segment from "../accordions/segment";
import SuitableFor from "../accordions/suitable-for";
import RawMaterial from "../accordions/raw-materials";
import Patterns from "../accordions/patterns";

const Aside = () => {
  return (
    <div>
      <Ideal />
      <Ocassion/>
      <Work/>
      <Fabric/>
      <Segment/>
      <SuitableFor/>
      <RawMaterial/>
      <Patterns/>
    </div>
  );
};

export default Aside;
