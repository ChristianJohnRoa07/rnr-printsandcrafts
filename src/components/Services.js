import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "./Variants";

function Services() {
  return (
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
        <div
          className="
            rounded-3xl 
          bg-light_violet
            mx-5
          "
        >
          <div className="pt-3 md:pt-28">
            <div className="md:mt-5 flex justify-center">
              <motion.h1
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl md:text-5xl font-bold text-dark_violet"
              >
                SUPPORT LOCAL
              </motion.h1>
            </div>

            <div className="grid justify-items-center grid-cols-1 gap-y-1 mt-3  md:grid-cols-2 md:gap-y-5 md:mt-10 md:px-60">
              <div className="md:grid md:justify-items-end md:ml-20 ">
                <motion.h2
                  variants={fadeIn("right", 1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-base md:text-2xl font-semibold text-dark_violet"
                >
                  BUSINESS ESSENTIALS
                </motion.h2>
                <div className="grid mt-2 justify-items-center md:mt-5 md:justify-items-end">
                  <motion.p
                    variants={fadeIn("right", 1.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Customized Receipts
                  </motion.p>
                  <motion.p
                    variants={fadeIn("right", 1.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Sticker Labels
                  </motion.p>
                  <motion.p
                    variants={fadeIn("right", 1.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Business Cards
                  </motion.p>
                  <motion.p
                    variants={fadeIn("right", 1.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Product Tags
                  </motion.p>
                </div>
              </div>

              <div className="grid justify-items-center md:justify-items-start">
                <motion.h2
                  variants={fadeIn("left", 2.5)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-base md:text-2xl font-semibold text-dark_violet"
                >
                  CUSTOMIZED PRINTABLES
                </motion.h2>
                <div className="grid mt-2 justify-items-center md:mt-5 md:justify-items-start">
                  <motion.p
                    variants={fadeIn("left", 2.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Tracing & Coloring Workbook
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", 2.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Minimalist Fan for Souvenirs
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", 2.8)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Instax-Inspired Photoprints
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", 2.9)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Memo pads & Planners
                  </motion.p>
                </div>
              </div>

              <div className="grid justify-items-center md:justify-items-end">
                <motion.h2
                  variants={fadeIn("right", 1.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-base md:text-2xl font-semibold text-dark_violet"
                >
                  CUSTOMIZED PARTY FAVORS
                </motion.h2>
                <div className=" grid mt-2 justify-items-center md:justify-items-end">
                  <motion.p
                    variants={fadeIn("right", 1.9)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Party Banners with Names
                  </motion.p>
                  <motion.p
                    variants={fadeIn("right", 2.0)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Paper Loot Bags
                  </motion.p>
                  <motion.p
                    variants={fadeIn("right", 2.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Cupcake Toppers
                  </motion.p>
                </div>
              </div>

              <div className="grid justify-items-center md:mr-20  md:justify-items-start">
                <motion.h2
                  variants={fadeIn("left", 3.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-base md:text-2xl font-semibold text-dark_violet"
                >
                  RESIN CRAFTS
                </motion.h2>
                <div className="grid mt-2 justify-items-center md:mt-5 md:justify-items-start">
                  <motion.p
                    variants={fadeIn("left", 3.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Initial & Number Keychains
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", 3.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Aesthetic Earrings
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", 3.6)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    Cat and Dog Name Tags
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", 3.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-sm md:text-lg font-roboto text-dark_violet"
                  >
                    My PAWmily Keychains
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
