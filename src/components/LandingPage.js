import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Typed from "react-typed";

//Import logo
import RNRLogoNobg from "../image/RNR_nobg.png";
import RNRbg from "../image/rnr_bg.png";

class LandingPage extends Component {
  render() {
    const transition = {
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    };

    const showTexts = [
      "Crafts",
      "Tags",
      "Labels",
      "Cards",
      "Receipts",
      "Pads",
      "Planners",
      "Workbook",
      "Souvenirs",
      "Photo Prints",
      "Loot Bags",
      "Banners",
      "Toppers",
      "Keychains",
      "Earrings",
    ];

    return (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={transition}
      >
        <div
          className="
            max-h-full
            h-screen
        bg-dark_violet
             pt-5
            pb-5
    "
        >
          <div
            className="
                max-h-full
                h-screen
                rounded-3xl 
                bg-light_violet
                mx-5
      "
          >
            <div className="grid place-items-center h-5/6">
              <div className="    ">
                <div className="flex flex-col justify-center">
                  <div>
                    <img
                      // initial={{ scale: 0 }}
                      // animate={{ scale: 1 }}
                      // exit={{ scale: 0 }}

                      src={RNRLogoNobg}
                      height={700}
                      width={700}
                    />
                  </div>
                  <span className="font-bold text-dark_violet font-roboto text-3xl text-center md:text-5xl ">
                    RnR Prints &{" "}
                    <Typed
                      className="font-bold text-dark_violet font-roboto text-3xl text-center md:text-5xl "
                      strings={showTexts}
                      typeSpeed={120}
                      backSpeed={140}
                      loop
                    />
                  </span>
                </div>

                <div className="mt-5 flex justify-center">
                  <Link to={"/homepage"}>
                    <motion.button
                      
                      whileHover={{ scale: 1.3 }}
                      transition={transition}
                      className="bg-dark_violet rounded-md font-semibold text-lg text-light_violet py-3 px-16"
                    >
                      Explore Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default LandingPage;
