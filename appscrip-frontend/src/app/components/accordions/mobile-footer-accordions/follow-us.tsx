import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";

const FollowUs = () => {
  const imageSrc = [
    "/assets/insta.svg",
    "/assets/linkdin.svg",
    "/assets/gpay.svg",
    "/assets/mastercard.svg",
    "/assets/paypal.svg",
    "/assets/amex.svg",
    "/assets/apple-pay.svg",
    "/assets/opay.svg",
  ];
  return (
    <div className="border-b border-white">
      <Accordion style={{ backgroundColor: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-white font-bold">FOLLOW US</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="flex flex-col gap-4 ">
            <li className="flex gap-1">
              {imageSrc.map((ele, i) => {
                if (i < 2) {
                  return (
                    <Image key={i} src={ele} width={48} height={48} alt={ele} />
                  );
                }
              })}
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FollowUs;
