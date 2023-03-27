import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, Children } from "react";

import Navbar from './component/Navbar';

function App() {
  useEffect(() => {
    // getResponse()
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
