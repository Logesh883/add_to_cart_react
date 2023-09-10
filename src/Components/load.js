import { useEffect } from "react";
import React from "react";
import imgSVG from "./Images/3225130.svg";
import Icon from "./Images/Online-shopping-logo-design-template-on-transparent-background-PNG.png";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Load() {
  const animationLogo = {
    initial: {
      x: -110,
    },
    animate: {
      x: 1350,
    },
  };

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 6, delay: 3 });
    return animation.stop;
  }, []);

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/home");
  }, 9200);

  return (
    <>
      <div className="bg-[#0B2447] w-screen min-h-screen flex  flex-wrap overflow-x-hidden">
        <div className="flex flex-col justify-evenly">
          <motion.div
            className="flex justify-evenly "
            initial={{ y: "-100vw" }}
            animate={{
              y: 0,
            }}
            transition={{
              ease: "easeOut",
              duration: 2,
            }}
          >
            <img src={Icon} alt="Icon" className="w-[25%] " />
            <h2 className="text-9xl font-bold mt-32 uppercase tracking-widest bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
              Shopify
            </h2>
          </motion.div>

          <motion.div
            className="mt-7"
            variants={animationLogo}
            initial="initial"
            animate="animate"
            transition={{ ease: "easeInOut", duration: 7, delay: 2 }}
          >
            <img src={imgSVG} alt="Imag_Animated" className="w-[7%] " />
            <motion.div className="text-pink-500 ml-12 mt-2">
              {rounded}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Load;
