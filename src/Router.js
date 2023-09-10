import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Load from "./Components/load";
import Home from "./Components/HomePage";

function Navigation() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Load />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export { Navigation };
