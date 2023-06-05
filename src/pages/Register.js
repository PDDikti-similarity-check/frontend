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
    const [passType, setPassType] = useState('password');
    const [seePassword, setSeePassword] = useState(false);
    const BASE_URL = "http://localhost:9091/";

    function handlePassType(){
        setSeePassword(!seePassword);
        if (seePassword == false){
            setPassType('text');
        }
        else if (seePassword == true){
            setPassType('password');
        }
    };

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
        const response = await axios.post(BASE_URL + "api/register", userData)
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
                                    label="Nama Organisasi"
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
                                    label="Nama Pengguna"
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
                                    label="Email"
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
                                    label="Nomor Telepon"
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
                                    label="Username"
                                    placeholder="Username"
                                    className="w-[400px]"
                                    value={username}
                                    onChange={(event) =>
                                        setUsername(event.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label className="font-raleway text-[14px]">
                                    <div className='flex items-center'>
                                        Password
                                        <p className="font-bold text-[#D0021B]">
                                            *
                                        </p>
                                    </div>
                                </label>
                                <div className="flex items-center rounded-[15px] w-[400px] font-raleway border border-gray-300 appearance-none mb-3 pr-2 leading-tight focus:outline-none focus:shadow-outline">
                                    <input
                                        type={passType}
                                        placeholder="Password"
                                        // required={true}
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        class="w-full pl-[10px] py-2.5 px-3 rounded-[15px] text-[12px] outline-none border-none focus:outline-none "
                                    />
                                    {seePassword ? (
                                        <div className="pl-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="#404040"
                                                class="bi bi-eye-fill"
                                                viewBox="0 0 16 16"
                                                onClick={handlePassType}
                                            >
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="pl-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="#404040"
                                                class="bi bi-eye-slash-fill"
                                                viewBox="0 0 16 16"
                                                onClick={handlePassType}
                                            >
                                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
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
