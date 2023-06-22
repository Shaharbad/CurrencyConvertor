import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import "./index.css";
import Navbar from "./Navbar";

document.body.classList.add("overflow-hidden");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar />
    <div className="flex justify-center mt-40 h-screen">
    <div className="bg-gray-100 h-1/2 w-80 md:w-96 lg:w-120 rounded-lg">
        <Home />
      </div>
    </div>
  </div>
);
