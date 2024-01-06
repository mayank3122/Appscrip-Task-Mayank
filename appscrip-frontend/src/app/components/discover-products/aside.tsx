import React from "react";
import Ideal from "../accordions/filter-accordions/ideal";
import Ocassion from "../accordions/filter-accordions/ocassion";
import Work from "../accordions/filter-accordions/work";
import Fabric from "../accordions/filter-accordions/fabric";
import Segment from "../accordions/filter-accordions/segment";
import SuitableFor from "../accordions/filter-accordions/suitable-for";
import RawMaterial from "../accordions/filter-accordions/raw-materials";
import Patterns from "../accordions/filter-accordions/patterns";

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
