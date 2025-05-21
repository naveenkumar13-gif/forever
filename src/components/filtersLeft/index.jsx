import React, { useState } from "react";
import { assets } from "../../assets/assets";

function FiltersLeft() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex flex-col gap-1 pt-10 border-t">
      <div className="max-w-60 ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center gap-2 cursor-pointer"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 hidden max-sm:block ${
              showFilter ? "rotate-90" : ""
            }`}
            alt="dropdownIcon"
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 outline-none"
                value={"Men"}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 outline-none"
                value={"Women"}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 outline-none"
                value={"Kids"}
              />{" "}
              Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 outline-none"
                value={"TopWears"}
              />{" "}
              TopWears
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 outline-none"
                value={"BottomWears"}
              />{" "}
              BottomWears
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 outline-none"
                value={"WinterWears"}
              />{" "}
              WinterWears
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiltersLeft;
