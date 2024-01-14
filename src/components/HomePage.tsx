"use client";

import React from "react";
import AnimatedSign from "./AnimatedSign";
import Logo from "./Logo";
import About from "./About";

const HomePage = () => {
  return (
    <div className="space-y-5 md:space-y-10">
      <Logo />

      <About />

      <div className="w-[0.5px] h-24 bg-gradient-to-b to-orange-500/90 from-orange-100 rounded-lg mx-auto" />

      <div className="flex justify-center">
        <AnimatedSign />
      </div>
    </div>
  );
};

export default HomePage;
