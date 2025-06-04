import React, { useEffect, useState } from "react";
import { assets, products } from "../../assets/assets";
import Title from "../../components/title";
import ProductItem from "../../components/productItem";

function Collection({ showSearch, search }) {
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    let filtered = products;

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategories.length > 0) {
      filtered = filtered.filter((item) =>
        subCategories.includes(item.subCategory)
      );
    }

    if (sortOption === "low-high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilterProduct(filtered);
  }, [category, subCategories, sortOption, showSearch, search]);
  useEffect(() => {
    if (showSearch) {
      setShowFilter(false);
    }
  }, [showSearch]);

  return (
    <div className="flex justify-between gap-10 pt-10 border-t max-sm:flex-col max-sm:gap-0">
      <div className="flex flex-col gap-1">
        <div className="min-w-60">
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
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3 outline-none"
                    value={cat}
                    onChange={toggleCategory}
                    checked={category.includes(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div
            className={`border border-gray-300 pl-5 py-3 my-5 ${
              showFilter ? "" : "hidden"
            } sm:block `}
          >
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                <label key={type} className="flex gap-2">
                  <input
                    type="checkbox"
                    className="w-3 outline-none"
                    value={type}
                    onChange={toggleSubCategory}
                    checked={subCategories.includes(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-2xl mb-4 max-sm:flex-col max-sm:items-center max-sm:mb-8">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            className="border-2 border-gray-400 text-sm px-2 "
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-5 gap-4 gap-y-6 max-sm:grid-cols-2 max-md:grid-cols-3">
          {filterProduct.length > 0 ? (
            filterProduct.map((item, index) => (
              <ProductItem
                key={index}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-5 text-center">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
} 
export default Collection;
