import React from "react";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { motion } from "framer-motion";
import { fadeIn } from "./Variants";

function Contacts() {
  const buttonIcons = [
    {
      name: "RnR Prints & Crafts",
      icon: FaFacebookF,
      link: "https://www.facebook.com/rnrprintsncrafts",
      dis: "trenslate-y-0",
    },
    {
      name: "rnrprintsandcrafts",
      icon: FaInstagram,
      link: "https://www.instagram.com/rnrprintsncrafts/",
      dis: "trenslate-y-16",
    },
    {
      name: "rnrprintabl3s@gmail.com",
      icon: FiMail,
      link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSwKRbbJpZPcXHkJnjSsvjQMFDXxdRsZmPFdshdWpkxRclJJWttfRWKSBKXgTchLvmbjV",
      dis: "trenslate-y-32",
    },
  ];

  const openNewTab = (url) => {
    window.open(url);
  };

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
          border-2
          border-light_violet
        bg-dark_violet
          mx-5
        "
      >
        <div className=" md:pt-28 md:pr-20">
          {/* HTML CONTENTS HERE */}

          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 md:mt-5 md:ml-20">
            <div>
              <div className="flex flex-col px-5 py-5  md:border-8 md:border-light_violet  ">
                <motion.div
                  variants={fadeIn("down", 0.7)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex justify-center"
                >
                  <span className=" text-3xl  md:text-5xl  text-light_violet font-extrabold">
                    THANK YOU!
                  </span>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="flex justify-center"
                >
                  <span className="text-xl sm:text-2xl  md:text-3xl  text-light_violet font-roboto">
                    For supporting our small business
                  </span>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 0.9)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="mt-5 flex justify-center"
                >
                  <span className=" text-base md:text-xl text-center   text-light_violet font-roboto">
                    Get 25 PESOS CASHBACK on your NEXT PURCHASE with minimum
                    worth of 499 pesos!
                  </span>
                </motion.div>

                <motion.div
                  variants={fadeIn("down", 1.0)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="mt-5 flex justify-center"
                >
                  <span className="text-base md:text-xl text-center  text-light_violet font-roboto">
                    Just follow us on our socials and recieve your cashback thru
                    GCASH.
                  </span>
                </motion.div>
                <motion.div
                  variants={fadeIn("down", 1.1)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="mt-5 flex justify-center"
                >
                  <span className="text-base md:text-xl text-center  text-light_violet font-roboto">
                    Dont forget to send us your receipt together with your
                    social media screenshots, following us.
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="">
              <div className="border-2 border-light_violet rounded-lg px-5 md:border-0 md:mt-10 md:flex md:flex-col">
                {buttonIcons.map((menu, i) => (
                  <div className="my-5 ">
                    <button
                      onClick={() => openNewTab(menu.link)}
                      className="
                      flex 
                      gap-5
                      transition 
                      ease-in-out 
                      delay-20
                      hover:-translate-y-1 
                      hover:scale-110 
                    "
                    >
                      <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className=""
                      >
                        <menu.icon className="text-light_violet h-7 w-7 md:h-14 md:w-14" />
                      </motion.div>

                      <motion.div
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                      >
                        <span className="text-base md:text-lg text-light_violet font-roboto">
                          {menu.name}
                        </span>
                      </motion.div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
