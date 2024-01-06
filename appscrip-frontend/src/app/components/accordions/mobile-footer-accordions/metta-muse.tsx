import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MettaMuse = () => {
  return (
    <div className="border-b border-white">
      <Accordion style={{backgroundColor: 'black'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-white text-xl font-bold">mettā muse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className="flex text-white font-medium flex-col gap-4">
          <li>About Us</li>
          <li>Stories</li>
          <li>Artisans</li>
          <li>Boutiques</li>
          <li>Contact Us</li>
          <li>EU Compliances Docs</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MettaMuse;
