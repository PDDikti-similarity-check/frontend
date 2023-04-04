import React, { useState, useEffect } from "react";
import backgroundimg from "../others/bg-login.png";
import logo from "../others/logo.png";
import { ReqTextInput } from "../component";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namaorganisasi, setNamaOrganisasi] = useState("");
    const [telepon, setTelepon] = useState("");
    const [namapengguna, setNamaPengguna] = useState("");
    const BASE_URL = "http://localhost:9091/";

    const postRegister = async (e) => {
        const userData = {
            username: username,
            email: email,
            password: password,
            role: "USER",
            organization_name: namaorganisasi,
            pic_phone_number: telepon,
            pic_name: namapengguna,
        };
        console.log(userData)
        const response = await axios.post(BASE_URL + "api/register", userData)
        console.log(response)
    };

    return (
        <div className="flex h-screen w-screen ">
            <img src={backgroundimg} className="h-full w-full" />
            <div className="absolute backdrop-blur-md bg-grey/70 h-full w-full"></div>
            <img src={logo} className="absolute  top-8 left-8" />
            <form onSubmit={postRegister}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="border-2 rounded-[15px] bg-white h-[500px] w-[1000px]">
                        <div className="flex mt-[40px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                            <div>
                                <ReqTextInput
                                    label="Nama Organisasi:"
                                    placeholder="Nama Organisasi"
                                    className="w-[400px]"
                                    value={namaorganisasi}
                                    onChange={(event) =>
                                        setNamaOrganisasi(event.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <ReqTextInput
                                    label="Nama Pengguna:"
                                    placeholder="Nama Pengguna"
                                    className="w-[400px]"
                                    value={namapengguna}
                                    onChange={(event) =>
                                        setNamaPengguna(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                            <div>
                                <ReqTextInput
                                    label="Email:"
                                    placeholder="Email"
                                    className="w-[400px]"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <ReqTextInput
                                    label="Nomor Telepon:"
                                    placeholder="Nomor telepon"
                                    className="w-[400px]"
                                    value={telepon}
                                    onChange={(event) =>
                                        setTelepon(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                            <div>
                                <ReqTextInput
                                    label="Username:"
                                    placeholder="Username"
                                    className="w-[400px]"
                                    value={username}
                                    onChange={(event) =>
                                        setUsername(event.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <ReqTextInput
                                    label="Password:"
                                    placeholder="Password"
                                    className="w-[400px]"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-[40px]">
                            <button className="bg-[#5DAFEF] w-[300px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 drop-shadow-md text-[14px] font-bold text-white">
                                Register
                            </button>
                            <div className="flex flex-row justify-center items-center mt-[20px]">
                                <p>Sudah punya akun?</p>
                                <a href="/login" className="ml-2 text-blue">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
