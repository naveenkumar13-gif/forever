import React, { useEffect, useState } from "react";
import { assets, products } from "../../assets/assets";
import Title from "../../components/title";
import ProductItem from "../../components/productItem";

function Collection() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    setFilterProduct(products);
  }, []);
  return (
    <div className="flex justify-between gap-10  pt-10 border-t">
      <div className="flex flex-col gap-1">
        <div className="min-w-60 ">
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
      <div className="flex-1">
        <div className="flex justify-between text-base mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select className="border-2 border-gray-400 text-sm px-2">
            <option value={"relevent"}>Sort by:Revelent</option>
            <option value={"low-high"}>Sort by:Low to High</option>
            <option value={"high-low"}>Sort by:High to Low </option>
          </select>
        </div>
        <div className="grid grid-cols-5 gap-4  gap-y-6 max-sm:grid-cols-2 ">
          {filterProduct.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
