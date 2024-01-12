"use client";

import React from "react";
import AnimatedSign from "./AnimatedSign";
import {
  AVARA_URL,
  LENS_URL,
  SOCIALS,
  TAPE_GITHUB_URL,
  TAPE_URL,
} from "@/helpers/socials";
import CustomLink from "./CustomLink";
import Logo from "./Logo";

const HomePage = () => {
  const social = SOCIALS[Math.floor(Math.random() * SOCIALS.length)];

  return (
    <div className="space-y-5 md:space-y-10">
      <Logo />

      <div className="max-w-lg leading-8 text-center">
        Crafting products on the internet since 2019, It all began in a startup
        five years ago, learned and built applications for small businesses to
        big enterprises. Now, fortunate to be a part of{" "}
        <CustomLink url={AVARA_URL} content="Avara" image="/avara.webp" />,
        contributing to exciting products at{" "}
        <CustomLink url={LENS_URL} content="Lens" image="/lens.webp" />. Also,
        crafting my first{" "}
        <CustomLink url={TAPE_GITHUB_URL} content="open-source" /> project
        called <CustomLink url={TAPE_URL} content="Tape" image="/tape.webp" />,
        a social media platform. I live in Bangalore, India. Find me everywhere
        as{" "}
        <CustomLink url={social} content="@sasicodes" image="/nyoling.webp" />.
      </div>

      <div className="w-[0.5px] h-24 bg-gradient-to-b to-orange-500/90 from-orange-100 rounded-lg mx-auto" />

      <div className="flex justify-center">
        <AnimatedSign />
      </div>
    </div>
  );
};

export default HomePage;
