import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, Children } from "react";

import { Navbar } from './component';
import { Beranda, 
    Login, 
    Register, 
    IsiForm, 
    KirimApi, 
    UnggahFile, 
    ManajemenPengguna, 
    ManajemenModel,
    Profile,
    EditProfile, 
    EditPassword} from './pages';

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
        <Route path="/manajemen/pengguna" element={
            // <PrivateRoute>
                <Navbar>
                    <ManajemenPengguna />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/manajemen/model" element={
            // <PrivateRoute>
                <Navbar>
                    <ManajemenModel />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/profile" element={
            // <PrivateRoute>
                <Navbar>
                    <Profile />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/profile/edit" element={
            // <PrivateRoute>
                <Navbar>
                    <EditProfile />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/profile/edit/password" element={
            // <PrivateRoute>
                <Navbar>
                    <EditPassword />
                </Navbar>
            // </PrivateRoute>
            } 
        />
      </Routes>
    </div>
  );
}

export default App;
