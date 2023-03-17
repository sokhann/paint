import React from "react";
import { Canvas, Toolbar, Settings } from "./components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Toolbar />
      <Settings />
      <Canvas />
    </div>
  );
};

export default App;
