import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, Children } from "react";

import Navbar from './component/Navbar/index';
import PrivateRoute from "./component/PrivateRoute.jsx";

import {
    Beranda,
    Login,
    Register,
    IsiForm,
    KirimApi,
    UnggahFile,
    ManajemenPengguna,
    ManajemenModel,
    Profile,
    EditProfile,
    EditPassword,
    LupaPassword,
    FormEmailForgetPass,
    FormNewPass,
    DetailCekData,
    HasilCekData,

} from "./pages";

function App() {
//   useEffect(() => {
//     localStorage.setItem("token", true);
//   });
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
        <Route path="/login/lupa-katasandi" element={
                <FormEmailForgetPass />
                } 
            />
        <Route path="/login/lupa-katasandi/buat-baru/:token" element={
                <FormNewPass />
                } 
            />
        <Route path="/" element={
            <PrivateRoute>
                <Navbar>
                    <Beranda />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/cekdata/unggahfile" element={
            <PrivateRoute>
                <Navbar>
                    <UnggahFile />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/cekdata/isiformulir" element={
            <PrivateRoute>
                <Navbar>
                    <IsiForm />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/cekdata/requestapi" element={
            <PrivateRoute>
                <Navbar>
                    <KirimApi />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/cekdata/hasil-pengecekan" element={
            // <PrivateRoute>
                <Navbar>
                    <HasilCekData />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/cekdata/hasil-pengecekan/detail" element={
            // <PrivateRoute>
                <Navbar>
                    <DetailCekData />
                </Navbar>
            // </PrivateRoute>
            } 
        />
        <Route path="/manajemen/pengguna" element={
            <PrivateRoute>
                <Navbar>
                    <ManajemenPengguna />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/manajemen/model" element={
            <PrivateRoute>
                <Navbar>
                    <ManajemenModel />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/profile" element={
            <PrivateRoute>
                <Navbar>
                    <Profile />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/profile/edit" element={
            <PrivateRoute>
                <Navbar>
                    <EditProfile />
                </Navbar>
            </PrivateRoute>
            } 
        />
        <Route path="/profile/edit/password" element={
            <PrivateRoute>
                <Navbar>
                    <EditPassword />
                </Navbar>
            </PrivateRoute>
            } 
        />
      </Routes>
    </div>
  );
}

export default App;
