import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SuitableFor = () => {
  return (
   
         <Accordion style={{ boxShadow: "none" }} className="border-b border-[#E5E5E5]">
        <AccordionSummary
          style={{ padding: "0px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="pt-6 w-full items-start text-[#252020] font-bold">
            SUITABLE FOR <br />
            <span className="text-[#252020] font-normal">All</span>
          </p>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "0px" }}>
          <div className="py-6">
           Demo data
          </div>
        </AccordionDetails>
      </Accordion>
    
  )
}

export default SuitableFor