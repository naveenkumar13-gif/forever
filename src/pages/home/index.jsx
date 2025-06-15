import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/index";
import BestSeller from "../../components/bestSeller";
import OurPolicy from "../../components/ourpolicy";
import NewSletterBox from "../../components/newsletter";
import LeatestCollection from "../../components/letestCollection";

function Home() {
  return (
    <div>
      <Hero />
      <LeatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewSletterBox />
    </div>
  );
}

export default Home;
