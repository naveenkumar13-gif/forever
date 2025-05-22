import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useLocation } from "react-router-dom";

function SearchBar({ showSearch, setShowSearch }) {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes("/collection") && showSearch);
  }, [location.pathname, showSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-3 rounded-full w-3/4  mx-3">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.search_icon} alt="serah" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt="serah"
        className="w-4 inline cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
}

export default SearchBar;
