import React, { useState, useEffect } from "react";
import backgroundimg from "../../others/bg-login.png";
import logo from "../../others/logo.png";
import { TextInput } from "../../component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsEnvelope } from "react-icons/bs";

const FormEmailForgetPass = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [errorStr, setErrorStr] = useState("hahaha");
    let navigate = useNavigate();

    const BASE_URL = "http://localhost:9091/";

    const postLogin = async (e) => {
    //     e.preventDefault(); 
    //     const userData = {
    //         username: username,
    //         password: password,
    //     };
    //     console.log(userData);
    //     const response = await axios.post(
    //         BASE_URL + "api/login",
    //         userData
    //     );
    //     console.log(response.data);
    //     navigate("/");
    //     try {
    //         const response = await axios.post(BASE_URL + "api/login", userData);
    //         console.log(response.data);
    //         const user = response.data
    //         localStorage.setItem("userRole", user.role);
    //         localStorage.setItem("token", "ada");
    //         localStorage.setItem("userId", user.id);
    //         localStorage.setItem("username", user.username);
    //         navigate('/');
    //     } catch (error) {
    //         console.log(error.response.status);
    //         if (error.response.status == 401) {
    //             setError("Invalid Username or Password!");
    //         }
    //         console.error(error);
    //     }
    };

    return (
        <div className="flex h-screen w-screen ">
            <img src={backgroundimg} className="h-full w-full" />
            <div className="absolute backdrop-blur-md bg-grey/70 h-full w-full"></div>
            <img src={logo} className="absolute  top-8 left-8" />
            <form onSubmit={postLogin}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="border-2 rounded-[15px] bg-white h-[500px] w-[1000px] flex items-center flex-col py-5">
                        <p className=" mt-[30px] font-raleway text-[24px] text-[#333333] font-[700]">
                            Atur Ulang Kata Sandi
                        </p>
                        <p className=" mt-[48px] text-center font-raleway text-[20px] text-[#515151] font-[500] w-[600px]">
                            Anda akan menerima tautan untuk membuat kata sandi baru melalui email yang Anda masukkan 
                        </p>
                        <div className="flex flex-col mt-[40px] font-raleway text-[12px] space-y-3">
                            <label className="font-raleway text-[14px] font-[500]">
                                Alamat Email
                            </label>
                            <div className="flex justify-between items-center w-[600px] rounded-[15px] border border-gray-300 appearance-none ">
                                <input
                                    placeholder="Alamat Email"
                                    className="w-[600px] rounded-[15px] text-[14px] font-raleway text-[12px] w-full py-4 px-5 leading-tight focus:outline-[#2563eb] focus:outline-none focus:outline-offset-0 focus:outline-[1px]"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                <BsEnvelope className="text-[20px] ml-5 mr-5 text-gray-500"/>
                            </div>    
                        </div>
                        {error ? (
                            <div className="flex item-center justify-center mt-5">
                                <p className="text-sm text-danger">{errorStr}</p>
                            </div>
                            ) : null}
                        <div className="flex flex-col justify-center items-center mt-[40px]">
                            <button
                                type={"submit"}
                                className="bg-[#5DAFEF] w-[300px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 drop-shadow-md text-[14px] font-bold text-white"
                            >
                                Minta tautan
                            </button>
                            <div className="flex flex-row justify-center items-center my-[20px]">
                                <a className="ml-2 text-blue cursor-pointer"  onClick={() => navigate("/login")}>
                                    Masuk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormEmailForgetPass;
