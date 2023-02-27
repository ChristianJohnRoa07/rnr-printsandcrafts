import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { color, motion } from "framer-motion";

//Components

import NavigationBar from "./Navigation_Bar";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";
import Contacts from "./Contacts";

function HomePage(props) {
  const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96],  };
  return (
    <motion.div
      initial={{ scale: 0}}
      animate={{ scale: 1 }}
      exit={{ scale: 0}}
      transition={transition}
    >
      {/* Home Page */}
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
          {/* Navigation Bar */}

          <div>
            <NavigationBar />
          </div>

          <section id="home">
            <Home />
          </section>
        </div>

        <section id="products">
          <Products />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contacts">
          <Contacts />
        </section>
      </div>
    </motion.div>
  );
}

export default HomePage;
