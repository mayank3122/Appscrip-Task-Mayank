"use client";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Ideal = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, checked: false, name: "Men" },
    { id: 2, checked: false, name: "Women" },
    { id: 3, checked: false, name: "Baby & kids" },
  ]);
  const handleCheckboxChange = (clickedId: number) => {
    setCheckboxes((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === clickedId
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };
  const handleUnselectAll = () => {
    setCheckboxes((prevState) =>
      prevState.map((checkbox) => ({
        ...checkbox,
        checked: false,
      }))
    );
  };
  const isAnyChecked = checkboxes.some((checkbox) => checkbox.checked);

  return (
      <Accordion style={{ boxShadow: "none" }} className="border-t border-b border-[#E5E5E5]">
        <AccordionSummary
          style={{ padding: "0px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="pt-6 w-full items-start text-[#252020] font-bold">
            IDEAL FOR <br />
            <span className="text-[#252020] font-normal">All</span>
          </p>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "0px" }}>
          <div className="flex flex-col gap-2">
            <p
              onClick={handleUnselectAll}
              className={`cursor-pointer underline ${isAnyChecked ? 'text-black' : 'text-[#BFC8CD]'} text-base font-normal`}
            >
              Unselect all
            </p>
            <div className="flex flex-col py-6 gap-6">
              {checkboxes.map((checkbox) => (
                <div key={checkbox.id} className="flex gap-3">
                  <input
                    type="checkbox"
                    name={checkbox.name}
                    id={checkbox.name}
                    className="cursor-pointer"
                    checked={checkbox.checked}
                    onChange={() => handleCheckboxChange(checkbox.id)}
                  />
                  <label
                    htmlFor={checkbox.name}
                    className="cursor-pointer text-[#252020] text-base font-normal"
                  >
                    {checkbox.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
  );
};

export default Ideal;
