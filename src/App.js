import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, Children } from "react";

import { Navbar } from './component';
import { Beranda, Login, Register, IsiForm, KirimApi, UnggahFile } from './pages';

function App() {
  useEffect(() => {
    // getResponse()
  });
  return (
    <div>
      <Routes>
        <Route path="/register" element={
                <Register />
                } 
            />
        <Route path="/login" element={
                <Login />
                } 
            />
        <Route path="/" element={
            // <PrivateRoute>
                <Navbar>
                    <Beranda />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/cekdata/unggahfile" element={
            // <PrivateRoute>
                <Navbar>
                    <UnggahFile />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/cekdata/isiform" element={
            // <PrivateRoute>
                <Navbar>
                    <IsiForm />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/cekdata/kirimapi" element={
            // <PrivateRoute>
                <Navbar>
                    <KirimApi />
                </Navbar>
            // </PrivateRoute>
            } 
        />
      </Routes>
    </div>
  );
}

export default App;
