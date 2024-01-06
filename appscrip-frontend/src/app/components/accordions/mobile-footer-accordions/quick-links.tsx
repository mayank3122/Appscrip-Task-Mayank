import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuickLinks = () => {
  return (
    <div className="border-b border-white">
      <Accordion style={{ backgroundColor: "black" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-white font-bold">QUICK LINKS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="flex text-white font-medium flex-col gap-4">
            <li>Orders & Shipping </li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QuickLinks;
