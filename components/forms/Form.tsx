"use client";

import React, { useState } from "react";
import CheckBox from "../inputs/CheckBox";
import PageSubmitButton from "../buttons/PageSubmitButton";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const PagesForm = () => {
  // dynamic pages
  const pages = [
    "page 1",
    "page 2",
    "page 3",
    "page 4",
    "page 5",
    "page 6",
    "page 7",
    "page 8",
    "page 9",
    "page 10",
  ];
  const [checkboxes, setCheckboxes] = useState(
    pages.map((page) => ({ name: page, isChecked: false }))
  );
  const [allPages, setAllPages] = useState({
    name: "All Pages",
    isChecked: false,
  });

  const handleSelectAllPages = () => {
    setAllPages((prev) => {
      const newCheckedState = !prev.isChecked;
      setCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map((box) => ({ ...box, isChecked: newCheckedState }))
      );
      return { ...prev, isChecked: newCheckedState };
    });
  };

  const handleSelectPage = (prop: { name: string; isChecked: boolean }) => {
    setCheckboxes((boxes) =>
      boxes.map((box) =>
        box.name === prop.name
          ? { ...box, isChecked: !box.isChecked }
          : { ...box }
      )
    );
  };
  return (
    <div className="w-[370px] rounded-md px-6 py-3 shadow-custom">
      <form className={montserrat.className}>
        <div className="border-b ">
          <CheckBox prop={allPages} onClick={() => handleSelectAllPages()} />
        </div>

        <div className="h-[270px] w-full overflow-x-auto no-scrollbar">
          {checkboxes.map((prop) => (
            <div key={prop.name} className="flex items-center">
              <CheckBox prop={prop} onClick={() => handleSelectPage(prop)} />
            </div>
          ))}
        </div>
        <div className="border-t pt-3">
          <PageSubmitButton>Done</PageSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default PagesForm;
