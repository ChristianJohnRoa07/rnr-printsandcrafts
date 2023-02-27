//dependencies
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

//imported CSS
import "./styles/Main_Styles.css";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <div className="bg-dark_violet">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
