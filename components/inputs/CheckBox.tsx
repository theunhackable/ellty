import React from "react";

const CheckBox = ({
  prop,
  onClick,
}: {
  prop: { name: string; isChecked: boolean };
  onClick: () => void;
}) => {
  return (
    <label
      className="flex group hover:cursor-pointer px-6 py-3.5 w-full justify-between items-center"
      htmlFor={prop.name}
    >
      {prop.name}

      <input
        onChange={onClick}
        id={prop.name}
        className=" appearance-none
        hover:cursor-pointer
        w-6 h-6 border rounded-md
        checked:bg-[#2469F6]
        hover:checked:bg-[#5087F8]
        checked:border-none
        bg-no-repeat bg-center
        after:bg-[length:40px] 
        checked:bg-[url('../public/white-check.svg')]
        hover:bg-[url('../public/gray-check.svg')]
        hover:border-[#BDBDBD]
        active:ring-[#b3ccff]
        active:ring-1
        hover:border-[1px]
        "
        type="checkbox"
        checked={prop.isChecked}
      />
    </label>
  );
};

export default CheckBox;
