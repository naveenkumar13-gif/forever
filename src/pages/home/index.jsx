import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/index";
import Collection from "../collection";
import BestSeller from "../../components/bestSeller";
import OurPolicy from "../../components/ourpolicy";
import NewSletterBox from "../../components/newsletter";

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
      <OurPolicy />
      <NewSletterBox />
    </div>
  );
}

export default Home;
