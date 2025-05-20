import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/index";
import Collection from "../collection";
import BestSeller from "../../components/bestSeller";

function Home() {
  const [opacity, setOpacity] = useState(false);
  useEffect(() => setOpacity(true), []);
  return (
    <div
      className={`transition-opacity duration-[2s] ${
        opacity ? "opacity-100" : "opacity-0"
      }`}
    >
      <Hero />
      <Collection />
      <BestSeller />
    </div>
  );
}

export default Home;
