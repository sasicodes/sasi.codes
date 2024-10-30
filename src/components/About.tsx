import React, { useEffect, useState } from "react";
import CustomLink from "./CustomLink";
import avaraImage from "../../public/avara.webp";
import lensImage from "../../public/lens.webp";
import tapeImage from "../../public/tape.webp";
import nyolingImage from "../../public/nyoling.webp";
import {
  AVARA_URL,
  LENS_URL,
  SOCIALS,
  TAPE_GITHUB_URL,
  TAPE_URL,
} from "@/helpers/socials";

const About = () => {
  const [social, setSocial] = useState(SOCIALS[0]);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * SOCIALS.length);
    setSocial(SOCIALS[randomNumber]);
  }, []);

  return (
    <div className="max-w-lg leading-8 text-center">
      Crafting products on the internet since 2019. It all began in a startup
      five years ago, learned and built applications for small businesses to big
      enterprises. Now, crafting my first{" "}
      <CustomLink url={TAPE_GITHUB_URL} content="open-source" /> project called{" "}
      <CustomLink url={TAPE_URL} content="Tape" image={tapeImage} />, an open
      social media. Before that, fortunate to be a part of{" "}
      <CustomLink url={AVARA_URL} content="Avara" image={avaraImage} />,
      contributing to exciting products at{" "}
      <CustomLink url={LENS_URL} content="Lens" image={lensImage} />. I live in
      தமிழ்நாடு. Find me everywhere as{" "}
      <CustomLink url={social} content="@sasicodes" image={nyolingImage} />.
    </div>
  );
};

export default About;
