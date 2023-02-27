import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

//imported components
import LandingPage from "./LandingPage";
import HomePage from "./Homepage";



const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Home */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
