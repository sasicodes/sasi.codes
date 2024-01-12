import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = () => {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <motion.div
      key={animationKey}
      className="flex justify-center cursor-pointer"
      initial={{ rotate: 0 }}
      animate={{ y: [0, -10, 0], rotate: 180 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      onClick={() => setAnimationKey((prev) => prev + 1)}
    >
      <Image
        className="rounded rotate-180"
        src="/studio.webp"
        alt="studio"
        width={40}
        height={40}
        draggable={false}
      />
    </motion.div>
  );
};

export default Logo;
