import React from "react";
import Features from "../Component/LandingFeatures";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import LandingNav from "../Component/LandingNavbar";
import Pricing from "../Component/Pricing";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function LandingPage() {
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div>
      <LandingNav />
      <Hero />
      <Features />
      <Pricing page={"landing"} />
      <Footer />
    </div>
  );
}
