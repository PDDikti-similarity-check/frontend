import React from 'react';
import logo from "../../others/logopddikti.png";
import { useNavigate } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { CgProfile } from 'react-icons/cg';
import { useState } from "react";

function NavbarUser({ children }) {
    let navigate = useNavigate();
    const [navbarCekdata, setNavbarCekdata] = useState(false);
    const [navbarProfile, setNavbarProfile] = useState(false);
    const username = localStorage.getItem('username')


    const handleNavCekData = () => {
        setNavbarCekdata(!navbarCekdata);
    };
    const handleNavProfile = () => {
        setNavbarProfile(!navbarProfile);
    };

    const handleLogout = () => {
        // delete axios.defaults.headers.common["Authorization"];
        localStorage.clear();
        navigate("/login");
    };

    return (
        <div className="flex">
            <nav className="fixed z-10 top-0 left-0 w-full h-[120px] bg-gradient-to-r from-[#E7EAEF] to-[#B5CBFC]">
                <div className="flex flex-row items-center justify-between">
                    <div className="items-start ml-[90px] mt-[20px] justify-start">
                        <img src={logo} alt="" className="w-[320px] h-[50px]" />
                    </div>
                    <div className="mr-[100px]">
                        <a
                            className="flex items-center text-black font-bold text-sm font-raleway cursor-pointer"
                            onClick={handleNavProfile}
                        >
                            <CgProfile size={15} color="#2F3780" />
                            <span className="ml-[10px] text-[14px] font-[500] mr-[10px] text-[#2F3780]">
                                {username}
                            </span>
                            <span>
                                <BsChevronRight
                                    size={12}
                                    color="#2F3780"
                                    className={
                                        navbarProfile
                                            ? "transition-transform duration-300 rotate-90"
                                            : "transition-transform duration-300 rotate-0"
                                    }
                                />
                            </span>
                        </a>
                        <div
                            className={
                                navbarProfile
                                    ? "overflow-hidden absolute z-40 bg-[#FFFFFF] drop-shadow-md transition-all duration-700 max-h-40 mt-2 rounded-[10px]  text-black font-[500] text-sm font-raleway"
                                    : "hidden transition-all duration-300 max-h-0 space-y-4"
                            }
                        >
                            <li className=" list-none pt-4 pb-2 pr-8 pl-4 hover:bg-lightblue hover:text-blue">
                                <a href="/profile">
                                    <span className="">View Profile</span>
                                </a>
                            </li>
                            <li
                                className="list-none pt-2 pb-4 pr-8 pl-4 hover:bg-lightblue hover:text-blue"
                                onClick={handleLogout}
                            >
                                <a>
                                    <span className="">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="mt-[20px] ml-[100px] flex items-center text-black font-[500] text-[12px] font-raleway">
                    <ul className="flex flex-row">
                        <li>
                            <a
                                href="/"
                                className="items-center mr-[40px] uppercase hover:text-blue"
                            >
                                <span className="font-raleway">Beranda</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex items-center mr-[40px] uppercase cursor-pointer"
                                onClick={handleNavCekData}
                            >
                                <span className="mr-[5px]">Cek Data</span>
                                <span>
                                    <BsChevronRight
                                        size={12}
                                        color="black"
                                        className={
                                            navbarCekdata
                                                ? "transition-transform duration-300 rotate-90"
                                                : "transition-transform duration-300 rotate-0"
                                        }
                                    />
                                </span>
                            </a>
                            <div
                                className={
                                    navbarCekdata
                                        ? "overflow-hidden bg-[#FFFFFF] drop-shadow-md transition-all duration-700 max-h-40 mt-2 rounded-[10px] "
                                        : "hidden transition-all duration-300 max-h-0 space-y-4"
                                }
                            >
                                <li className="pt-4 pb-2 pr-2 pl-4 hover:bg-lightblue hover:text-blue">
                                    <a href="/cekdata/unggahfile">
                                        <span className="">Unggah File</span>
                                    </a>
                                </li>
                                <li className="pt-2 pb-2 pr-2 pl-4 hover:bg-lightblue hover:text-blue">
                                    <a href="/cekdata/isiform">
                                        <span className="">Isi Formulir</span>
                                    </a>
                                </li>
                                <li className="pt-2 pb-4 pr-2 pl-4 hover:bg-lightblue hover:text-blue">
                                    <a href="/cekdata/kirimapi">
                                        <span className="">Kirim API</span>
                                    </a>
                                </li>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="bg-primarywhite w-screen p-4 sm:mt-[120px]">
                {children}
            </main>
        </div>
    );
}

export default NavbarUser;