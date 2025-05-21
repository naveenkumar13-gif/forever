import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/index";
import BestSeller from "../../components/bestSeller";
import OurPolicy from "../../components/ourpolicy";
import NewSletterBox from "../../components/newsletter";
import LeatestCollection from "../../components/letestCollection";

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
      <LeatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewSletterBox />
    </div>
  );
}

export default Home;
